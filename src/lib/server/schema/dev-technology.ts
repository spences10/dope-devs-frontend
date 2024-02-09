import {
	integer,
	primaryKey,
	sqliteTable,
} from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { dope_dev } from './dope-dev';
import { technology } from './technology';

export const dev_technology = sqliteTable(
	'dev_technology',
	{
		developer_id: integer('developer_id')
			.notNull()
			.references(() => dope_dev.id, { onDelete: 'cascade' }),
		technology_id: integer('technology_id')
			.notNull()
			.references(() => technology.id, { onDelete: 'cascade' }),
	},
	table => ({
		pk: primaryKey({
			columns: [table.developer_id, table.technology_id],
		}),
	}),
);
export const insert_dope_dev_technology_schema =
	createInsertSchema(dev_technology);
export const select_dope_dev_technology_schema =
	createSelectSchema(dev_technology);
