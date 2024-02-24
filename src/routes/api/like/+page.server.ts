import { db } from '$lib/server/database.js';
import { dope_dev } from '$lib/server/schema/dope-dev.js';
import { eq, sql } from 'drizzle-orm';

export const actions = {
	default: async ({ url }) => {
		const dev_id = url.searchParams.get('id');
		if (!dev_id) {
			return {
				status: 400,
				body: 'ID is required.',
			};
		}

		try {
			// Attempt to update the likes count
			const updateResult = await db
				.update(dope_dev)
				.set({ likes: sql`${dope_dev.likes} +  1` })
				.where(eq(dope_dev.id, parseInt(dev_id)))
				.execute();

			console.log('Update result:', updateResult);

			// Fetch the updated record to verify the update
			const updated_dev = await db
				.select({ likes: dope_dev.likes })
				.from(dope_dev)
				.where(eq(dope_dev.id, parseInt(dev_id)))
				.execute();

			console.log('Fetched updated record:', updated_dev);

			const likes = updated_dev[0]?.likes || 0;

			return {
				status: 200,
				body: {
					success: true,
					likes,
				},
			};
		} catch (error) {
			console.error(`Error during update: ${error}`);
			return {
				status: 500,
				body: 'Something went wrong updating the likes.',
			};
		}
	},
};
