'use client'

import { useEffect, useRef } from 'react'

interface GoogleMapProps {
  center: { lat: number; lng: number }
  zoom?: number
  mapId?: string
  className?: string
  height?: string
}

export function GoogleMap({
  center,
  zoom = 15,
  mapId = 'DEMO_MAP_ID',
  className = '',
  height = '400px',
}: GoogleMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const markerRef = useRef<any>(null)

  useEffect(() => {
    async function initMap() {
      // Check if Google Maps API is loaded
      if (typeof window === 'undefined' || !window.google?.maps) {
        return
      }

      try {
        // Request the needed libraries
        const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
          window.google.maps.importLibrary('maps') as Promise<google.maps.MapsLibrary>,
          window.google.maps.importLibrary('marker') as Promise<google.maps.MarkerLibrary>,
        ])

        // Get the gmp-map element
        const mapElement = document.querySelector('gmp-map') as any

        if (!mapElement) {
          return
        }

        // Get the inner map
        const innerMap = mapElement.innerMap

        // Set map options
        innerMap.setOptions({
          mapTypeControl: false,
          fullscreenControl: true,
          zoomControl: true,
          streetViewControl: false,
        })

        // Wait for map to load before adding marker
        window.google.maps.event.addListenerOnce(innerMap, 'idle', () => {
          // Remove existing marker if any
          if (markerRef.current) {
            markerRef.current.map = null
          }

          // Add a marker positioned at the map center
          markerRef.current = new AdvancedMarkerElement({
            map: innerMap,
            position: { lat: center.lat, lng: center.lng },
            title: 'Law Office Location',
          })
        })
      } catch (error) {
        console.error('Error initializing Google Map:', error)
      }
    }

    // Wait a bit for the gmp-map element to be rendered
    const timer = setTimeout(() => {
      initMap()
    }, 100)

    return () => {
      clearTimeout(timer)
      // Clean up marker
      if (markerRef.current) {
        markerRef.current.map = null
      }
    }
  }, [center.lat, center.lng, zoom])

  return (
    <div className={className} style={{ height }} ref={mapContainerRef}>
      <gmp-map
        center={`${center.lat},${center.lng}`}
        zoom={zoom.toString()}
        map-id={mapId}
        style={{ width: '100%', height: '100%' }}
      />
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

