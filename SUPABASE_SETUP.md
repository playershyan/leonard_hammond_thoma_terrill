# Supabase Setup Guide

Follow these steps to set up your Supabase database for the law firm website.

## Step 1: Create Supabase Project

1. **Visit Supabase:** Go to https://supabase.com/
2. **Sign Up/Login:** Create an account or log in with GitHub
3. **Create New Project:**
   - Click "New Project" button
   - Select or create an organization
   - Fill in project details:
     - **Project Name:** `leonard-hammond-thoma-terrill`
     - **Database Password:** Generate a strong password **⚠️ SAVE THIS PASSWORD!**
     - **Region:** Choose `US East (North Virginia)` (closest to Fort Wayne)
     - **Pricing Plan:** Free tier is sufficient for development
   - Click "Create new project"
   - **Wait 2-3 minutes** for Supabase to provision your database

## Step 2: Get Database Connection String

Once your project is ready:

1. In the Supabase dashboard, click **Settings** (gear icon in sidebar)
2. Click **Database** in the left menu
3. Scroll down to **Connection string** section
4. Select the **URI** tab
5. Copy the connection string - it looks like:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.xxxxxxxxxxxxx.supabase.co:5432/postgres
   ```
6. **Important:** Replace `[YOUR-PASSWORD]` with the password you created in Step 1

### Connection String Modes

Supabase offers different connection modes:
- **Transaction mode (Port 5432):** Use this one (default, recommended)
- **Session mode (Port 6543):** Alternative if needed
- **Connection pooling:** For production with many connections

For this project, use **Transaction mode** (port 5432).

## Step 3: Configure Environment Variables

1. Open `.env.local` file in your project root
2. Update the `DATABASE_URL` with your Supabase connection string:

```env
DATABASE_URL=postgresql://postgres:YOUR_ACTUAL_PASSWORD@db.xxxxxxxxxxxxx.supabase.co:5432/postgres
```

**Example:**
```env
DATABASE_URL=postgresql://postgres:MyStrongPassword123!@db.abcdefghijklmnop.supabase.co:5432/postgres
```

⚠️ **Security Note:** Never commit `.env.local` to Git! It's already in `.gitignore`.

## Step 4: Test Database Connection

Run this command to verify your connection:

```bash
npm run db:push
```

This command will:
- Connect to your Supabase database
- Create the necessary tables (`users` and `blog_posts`)
- Set up indexes and foreign keys

You should see output like:
```
✓ Applying migrations...
✓ Migration successful!
```

If you get an error:
- Check that your `DATABASE_URL` is correct
- Verify the password has no typos
- Make sure you replaced `[YOUR-PASSWORD]` with your actual password
- Ensure no extra spaces in the connection string

## Step 5: Seed the Database

Run the seed script to create the default admin user:

```bash
npm run db:seed
```

This will create:
- Default admin user (username: `admin`, password: `admin123`)
- You can add more seed data if needed

**⚠️ Important:** Change the default admin password after first login!

## Step 6: Verify in Supabase Dashboard

1. Go back to your Supabase project dashboard
2. Click **Table Editor** in the left sidebar
3. You should see two tables:
   - `users` (with 1 row - the admin user)
   - `blog_posts` (empty initially)

## Step 7: Start Development Server

Now you can start your development server:

```bash
npm run dev
```

Visit:
- **Public site:** http://localhost:3000
- **Admin login:** http://localhost:3000/admin/login
  - Username: `admin`
  - Password: `admin123`

## Database Schema

### Users Table
- `id` (UUID, Primary Key)
- `username` (VARCHAR, Unique)
- `password_hash` (VARCHAR)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

**Max Users:** 3 (enforced in application logic)

### Blog Posts Table
- `id` (UUID, Primary Key)
- `title` (VARCHAR)
- `slug` (VARCHAR, Unique)
- `featured_image_url` (TEXT)
- `content` (TEXT)
- `excerpt` (TEXT, Optional)
- `meta_title` (VARCHAR, Optional)
- `meta_description` (VARCHAR, Optional)
- `status` (VARCHAR: 'draft' or 'published')
- `author_id` (UUID, Foreign Key to users)
- `published_at` (Timestamp, Optional)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

**Indexes:**
- `status_idx` on `status`
- `published_at_idx` on `published_at`
- `slug_idx` on `slug`

## Useful Supabase Features

### SQL Editor
- Run custom SQL queries
- View query results
- Export data as CSV

### Table Editor
- Visual interface to view/edit data
- Add/delete rows manually
- Useful for testing

### Database Backups
- Free tier: Daily backups retained for 7 days
- Paid tiers: More frequent backups

### API Auto-documentation
- Supabase generates REST API automatically
- We're using Drizzle ORM instead, but API is available if needed

## Common Issues and Solutions

### Issue: "Connection refused"
**Solution:** Check that:
- Supabase project is fully provisioned (not still setting up)
- DATABASE_URL is correct
- No firewall blocking connection

### Issue: "Password authentication failed"
**Solution:**
- Verify password in Supabase dashboard (Settings > Database > Reset password if needed)
- Check for special characters in password that might need URL encoding
- Use the exact password from when you created the project

### Issue: "Database does not exist"
**Solution:**
- Make sure you're using the default database name `postgres`
- Check connection string format

### Issue: "SSL required"
**Solution:**
- Supabase requires SSL by default
- Drizzle handles this automatically
- If issues persist, add `?sslmode=require` to connection string

## Next Steps

After Supabase is set up:

1. ✅ Test admin login
2. ✅ Create a test blog post
3. ✅ Verify contact form works
4. 🔄 Set up Vercel Blob Storage for images (see VERCEL_BLOB_SETUP.md)
5. 🔄 Configure Resend for emails (see RESEND_SETUP.md)
6. 🔄 Add Google Analytics ID (optional)

## Database Management Commands

```bash
# Generate new migration after schema changes
npm run db:generate

# Push schema changes to database
npm run db:push

# Open Drizzle Studio (visual database editor)
npm run db:studio

# Seed database with initial data
npm run db:seed
```

## Resources

- **Supabase Documentation:** https://supabase.com/docs
- **Drizzle ORM Documentation:** https://orm.drizzle.team/
- **Your Supabase Dashboard:** https://supabase.com/dashboard/project/YOUR_PROJECT_ID

## Security Best Practices

1. ✅ Never commit `.env.local` to Git
2. ✅ Use Row Level Security (RLS) in production
3. ✅ Change default admin password immediately
4. ✅ Use environment variables for all secrets
5. ✅ Enable 2FA on your Supabase account
6. ✅ Regularly backup your database
7. ✅ Monitor database usage and query performance

## Support

If you encounter issues:
1. Check Supabase status page: https://status.supabase.com/
2. Review Supabase logs in dashboard
3. Check your connection string format
4. Verify environment variables are loaded correctly
