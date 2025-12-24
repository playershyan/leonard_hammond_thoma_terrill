'use client'

import { useState, useEffect, useRef } from 'react'
import { GoogleMap } from './GoogleMap'
import { MapPin } from 'lucide-react'

interface LazyGoogleMapProps {
  center: { lat: number; lng: number }
  zoom?: number
  mapId?: string
  className?: string
  height?: string
  markerTitle?: string
  loadingPlaceholder?: React.ReactNode
}

/**
 * LazyGoogleMap - Loads the map only when it's visible in the viewport
 *
 * This improves initial page load performance by deferring map initialization
 * until the user scrolls to the map section.
 */
export function LazyGoogleMap({
  center,
  zoom = 15,
  mapId,
  className = '',
  height = '400px',
  markerTitle = 'Office Location',
  loadingPlaceholder,
}: LazyGoogleMapProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            // Stop observing once we've loaded
            observer.disconnect()
          }
        })
      },
      {
        // Load when map is 200px away from viewport
        rootMargin: '200px',
      }
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const defaultPlaceholder = (
    <div className="w-full bg-gray-200 flex items-center justify-center text-text-light">
      <div className="text-center">
        <MapPin className="w-12 h-12 mx-auto mb-2 text-primary opacity-50" />
        <p className="text-sm">Map will load when visible</p>
      </div>
    </div>
  )

  return (
    <div ref={observerRef} className={className} style={{ height }}>
      {shouldLoad ? (
        <GoogleMap
          center={center}
          zoom={zoom}
          mapId={mapId}
          height={height}
          markerTitle={markerTitle}
        />
      ) : (
        loadingPlaceholder || defaultPlaceholder
      )}
    </div>
  )
}
