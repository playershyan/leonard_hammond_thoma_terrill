import { db } from './client'
import { users } from './schema'
import bcrypt from 'bcryptjs'

async function seed() {
  console.log('🌱 Seeding database...')

  // Hash default password
  const passwordHash = await bcrypt.hash('admin123', 10)

  // Insert admin user
  await db.insert(users).values({
    username: 'admin',
    passwordHash,
  })

  console.log('✅ Admin user created successfully')
  console.log('   Username: admin')
  console.log('   Password: admin123')
  console.log('   ⚠️  IMPORTANT: Change password after first login!')
}

seed()
  .catch((error) => {
    console.error('❌ Seed failed:', error)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
