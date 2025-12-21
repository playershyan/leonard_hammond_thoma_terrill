import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function SectionTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
