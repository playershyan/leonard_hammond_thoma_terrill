import { pgTable, uuid, varchar, timestamp, text, index } from 'drizzle-orm/pg-core'

// Users table
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  username: varchar('username', { length: 50 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Blog Posts table
export const blogPosts = pgTable(
  'blog_posts',
  {
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
  },
  (table) => ({
    statusIdx: index('status_idx').on(table.status),
    publishedAtIdx: index('published_at_idx').on(table.publishedAt),
    slugIdx: index('slug_idx').on(table.slug),
  })
)

// TypeScript types
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
export type BlogPost = typeof blogPosts.$inferSelect
export type NewBlogPost = typeof blogPosts.$inferInsert
