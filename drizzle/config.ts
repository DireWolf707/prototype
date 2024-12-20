import dotenv from 'dotenv'
import { defineConfig } from 'drizzle-kit'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.development') })

export default defineConfig({
    out: './drizzle',
    schema: './drizzle/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
})
