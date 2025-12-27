// Global type declarations

import 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gmp-map': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          center?: string
          zoom?: string
          'map-id'?: string
        },
        HTMLElement
      >
    }
  }
}

export {}
