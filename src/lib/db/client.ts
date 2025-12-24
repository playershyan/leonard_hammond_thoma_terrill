import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL!

// Configure client for Supabase pooler
const client = postgres(connectionString, {
  prepare: false,
  ssl: 'require',
  max: 1,
  idle_timeout: 20,
  connect_timeout: 10
})

export const db = drizzle(client)
