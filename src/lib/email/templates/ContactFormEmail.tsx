import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
} from '@react-email/components'

interface ContactFormEmailProps {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export function ContactFormEmail({
  name,
  email,
  phone,
  subject,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>

          <Text style={text}>
            You have received a new message from your law firm website contact form.
          </Text>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>From:</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>
          </Section>

          {phone && (
            <Section style={section}>
              <Text style={label}>Phone:</Text>
              <Text style={value}>
                <Link href={`tel:${phone}`} style={link}>
                  {phone}
                </Link>
              </Text>
            </Section>
          )}

          <Section style={section}>
            <Text style={label}>Subject:</Text>
            <Text style={value}>{subject}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            This email was sent from the contact form on lhttlaw.com
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#f5f5f5',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
}

const h1 = {
  color: '#1a3a52',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 20px',
  padding: '0',
}

const text = {
  color: '#2c3e50',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 20px',
}

const section = {
  margin: '20px 0',
}

const label = {
  color: '#606d7e',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 0 5px',
  textTransform: 'uppercase' as const,
}

const value = {
  color: '#2c3e50',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
}

const messageText = {
  color: '#2c3e50',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
  backgroundColor: '#f5f5f5',
  padding: '20px',
  borderRadius: '8px',
}

const link = {
  color: '#1a3a52',
  textDecoration: 'underline',
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
}

const footer = {
  color: '#606d7e',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '20px 0 0',
  textAlign: 'center' as const,
}

export default ContactFormEmail
