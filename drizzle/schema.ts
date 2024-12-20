import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

export const postTable = pgTable('post', {
    id: uuid().defaultRandom().primaryKey(),
    title: varchar({ length: 50 }).notNull(),
    content: varchar({ length: 50 }).notNull(),
    topic: varchar({ length: 20 }).notNull(),
})
