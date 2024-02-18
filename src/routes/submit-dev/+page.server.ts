import { db } from '$lib/server/database';
import { country } from '$lib/server/schema';
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

	return {
		user: event.locals.user,
		countries,
	};
};

const submit_dope_dev: Action = async event => {
	const form_data = Object.fromEntries(
		(await event.request.formData()).entries(),
	);

	const insert_data = insert_dope_dev_schema.safeParse(form_data);
	if (!insert_data.success) {
		// Convert validation errors to a serializable format
		const errors = insert_data.error.issues.map(issue => ({
			field: issue.path[0],
			message: issue.message,
		}));

		return { status: 400, body: { errors } };
	}

	await db.insert(dope_dev).values(insert_data.data).execute();

	return redirect(302, '/');
};

export const actions: Actions = { submit_dope_dev };
