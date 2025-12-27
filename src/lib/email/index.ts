import { Resend } from 'resend'

// Initialize Resend with API key (with fallback for build time)
// The API key will be validated at runtime when emails are actually sent
export const resend = new Resend(process.env.RESEND_API_KEY || 'build-time-placeholder')

// Email configuration
export const EMAIL_CONFIG = {
  from: 'Leonard Hammond Thoma & Terrill <noreply@lhttlaw.com>',
  to: process.env.FIRM_EMAIL || 'contact@lhttlaw.com',
  replyTo: process.env.FIRM_EMAIL || 'contact@lhttlaw.com',
}
