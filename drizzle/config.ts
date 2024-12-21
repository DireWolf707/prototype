import { loadEnvConfig } from '@next/env'
import { defineConfig } from 'drizzle-kit'
import path from 'path'

loadEnvConfig(path.resolve(process.cwd(), '.env.local'))

if (!process.env.DATABASE_URL)
    throw new Error('DATABASE_URL must be a Neon postgres connection string')

export default defineConfig({
    out: './drizzle',
    schema: './drizzle/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
})
