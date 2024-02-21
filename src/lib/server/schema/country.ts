import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const country = sqliteTable('country', {
	id: text('alpha_2_code').primaryKey(),
	name: text('english_short_name').unique().notNull(),
	alpha_3_code: text('alpha_3_code').notNull(),
	numeric_code: integer('numeric').notNull(),
});
export const insert_country_schema = createInsertSchema(country);
export const select_country_schema = createSelectSchema(country);
