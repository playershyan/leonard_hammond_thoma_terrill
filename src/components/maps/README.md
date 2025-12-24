# Google Maps Components

This directory contains React components for integrating Google Maps into the application.

## Components

### GoogleMapsScript

Loads the Google Maps JavaScript API. Must be included once in your app layout.

**Usage:**

```tsx
// In app/layout.tsx
import { GoogleMapsScript } from '@/components/maps'

export default function RootLayout({ children }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  return (
    <html>
      <head>
        {apiKey && <GoogleMapsScript apiKey={apiKey} />}
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### GoogleMap

Interactive map component with a marker.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `center` | `{ lat: number, lng: number }` | **Required** | Map center coordinates |
| `zoom` | `number` | `15` | Initial zoom level (0-20) |
| `mapId` | `string` | `undefined` | Google Maps Map ID (optional) |
| `className` | `string` | `''` | Additional CSS classes |
| `height` | `string` | `'400px'` | Map container height |
| `markerTitle` | `string` | `'Office Location'` | Marker hover tooltip |

**Features:**

- ✅ Automatic loading/error states
- ✅ Responsive design
- ✅ Accessibility (ARIA labels)
- ✅ Custom marker at specified location
- ✅ Configurable map controls
- ✅ Dynamic center/zoom updates
- ✅ Proper cleanup on unmount

**Usage:**

```tsx
import { GoogleMap } from '@/components/maps'

export default function ContactPage() {
  return (
    <GoogleMap
      center={{ lat: 41.0793, lng: -85.1394 }}
      zoom={15}
      mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
      height="400px"
      markerTitle="Our Law Office"
    />
  )
}
```

### LazyGoogleMap

Same as `GoogleMap` but only loads when the map enters the viewport. Use this for better performance.

**Additional Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loadingPlaceholder` | `React.ReactNode` | Default placeholder | Custom placeholder before map loads |

**Usage:**

```tsx
import { LazyGoogleMap } from '@/components/maps'

export default function ContactPage() {
  return (
    <LazyGoogleMap
      center={{ lat: 41.0793, lng: -85.1394 }}
      zoom={15}
      mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
      height="400px"
      markerTitle="Our Law Office"
    />
  )
}
```

## Setup

See [GOOGLE_MAPS_SETUP.md](../../../GOOGLE_MAPS_SETUP.md) for detailed setup instructions.

**Quick Start:**

1. Create a Google Cloud project
2. Enable Maps JavaScript API
3. Create an API key (and restrict it!)
4. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key
   NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your-map-id  # Optional
   ```

## Performance

### Bundle Size

- **GoogleMapsScript**: ~1 KB (inline script)
- **GoogleMap**: ~3 KB (component code)
- **Google Maps API**: ~250 KB (loaded from Google CDN)

### Optimization Tips

1. **Use LazyGoogleMap** for maps below the fold
2. **Limit map instances** - one per page max
3. **Set API restrictions** to prevent abuse
4. **Monitor usage** in Google Cloud Console

### Loading Strategy

The Maps API is loaded using:
- `next/script` with `afterInteractive` strategy
- Deferred initialization until API is ready
- Automatic retry for `innerMap` availability

## Customization

### Change Map Controls

Edit `GoogleMap.tsx`:

```tsx
innerMap.setOptions({
  mapTypeControl: true,      // Show map/satellite toggle
  fullscreenControl: true,   // Show fullscreen button
  zoomControl: true,         // Show zoom buttons
  streetViewControl: true,   // Show street view pegman
  rotateControl: false,      // Hide rotation control
})
```

### Custom Marker

Replace the default marker:

```tsx
// Create custom HTML marker
const content = document.createElement('div')
content.className = 'custom-marker'
content.innerHTML = `
  <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
    <svg>...</svg>
  </div>
`

new AdvancedMarkerElement({
  map: innerMap,
  position: center,
  content: content,
  title: markerTitle,
})
```

### Custom Styling

1. Create a Map ID in Google Cloud Console
2. Customize styling in [Maps Styling Wizard](https://mapstyle.withgoogle.com/)
3. Export JSON and apply:

```tsx
innerMap.setOptions({
  styles: [ /* Your custom styles */ ]
})
```

## Troubleshooting

### Map not showing

1. Check browser console for errors
2. Verify `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set
3. Confirm Maps JavaScript API is enabled
4. Check API key restrictions

### "For development purposes only" watermark

Enable billing in Google Cloud Console (Google offers $200/month free credit).

### Multiple maps on same page

Each `GoogleMap` instance is isolated using refs. You can safely render multiple maps.

## Browser Support

- Chrome: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE11: ❌ Not supported (uses modern APIs)

## TypeScript

Full TypeScript support with proper types for:
- Google Maps API
- Component props
- Event handlers
- Custom elements (`gmp-map`)

## Accessibility

- ARIA labels for screen readers
- Keyboard navigation support (native to Google Maps)
- Focus management
- High contrast mode compatible

## License

These components are part of the law firm website project.
Google Maps API usage is subject to [Google Maps Platform Terms of Service](https://cloud.google.com/maps-platform/terms).
