import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { user } from './user';

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),
	expires_at: integer('expires_at', { mode: 'timestamp' }).default(
		sql`(strftime('%s', 'now'))`,
	),
	user_id: text('user_id')
		.notNull()
		.references(() => user.id),
});
export const insert_session_schema = createInsertSchema(session);
export const select_session_schema = createSelectSchema(session);
