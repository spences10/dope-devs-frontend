import { ratelimit } from '$lib/redis/client';
import { db } from '$lib/server/database.js';
import { dope_dev } from '$lib/server/schema/dope-dev.js';
import { fail } from '@sveltejs/kit';
import { eq, sql } from 'drizzle-orm';

export const actions = {
	default: async ({ url, getClientAddress }) => {
		const dev_id = url.searchParams.get('id');
		if (!dev_id) {
			return {
				status: 400,
				body: 'ID is required.',
			};
		}

		const ip = getClientAddress();
		const rate_limit_attempt = await ratelimit.limit(ip);
		if (!rate_limit_attempt.success) {
			const time_remaining = Math.floor(
				(rate_limit_attempt.reset - new Date().getTime()) / 1000,
			);

			return fail(429, {
				error: `Rate limit exceeded. Try again in ${time_remaining} seconds`,
				time_remaining,
			});
		}

		try {
			// Attempt to update the likes count
			const updateResult = await db
				.update(dope_dev)
				.set({ likes: sql`${dope_dev.likes} +  1` })
				.where(eq(dope_dev.id, parseInt(dev_id)))
				.execute();

			// Fetch the updated record to verify the update
			const updated_dev = await db
				.select({ likes: dope_dev.likes })
				.from(dope_dev)
				.where(eq(dope_dev.id, parseInt(dev_id)))
				.execute();

			const likes = updated_dev[0]?.likes || 0;

			return {
				success: true,
				status: 200,
				likes,
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
