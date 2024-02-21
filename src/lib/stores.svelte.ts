import { writable, type Writable } from 'svelte/store';

export interface CurrentUser {
	id?: string;
	name?: string;
	username?: string;
	email?: string;
	created?: string;
	updated?: string;
}

export const current_user = writable(
	null,
) as Writable<CurrentUser | null>;
