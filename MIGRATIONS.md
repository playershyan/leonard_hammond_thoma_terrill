# Database Migration Instructions

This file tracks all database migrations for the law firm website.

## Setup Instructions

### 1. Create Supabase Project

1. Go to https://supabase.com and create an account
2. Click "New Project"
3. Configure your project:
   - **Name:** `law-firm-website`
   - **Database Password:** Generate a strong password (save it securely!)
   - **Region:** Choose closest to Fort Wayne, IN (e.g., `US East (Ohio)`)
   - **Pricing Plan:** Free tier

### 2. Get Database Connection String

1. In your Supabase project dashboard, go to **Settings** > **Database**
2. Find the **Connection String** section
3. Select the **URI** format (for Drizzle ORM)
4. Copy the connection string (it looks like):
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
   ```
5. Replace `[YOUR-PASSWORD]` with your actual database password

### 3. Configure Environment Variables

Add the connection string to your `.env.local` file:

```bash
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

Also add it to your Vercel environment variables (for production):
- Go to Vercel project settings
- Navigate to **Environment Variables**
- Add `DATABASE_URL` with the same connection string

### 4. Run Migrations

Once your `DATABASE_URL` is configured, run:

```bash
# Push the schema to your database
npm run db:push
```

This will create the tables, indexes, and constraints defined in the migration file.

### 5. Seed the Database

After migrations complete, create the default admin user:

```bash
npm run db:seed
```

**Default Admin Credentials:**
- Username: `admin`
- Password: `admin123`

⚠️ **IMPORTANT:** Change the admin password after your first login!

## Migration Log

### Migration 0000: Initial Schema (2025-12-21)

**File:** `src/lib/db/migrations/0000_bored_lake.sql`

**Tables Created:**

1. **users**
   - `id` (uuid, primary key)
   - `username` (varchar 50, unique)
   - `password_hash` (varchar 255)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

2. **blog_posts**
   - `id` (uuid, primary key)
   - `title` (varchar 255)
   - `slug` (varchar 255, unique)
   - `featured_image_url` (text)
   - `content` (text)
   - `excerpt` (text, nullable)
   - `meta_title` (varchar 60, nullable)
   - `meta_description` (varchar 160, nullable)
   - `status` (varchar 20, default 'draft')
   - `author_id` (uuid, foreign key to users.id)
   - `published_at` (timestamp, nullable)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

**Indexes Created:**
- `status_idx` on blog_posts.status
- `published_at_idx` on blog_posts.published_at
- `slug_idx` on blog_posts.slug

**Foreign Keys:**
- `blog_posts.author_id` → `users.id` (ON DELETE SET NULL)

## Verification

After running migrations, verify the schema in Supabase:

1. Go to **Table Editor** in your Supabase dashboard
2. You should see two tables: `users` and `blog_posts`
3. Check the **Database** > **Indexes** section to verify indexes were created
4. Run the seed script and verify the admin user appears in the `users` table

## Troubleshooting

**Error: "Could not connect to database"**
- Check that your DATABASE_URL is correct
- Verify your Supabase project is running
- Ensure your IP is allowed (Supabase usually allows all IPs by default)

**Error: "relation already exists"**
- Tables already exist in your database
- Either drop the existing tables or use a fresh database

**Seed script fails:**
- Make sure migrations ran successfully first
- Check that the admin user doesn't already exist
- Verify DATABASE_URL is set correctly

## Useful Commands

```bash
# Generate new migrations from schema changes
npm run db:generate

# Push schema changes to database
npm run db:push

# Open Drizzle Studio (database GUI)
npm run db:studio

# Seed the database
npm run db:seed
```
