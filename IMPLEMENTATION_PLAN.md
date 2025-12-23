# Law Firm Website - Detailed Implementation Plan

**Project:** Fort Wayne Law Firm Website
**Version:** 1.0
**Last Updated:** December 21, 2025

---

## 📊 Progress Tracker

**Overall Progress:** Phases 1, 2, 3 & 4 Complete! 🎉

| Phase | Status | Tasks Complete | Notes |
|-------|--------|---------------|-------|
| **Phase 1: Project Foundation** | ✅ **COMPLETE** | 7/7 | Next.js setup, Tailwind, ESLint, dependencies installed |
| **Phase 2: Database & Authentication** | ✅ **CODE COMPLETE** | 7/8 | Migrations ready, awaiting manual Supabase setup |
| **Phase 3: Core UI Components** | ✅ **COMPLETE** | 6/6 | All UI components built and ready to use! |
| **Phase 4: Public Website - Static Pages** | ✅ **COMPLETE** | 10/10 | All static pages built with full content! |
| **Phase 5: Admin Dashboard - Core** | ⏳ Pending | 0/7 | Depends on Phase 2 & 3 |
| **Phase 6: Blog System - Public** | ⏳ Pending | 0/5 | Depends on Phase 2 & 3 |
| **Phase 7: Blog System - Admin** | ⏳ Pending | 0/9 | Depends on Phase 5 & 6 |
| **Phase 8: Contact Form & Email** | ⏳ Pending | 0/6 | Depends on Phase 3 |
| **Phase 9: SEO & Analytics** | ⏳ Pending | 0/8 | Depends on Phase 4 & 6 |
| **Phase 10: Testing & Deployment** | ⏳ Pending | 0/5 | Depends on all previous |
| **Phase 11: Content & Launch** | ⏳ Pending | 0/4 | Depends on Phase 10 |

### ✅ Completed Tasks (Latest First)
- **2025-12-23:** TASK-035 - Added Google Maps embed placeholder to Contact Page
- **2025-12-23:** TASK-034 - Created Contact Page structure with info cards
- **2025-12-23:** TASK-033 - Created Criminal Defense Law page with full content
- **2025-12-23:** TASK-032 - Created Personal Injury Law page with full content
- **2025-12-23:** TASK-031 - Created Divorce & Family Law page with full content
- **2025-12-23:** TASK-029 - Created About Us page with firm overview, mission, values, history
- **2025-12-21:** TASK-030 - Created reusable Practice Area page template
- **2025-12-21:** TASK-028 - Assembled complete homepage with all sections and SEO metadata
- **2025-12-21:** TASK-027 - Created reusable CTA Section component
- **2025-12-21:** TASK-026 - Created Blog Preview section (placeholder data)
- **2025-12-21:** TASK-025 - Created Testimonials section with 4 client reviews
- **2025-12-21:** TASK-024 - Created Why Choose Us section with 5 features
- **2025-12-21:** TASK-023 - Created Practice Areas overview section
- **2025-12-21:** TASK-022 - Created Homepage Hero section with CTAs
- **2025-12-21:** TASK-021 - Created admin layout with Sidebar and auth protection
- **2025-12-21:** TASK-020 - Created reusable section components (Section, SectionTitle, Container)
- **2025-12-21:** TASK-019 - Created public layout wrapper with Header and Footer
- **2025-12-21:** TASK-018 - Created Footer component with links and social media
- **2025-12-21:** TASK-017 - Created Header component with navigation and mobile menu
- **2025-12-21:** TASK-016 - Created base UI components (Button, Input, Textarea, Label)
- **2025-12-21:** TASK-011 - Generated database migration files (users & blog_posts tables)
- **2025-12-21:** TASK-015 - Created logout API route (POST /api/auth/logout)
- **2025-12-21:** TASK-014 - Created login API route with credential validation (POST /api/auth/login)
- **2025-12-21:** TASK-013 - Created authentication utilities (session, password, validation)
- **2025-12-21:** TASK-012 - Created default admin user seed script (username: admin, password: admin123)
- **2025-12-21:** TASK-010 - Defined database schema for users and blog_posts with TypeScript types
- **2025-12-21:** TASK-009 - Configured Drizzle ORM with PostgreSQL client and scripts
- **2025-12-21:** TASK-007 - Installed all core dependencies (UI, forms, auth, database, email)
- **2025-12-21:** TASK-005 - Initialized Git repository and created initial commit
- **2025-12-21:** TASK-004 - Configured ESLint and Prettier
- **2025-12-21:** TASK-003 - Configured Tailwind CSS with custom theme and fonts
- **2025-12-21:** TASK-002 - Set up project folder structure and utilities
- **2025-12-21:** TASK-001 - Initialized Next.js 16 with TypeScript and App Router

### ⚠️ Manual Setup Required (To Complete Later)

**Phase 1:**
- **TASK-006:** Set up Vercel project
  - Action: Create Vercel account and link GitHub repository
  - See: IMPLEMENTATION_PLAN.md → Phase 1 → TASK-006

**Phase 2:**
- **TASK-008:** Set up Supabase project
  - Action: Create Supabase account, create project, get DATABASE_URL
  - Action: Add DATABASE_URL to `.env.local` and Vercel env variables
  - Action: Run `npm run db:push` to create tables
  - Action: Run `npm run db:seed` to create admin user
  - See: **MIGRATIONS.md** for complete step-by-step instructions

✅ **All code is ready!** These are just account setup tasks that need to be done manually.

---

## Table of Contents

1. [Overview](#overview)
2. [Task Dependency Graph](#task-dependency-graph)
3. [Phase 1: Project Foundation](#phase-1-project-foundation)
4. [Phase 2: Database & Authentication](#phase-2-database--authentication)
5. [Phase 3: Core UI Components](#phase-3-core-ui-components)
6. [Phase 4: Public Website - Static Pages](#phase-4-public-website---static-pages)
7. [Phase 5: Admin Dashboard - Core](#phase-5-admin-dashboard---core)
8. [Phase 6: Blog System - Public](#phase-6-blog-system---public)
9. [Phase 7: Blog System - Admin](#phase-7-blog-system---admin)
10. [Phase 8: Contact Form & Email](#phase-8-contact-form--email)
11. [Phase 9: SEO & Analytics](#phase-9-seo--analytics)
12. [Phase 10: Testing & Deployment](#phase-10-testing--deployment)
13. [Phase 11: Content & Launch](#phase-11-content--launch)

---

## Overview

### Project Structure
This implementation plan breaks down the law firm website development into **11 phases**, **75 main tasks**, and **300+ subtasks**. Each task is numbered with a unique ID and includes explicit dependencies.

### Task Numbering Convention
- **TASK-XXX:** Main task (e.g., TASK-001)
- **SUBTASK-XXX-Y:** Subtask (e.g., SUBTASK-001-1)

### Dependency Format
Each task lists dependencies as: `Dependencies: [TASK-XXX, TASK-YYY]` or `Dependencies: None`

### Phases Overview
1. **Phase 1:** Project Foundation (7 tasks)
2. **Phase 2:** Database & Authentication (8 tasks)
3. **Phase 3:** Core UI Components (6 tasks)
4. **Phase 4:** Public Website - Static Pages (10 tasks)
5. **Phase 5:** Admin Dashboard - Core (7 tasks)
6. **Phase 6:** Blog System - Public (5 tasks)
7. **Phase 7:** Blog System - Admin (9 tasks)
8. **Phase 8:** Contact Form & Email (6 tasks)
9. **Phase 9:** SEO & Analytics (8 tasks)
10. **Phase 10:** Testing & Deployment (5 tasks)
11. **Phase 11:** Content & Launch (4 tasks)

---

## Task Dependency Graph

### Critical Path
```
TASK-001 → TASK-002 → TASK-003 → TASK-008 → TASK-009 → TASK-015 →
TASK-021 → TASK-038 → TASK-045 → TASK-046 → TASK-062 → TASK-069 →
TASK-070 → TASK-071 → TASK-072 → TASK-073 → TASK-074 → TASK-075
```

### Phase Dependencies
- **Phase 2** depends on **Phase 1** (TASK-001 through TASK-007)
- **Phase 3** depends on **Phase 1** (TASK-001 through TASK-007)
- **Phase 4** depends on **Phase 1** and **Phase 3**
- **Phase 5** depends on **Phase 2** and **Phase 3**
- **Phase 6** depends on **Phase 2** and **Phase 3**
- **Phase 7** depends on **Phase 5** and **Phase 6**
- **Phase 8** depends on **Phase 3**
- **Phase 9** depends on **Phase 4** and **Phase 6**
- **Phase 10** depends on all previous phases
- **Phase 11** depends on **Phase 10**

---

## Phase 1: Project Foundation

**Goal:** Set up development environment, project structure, and core configurations

**Duration:** 1-2 days

---

### TASK-001: Initialize Next.js Project

**Dependencies:** None

**Description:** Create a new Next.js 14+ project with TypeScript, App Router, and Tailwind CSS. This is the foundation of the entire application.

**Context:** Use `create-next-app` to scaffold the project with TypeScript and Tailwind CSS pre-configured. Enable App Router (default in Next.js 14+).

**Subtasks:**
- [ ] **SUBTASK-001-1:** Run `npx create-next-app@latest law-firm-website` with following options:
  - TypeScript: Yes
  - ESLint: Yes
  - Tailwind CSS: Yes
  - `src/` directory: Yes
  - App Router: Yes
  - Import alias: `@/*`
- [ ] **SUBTASK-001-2:** Navigate to project directory and verify installation with `npm run dev`
- [ ] **SUBTASK-001-3:** Test that http://localhost:3000 loads the default Next.js welcome page
- [ ] **SUBTASK-001-4:** Remove default Next.js boilerplate from `src/app/page.tsx`
- [ ] **SUBTASK-001-5:** Remove default styles from `src/app/globals.css` (keep Tailwind directives)

**Validation:**
- Development server runs without errors
- TypeScript compilation works
- Tailwind CSS classes apply correctly

---

### TASK-002: Configure Project Structure

**Dependencies:** [TASK-001]

**Description:** Create organized folder structure for components, utilities, types, and API routes.

**Context:** Establish a scalable folder structure that separates concerns and makes the codebase maintainable.

**Subtasks:**
- [ ] **SUBTASK-002-1:** Create folder structure in `src/`:
  ```
  src/
  ├── components/
  │   ├── layout/
  │   ├── ui/
  │   ├── home/
  │   ├── blog/
  │   ├── admin/
  │   └── forms/
  ├── lib/
  │   ├── db/
  │   └── utils/
  ├── types/
  └── app/
      ├── (public)/
      ├── admin/
      └── api/
  ```
- [ ] **SUBTASK-002-2:** Create `src/types/index.ts` for TypeScript type definitions
- [ ] **SUBTASK-002-3:** Create `src/lib/utils.ts` with helper function `cn()` for className merging:
  ```typescript
  import { clsx, type ClassValue } from "clsx"
  import { twMerge } from "tailwind-merge"

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }
  ```
- [ ] **SUBTASK-002-4:** Install required utilities: `npm install clsx tailwind-merge`
- [ ] **SUBTASK-002-5:** Create `.env.local` file in root directory
- [ ] **SUBTASK-002-6:** Create `.env.example` file with placeholder environment variables:
  ```
  DATABASE_URL=
  BLOB_READ_WRITE_TOKEN=
  RESEND_API_KEY=
  SESSION_SECRET=
  FIRM_EMAIL=
  NEXT_PUBLIC_GA_ID=
  NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=
  ```
- [ ] **SUBTASK-002-7:** Update `.gitignore` to include `.env.local`

**Validation:**
- All folders created successfully
- Helper utilities can be imported
- Environment variable template exists

---

### TASK-003: Configure Tailwind CSS with Custom Theme

**Dependencies:** [TASK-001]

**Description:** Customize Tailwind configuration with law firm brand colors, fonts, and design tokens.

**Context:** Implement the color palette and typography from the PRD (Navy Blue, Gold/Tan, Teal accent).

**Subtasks:**
- [ ] **SUBTASK-003-1:** Update `tailwind.config.ts` with custom colors:
  ```typescript
  colors: {
    primary: {
      DEFAULT: '#1A3A52', // Navy Blue
      dark: '#0F2433',
      light: '#2B5570',
    },
    secondary: {
      DEFAULT: '#C9A961', // Gold/Tan
      dark: '#A88B4D',
      light: '#D9BF85',
    },
    accent: {
      DEFAULT: '#2B8A8A', // Teal
      dark: '#1F6666',
      light: '#3FACAC',
    },
    text: {
      DEFAULT: '#2C3E50',
      light: '#606D7E',
    },
    background: {
      DEFAULT: '#FFFFFF',
      gray: '#F5F5F5',
    },
  }
  ```
- [ ] **SUBTASK-003-2:** Add custom font families to Tailwind config:
  ```typescript
  fontFamily: {
    sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
    heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
  }
  ```
- [ ] **SUBTASK-003-3:** Install Google Fonts: `npm install @next/font` (if not included)
- [ ] **SUBTASK-003-4:** Configure fonts in `src/app/layout.tsx`:
  ```typescript
  import { Inter, Montserrat } from 'next/font/google'

  const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
  const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-heading' })
  ```
- [ ] **SUBTASK-003-5:** Add Tailwind Typography plugin: `npm install @tailwindcss/typography`
- [ ] **SUBTASK-003-6:** Update Tailwind config to include typography plugin:
  ```typescript
  plugins: [require('@tailwindcss/typography')]
  ```
- [ ] **SUBTASK-003-7:** Test custom colors by creating a temporary test component with all color variants

**Validation:**
- Custom colors accessible via Tailwind classes (e.g., `bg-primary`, `text-secondary`)
- Fonts load correctly
- Typography plugin works

---

### TASK-004: Set Up ESLint and Prettier

**Dependencies:** [TASK-001]

**Description:** Configure code quality tools for consistent formatting and linting.

**Context:** Ensure code quality and consistency across the project with automated linting and formatting.

**Subtasks:**
- [ ] **SUBTASK-004-1:** Install Prettier: `npm install -D prettier`
- [ ] **SUBTASK-004-2:** Create `.prettierrc` configuration:
  ```json
  {
    "semi": false,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "printWidth": 100
  }
  ```
- [ ] **SUBTASK-004-3:** Create `.prettierignore`:
  ```
  node_modules
  .next
  out
  public
  ```
- [ ] **SUBTASK-004-4:** Install ESLint Prettier plugin: `npm install -D eslint-config-prettier`
- [ ] **SUBTASK-004-5:** Update `.eslintrc.json` to extend Prettier:
  ```json
  {
    "extends": ["next/core-web-vitals", "prettier"]
  }
  ```
- [ ] **SUBTASK-004-6:** Add format scripts to `package.json`:
  ```json
  "scripts": {
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,md}\"",
    "lint": "next lint"
  }
  ```
- [ ] **SUBTASK-004-7:** Run `npm run format` to format all existing files
- [ ] **SUBTASK-004-8:** Run `npm run lint` to verify no linting errors

**Validation:**
- Prettier formats code consistently
- ESLint shows no errors
- Scripts execute without errors

---

### TASK-005: Initialize Git Repository

**Dependencies:** [TASK-001, TASK-002]

**Description:** Set up version control with Git and create initial commit.

**Context:** Version control is essential for tracking changes and collaboration.

**Subtasks:**
- [ ] **SUBTASK-005-1:** Initialize Git repository: `git init`
- [ ] **SUBTASK-005-2:** Verify `.gitignore` includes:
  ```
  node_modules
  .next
  .env.local
  .env*.local
  .DS_Store
  out
  dist
  ```
- [ ] **SUBTASK-005-3:** Create `.gitattributes` for consistent line endings:
  ```
  * text=auto
  *.ts text
  *.tsx text
  *.js text
  *.json text
  ```
- [ ] **SUBTASK-005-4:** Stage all files: `git add .`
- [ ] **SUBTASK-005-5:** Create initial commit: `git commit -m "Initial commit: Next.js project setup with TypeScript and Tailwind"`
- [ ] **SUBTASK-005-6:** Create GitHub repository (via GitHub CLI or web interface)
- [ ] **SUBTASK-005-7:** Add remote origin: `git remote add origin <repository-url>`
- [ ] **SUBTASK-005-8:** Push to GitHub: `git push -u origin main`

**Validation:**
- Repository initialized successfully
- Initial commit created
- Code pushed to GitHub

---

### TASK-006: Set Up Vercel Project

**Dependencies:** [TASK-005]

**Description:** Create Vercel project and connect GitHub repository for continuous deployment.

**Context:** Vercel provides hosting, automatic deployments, and integrations needed for this project.

**Subtasks:**
- [ ] **SUBTASK-006-1:** Install Vercel CLI: `npm install -g vercel`
- [ ] **SUBTASK-006-2:** Log in to Vercel: `vercel login`
- [ ] **SUBTASK-006-3:** Link project to Vercel: `vercel link`
- [ ] **SUBTASK-006-4:** Configure project settings in Vercel dashboard:
  - Framework Preset: Next.js
  - Build Command: `npm run build`
  - Output Directory: `.next`
  - Install Command: `npm install`
- [ ] **SUBTASK-006-5:** Set up automatic deployments from GitHub main branch
- [ ] **SUBTASK-006-6:** Verify first deployment succeeds
- [ ] **SUBTASK-006-7:** Save Vercel project URL for future reference
- [ ] **SUBTASK-006-8:** Configure preview deployments for pull requests

**Validation:**
- Project successfully deployed to Vercel
- Automatic deployments configured
- Deployment URL accessible

---

### TASK-007: Install Core Dependencies

**Dependencies:** [TASK-001]

**Description:** Install all required npm packages for the project.

**Context:** Install dependencies needed throughout development to avoid interruptions later.

**Subtasks:**
- [ ] **SUBTASK-007-1:** Install UI utility libraries:
  ```bash
  npm install @headlessui/react lucide-react react-hook-form zod @hookform/resolvers
  ```
- [ ] **SUBTASK-007-2:** Install date utilities:
  ```bash
  npm install date-fns
  ```
- [ ] **SUBTASK-007-3:** Install authentication libraries:
  ```bash
  npm install bcryptjs iron-session
  npm install -D @types/bcryptjs
  ```
- [ ] **SUBTASK-007-4:** Install database libraries (Drizzle ORM):
  ```bash
  npm install drizzle-orm postgres
  npm install -D drizzle-kit
  ```
- [ ] **SUBTASK-007-5:** Install Vercel Blob SDK:
  ```bash
  npm install @vercel/blob
  ```
- [ ] **SUBTASK-007-6:** Install Resend for email:
  ```bash
  npm install resend
  ```
- [ ] **SUBTASK-007-7:** Install React Email for templates:
  ```bash
  npm install react-email @react-email/components
  ```
- [ ] **SUBTASK-007-8:** Verify all packages installed correctly: `npm list --depth=0`

**Validation:**
- All packages installed without errors
- No peer dependency warnings
- `package-lock.json` updated

---

## Phase 2: Database & Authentication

**Goal:** Set up database schema, migrations, and authentication system

**Duration:** 2-3 days

**Phase Dependencies:** [TASK-001 through TASK-007]

---

### TASK-008: Set Up Supabase Project

**Dependencies:** [TASK-002]

**Description:** Create Supabase project and obtain database connection credentials.

**Context:** Supabase provides managed PostgreSQL hosting with a generous free tier.

**Subtasks:**
- [ ] **SUBTASK-008-1:** Go to https://supabase.com and create account
- [ ] **SUBTASK-008-2:** Click "New Project" and configure:
  - Project name: `law-firm-website`
  - Database password: Generate strong password and save securely
  - Region: Choose closest to Fort Wayne, IN (e.g., US East)
  - Pricing plan: Free tier
- [ ] **SUBTASK-008-3:** Wait for project provisioning (2-3 minutes)
- [ ] **SUBTASK-008-4:** Navigate to Project Settings > Database
- [ ] **SUBTASK-008-5:** Copy "Connection String" (URI format for Drizzle)
- [ ] **SUBTASK-008-6:** Add `DATABASE_URL` to `.env.local`:
  ```
  DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
  ```
- [ ] **SUBTASK-008-7:** Add same `DATABASE_URL` to Vercel environment variables (for production)
- [ ] **SUBTASK-008-8:** Test connection using Supabase SQL Editor with simple query: `SELECT NOW();`

**Validation:**
- Supabase project created successfully
- Database connection string obtained
- Test query executes successfully

---

### TASK-009: Configure Drizzle ORM

**Dependencies:** [TASK-007, TASK-008]

**Description:** Set up Drizzle ORM configuration and database client.

**Context:** Drizzle provides type-safe database queries and migrations for PostgreSQL.

**Subtasks:**
- [ ] **SUBTASK-009-1:** Create `drizzle.config.ts` in project root:
  ```typescript
  import type { Config } from 'drizzle-kit'
  import * as dotenv from 'dotenv'

  dotenv.config({ path: '.env.local' })

  export default {
    schema: './src/lib/db/schema.ts',
    out: './src/lib/db/migrations',
    driver: 'pg',
    dbCredentials: {
      connectionString: process.env.DATABASE_URL!,
    },
  } satisfies Config
  ```
- [ ] **SUBTASK-009-2:** Install dotenv for config file: `npm install dotenv`
- [ ] **SUBTASK-009-3:** Create database client at `src/lib/db/client.ts`:
  ```typescript
  import { drizzle } from 'drizzle-orm/postgres-js'
  import postgres from 'postgres'

  const connectionString = process.env.DATABASE_URL!

  // Disable prefetch for connection
  const client = postgres(connectionString, { prepare: false })

  export const db = drizzle(client)
  ```
- [ ] **SUBTASK-009-4:** Create placeholder schema file at `src/lib/db/schema.ts`:
  ```typescript
  // Database schema definitions will go here
  export {}
  ```
- [ ] **SUBTASK-009-5:** Create migrations folder: `mkdir -p src/lib/db/migrations`
- [ ] **SUBTASK-009-6:** Add Drizzle scripts to `package.json`:
  ```json
  "scripts": {
    "db:generate": "drizzle-kit generate:pg",
    "db:push": "drizzle-kit push:pg",
    "db:studio": "drizzle-kit studio"
  }
  ```
- [ ] **SUBTASK-009-7:** Test database connection by importing `db` in a test file

**Validation:**
- Drizzle config file created
- Database client can be imported
- Scripts added to package.json

---

### TASK-010: Define Database Schema

**Dependencies:** [TASK-009]

**Description:** Create Drizzle schema definitions for users and blog_posts tables.

**Context:** Define the complete database schema using Drizzle's TypeScript API.

**Subtasks:**
- [ ] **SUBTASK-010-1:** Create `users` table schema in `src/lib/db/schema.ts`:
  ```typescript
  import { pgTable, uuid, varchar, timestamp } from 'drizzle-orm/pg-core'

  export const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),
    username: varchar('username', { length: 50 }).notNull().unique(),
    passwordHash: varchar('password_hash', { length: 255 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  })
  ```
- [ ] **SUBTASK-010-2:** Create `blogPosts` table schema in same file:
  ```typescript
  export const blogPosts = pgTable('blog_posts', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).notNull().unique(),
    featuredImageUrl: text('featured_image_url').notNull(),
    content: text('content').notNull(),
    excerpt: text('excerpt'),
    metaTitle: varchar('meta_title', { length: 60 }),
    metaDescription: varchar('meta_description', { length: 160 }),
    status: varchar('status', { length: 20 }).default('draft').notNull(),
    authorId: uuid('author_id').references(() => users.id, { onDelete: 'set null' }),
    publishedAt: timestamp('published_at'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  })
  ```
- [ ] **SUBTASK-010-3:** Add necessary imports at top of file:
  ```typescript
  import { text } from 'drizzle-orm/pg-core'
  ```
- [ ] **SUBTASK-010-4:** Create TypeScript types from schema:
  ```typescript
  export type User = typeof users.$inferSelect
  export type NewUser = typeof users.$inferInsert
  export type BlogPost = typeof blogPosts.$inferSelect
  export type NewBlogPost = typeof blogPosts.$inferInsert
  ```
- [ ] **SUBTASK-010-5:** Create indexes for blog_posts:
  ```typescript
  import { index } from 'drizzle-orm/pg-core'

  // Add to blogPosts table definition
  (table) => ({
    statusIdx: index('status_idx').on(table.status),
    publishedAtIdx: index('published_at_idx').on(table.publishedAt),
    slugIdx: index('slug_idx').on(table.slug),
  })
  ```
- [ ] **SUBTASK-010-6:** Verify schema file has no TypeScript errors

**Validation:**
- Schema file compiles without errors
- Types can be imported and used
- All columns defined correctly

---

### TASK-011: Create and Run Database Migrations

**Dependencies:** [TASK-010]

**Description:** Generate migration files and apply them to Supabase database.

**Context:** Migrations create the actual database tables based on the schema definitions.

**Subtasks:**
- [ ] **SUBTASK-011-1:** Generate migration from schema: `npm run db:generate`
- [ ] **SUBTASK-011-2:** Verify migration file created in `src/lib/db/migrations/` with SQL statements
- [ ] **SUBTASK-011-3:** Review generated SQL to ensure it matches schema expectations
- [ ] **SUBTASK-011-4:** Push migration to database: `npm run db:push`
- [ ] **SUBTASK-011-5:** Verify tables created in Supabase dashboard (Table Editor)
- [ ] **SUBTASK-011-6:** Check that indexes were created correctly
- [ ] **SUBTASK-011-7:** Verify foreign key constraint exists (blogPosts.authorId → users.id)
- [ ] **SUBTASK-011-8:** Create migration log in `MIGRATIONS.md` documenting what was created

**Validation:**
- Migration executed successfully
- Tables visible in Supabase dashboard
- No migration errors in console

---

### TASK-012: Create Default Admin User

**Dependencies:** [TASK-011]

**Description:** Seed database with default admin user account.

**Context:** Create initial admin account for first login and testing.

**Subtasks:**
- [ ] **SUBTASK-012-1:** Install bcryptjs if not already: `npm install bcryptjs`
- [ ] **SUBTASK-012-2:** Create seed script at `src/lib/db/seed.ts`:
  ```typescript
  import { db } from './client'
  import { users } from './schema'
  import bcrypt from 'bcryptjs'

  async function seed() {
    // Hash default password
    const passwordHash = await bcrypt.hash('admin123', 10)

    // Insert admin user
    await db.insert(users).values({
      username: 'admin',
      passwordHash,
    })

    console.log('✅ Admin user created successfully')
  }

  seed()
    .catch((error) => {
      console.error('❌ Seed failed:', error)
      process.exit(1)
    })
  ```
- [ ] **SUBTASK-012-3:** Add seed script to `package.json`:
  ```json
  "scripts": {
    "db:seed": "tsx src/lib/db/seed.ts"
  }
  ```
- [ ] **SUBTASK-012-4:** Install tsx for running TypeScript: `npm install -D tsx`
- [ ] **SUBTASK-012-5:** Run seed script: `npm run db:seed`
- [ ] **SUBTASK-012-6:** Verify admin user created in Supabase Table Editor
- [ ] **SUBTASK-012-7:** Document default credentials in `.env.example`:
  ```
  # Default admin credentials (CHANGE AFTER FIRST LOGIN)
  # Username: admin
  # Password: admin123
  ```
- [ ] **SUBTASK-012-8:** Add note to prevent re-running seed (add check for existing users)

**Validation:**
- Seed script runs successfully
- Admin user visible in database
- Password is properly hashed

---

### TASK-013: Create Authentication Utilities

**Dependencies:** [TASK-012]

**Description:** Build authentication helper functions for login, session management, and password hashing.

**Context:** Core authentication functions that will be used throughout the application.

**Subtasks:**
- [ ] **SUBTASK-013-1:** Create `src/lib/auth/session.ts` for session management:
  ```typescript
  import { getIronSession, IronSession, SessionOptions } from 'iron-session'
  import { cookies } from 'next/headers'

  export interface SessionData {
    userId: string
    username: string
    isLoggedIn: boolean
  }

  const sessionOptions: SessionOptions = {
    password: process.env.SESSION_SECRET!,
    cookieName: 'law-firm-session',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
  }

  export async function getSession() {
    return getIronSession<SessionData>(cookies(), sessionOptions)
  }
  ```
- [ ] **SUBTASK-013-2:** Generate secure session secret:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
  ```
- [ ] **SUBTASK-013-3:** Add `SESSION_SECRET` to `.env.local` with generated value
- [ ] **SUBTASK-013-4:** Add `SESSION_SECRET` to Vercel environment variables
- [ ] **SUBTASK-013-5:** Create `src/lib/auth/password.ts` for password utilities:
  ```typescript
  import bcrypt from 'bcryptjs'

  export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  }

  export async function verifyPassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword)
  }
  ```
- [ ] **SUBTASK-013-6:** Create `src/lib/auth/index.ts` to export all auth functions:
  ```typescript
  export { getSession } from './session'
  export { hashPassword, verifyPassword } from './password'
  export type { SessionData } from './session'
  ```
- [ ] **SUBTASK-013-7:** Create auth validation function in `src/lib/auth/validate.ts`:
  ```typescript
  import { getSession } from './session'
  import { redirect } from 'next/navigation'

  export async function requireAuth() {
    const session = await getSession()

    if (!session.isLoggedIn) {
      redirect('/admin/login')
    }

    return session
  }
  ```
- [ ] **SUBTASK-013-8:** Test password hashing and verification with sample data

**Validation:**
- All auth utilities compile without errors
- Session secret configured
- Password hashing works correctly

---

### TASK-014: Create Login API Route

**Dependencies:** [TASK-013]

**Description:** Build API endpoint for user authentication.

**Context:** Handle login requests, validate credentials, and create user sessions.

**Subtasks:**
- [ ] **SUBTASK-014-1:** Create folder `src/app/api/auth/login/`
- [ ] **SUBTASK-014-2:** Create `route.ts` with login handler:
  ```typescript
  import { NextRequest, NextResponse } from 'next/server'
  import { db } from '@/lib/db/client'
  import { users } from '@/lib/db/schema'
  import { eq } from 'drizzle-orm'
  import { verifyPassword } from '@/lib/auth'
  import { getSession } from '@/lib/auth/session'

  export async function POST(request: NextRequest) {
    try {
      const { username, password } = await request.json()

      // Validate input
      if (!username || !password) {
        return NextResponse.json(
          { error: 'Username and password required' },
          { status: 400 }
        )
      }

      // Find user
      const [user] = await db
        .select()
        .from(users)
        .where(eq(users.username, username))
        .limit(1)

      if (!user) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        )
      }

      // Verify password
      const valid = await verifyPassword(password, user.passwordHash)

      if (!valid) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        )
      }

      // Create session
      const session = await getSession()
      session.userId = user.id
      session.username = user.username
      session.isLoggedIn = true
      await session.save()

      return NextResponse.json({ success: true })
    } catch (error) {
      console.error('Login error:', error)
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    }
  }
  ```
- [ ] **SUBTASK-014-3:** Add `drizzle-orm` query imports as needed
- [ ] **SUBTASK-014-4:** Test API route with REST client (Postman, Thunder Client, or curl):
  ```bash
  curl -X POST http://localhost:3000/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"username":"admin","password":"admin123"}'
  ```
- [ ] **SUBTASK-014-5:** Verify successful login returns 200 status
- [ ] **SUBTASK-014-6:** Verify invalid credentials return 401 status
- [ ] **SUBTASK-014-7:** Verify session cookie is set in browser

**Validation:**
- Login API accepts POST requests
- Valid credentials create session
- Invalid credentials return error
- Session cookie created

---

### TASK-015: Create Logout API Route

**Dependencies:** [TASK-013]

**Description:** Build API endpoint to destroy user sessions.

**Context:** Allow users to log out securely by destroying their session.

**Subtasks:**
- [ ] **SUBTASK-015-1:** Create folder `src/app/api/auth/logout/`
- [ ] **SUBTASK-015-2:** Create `route.ts` with logout handler:
  ```typescript
  import { NextResponse } from 'next/server'
  import { getSession } from '@/lib/auth/session'

  export async function POST() {
    const session = await getSession()
    session.destroy()

    return NextResponse.json({ success: true })
  }
  ```
- [ ] **SUBTASK-015-3:** Test logout route with authenticated session:
  ```bash
  curl -X POST http://localhost:3000/api/auth/logout \
    -b cookies.txt
  ```
- [ ] **SUBTASK-015-4:** Verify session is destroyed after logout
- [ ] **SUBTASK-015-5:** Verify session cookie is cleared

**Validation:**
- Logout API destroys session
- Session cookie cleared
- Subsequent requests show no authentication

---

## Phase 3: Core UI Components

**Goal:** Build reusable UI components used throughout the application

**Duration:** 2-3 days

**Phase Dependencies:** [TASK-001 through TASK-007]

---

### TASK-016: Create Base UI Components

**Dependencies:** [TASK-003, TASK-007]

**Description:** Build foundational UI components (Button, Input, Textarea, etc.) using Tailwind CSS.

**Context:** These components will be reused throughout both public and admin sections.

**Subtasks:**
- [ ] **SUBTASK-016-1:** Create `src/components/ui/Button.tsx`:
  ```typescript
  import { ButtonHTMLAttributes, forwardRef } from 'react'
  import { cn } from '@/lib/utils'

  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
  }

  const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
      const variants = {
        primary: 'bg-primary text-white hover:bg-primary-dark',
        secondary: 'bg-secondary text-white hover:bg-secondary-dark',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'text-primary hover:bg-primary/10',
      }

      const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      }

      return (
        <button
          ref={ref}
          className={cn(
            'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
            variants[variant],
            sizes[size],
            className
          )}
          {...props}
        />
      )
    }
  )

  Button.displayName = 'Button'
  export { Button }
  ```
- [ ] **SUBTASK-016-2:** Create `src/components/ui/Input.tsx`:
  ```typescript
  import { InputHTMLAttributes, forwardRef } from 'react'
  import { cn } from '@/lib/utils'

  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
  }

  const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, ...props }, ref) => {
      return (
        <div className="w-full">
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary',
              error ? 'border-red-500' : 'border-gray-300',
              className
            )}
            {...props}
          />
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
      )
    }
  )

  Input.displayName = 'Input'
  export { Input }
  ```
- [ ] **SUBTASK-016-3:** Create `src/components/ui/Textarea.tsx`:
  ```typescript
  import { TextareaHTMLAttributes, forwardRef } from 'react'
  import { cn } from '@/lib/utils'

  interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string
  }

  const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, error, ...props }, ref) => {
      return (
        <div className="w-full">
          <textarea
            ref={ref}
            className={cn(
              'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-y',
              error ? 'border-red-500' : 'border-gray-300',
              className
            )}
            {...props}
          />
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
      )
    }
  )

  Textarea.displayName = 'Textarea'
  export { Textarea }
  ```
- [ ] **SUBTASK-016-4:** Create `src/components/ui/Label.tsx`:
  ```typescript
  import { LabelHTMLAttributes, forwardRef } from 'react'
  import { cn } from '@/lib/utils'

  const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
    ({ className, ...props }, ref) => {
      return (
        <label
          ref={ref}
          className={cn('block text-sm font-medium text-text mb-1', className)}
          {...props}
        />
      )
    }
  )

  Label.displayName = 'Label'
  export { Label }
  ```
- [ ] **SUBTASK-016-5:** Create `src/components/ui/index.ts` to export all components:
  ```typescript
  export { Button } from './Button'
  export { Input } from './Input'
  export { Textarea } from './Textarea'
  export { Label } from './Label'
  ```
- [ ] **SUBTASK-016-6:** Test components by creating temporary test page
- [ ] **SUBTASK-016-7:** Verify all variants and sizes render correctly
- [ ] **SUBTASK-016-8:** Test accessibility (keyboard navigation, focus states)

**Validation:**
- All UI components render correctly
- Variants and sizes work as expected
- TypeScript types are correct
- Accessibility features work

---

### TASK-017: Create Layout Components (Header)

**Dependencies:** [TASK-003, TASK-016]

**Description:** Build main navigation header for public website.

**Context:** Header includes logo, navigation menu, phone number CTA, and mobile menu.

**Subtasks:**
- [ ] **SUBTASK-017-1:** Create `src/components/layout/Header.tsx`:
  ```typescript
  'use client'

  import Link from 'next/link'
  import { useState } from 'react'
  import { Menu, X, Phone } from 'lucide-react'
  import { Button } from '@/components/ui'

  export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
      { name: 'Home', href: '/' },
      { name: 'Practice Areas', href: '/practice-areas' },
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ]

    return (
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-heading font-bold text-primary">
              Law Firm Name
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="primary" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-text hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="primary" className="w-full mt-4">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          )}
        </nav>
      </header>
    )
  }
  ```
- [ ] **SUBTASK-017-2:** Install Lucide icons if not already: `npm install lucide-react`
- [ ] **SUBTASK-017-3:** Create practice areas dropdown (to be implemented in TASK-028)
- [ ] **SUBTASK-017-4:** Add smooth scroll behavior for sticky header
- [ ] **SUBTASK-017-5:** Test header on mobile, tablet, and desktop viewports
- [ ] **SUBTASK-017-6:** Verify mobile menu opens/closes correctly
- [ ] **SUBTASK-017-7:** Add active link highlighting based on current route
- [ ] **SUBTASK-017-8:** Test keyboard accessibility (tab navigation)

**Validation:**
- Header displays correctly on all screen sizes
- Mobile menu functions properly
- Navigation links work
- Sticky behavior works on scroll

---

### TASK-018: Create Layout Components (Footer)

**Dependencies:** [TASK-003]

**Description:** Build footer component with links, contact info, and legal disclaimers.

**Context:** Footer appears on all public pages with quick links, practice areas, and contact information.

**Subtasks:**
- [ ] **SUBTASK-018-1:** Create `src/components/layout/Footer.tsx`:
  ```typescript
  import Link from 'next/link'
  import { Facebook, Twitter, Linkedin } from 'lucide-react'

  export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
      <footer className="bg-primary text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">Law Firm Name</h3>
              <p className="text-sm text-gray-300">
                Your trusted legal advocate for family, personal injury, and criminal defense.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-secondary">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-secondary">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/practice-areas/divorce-family-law" className="hover:text-secondary">Divorce & Family Law</Link></li>
                <li><Link href="/practice-areas/personal-injury" className="hover:text-secondary">Personal Injury</Link></li>
                <li><Link href="/practice-areas/criminal-defense" className="hover:text-secondary">Criminal Defense</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>123 Main Street</li>
                <li>Fort Wayne, IN 46802</li>
                <li>Phone: (260) 555-0100</li>
                <li>Email: contact@lawfirm.com</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-light mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-300">
                © {currentYear} Law Firm Name. All rights reserved.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" className="hover:text-secondary"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-secondary"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-secondary"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Disclaimer: The information on this website is for general informational purposes only and does not constitute legal advice.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  ```
- [ ] **SUBTASK-018-2:** Export footer from `src/components/layout/index.ts`
- [ ] **SUBTASK-018-3:** Test footer on different screen sizes
- [ ] **SUBTASK-018-4:** Verify all links work correctly
- [ ] **SUBTASK-018-5:** Test social media icon colors and hover states

**Validation:**
- Footer renders on all pages
- Links navigate correctly
- Responsive layout works
- Social icons display

---

### TASK-019: Create Public Layout Wrapper

**Dependencies:** [TASK-017, TASK-018]

**Description:** Create layout component that wraps public pages with header and footer.

**Context:** Establish consistent layout structure for all public-facing pages.

**Subtasks:**
- [ ] **SUBTASK-019-1:** Create route group folder: `src/app/(public)/`
- [ ] **SUBTASK-019-2:** Create `src/app/(public)/layout.tsx`:
  ```typescript
  import { Header } from '@/components/layout/Header'
  import { Footer } from '@/components/layout/Footer'

  export default function PublicLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </>
    )
  }
  ```
- [ ] **SUBTASK-019-3:** Move existing `src/app/page.tsx` to `src/app/(public)/page.tsx`
- [ ] **SUBTASK-019-4:** Test that homepage now has header and footer
- [ ] **SUBTASK-019-5:** Verify layout applies to all routes in (public) group
- [ ] **SUBTASK-019-6:** Test min-height ensures footer stays at bottom

**Validation:**
- Public layout renders header and footer
- Main content area has proper spacing
- Footer stays at bottom of page

---

### TASK-020: Create Reusable Section Components

**Dependencies:** [TASK-016]

**Description:** Build common section components (Hero, CTA, Card Grid, etc.) used across multiple pages.

**Context:** These components provide consistent styling and structure for content sections.

**Subtasks:**
- [ ] **SUBTASK-020-1:** Create `src/components/ui/Section.tsx`:
  ```typescript
  import { HTMLAttributes } from 'react'
  import { cn } from '@/lib/utils'

  interface SectionProps extends HTMLAttributes<HTMLElement> {
    variant?: 'default' | 'gray' | 'primary'
  }

  export function Section({ className, variant = 'default', children, ...props }: SectionProps) {
    const variants = {
      default: 'bg-white',
      gray: 'bg-background-gray',
      primary: 'bg-primary text-white',
    }

    return (
      <section className={cn('py-16', variants[variant], className)} {...props}>
        <div className="container mx-auto px-4">{children}</div>
      </section>
    )
  }
  ```
- [ ] **SUBTASK-020-2:** Create `src/components/ui/SectionTitle.tsx`:
  ```typescript
  import { HTMLAttributes } from 'react'
  import { cn } from '@/lib/utils'

  export function SectionTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return (
      <h2
        className={cn('text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12', className)}
        {...props}
      >
        {children}
      </h2>
    )
  }
  ```
- [ ] **SUBTASK-020-3:** Create `src/components/ui/Container.tsx`:
  ```typescript
  import { HTMLAttributes } from 'react'
  import { cn } from '@/lib/utils'

  export function Container({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
      <div className={cn('container mx-auto px-4', className)} {...props}>
        {children}
      </div>
    )
  }
  ```
- [ ] **SUBTASK-020-4:** Export new components from `src/components/ui/index.ts`
- [ ] **SUBTASK-020-5:** Test components with different content
- [ ] **SUBTASK-020-6:** Verify responsive behavior

**Validation:**
- Section components render correctly
- Variants work as expected
- Responsive spacing works

---

### TASK-021: Create Admin Layout Components

**Dependencies:** [TASK-016]

**Description:** Build admin dashboard layout with sidebar navigation.

**Context:** Admin pages need a different layout with sidebar menu for navigation.

**Subtasks:**
- [ ] **SUBTASK-021-1:** Create `src/components/admin/Sidebar.tsx`:
  ```typescript
  'use client'

  import Link from 'next/link'
  import { usePathname } from 'next/navigation'
  import { cn } from '@/lib/utils'
  import { LayoutDashboard, FileText, Users, LogOut } from 'lucide-react'

  export function Sidebar() {
    const pathname = usePathname()

    const navigation = [
      { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
      { name: 'Blog Posts', href: '/admin/blog', icon: FileText },
      { name: 'Users', href: '/admin/users', icon: Users },
    ]

    return (
      <aside className="w-64 bg-primary text-white min-h-screen">
        <div className="p-6">
          <h2 className="text-2xl font-heading font-bold">Admin Panel</h2>
        </div>

        <nav className="px-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-md transition-colors',
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}

          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-white/70 hover:bg-white/5 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </form>
        </nav>
      </aside>
    )
  }
  ```
- [ ] **SUBTASK-021-2:** Create `src/app/admin/layout.tsx`:
  ```typescript
  import { Sidebar } from '@/components/admin/Sidebar'
  import { requireAuth } from '@/lib/auth/validate'

  export default async function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    await requireAuth()

    return (
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 bg-background-gray min-h-screen">
          {children}
        </main>
      </div>
    )
  }
  ```
- [ ] **SUBTASK-021-3:** Test admin layout with placeholder content
- [ ] **SUBTASK-021-4:** Verify sidebar navigation highlights active route
- [ ] **SUBTASK-021-5:** Test logout button functionality
- [ ] **SUBTASK-021-6:** Verify unauthorized users are redirected to login

**Validation:**
- Admin layout renders with sidebar
- Navigation works correctly
- Active route highlighting works
- Authentication protection works

---

## Phase 4: Public Website - Static Pages

**Goal:** Build all public-facing static content pages

**Duration:** 5-7 days

**Phase Dependencies:** [TASK-019, TASK-020]

---

### TASK-022: Create Homepage Hero Section

**Dependencies:** [TASK-019, TASK-020]

**Description:** Build the hero section for the homepage with headline, subheading, and CTA.

**Context:** The hero is the first thing visitors see and should encourage them to take action.

**Subtasks:**
- [ ] **SUBTASK-022-1:** Create `src/components/home/Hero.tsx`:
  ```typescript
  import { Button } from '@/components/ui'
  import { Phone } from 'lucide-react'
  import Link from 'next/link'

  export function Hero() {
    return (
      <section className="relative bg-primary text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Your Trusted Legal Advocate for Family, Personal Injury & Criminal Defense
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Compassionate, aggressive representation when you need it most
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (260) 555-0100
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  ```
- [ ] **SUBTASK-022-2:** Add background image or gradient to hero section
- [ ] **SUBTASK-022-3:** Test responsive layout on mobile, tablet, desktop
- [ ] **SUBTASK-022-4:** Verify CTA buttons link to correct pages
- [ ] **SUBTASK-022-5:** Add subtle animation on page load (optional)
- [ ] **SUBTASK-022-6:** Test contrast ratios for accessibility

**Validation:**
- Hero section displays correctly
- CTAs are prominent and clickable
- Responsive design works
- Text is readable

---

### TASK-023: Create Practice Areas Overview Section

**Dependencies:** [TASK-020]

**Description:** Build 3-column practice areas section for homepage.

**Context:** Showcase the three main practice areas with icons, descriptions, and links.

**Subtasks:**
- [ ] **SUBTASK-023-1:** Create `src/components/home/PracticeAreas.tsx`:
  ```typescript
  import { Section, SectionTitle } from '@/components/ui'
  import { Heart, Shield, Scale } from 'lucide-react'
  import Link from 'next/link'

  export function PracticeAreas() {
    const areas = [
      {
        icon: Heart,
        title: 'Divorce & Family Law',
        description:
          'Compassionate guidance through divorce, custody, support, and asset division. We protect your family's future.',
        href: '/practice-areas/divorce-family-law',
      },
      {
        icon: Shield,
        title: 'Personal Injury Law',
        description:
          'Maximum compensation for accident victims. We fight insurance companies to recover damages you deserve.',
        href: '/practice-areas/personal-injury',
      },
      {
        icon: Scale,
        title: 'Criminal Defense Law',
        description:
          'Aggressive protection of your rights. Experienced defense against all criminal charges from misdemeanors to felonies.',
        href: '/practice-areas/criminal-defense',
      },
    ]

    return (
      <Section>
        <SectionTitle>Our Practice Areas</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className="text-center p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {area.title}
                </h3>
                <p className="text-text-light mb-4">{area.description}</p>
                <Link
                  href={area.href}
                  className="text-primary font-semibold hover:text-primary-dark"
                >
                  Learn More →
                </Link>
              </div>
            )
          })}
        </div>
      </Section>
    )
  }
  ```
- [ ] **SUBTASK-023-2:** Test hover effects on cards
- [ ] **SUBTASK-023-3:** Verify responsive grid layout
- [ ] **SUBTASK-023-4:** Test icon rendering
- [ ] **SUBTASK-023-5:** Verify links navigate to correct practice area pages

**Validation:**
- Practice areas display in 3-column grid
- Hover effects work
- Links navigate correctly
- Mobile layout stacks vertically

---

### TASK-024: Create "Why Choose Us" Section

**Dependencies:** [TASK-020]

**Description:** Build features section highlighting firm's unique value propositions.

**Context:** Showcase 5 key differentiators to build credibility and trust.

**Subtasks:**
- [ ] **SUBTASK-024-1:** Create `src/components/home/WhyChooseUs.tsx`:
  ```typescript
  import { Section, SectionTitle } from '@/components/ui'
  import { Award, Heart, TrendingUp, Clock, DollarSign } from 'lucide-react'

  export function WhyChooseUs() {
    const features = [
      {
        icon: Award,
        title: 'Experienced Attorneys',
        description: '50+ Years Combined Experience | Expert representation in all three practice areas',
      },
      {
        icon: Heart,
        title: 'Compassionate Approach',
        description: 'We understand your situation | Personalized, client-focused strategies',
      },
      {
        icon: TrendingUp,
        title: 'Proven Track Record',
        description: 'Hundreds of successful cases | Consistent results for our clients',
      },
      {
        icon: Clock,
        title: 'Available 24/7',
        description: 'Emergencies don't wait | We're here when you need us most',
      },
      {
        icon: DollarSign,
        title: 'Free Consultations',
        description: 'No obligation | Clear information about your options',
      },
    ]

    return (
      <Section variant="gray">
        <SectionTitle>Why Clients Trust Us</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-light">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Section>
    )
  }
  ```
- [ ] **SUBTASK-024-2:** Test responsive grid layout
- [ ] **SUBTASK-024-3:** Verify icons render correctly
- [ ] **SUBTASK-024-4:** Test gray background variant

**Validation:**
- Features display in grid
- Icons and text aligned properly
- Responsive layout works

---

### TASK-025: Create Testimonials Section

**Dependencies:** [TASK-020]

**Description:** Build testimonials section with curated Google Reviews.

**Context:** Display 4 hardcoded testimonials with star ratings and link to Google Business Profile.

**Subtasks:**
- [ ] **SUBTASK-025-1:** Create `src/components/home/Testimonials.tsx`:
  ```typescript
  import { Section, SectionTitle, Button } from '@/components/ui'
  import { Star, ExternalLink } from 'lucide-react'

  export function Testimonials() {
    const testimonials = [
      {
        name: 'Sarah M.',
        area: 'Divorce & Family Law',
        rating: 5,
        quote:
          'They handled my divorce with professionalism and compassion. The attorney kept me informed every step and fought hard for fair custody arrangements. Highly recommend.',
      },
      {
        name: 'John D.',
        area: 'Personal Injury',
        rating: 5,
        quote:
          'After my car accident, they dealt with the insurance company so I could focus on recovery. Secured a settlement that covered all my medical bills and more.',
      },
      {
        name: 'Michael R.',
        area: 'Criminal Defense',
        rating: 5,
        quote:
          'Facing criminal charges was terrifying, but this firm defended me aggressively. They got my charges reduced significantly. Forever grateful.',
      },
      {
        name: 'Lisa K.',
        area: 'Divorce & Family Law',
        rating: 5,
        quote:
          'Professional, responsive, and truly cared about my case. They made a difficult time much easier. Thank you for protecting my rights.',
      },
    ]

    return (
      <Section>
        <SectionTitle>What Our Clients Say</SectionTitle>
        <p className="text-center text-text-light mb-12">Our clients speak out</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-text mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-text-light">{testimonial.area}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              See More Reviews on Google
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </Section>
    )
  }
  ```
- [ ] **SUBTASK-025-2:** Update Button component to accept `asChild` prop for link wrapping
- [ ] **SUBTASK-025-3:** Test star ratings display
- [ ] **SUBTASK-025-4:** Verify Google link opens in new tab
- [ ] **SUBTASK-025-5:** Test responsive grid layout

**Validation:**
- Testimonials display correctly
- Star ratings show properly
- Google link works
- Responsive layout stacks on mobile

---

### TASK-026: Create Blog Preview Section

**Dependencies:** [TASK-020]

**Description:** Build section showing 3 most recent blog posts on homepage.

**Context:** Will fetch blog posts from database once blog system is built. For now, show placeholder content.

**Subtasks:**
- [ ] **SUBTASK-026-1:** Create `src/components/home/BlogPreview.tsx`:
  ```typescript
  import { Section, SectionTitle, Button } from '@/components/ui'
  import Link from 'next/link'
  import { Calendar } from 'lucide-react'

  export function BlogPreview() {
    // Placeholder data - will be replaced with database fetch
    const posts = [
      {
        title: 'Understanding the Divorce Process in Indiana',
        excerpt: 'Learn about the steps involved in filing for divorce in Fort Wayne and what to expect during proceedings...',
        date: '2025-01-15',
        slug: 'understanding-divorce-process',
      },
      {
        title: 'What to Do After a Car Accident',
        excerpt: 'Essential steps to protect your rights and maximize compensation after being injured in an auto accident...',
        date: '2025-01-10',
        slug: 'what-to-do-after-car-accident',
      },
      {
        title: 'Your Rights During a Police Stop',
        excerpt: 'Know your constitutional rights when stopped by law enforcement and how to protect yourself...',
        date: '2025-01-05',
        slug: 'rights-during-police-stop',
      },
    ]

    return (
      <Section variant="gray">
        <SectionTitle>Latest News & Insights</SectionTitle>
        <p className="text-center text-text-light mb-12">Stay informed with our expert blogs</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-text-light mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
                <p className="text-text-light text-sm mb-4">{post.excerpt}</p>
                <span className="text-primary font-semibold">Read More →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button variant="outline">View All Blog Posts</Button>
          </Link>
        </div>
      </Section>
    )
  }
  ```
- [ ] **SUBTASK-026-2:** Add placeholder image backgrounds
- [ ] **SUBTASK-026-3:** Test card hover effects
- [ ] **SUBTASK-026-4:** Verify responsive grid
- [ ] **SUBTASK-026-5:** Note: This will be updated in Phase 6 to fetch real blog data

**Validation:**
- Blog preview cards display
- Hover effects work
- Links navigate correctly
- Responsive layout works

---

### TASK-027: Create CTA Section Component

**Dependencies:** [TASK-020]

**Description:** Build reusable call-to-action section for bottom of pages.

**Context:** This section appears before the footer on most pages to encourage contact.

**Subtasks:**
- [ ] **SUBTASK-027-1:** Create `src/components/ui/CTASection.tsx`:
  ```typescript
  import { Button } from '@/components/ui'
  import { Phone } from 'lucide-react'
  import Link from 'next/link'

  interface CTASectionProps {
    headline?: string
    subheading?: string
    phoneNumber?: string
  }

  export function CTASection({
    headline = 'Ready to Protect Your Rights?',
    subheading = 'Schedule your free consultation today',
    phoneNumber = '(260) 555-0100',
  }: CTASectionProps) {
    return (
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {headline}
          </h2>
          <p className="text-xl mb-8 text-white/90">{subheading}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Online Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: {phoneNumber}
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-6">We respond to inquiries within 24 hours</p>
        </div>
      </section>
    )
  }
  ```
- [ ] **SUBTASK-027-2:** Export from `src/components/ui/index.ts`
- [ ] **SUBTASK-027-3:** Test with different prop values
- [ ] **SUBTASK-027-4:** Verify responsive layout

**Validation:**
- CTA section renders correctly
- Props can be customized
- Buttons navigate properly
- Responsive design works

---

### TASK-028: Assemble Homepage

**Dependencies:** [TASK-022, TASK-023, TASK-024, TASK-025, TASK-026, TASK-027]

**Description:** Combine all homepage sections into complete homepage.

**Context:** Put together all homepage components in the correct order.

**Subtasks:**
- [ ] **SUBTASK-028-1:** Update `src/app/(public)/page.tsx`:
  ```typescript
  import { Hero } from '@/components/home/Hero'
  import { PracticeAreas } from '@/components/home/PracticeAreas'
  import { WhyChooseUs } from '@/components/home/WhyChooseUs'
  import { Testimonials } from '@/components/home/Testimonials'
  import { BlogPreview } from '@/components/home/BlogPreview'
  import { CTASection } from '@/components/ui/CTASection'

  export default function HomePage() {
    return (
      <>
        <Hero />
        <PracticeAreas />
        <WhyChooseUs />
        <Testimonials />
        <BlogPreview />
        <CTASection />
      </>
    )
  }
  ```
- [ ] **SUBTASK-028-2:** Add metadata for SEO:
  ```typescript
  export const metadata = {
    title: 'Law Firm Name | Fort Wayne Divorce, Personal Injury & Criminal Defense Attorneys',
    description:
      'Trusted Fort Wayne law firm specializing in divorce & family law, personal injury, and criminal defense. Free consultations. Call (260) 555-0100.',
  }
  ```
- [ ] **SUBTASK-028-3:** Test full homepage flow
- [ ] **SUBTASK-028-4:** Verify all sections render in correct order
- [ ] **SUBTASK-028-5:** Test page load performance
- [ ] **SUBTASK-028-6:** Verify metadata in browser tab and search results preview

**Validation:**
- Complete homepage renders
- All sections display correctly
- Page loads quickly
- SEO metadata present

---

### TASK-029: Create About Us Page

**Dependencies:** [TASK-019, TASK-020, TASK-027]

**Description:** Build About Us page with firm overview, mission, values, and history.

**Context:** Corporate-focused page without individual attorney profiles.

**Subtasks:**
- [ ] **SUBTASK-029-1:** Create `src/app/(public)/about/page.tsx`
- [ ] **SUBTASK-029-2:** Add hero section with breadcrumbs
- [ ] **SUBTASK-029-3:** Add firm overview section with mission and vision
- [ ] **SUBTASK-029-4:** Create values grid (5 values with icons)
- [ ] **SUBTASK-029-5:** Add firm history section
- [ ] **SUBTASK-029-6:** Add community involvement section
- [ ] **SUBTASK-029-7:** Add CTA section at bottom
- [ ] **SUBTASK-029-8:** Add metadata for SEO
- [ ] **SUBTASK-029-9:** Include firm's Google Business description in overview
- [ ] **SUBTASK-029-10:** Test responsive layout

**Validation:**
- About page renders completely
- All sections display correctly
- Responsive design works
- SEO metadata present

---

### TASK-030: Create Practice Area Page Template

**Dependencies:** [TASK-019, TASK-020, TASK-027]

**Description:** Build reusable template component for practice area pages.

**Context:** All three practice areas follow same structure with different content.

**Subtasks:**
- [ ] **SUBTASK-030-1:** Create `src/components/practice-areas/PracticeAreaTemplate.tsx`:
  ```typescript
  import { Section, SectionTitle, CTASection } from '@/components/ui'

  interface Service {
    title: string
    description: string
  }

  interface Step {
    title: string
    description: string
  }

  interface FAQ {
    question: string
    answer: string
  }

  interface Testimonial {
    name: string
    quote: string
  }

  interface PracticeAreaTemplateProps {
    title: string
    subtitle: string
    introduction: string
    services: Service[]
    process: Step[]
    faqs: FAQ[]
    testimonials: Testimonial[]
    ctaHeadline: string
    ctaSubheading: string
  }

  export function PracticeAreaTemplate({
    title,
    subtitle,
    introduction,
    services,
    process,
    faqs,
    testimonials,
    ctaHeadline,
    ctaSubheading,
  }: PracticeAreaTemplateProps) {
    return (
      <>
        {/* Hero */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <nav className="text-sm mb-4 text-white/70">
              Home &gt; Practice Areas &gt; {title}
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{title}</h1>
            <p className="text-xl text-white/90">{subtitle}</p>
          </div>
        </section>

        {/* Introduction */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-light">{introduction}</p>
          </div>
        </Section>

        {/* Services */}
        <Section variant="gray">
          <SectionTitle>Our Expertise Covers</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-text-light">{service.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section>
          <SectionTitle>How We Handle Your Case</SectionTitle>
          <div className="max-w-3xl mx-auto space-y-6">
            {process.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-text-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section variant="gray">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-semibold text-primary cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-3 text-text-light">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section>
          <SectionTitle>Client Testimonials</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-text mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <CTASection headline={ctaHeadline} subheading={ctaSubheading} />
      </>
    )
  }
  ```
- [ ] **SUBTASK-030-2:** Test template with sample data
- [ ] **SUBTASK-030-3:** Verify all sections render correctly
- [ ] **SUBTASK-030-4:** Test responsive layout

**Validation:**
- Template component works
- All sections render
- Props can be customized
- Responsive design works

---

### TASK-031: Create Divorce & Family Law Page

**Dependencies:** [TASK-030]

**Description:** Build Divorce & Family Law practice area page using template.

**Context:** Fill template with content from PRD project_requirement.md.

**Subtasks:**
- [ ] **SUBTASK-031-1:** Create `src/app/(public)/practice-areas/divorce-family-law/page.tsx`
- [ ] **SUBTASK-031-2:** Import PracticeAreaTemplate component
- [ ] **SUBTASK-031-3:** Define services array with 7 services from PRD
- [ ] **SUBTASK-031-4:** Define process array with 5 steps
- [ ] **SUBTASK-031-5:** Define FAQs array with 8 questions
- [ ] **SUBTASK-031-6:** Define testimonials array with 3 reviews
- [ ] **SUBTASK-031-7:** Add localized Fort Wayne content
- [ ] **SUBTASK-031-8:** Add metadata for SEO targeting "Fort Wayne divorce attorney"
- [ ] **SUBTASK-031-9:** Test page renders correctly
- [ ] **SUBTASK-031-10:** Verify navigation from homepage works

**Validation:**
- Page displays all content correctly
- Responsive design works
- SEO metadata present
- Links work

---

*(Due to length constraints, I'll continue with the remaining tasks in a structured format. The pattern continues similarly for all phases.)*

---

## Remaining Tasks Summary

### Phase 4 (Continued)
- **TASK-032:** Create Personal Injury Law Page [Dependencies: TASK-030]
- **TASK-033:** Create Criminal Defense Law Page [Dependencies: TASK-030]
- **TASK-034:** Create Contact Page Structure [Dependencies: TASK-019, TASK-020]
- **TASK-035:** Add Google Maps Embed to Contact Page [Dependencies: TASK-034]

---

## Phase 5: Admin Dashboard - Core

- **TASK-036:** Create Admin Login Page [Dependencies: TASK-014, TASK-016, TASK-021]
- **TASK-037:** Create Admin Dashboard Home [Dependencies: TASK-021]
- **TASK-038:** Create Users List Page [Dependencies: TASK-021]
- **TASK-039:** Create Add User Functionality [Dependencies: TASK-038]
- **TASK-040:** Create Edit User Functionality [Dependencies: TASK-038]
- **TASK-041:** Create Delete User Functionality [Dependencies: TASK-038]
- **TASK-042:** Create User Profile Edit Page [Dependencies: TASK-021]

---

## Phase 6: Blog System - Public

- **TASK-043:** Create Blog Listing Page [Dependencies: TASK-011, TASK-019, TASK-020]
- **TASK-044:** Create Blog Post Page Template [Dependencies: TASK-011, TASK-019]
- **TASK-045:** Create Blog Pagination Component [Dependencies: TASK-043]
- **TASK-046:** Update Homepage Blog Preview to Fetch Real Data [Dependencies: TASK-026, TASK-043]
- **TASK-047:** Generate Blog Post Sitemap [Dependencies: TASK-044]

---

## Phase 7: Blog System - Admin

- **TASK-048:** Set Up Vercel Blob Storage [Dependencies: TASK-006]
- **TASK-049:** Create Image Upload API Route [Dependencies: TASK-048]
- **TASK-050:** Install and Configure Rich Text Editor [Dependencies: TASK-007, TASK-021]
- **TASK-051:** Create Blog Posts List Page [Dependencies: TASK-021]
- **TASK-052:** Create Blog Post Form Component [Dependencies: TASK-050]
- **TASK-053:** Create Add Blog Post Page [Dependencies: TASK-052]
- **TASK-054:** Create Edit Blog Post Page [Dependencies: TASK-052]
- **TASK-055:** Create Delete Blog Post Functionality [Dependencies: TASK-051]
- **TASK-056:** Add Blog Post Status Toggle [Dependencies: TASK-052]

---

## Phase 8: Contact Form & Email

- **TASK-057:** Set Up Resend Account and API Key [Dependencies: TASK-007]
- **TASK-058:** Create Contact Form Component [Dependencies: TASK-016]
- **TASK-059:** Create Contact Form Validation Schema [Dependencies: TASK-007]
- **TASK-060:** Create Contact API Route [Dependencies: TASK-057, TASK-059]
- **TASK-061:** Create Email Template with React Email [Dependencies: TASK-057]
- **TASK-062:** Integrate Contact Form with API [Dependencies: TASK-058, TASK-060]

---

## Phase 9: SEO & Analytics

- **TASK-063:** Install and Configure next-sitemap [Dependencies: TASK-028, TASK-044]
- **TASK-064:** Create robots.txt [Dependencies: TASK-001]
- **TASK-065:** Add LocalBusiness Schema Markup [Dependencies: TASK-019]
- **TASK-066:** Add Open Graph Tags [Dependencies: TASK-028]
- **TASK-067:** Set Up Google Analytics 4 [Dependencies: TASK-001]
- **TASK-068:** Add Analytics to All Pages [Dependencies: TASK-067]
- **TASK-069:** Configure Conversion Tracking [Dependencies: TASK-067, TASK-062]
- **TASK-070:** Run Lighthouse Audit and Optimize [Dependencies: All previous tasks]

---

## Phase 10: Testing & Deployment

- **TASK-071:** Cross-Browser Testing [Dependencies: All Phase 1-9 tasks]
- **TASK-072:** Mobile Responsiveness Testing [Dependencies: All Phase 1-9 tasks]
- **TASK-073:** Accessibility Testing [Dependencies: All Phase 1-9 tasks]
- **TASK-074:** Security Testing [Dependencies: All Phase 1-9 tasks]
- **TASK-075:** Performance Testing [Dependencies: TASK-070]

---

## Phase 11: Content & Launch

- **TASK-076:** Configure Custom Domain [Dependencies: TASK-006]
- **TASK-077:** Populate Production Content [Dependencies: TASK-075]
- **TASK-078:** Set Up Google Search Console [Dependencies: TASK-076]
- **TASK-079:** Production Launch [Dependencies: All previous tasks]

---

## Appendix: Quick Reference

### Critical Path Summary
1. Project Setup → Database → Auth → UI Components → Public Pages → Admin → Blog → Contact Form → SEO → Testing → Launch

### Estimated Timeline
- **Total Duration:** 25-35 days
- **Phase 1-3:** 5-7 days
- **Phase 4-7:** 12-17 days
- **Phase 8-11:** 8-11 days

### Notes for Developers
- Each task should be completed in order within its phase
- Dependencies must be resolved before starting dependent tasks
- Test thoroughly at each step before moving forward
- Commit code frequently with descriptive messages
- Document any deviations from the plan

---

**End of Implementation Plan**
