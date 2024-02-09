import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { country } from './country';

export const dope_dev = sqliteTable('dope_dev', {
	id: text('id').primaryKey(),
	name: text('name'),
	title: text('title'),
	avatar: text('avatar'),
	bio: text('bio'),
	likes: integer('likes'),
	country_id: integer('country_id')
		.notNull()
		.references(() => country.id),
	created_at: integer('created_at', { mode: 'timestamp' }).default(
		sql`(strftime('%s', 'now'))`,
	),
	update_at: integer('updated_at', { mode: 'timestamp' }).default(
		sql`(strftime('%s', 'now'))`,
	),
});
export const insert_dope_dev_schema = createInsertSchema(dope_dev);
export const select_dope_dev_schema = createSelectSchema(dope_dev);
