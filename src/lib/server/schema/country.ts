import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const country = sqliteTable('country', {
	id: text('id').primaryKey(),
	name: text('name').unique().notNull(),
});
export const insert_country_schema = createInsertSchema(country);
export const select_country_schema = createSelectSchema(country);
