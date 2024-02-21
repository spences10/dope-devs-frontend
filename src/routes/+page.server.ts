import { db } from '$lib/server/database';
import {
	country,
	dev_technology,
	technology,
} from '$lib/server/schema';
import { dope_dev } from '$lib/server/schema/dope-dev';
import { eq, sql } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async event => {
	let all_dope_devs: any[] = [];

	try {
		all_dope_devs = await db
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
	} catch (error) {
		console.error(`Error: ${error}`);
		return {
			status: 500,
			body: 'Something went wrong fetching data from the database.',
		};
	}
	return {
		all_dope_devs,
	};
};
