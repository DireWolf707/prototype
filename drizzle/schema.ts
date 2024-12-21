import { topics } from '@/lib/constants'
import { pgTable, uuid, varchar, timestamp } from 'drizzle-orm/pg-core'

export const postTable = pgTable('post', {
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({ length: 50 }).notNull(),
    content: varchar({ length: 50 }).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    topic: varchar({ length: 20, enum: topics }).notNull(),
})
