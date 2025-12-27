'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader2 } from 'lucide-react'

// Declare custom element for TypeScript
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

interface GoogleMapProps {
  center: { lat: number; lng: number }
  zoom?: number
  mapId?: string
  className?: string
  height?: string
  markerTitle?: string
}

export function GoogleMap({
  center,
  zoom = 15,
  mapId,
  className = '',
  height = '400px',
  markerTitle = 'Office Location',
}: GoogleMapProps) {
  const mapRef = useRef<HTMLElement | null>(null)
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const initAttemptedRef = useRef(false)

  // Store latest props in refs to avoid stale closures
  const centerRef = useRef(center)
  const zoomRef = useRef(zoom)
  const markerTitleRef = useRef(markerTitle)

  // Update refs when props change
  useEffect(() => {
    centerRef.current = center
    zoomRef.current = zoom
    markerTitleRef.current = markerTitle
  }, [center, zoom, markerTitle])

  useEffect(() => {
    async function initMap() {
      // Prevent multiple initialization attempts
      if (initAttemptedRef.current) {
        return
      }

      // Check if Google Maps API is loaded
      if (typeof window === 'undefined' || !window.google?.maps) {
        setError('Google Maps API not loaded')
        setIsLoading(false)
        return
      }

      try {
        initAttemptedRef.current = true

        // Request the needed libraries
        const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
          window.google.maps.importLibrary('maps') as Promise<google.maps.MapsLibrary>,
          window.google.maps.importLibrary('marker') as Promise<google.maps.MarkerLibrary>,
        ])

        // Get the gmp-map element using ref
        const mapElement = mapRef.current as HTMLElement & { innerMap?: google.maps.Map }

        if (!mapElement) {
          setError('Map element not found')
          setIsLoading(false)
          return
        }

        // Wait for innerMap to be available
        const checkInnerMap = () => {
          if (mapElement.innerMap) {
            setupMap(mapElement.innerMap, AdvancedMarkerElement)
          } else {
            // Retry after a short delay
            setTimeout(checkInnerMap, 50)
          }
        }

        checkInnerMap()
      } catch (err) {
        console.error('Error initializing Google Map:', err)
        setError('Failed to load map')
        setIsLoading(false)
      }
    }

    function setupMap(
      innerMap: google.maps.Map,
      AdvancedMarkerElement: typeof google.maps.marker.AdvancedMarkerElement
    ) {
      try {
        mapInstanceRef.current = innerMap

        // Set map options
        innerMap.setOptions({
          mapTypeControl: false,
          fullscreenControl: true,
          zoomControl: true,
          streetViewControl: false,
        })

        // Wait for map to be idle before adding marker
        google.maps.event.addListenerOnce(innerMap, 'idle', () => {
          try {
            // Remove existing marker if any
            if (markerRef.current) {
              markerRef.current.map = null
            }

            // Add a marker positioned at the map center
            // Use refs to get latest values
            markerRef.current = new AdvancedMarkerElement({
              map: innerMap,
              position: { lat: centerRef.current.lat, lng: centerRef.current.lng },
              title: markerTitleRef.current,
            })

            setIsLoading(false)
            setError(null)
          } catch (err) {
            console.error('Error adding marker:', err)
            setError('Failed to add map marker')
            setIsLoading(false)
          }
        })
      } catch (err) {
        console.error('Error setting up map:', err)
        setError('Failed to configure map')
        setIsLoading(false)
      }
    }

    initMap()

    return () => {
      // Clean up marker
      if (markerRef.current) {
        markerRef.current.map = null
        markerRef.current = null
      }
      mapInstanceRef.current = null
    }
  }, []) // Only run once on mount

  // Handle center/zoom changes after initial load
  useEffect(() => {
    if (mapInstanceRef.current && !isLoading) {
      mapInstanceRef.current.setCenter(center)
      mapInstanceRef.current.setZoom(zoom)

      // Update marker position
      if (markerRef.current) {
        markerRef.current.position = center
      }
    }
  }, [center.lat, center.lng, zoom, isLoading])

  return (
    <div className={`relative ${className}`} style={{ height }}>
      {/* @ts-expect-error - gmp-map is a custom Google Maps element */}
      <gmp-map
        ref={mapRef}
        center={`${center.lat},${center.lng}`}
        zoom={zoom.toString()}
        map-id={mapId}
        style={{ width: '100%', height: '100%' }}
        aria-label="Office location map"
        role="application"
      />

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-2" />
            <p className="text-sm text-text-light">Loading map...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <p className="text-red-600 font-semibold mb-1">{error}</p>
            <p className="text-sm text-text-light">Please try refreshing the page</p>
          </div>
        </div>
      )}
    </div>
  )
}

// Add type declarations for gmp-map element
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

  interface Window {
    google?: {
      maps?: {
        importLibrary: (library: string) => Promise<any>
        event: {
          addListenerOnce: (map: any, event: string, callback: () => void) => void
        }
      }
    }
  }
}

