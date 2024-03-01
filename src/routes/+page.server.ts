import { db } from '$lib/server/database';
import {
	country,
	dev_technology,
	technology,
} from '$lib/server/schema';
import { dope_dev } from '$lib/server/schema/dope-dev';
import { eq, sql } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

let cache = {
	all_dope_devs: new Map(),
	all_technologies: new Map(),
	last_updated: 0,
};

const CACHE_EXPIRATION_TIME = 1 * 60 * 1000; //  1 minutes in milliseconds

export const load: PageServerLoad = async event => {
	const now = Date.now();
	if (now - cache.last_updated > CACHE_EXPIRATION_TIME) {
		try {
			const all_dope_devs = await db
				.select({
					id: dope_dev.id,
					name: dope_dev.name,
					avatar: dope_dev.avatar,
					bio: dope_dev.bio,
					likes: dope_dev.likes,
					country_id: dope_dev.country_id,
					country_name: country.name,
					technologies: sql`GROUP_CONCAT(${technology.name})`.as(
						'technologies',
					),
				})
				.from(dope_dev)
				.innerJoin(country, eq(dope_dev.country_id, country.id))
				.innerJoin(
					dev_technology,
					eq(dope_dev.id, dev_technology.developer_id),
				)
				.innerJoin(
					technology,
					eq(dev_technology.technology_id, technology.id),
				)
				.where(eq(dope_dev.published, 1))
				.groupBy(dope_dev.id);

			// Populate the Map for all_dope_devs
			cache.all_dope_devs.clear();
			all_dope_devs.forEach(dev => {
				cache.all_dope_devs.set(dev.id, dev);
			});

			const all_technologies = await db
				.select({
					technology_id: dev_technology.technology_id,
					technology_name: technology.name,
				})
				.from(dev_technology)
				.innerJoin(
					technology,
					eq(dev_technology.technology_id, technology.id),
				)
				.orderBy(technology.name);

			// Populate the Map for all_technologies
			cache.all_technologies.clear();
			all_technologies.forEach(tech => {
				if (!cache.all_technologies.has(tech.technology_name)) {
					cache.all_technologies.set(tech.technology_name, tech);
				}
			});

			cache.last_updated = now;
		} catch (error) {
			console.error(`Error: ${error}`);
			return {
				status: 500,
				body: 'Something went wrong fetching data from the database.',
			};
		}
	} else {
		console.log('Using cached data');
	}
	return {
		all_dope_devs: Array.from(cache.all_dope_devs.values()),
		all_technologies: Array.from(cache.all_technologies.values()),
	};
};
