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
