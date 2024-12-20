'use server'

import db from '@/drizzle/client'
import { postT } from './zodSchema'
import { postTable } from '@/drizzle/schema'

export const createPostAction = async (data: postT) => {
    return await db.insert(postTable).values(data).returning()
}
