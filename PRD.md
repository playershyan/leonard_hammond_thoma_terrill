# Product Requirements Document (PRD)
## Law Firm Website - Fort Wayne, Indiana

---

## 1. Project Overview

### 1.1 Background
This project aims to develop a professional law firm website for a small legal practice based in Fort Wayne, Indiana. The firm currently has no web presence and specializes in three core practice areas: Divorce & Family Law, Personal Injury Law, and Criminal Defense Law.

### 1.2 Business Goals
- **Primary Goal:** Generate new client leads through free consultation requests
- **Secondary Goal:** Establish credibility and authority in the Fort Wayne legal market
- **Target Audience:** Fort Wayne residents and surrounding areas seeking legal representation

### 1.3 Project Scope
- Full-featured responsive website with 6 main pages
- Admin dashboard for content management (blog posts only)
- Simple authentication system (max 3 users)
- Local SEO optimization for Fort Wayne, Indiana
- Contact form with email notifications
- Blog/resources section for content marketing

### 1.4 Success Metrics
- Contact form submissions (lead generation)
- Phone call conversions from website
- Average session duration and bounce rate
- Organic search traffic from Fort Wayne area
- Google Business Profile click-throughs

---

## 2. Core Requirements

### 2.1 Functional Requirements

#### 2.1.1 Public Website
- **FR-1:** Display static informational pages with hardcoded content
- **FR-2:** Responsive design supporting desktop, tablet, and mobile devices
- **FR-3:** Contact form with validation and email delivery to firm's email
- **FR-4:** Blog listing page with pagination (10 posts per page)
- **FR-5:** Individual blog post pages with SEO optimization
- **FR-6:** Google Maps integration on contact page
- **FR-7:** Curated Google Reviews display with link to full Google Business Profile
- **FR-8:** Call-to-action buttons throughout site (phone, consultation requests)

#### 2.1.2 Admin Dashboard
- **FR-9:** Secure admin access at `/admin` route
- **FR-10:** Username/password authentication
- **FR-11:** User management (create, edit, delete users - max 3 total)
- **FR-12:** Blog post management (create, edit, delete, publish/draft)
- **FR-13:** Blog post SEO fields (meta title, description, URL slug)
- **FR-14:** Featured image upload for blog posts
- **FR-15:** Admin users can change their own username and password

### 2.2 Non-Functional Requirements

#### 2.2.1 Performance
- **NFR-1:** Page load time under 3 seconds on 4G connection
- **NFR-2:** Core Web Vitals scores in "Good" range
- **NFR-3:** Image optimization and lazy loading
- **NFR-4:** Automatic WebP image conversion

#### 2.2.2 SEO
- **NFR-5:** Auto-generated sitemap.xml
- **NFR-6:** Proper robots.txt configuration
- **NFR-7:** LocalBusiness schema markup with Fort Wayne location
- **NFR-8:** Dynamic meta tags for all pages
- **NFR-9:** Open Graph tags for social sharing
- **NFR-10:** Localized content mentioning Fort Wayne, Indiana

#### 2.2.3 Security
- **NFR-11:** Password hashing for user accounts
- **NFR-12:** CSRF protection on forms
- **NFR-13:** SQL injection prevention
- **NFR-14:** Secure admin routes (authentication required)
- **NFR-15:** Environment variable protection for sensitive keys

#### 2.2.4 Accessibility
- **NFR-16:** WCAG 2.1 Level AA compliance
- **NFR-17:** Semantic HTML structure
- **NFR-18:** Keyboard navigation support
- **NFR-19:** Screen reader compatibility

---

## 3. Core Features

### 3.1 Public Website Features

#### 3.1.1 Homepage
**Description:** Primary landing page designed for lead generation and credibility

**Components:**
- Hero section with headline, subheading, and primary CTA
- Quick contact section (phone number, 24/7 availability messaging)
- Practice areas overview (3-column layout with icons, descriptions, "Learn More" buttons)
- "Why Choose Us" section (5 features with icons and descriptions)
- Client testimonials section (4 curated Google Reviews)
- Recent blog posts preview (3 most recent published posts)
- Final call-to-action section before footer

**Content:**
- All content hardcoded in React components
- Placeholders for firm name, contact information, specific value propositions

#### 3.1.2 Practice Area Pages (3 pages)
**Pages:** Divorce & Family Law | Personal Injury Law | Criminal Defense Law

**Shared Structure:**
- Hero section with practice area title and breadcrumb navigation
- Introduction paragraph explaining firm's approach
- Services offered within practice area (7-8 specific services)
- Process overview (5 steps from consultation to resolution)
- FAQ section (8 common questions with answers)
- "Why Choose Us" section (5 differentiators)
- Case examples/success stories (3 anonymized examples)
- Practice area-specific testimonials (3 reviews)
- Call-to-action section

**Content:**
- All content hardcoded based on project_requirement.md structure
- Fort Wayne, Indiana references in content for local SEO

#### 3.1.3 About Us Page
**Description:** Corporate overview without individual attorney profiles

**Components:**
- Hero section
- Firm overview with mission and vision statements
- Firm values (5 core values with descriptions)
- Brief firm history (founding, growth, current status)
- Recognition and achievements (bar memberships, accolades)
- Community involvement section (pro bono work, local organizations)
- Call-to-action section

**Content:**
- Impersonal, corporate-focused messaging
- Uses firm's Google Business description: "Our firm is comprised of accomplished lawyers, regularly recognized for their integrity and ability to secure results. Over the years, we have carefully constructed a team of powerful litigators that our clients can trust."

#### 3.1.4 Resources/Blog Page
**Description:** Blog listing page for content marketing and SEO

**Components:**
- Page header with title and introduction
- Blog post grid/list with pagination
- Each blog post card displays:
  - Featured image
  - Publication date
  - Title
  - Excerpt (first 150-200 characters)
  - "Read More" button
- Pagination controls (10 posts per page)

**Functionality:**
- Fetches published blog posts from database
- Orders by publication date (newest first)
- SEO-optimized URLs (e.g., `/blog/understanding-divorce-process`)

#### 3.1.5 Individual Blog Post Page
**Description:** Dynamic page for each blog post

**Components:**
- Breadcrumb navigation
- Blog post title
- Publication date and author (firm name)
- Featured image
- Full blog content (rich text with formatting)
- Related posts section (optional - 3 recent posts)
- Call-to-action section

**SEO:**
- Custom meta title and description from admin-entered SEO fields
- Auto-generated fallbacks if SEO fields not provided
- Proper heading hierarchy (H1, H2, H3)
- Image alt tags

#### 3.1.6 Contact Page
**Description:** Primary lead capture page

**Components:**
- Page header
- Office location information (address, phone, hours)
- Embedded Google Maps with office location
- Contact form
- Quick contact info prominently displayed
- Call-to-action buttons

**Contact Form Fields:**
- First Name (required)
- Last Name (required)
- Phone (required)
- Email (required)
- How can we help you? (textarea, required)
- Submit button

**Form Behavior:**
- Client-side validation
- Server-side validation
- Email sent to firm's email address via Resend
- Success message displayed after submission
- Error handling for failed submissions

### 3.2 Admin Dashboard Features

#### 3.2.1 Authentication
**Description:** Simple username/password authentication

**Features:**
- Login page at `/admin` (redirects if not authenticated)
- Username and password fields
- "Remember me" functionality (optional)
- Logout functionality
- Session management
- Password hashing (bcrypt)

**Initial Setup:**
- Default admin user created during development
- Username: `admin` (changeable)
- Password: Set during initial setup

#### 3.2.2 User Management
**Description:** Admin interface to manage up to 3 users

**Features:**
- View all users (list with username, created date)
- Create new user (username, password fields)
- Edit user (change username or password)
- Delete user (with confirmation)
- Validation: Maximum 3 users enforced
- Current user can change own credentials
- No role differentiation (all users have admin permissions)
- No activity logging

**UI:**
- Simple table view
- Action buttons (Edit, Delete)
- "Add New User" button (disabled if 3 users exist)
- Form modal or separate page for create/edit

#### 3.2.3 Blog Management
**Description:** Full CRUD interface for blog posts

**Create/Edit Blog Post Form:**
- Title (required, text input)
- URL Slug (auto-generated from title, editable)
- Featured Image (file upload, required)
- Content (rich text editor with formatting options)
- SEO Meta Title (optional, text input, max 60 chars)
- SEO Meta Description (optional, textarea, max 160 chars)
- Status (dropdown: Draft or Published)
- Save Draft button
- Publish button
- Cancel button

**Blog Post Listing:**
- Table or card view of all blog posts
- Columns: Title, Status, Created Date, Last Modified, Actions
- Filter by status (All, Published, Draft)
- Search by title
- Sort by date (newest first default)
- Action buttons: Edit, Delete (with confirmation)
- "Create New Post" button

**Rich Text Editor:**
- Basic formatting: Bold, Italic, Underline
- Headings (H2, H3, H4)
- Bulleted and numbered lists
- Links (with URL input)
- Images (inline image upload)
- Blockquotes
- Code blocks (optional)
- WYSIWYG editing experience

**Recommendations:** Use Tiptap or Lexical for rich text editing

#### 3.2.4 File Upload System
**Description:** Image upload for blog posts

**Features:**
- Upload to Vercel Blob storage
- File type validation (JPG, PNG, WebP, GIF)
- File size limit (5MB max)
- Automatic image optimization
- Preview before upload
- Delete uploaded images
- CDN delivery via Vercel

**Storage:**
- Featured images stored in Vercel Blob
- Image URLs stored in PostgreSQL database
- Proper cleanup when blog post deleted

---

## 4. Core Components

### 4.1 Shared UI Components

#### 4.1.1 Navigation Components
- **Header:** Sticky navigation with logo, menu items, phone number CTA
- **Mobile Menu:** Hamburger menu with slide-out navigation
- **Footer:** Multi-column footer with quick links, practice areas, contact info, social media, disclaimer
- **Breadcrumbs:** For internal pages (Practice Areas, Blog Posts)

#### 4.1.2 Content Components
- **Hero Section:** Reusable hero with customizable headline, subheading, background image, CTA
- **Practice Area Card:** Icon, title, description, "Learn More" button
- **Testimonial Card:** Star rating, quote, client name, practice area
- **Blog Card:** Featured image, date, title, excerpt, "Read More" link
- **FAQ Accordion:** Expandable Q&A sections
- **CTA Section:** Prominent call-to-action blocks throughout site
- **Stats/Features Grid:** Icon + title + description layout for "Why Choose Us" sections

#### 4.1.3 Form Components
- **Input Field:** Reusable text input with validation styling
- **Textarea:** Multi-line text input
- **Button:** Primary, secondary, and outline variants
- **Form Error Message:** Validation error display
- **Form Success Message:** Success notification after submission

#### 4.1.4 Admin Components
- **Admin Layout:** Sidebar navigation + main content area
- **Data Table:** Sortable, filterable table for blog posts and users
- **Form Layouts:** Consistent form styling for create/edit pages
- **Rich Text Editor:** WYSIWYG editor for blog content
- **Image Uploader:** Drag-and-drop file upload with preview
- **Status Badge:** Visual indicator for publish/draft status
- **Confirmation Modal:** Delete confirmation dialogs

### 4.2 Page Templates

#### 4.2.1 Public Pages
- **Homepage Template:** Unique hero-focused layout
- **Practice Area Template:** Reusable template for all three practice areas
- **Standard Page Template:** About Us, Contact pages
- **Blog Listing Template:** Archive/index page
- **Blog Post Template:** Individual post page

#### 4.2.2 Admin Pages
- **Login Page:** Authentication form
- **Dashboard Home:** Overview/welcome page (optional)
- **Blog List Page:** Table of all posts
- **Blog Create/Edit Page:** Form for blog post management
- **User Management Page:** User list and creation
- **User Profile Page:** Edit own credentials

---

## 5. App/User Flow

### 5.1 Public User Flows

#### 5.1.1 Primary Lead Generation Flow
```
User lands on Homepage
  → Reads practice areas or testimonials
  → Clicks "Schedule Free Consultation" CTA
  → Navigates to Contact Page
  → Fills out contact form
  → Submits form
  → Sees success message
  → Firm receives email notification
  → Firm contacts user within 24 hours
```

**Alternative Flows:**
- User clicks phone number → Direct call → Immediate contact
- User clicks "Learn More" on practice area → Reads practice area page → Clicks CTA on practice area page → Contact form

#### 5.1.2 Information Research Flow
```
User searches "Fort Wayne divorce attorney" on Google
  → Finds website in search results
  → Lands on Divorce & Family Law page
  → Reads service offerings and FAQ
  → Clicks on Blog to learn more
  → Reads blog post about divorce process
  → Builds trust through content
  → Clicks "Schedule Consultation" CTA
  → Fills out contact form
```

#### 5.1.3 Social Proof Flow
```
User lands on Homepage
  → Scrolls to testimonials section
  → Reads positive Google Reviews
  → Clicks "See more reviews on Google"
  → Redirects to Google Business Profile
  → Reads full reviews
  → Returns to website
  → Contacts firm via phone or form
```

### 5.2 Admin User Flows

#### 5.2.1 Admin Login Flow
```
Admin navigates to /admin
  → Sees login page
  → Enters username and password
  → Clicks "Login"
  → System validates credentials
    → If valid: Redirect to admin dashboard
    → If invalid: Show error message
```

#### 5.2.2 Create Blog Post Flow
```
Admin logs into dashboard
  → Navigates to "Blog Posts"
  → Clicks "Create New Post"
  → Fills out blog post form:
    - Enters title (auto-generates slug)
    - Uploads featured image
    - Writes content in rich text editor
    - Adds SEO meta title and description
    - Sets status to "Draft"
  → Clicks "Save Draft"
  → Post saved to database
  → Admin reviews post
  → Changes status to "Published"
  → Clicks "Publish"
  → Post appears on public website
```

#### 5.2.3 Edit Blog Post Flow
```
Admin navigates to "Blog Posts"
  → Sees list of all posts
  → Clicks "Edit" on desired post
  → Form loads with existing data
  → Admin makes changes
  → Clicks "Save" or "Publish"
  → Post updated in database
  → Confirmation message displayed
```

#### 5.2.4 User Management Flow
```
Admin navigates to "Users"
  → Sees list of current users (max 3)
  → Clicks "Add New User"
  → Enters username and password
  → Clicks "Create User"
  → New user added to database
  → New user can log in with credentials
```

**Edit Own Credentials:**
```
Admin navigates to "Profile" or "Settings"
  → Sees current username
  → Enters new username (optional)
  → Enters current password for verification
  → Enters new password and confirmation
  → Clicks "Update"
  → Credentials updated in database
  → Session remains active (no re-login required)
```

### 5.3 System Flows

#### 5.3.1 Contact Form Submission Flow
```
User fills out contact form
  → Clicks "Submit"
  → Client-side validation
    → If invalid: Show error messages
    → If valid: Send to API route
  → Server-side validation
    → If invalid: Return error
    → If valid: Process submission
  → Resend API called with form data
  → Email sent to firm's email address
  → Success response to client
  → User sees confirmation message
```

**Email Content:**
```
Subject: New Contact Form Submission - [Practice Area]

From: [First Name] [Last Name]
Email: [Email]
Phone: [Phone]

Message:
[How can we help you? content]

---
Submitted: [Timestamp]
```

#### 5.3.2 Blog Post Publication Flow
```
Admin publishes blog post
  → Post status changed to "Published" in database
  → Post appears in blog listing (public)
  → Post accessible via URL slug (public)
  → Sitemap.xml regenerated (Next.js revalidation)
  → Post indexed by search engines
  → Meta tags rendered for social sharing
```

---

## 6. Tech Stack

### 6.1 Frontend

#### 6.1.1 Framework & Language
- **Next.js 14+** (App Router)
  - Server-side rendering (SSR)
  - Static site generation (SSG) for static pages
  - API routes for backend functionality
  - Image optimization built-in
- **TypeScript**
  - Type safety
  - Better developer experience
  - Reduced runtime errors

#### 6.1.2 Styling
- **Tailwind CSS**
  - Utility-first CSS framework
  - Responsive design utilities
  - Custom configuration for firm branding
  - Dark mode support (optional)

**Color Palette (from requirements):**
```css
Primary: Navy Blue (#1A3A52)
Secondary: Gold/Tan (#C9A961)
Accent: Teal/Turquoise (#2B8A8A)
Text: Dark Gray (#2C3E50)
Background: White (#FFFFFF) / Light Gray (#F5F5F5)
```

#### 6.1.3 UI Component Libraries
- **Headless UI** (for accessible components like dropdowns, modals)
- **React Hook Form** (form validation and handling)
- **Zod** (schema validation)
- **Lucide Icons** or **Heroicons** (icon library)
- **Tiptap** or **Lexical** (rich text editor for admin)

### 6.2 Backend

#### 6.2.1 Database
- **PostgreSQL** (via Supabase)
  - Relational database
  - Supabase provides:
    - Managed PostgreSQL hosting
    - Free tier (500MB database, 1GB file storage)
    - Database dashboard
    - Connection pooling
  - **Migration management:** Supabase CLI or custom migration scripts

#### 6.2.2 ORM/Database Client
- **Drizzle ORM** (recommended)
  - TypeScript-first ORM
  - Type-safe queries
  - Lightweight and performant
  - Easy migrations
- **Alternative:** Prisma (heavier but more features)

#### 6.2.3 Authentication
- **Custom username/password authentication**
  - bcrypt for password hashing
  - JWT or session-based auth
  - Next.js middleware for route protection

**Libraries:**
- `bcryptjs` (password hashing)
- `jsonwebtoken` or `jose` (JWT handling)
- `iron-session` (encrypted session cookies) - recommended for simplicity

### 6.3 File Storage
- **Vercel Blob Storage**
  - Integrated with Vercel
  - CDN delivery
  - Simple API (`@vercel/blob`)
  - 5GB free tier
  - Used for blog featured images and inline images

### 6.4 Email Service
- **Resend**
  - Modern email API for developers
  - Next.js integration
  - 3,000 emails/month free tier
  - Easy setup with React Email templates

**Email Template Library:**
- **React Email** (build email templates with React components)

### 6.5 Analytics & SEO

#### 6.5.1 Analytics
- **Google Analytics 4** (GA4)
  - Page view tracking
  - Event tracking (contact form submissions, phone clicks)
  - Conversion tracking

#### 6.5.2 SEO Tools
- **next-sitemap** (auto-generate sitemap.xml)
- **next-seo** (manage meta tags and Open Graph)
- Custom schema.org JSON-LD for LocalBusiness markup

### 6.6 Deployment & Hosting

#### 6.6.1 Hosting
- **Vercel**
  - Native Next.js support
  - Automatic deployments from Git
  - Preview deployments
  - Edge functions
  - CDN for static assets
  - Free tier sufficient for small law firm site

#### 6.6.2 Domain & DNS
- Custom domain (to be provided by client)
- DNS managed through domain registrar or Vercel

#### 6.6.3 Environment Variables
Managed in Vercel dashboard:
- `DATABASE_URL` (Supabase connection string)
- `BLOB_READ_WRITE_TOKEN` (Vercel Blob)
- `RESEND_API_KEY`
- `SESSION_SECRET` (for iron-session)
- `NEXT_PUBLIC_GA_ID` (Google Analytics)
- `FIRM_EMAIL` (recipient for contact form)
- `GOOGLE_MAPS_EMBED_URL`

### 6.7 Development Tools

#### 6.7.1 Code Quality
- **ESLint** (linting)
- **Prettier** (code formatting)
- **TypeScript** (type checking)
- **Husky** (Git hooks for pre-commit checks - optional)

#### 6.7.2 Version Control
- **Git** (version control)
- **GitHub** (repository hosting)

---

## 7. Implementation Plan

### Phase 1: Project Setup & Configuration
**Duration:** 1-2 days

**Tasks:**
1. Initialize Next.js project with TypeScript and Tailwind CSS
2. Set up project structure (folders for components, pages, lib, etc.)
3. Configure Tailwind with custom color palette
4. Set up ESLint and Prettier
5. Create Git repository and initial commit
6. Set up Vercel project and link repository
7. Configure environment variables in Vercel

**Deliverables:**
- Working Next.js development environment
- Vercel deployment pipeline configured
- Project scaffolding complete

---

### Phase 2: Database Schema & Migrations
**Duration:** 1-2 days

**Tasks:**
1. Set up Supabase project
2. Design database schema (see schema below)
3. Create initial migration files
4. Set up Drizzle ORM
5. Create database connection utility
6. Test database connectivity

**Database Schema:**

**Table: `users`**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Constraint: Maximum 3 users (enforced in application logic)
```

**Table: `blog_posts`**
```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  featured_image_url TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT, -- Auto-generated from content (first 200 chars)
  meta_title VARCHAR(60),
  meta_description VARCHAR(160),
  status VARCHAR(20) DEFAULT 'draft', -- 'draft' or 'published'
  author_id UUID REFERENCES users(id) ON DELETE SET NULL,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
```

**Seed Data:**
```sql
-- Default admin user (password: 'admin123' - to be changed after first login)
INSERT INTO users (username, password_hash)
VALUES ('admin', '$2a$10$...[hashed password]');
```

**Deliverables:**
- Database schema created in Supabase
- Migration files
- Database connection established

---

### Phase 3: Authentication System
**Duration:** 2-3 days

**Tasks:**
1. Create authentication utility functions (login, logout, session management)
2. Implement password hashing with bcryptjs
3. Set up iron-session for session management
4. Create login page UI (`/admin/login`)
5. Create API route for login (`/api/auth/login`)
6. Create API route for logout (`/api/auth/logout`)
7. Create Next.js middleware to protect admin routes
8. Test authentication flow

**Key Files:**
- `/src/lib/auth.ts` (authentication utilities)
- `/src/app/admin/login/page.tsx` (login page)
- `/src/app/api/auth/login/route.ts` (login API)
- `/src/middleware.ts` (route protection)

**Deliverables:**
- Working login/logout system
- Protected admin routes
- Session management

---

### Phase 4: Public Pages (Static Content)
**Duration:** 5-7 days

**Tasks:**
1. Create shared layout component with header and footer
2. Build navigation menu (desktop + mobile)
3. Build footer component
4. Create homepage with all sections:
   - Hero section
   - Practice areas overview
   - Why choose us
   - Testimonials (hardcoded Google Reviews)
   - Blog preview section
   - CTA sections
5. Create three practice area pages:
   - Divorce & Family Law
   - Personal Injury Law
   - Criminal Defense Law
6. Create About Us page
7. Create Contact page (without form initially)
8. Add Google Maps embed to contact page
9. Implement responsive design for all pages
10. Add Fort Wayne, Indiana localized content

**Deliverables:**
- Fully functional public website with static content
- Responsive design across all devices
- SEO-optimized pages with meta tags

---

### Phase 5: Blog System (Frontend)
**Duration:** 3-4 days

**Tasks:**
1. Create blog listing page (`/blog`)
   - Fetch published posts from database
   - Display blog cards with featured images
   - Implement pagination (10 per page)
2. Create dynamic blog post page (`/blog/[slug]`)
   - Fetch individual post by slug
   - Display full content with formatting
   - Add breadcrumbs and meta tags
3. Add blog preview section to homepage
   - Fetch 3 most recent published posts
4. Implement SEO for blog posts
   - Dynamic meta tags
   - Open Graph tags
   - Schema.org Article markup
5. Style blog content with Tailwind Typography plugin
6. Test with sample blog posts

**Deliverables:**
- Working blog listing and individual post pages
- SEO-optimized blog posts
- Responsive blog design

---

### Phase 6: Admin Dashboard
**Duration:** 7-10 days

**Tasks:**

**6.1 Admin Layout & Navigation**
1. Create admin layout with sidebar navigation
2. Build navigation menu (Dashboard, Blog Posts, Users, Logout)
3. Create admin homepage/dashboard (welcome screen)

**6.2 User Management**
1. Create user list page (`/admin/users`)
2. Build user table component
3. Create "Add User" form and modal/page
4. Implement create user API route
5. Implement edit user functionality
6. Implement delete user functionality with confirmation
7. Add validation for max 3 users
8. Create "Edit Profile" page for current user to change credentials
9. Test user management flows

**6.3 Blog Management**
1. Create blog post list page (`/admin/blog`)
   - Table/grid view of all posts
   - Filter by status (all, published, draft)
   - Search by title
   - Sort by date
2. Implement delete blog post with confirmation
3. Create blog post create/edit page (`/admin/blog/new`, `/admin/blog/edit/[id]`)
4. Integrate rich text editor (Tiptap)
   - Configure toolbar (headings, bold, italic, lists, links)
   - Add image upload to editor
5. Build featured image uploader
   - Integrate Vercel Blob storage
   - Image preview
   - Validation (file type, size)
6. Auto-generate URL slug from title
7. Implement SEO fields (meta title, description)
8. Create API routes for blog CRUD:
   - POST `/api/blog` (create)
   - GET `/api/blog` (list)
   - GET `/api/blog/[id]` (read)
   - PUT `/api/blog/[id]` (update)
   - DELETE `/api/blog/[id]` (delete)
9. Add status toggle (draft/published)
10. Test blog management flows

**6.4 File Upload System**
1. Set up Vercel Blob integration
2. Create image upload API route (`/api/upload`)
3. Implement client-side upload component
4. Add image optimization and validation
5. Handle file deletion when blog post deleted

**Deliverables:**
- Fully functional admin dashboard
- User management system (max 3 users)
- Complete blog post CRUD interface
- Rich text editor with image upload
- File storage system

---

### Phase 7: Contact Form
**Duration:** 2-3 days

**Tasks:**
1. Build contact form UI on contact page
2. Implement form validation with React Hook Form + Zod
3. Create contact form API route (`/api/contact`)
4. Integrate Resend API
5. Create email template with React Email
6. Test email delivery
7. Add success/error messages
8. Track form submissions as events in GA4 (if set up)
9. Test form on mobile devices

**Email Template Content:**
```
Subject: New Contact Inquiry - [Law Firm Name]

New Contact Form Submission

Name: [First Name] [Last Name]
Email: [Email]
Phone: [Phone]

Message:
[How can we help you?]

---
Submitted: [Date and Time]
Source: Website Contact Form
```

**Deliverables:**
- Working contact form with validation
- Email notifications to firm
- Mobile-responsive form

---

### Phase 8: SEO Optimization
**Duration:** 2-3 days

**Tasks:**
1. Install and configure `next-sitemap`
2. Generate sitemap.xml including all static pages and blog posts
3. Create robots.txt
4. Implement LocalBusiness schema markup
   - Add Fort Wayne address, phone, hours
   - Include practice areas in schema
5. Add Open Graph tags to all pages
6. Optimize meta descriptions for all static pages
7. Add structured data for blog posts (Article schema)
8. Implement Google Analytics 4
   - Add GA tracking code
   - Set up conversion tracking for contact form
   - Track phone number clicks as events
9. Test meta tags with social media debuggers (Facebook, Twitter)
10. Run Lighthouse audit and optimize scores
11. Test Core Web Vitals

**Schema.org Example:**
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "[Law Firm Name]",
  "image": "[Logo URL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "Fort Wayne",
    "addressRegion": "IN",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "telephone": "[Phone Number]",
  "url": "[Website URL]",
  "areaServed": {
    "@type": "City",
    "name": "Fort Wayne"
  },
  "serviceType": ["Divorce & Family Law", "Personal Injury Law", "Criminal Defense Law"]
}
```

**Deliverables:**
- Auto-generated sitemap
- Schema.org markup
- Google Analytics integration
- Optimized meta tags
- High Lighthouse scores

---

### Phase 9: Testing & Deployment
**Duration:** 3-4 days

**Tasks:**

**9.1 Testing**
1. Cross-browser testing (Chrome, Firefox, Safari, Edge)
2. Mobile responsiveness testing (iOS, Android)
3. Form validation testing
4. Authentication testing (login, logout, session expiry)
5. Blog CRUD testing
6. User management testing
7. Image upload testing
8. Email delivery testing
9. Accessibility testing (keyboard navigation, screen readers)
10. Performance testing (Lighthouse, Core Web Vitals)
11. SEO validation (meta tags, schema, sitemap)

**9.2 Content Population**
1. Replace all placeholder content with actual firm details:
   - Firm name
   - Address
   - Phone number
   - Email
   - Hours of operation
   - Google Business Profile URL
   - Curated Google Reviews
2. Finalize all static page content
3. Create 3-5 initial blog posts
4. Add high-quality images (hero images, practice area images)

**9.3 Final Configuration**
1. Set up custom domain in Vercel
2. Configure DNS records
3. Enable HTTPS/SSL certificate
4. Set up Vercel production environment variables
5. Test production deployment
6. Set up Google Search Console
7. Submit sitemap to Google
8. Verify Google Business Profile integration

**9.4 Launch**
1. Final QA checklist
2. Deploy to production
3. Monitor for errors
4. Set up error tracking (optional: Sentry)
5. Create admin user credentials and share with client
6. Provide documentation for admin dashboard usage

**Deliverables:**
- Production-ready website
- Custom domain configured
- SSL certificate active
- Admin credentials provided
- User documentation

---

### Phase 10: Post-Launch (Optional)
**Duration:** Ongoing

**Tasks:**
1. Monitor Google Analytics for traffic and conversions
2. Monitor contact form submissions
3. Regular content updates (blog posts)
4. Monthly performance reviews
5. SEO optimization based on search console data
6. Bug fixes and minor enhancements

**Recommended Content Schedule:**
- 1-2 blog posts per month
- Quarterly review of testimonials (update with new Google Reviews)
- Annual review of practice area content

---

## 8. Additional Considerations

### 8.1 Content Guidelines

**Tone & Voice:**
- Professional yet approachable
- Empathetic and understanding of client challenges
- Confident and authoritative
- Clear, jargon-free language

**Fort Wayne Local SEO:**
- Mention "Fort Wayne" and "Indiana" naturally in content
- Reference local landmarks or areas served (if applicable)
- Include geographic keywords in blog posts where relevant
- Optimize for local search terms (e.g., "Fort Wayne divorce attorney")

### 8.2 Accessibility Standards

**WCAG 2.1 Level AA Compliance:**
- Color contrast ratios of at least 4.5:1 for normal text
- All images have descriptive alt text
- Forms have proper labels and error messages
- Keyboard navigation works throughout site
- Focus indicators visible on interactive elements
- Proper heading hierarchy (no skipped levels)

### 8.3 Performance Targets

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Page Load:**
- Homepage: < 3s on 4G
- Blog posts: < 3s on 4G

**Optimization Techniques:**
- Next.js Image component for automatic optimization
- Lazy loading for images below fold
- Code splitting with dynamic imports
- Minimize JavaScript bundle size
- Tailwind CSS purging for minimal CSS

### 8.4 Security Best Practices

**Application Security:**
- Password hashing with bcrypt (cost factor: 10)
- CSRF protection on forms
- SQL injection prevention via ORM
- XSS prevention (sanitize user input)
- Rate limiting on API routes (contact form, login)
- Secure session management (httpOnly cookies)
- Environment variables properly configured

**Data Protection:**
- No sensitive data stored in client-side code
- Secure database connection strings
- Regular backups of database (Supabase automatic backups)

### 8.5 Browser Support

**Supported Browsers:**
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 8+)

### 8.6 Future Enhancements (Out of Scope)

**Potential Future Features:**
- Online appointment scheduling integration
- Client portal for case updates
- Live chat widget (Intercom, Crisp)
- Multilingual support (Spanish)
- Attorney individual profiles/bio pages
- Case results database with filtering
- Downloadable legal guides with email capture
- Newsletter subscription
- Advanced analytics dashboard for admin
- A/B testing for conversion optimization

---

## 9. Success Criteria

### 9.1 Launch Criteria

The website is considered ready for launch when:

1. All 6 main pages are complete and functional
2. Admin dashboard allows full blog and user management
3. Contact form successfully sends emails
4. Blog system supports creating, editing, and publishing posts
5. Website is responsive on desktop, tablet, and mobile
6. Lighthouse scores: Performance > 90, Accessibility > 95, Best Practices > 90, SEO > 95
7. All meta tags and schema markup implemented
8. Google Analytics tracking verified
9. Custom domain configured with SSL
10. Cross-browser testing passed
11. No critical bugs or accessibility issues

### 9.2 Post-Launch Metrics (First 3 Months)

**Lead Generation:**
- Target: 10-20 contact form submissions per month
- Target: 5-10 phone calls per month attributed to website

**Traffic:**
- Target: 500-1000 monthly visitors
- Target: 50%+ traffic from organic search
- Target: Fort Wayne area traffic > 70%

**Engagement:**
- Target: Average session duration > 2 minutes
- Target: Bounce rate < 60%
- Target: Pages per session > 2.5

**SEO:**
- Target: Ranking on page 1 for "[practice area] Fort Wayne" keywords within 3 months
- Target: Google Business Profile clicks to website increase by 30%

**Technical:**
- Target: 99.9% uptime
- Target: Page load time < 3 seconds
- Target: Core Web Vitals in "Good" range

---

## 10. Roles & Responsibilities

### 10.1 Development Team
- Full-stack development (frontend + backend)
- Database design and migrations
- API development
- Authentication implementation
- Admin dashboard development
- SEO implementation
- Testing and QA
- Deployment and DevOps

### 10.2 Law Firm (Client)
- Provide firm details (name, address, phone, email, hours)
- Provide Google Business Profile URL
- Select curated Google Reviews for homepage
- Review and approve content
- Provide high-quality images (office photos, stock images for practice areas)
- Provide domain name (if not already registered)
- Test admin dashboard and provide feedback
- Create initial blog posts after training

### 10.3 Post-Launch
- **Development Team:** Bug fixes, minor enhancements, technical support
- **Law Firm:** Content updates via admin dashboard, blog post creation, responding to leads

---

## Appendix A: File Structure

```
law-firm-website/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-home.jpg
│   │   ├── practice-areas/
│   │   └── icons/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx (homepage)
│   │   │   ├── about/
│   │   │   ├── practice-areas/
│   │   │   │   ├── divorce-family-law/
│   │   │   │   ├── personal-injury/
│   │   │   │   └── criminal-defense/
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx (listing)
│   │   │   │   └── [slug]/page.tsx
│   │   │   └── contact/
│   │   ├── admin/
│   │   │   ├── layout.tsx
│   │   │   ├── login/
│   │   │   ├── dashboard/
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx (list)
│   │   │   │   ├── new/
│   │   │   │   └── edit/[id]/
│   │   │   └── users/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login/route.ts
│   │   │   │   └── logout/route.ts
│   │   │   ├── blog/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/route.ts
│   │   │   ├── users/route.ts
│   │   │   ├── upload/route.ts
│   │   │   └── contact/route.ts
│   │   ├── layout.tsx (root)
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   └── Modal.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── PracticeAreas.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── BlogPreview.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   └── Pagination.tsx
│   │   ├── admin/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── DataTable.tsx
│   │   │   ├── RichTextEditor.tsx
│   │   │   └── ImageUpload.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── db/
│   │   │   ├── schema.ts (Drizzle schema)
│   │   │   ├── client.ts (DB connection)
│   │   │   └── migrations/
│   │   ├── auth.ts (authentication utilities)
│   │   ├── validations.ts (Zod schemas)
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── .env.local
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Appendix B: Environment Variables

```bash
# Database
DATABASE_URL="postgresql://..."

# Vercel Blob
BLOB_READ_WRITE_TOKEN="vercel_blob_..."

# Resend
RESEND_API_KEY="re_..."

# Authentication
SESSION_SECRET="random_secure_string_here"

# Firm Configuration
FIRM_EMAIL="contact@lawfirm.com"

# Google Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL="https://www.google.com/maps/embed?pb=..."
```

---

## Appendix C: API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Blog Posts
- `GET /api/blog` - Get all blog posts (admin)
- `GET /api/blog?status=published` - Get published posts (public)
- `POST /api/blog` - Create blog post
- `GET /api/blog/[id]` - Get single blog post
- `PUT /api/blog/[id]` - Update blog post
- `DELETE /api/blog/[id]` - Delete blog post

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create user (max 3 validation)
- `PUT /api/users/[id]` - Update user
- `DELETE /api/users/[id]` - Delete user

### File Upload
- `POST /api/upload` - Upload image to Vercel Blob

### Contact
- `POST /api/contact` - Submit contact form

---

## Document Version
- **Version:** 1.0
- **Last Updated:** December 21, 2025
- **Status:** Final - Ready for Development

---

**End of PRD**
