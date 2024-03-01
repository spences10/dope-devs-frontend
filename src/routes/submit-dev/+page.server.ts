import { db } from '$lib/server/database';
import {
	country,
	dev_technology,
	technology,
} from '$lib/server/schema';
import {
	dope_dev,
	insert_dope_dev_schema,
} from '$lib/server/schema/dope-dev';
import { redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async event => {
	if (!event.locals.user) {
		return redirect(302, '/login');
	}

	const countries = await db.select().from(country).execute();
	const technologies = await db.select().from(technology).execute();

	return {
		user: event.locals.user,
		countries,
		technologies,
	};
};

const submit_dope_dev: Action = async event => {
	const form_data = await event.request.formData();

	const name = form_data.get('name') as string;
	const avatar = form_data.get('avatar') as string;
	const bio = form_data.get('bio') as string;
	const likes = 0;
	const selected_country = form_data.get('country_id') as string;
	const selected_technologies = form_data.getAll(
		'selected_technologies',
	) as string[];

	const insert_data = insert_dope_dev_schema.safeParse({
		name,
		avatar,
		bio,
		likes,
		country_id: selected_country,
	});
	if (!insert_data.success) {
		// Convert validation errors to a serializable format
		const errors = insert_data.error.issues.map(issue => ({
			field: issue.path[0],
			message: issue.message,
		}));

		return { status: 400, body: { errors } };
	}

	try {
		const result = await db
			.insert(dope_dev)
			.values(insert_data.data)
			.execute();

		// Use lastInsertRowid to get the ID of the inserted row
		const dope_dev_id = result.lastInsertRowid as unknown as number;

		// Insert technologies into the dev_technology table
		for (const technology_id of selected_technologies) {
			await db
				.insert(dev_technology)
				.values({
					developer_id: dope_dev_id,
					technology_id: Number(technology_id),
				})
				.execute();
		}

		// Return a response object with a redirect property
		return {
			status: 302,
			headers: {
				location: '/',
			},
		};
	} catch (error) {
		console.error('Error inserting dope_dev:', error);
		return {
			status: 500,
			body: { error: 'Failed to insert dope_dev' },
		};
	}
};

export const actions: Actions = { submit_dope_dev };
