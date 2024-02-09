import { db } from '$lib/server/database';
import { dope_dev } from '$lib/server/schema/dope-dev';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async event => {
	let all_dope_devs: any[] = [];

	try {
		all_dope_devs = await db.select().from(dope_dev);
	} catch (error) {
		console.error(`Error: ${error}`);
		return {
			status: 500,
			body: 'Something went wrong fetching contacts',
		};
	}
	return {
		all_dope_devs,
	};
};
