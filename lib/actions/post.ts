'use server'

import db from '@/drizzle/client'
import { postTable } from '@/drizzle/schema'
import { postT } from '../types'

export const createPostAction = async (data: postT) => {
    return await db.insert(postTable).values(data).returning()
}
