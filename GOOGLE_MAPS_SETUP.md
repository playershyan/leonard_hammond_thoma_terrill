# Google Maps Setup Guide

This guide explains how to set up Google Maps for the law firm website.

## Prerequisites

- Google Cloud Platform account
- Credit card for billing (Google offers $200/month free credit)

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter project name (e.g., "LawFirm-Website")
4. Click "Create"

## Step 2: Enable APIs

1. In the Cloud Console, go to **APIs & Services** → **Library**
2. Enable the following APIs:
   - **Maps JavaScript API** (required)
   - **Maps Embed API** (optional, for future use)
   - **Geocoding API** (optional, for address lookups)

## Step 3: Create API Key

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **API Key**
3. Copy the API key (you'll need this for `.env.local`)

### Important: Restrict Your API Key

**DO NOT SKIP THIS STEP** - Unrestricted keys can be stolen and abused.

1. Click on the API key you just created
2. Under **Application restrictions**:
   - Select **HTTP referrers (web sites)**
   - Add your domains:
     ```
     http://localhost:3000/*
     http://localhost:3001/*
     https://yourdomain.com/*
     https://www.yourdomain.com/*
     https://*.vercel.app/*
     ```
3. Under **API restrictions**:
   - Select **Restrict key**
   - Select only the APIs you enabled (Maps JavaScript API, etc.)
4. Click **Save**

## Step 4: Create a Map ID (Optional but Recommended)

Map IDs allow you to customize map styling.

1. Go to [Google Maps Platform](https://console.cloud.google.com/google/maps-apis/studio/maps)
2. Click **Create Map ID**
3. Enter:
   - **Map name**: "Law Office Map"
   - **Map type**: JavaScript
   - **Description**: "Interactive map for contact page"
4. Click **Save**
5. Copy the Map ID (looks like: `abc123def456`)

### Why use a Map ID?

- Customize map colors to match your brand
- Control which features appear (POIs, transit, etc.)
- Better performance and caching
- Required for advanced features

**Note**: The map will work without a Map ID, but you won't be able to customize styling.

## Step 5: Configure Environment Variables

Add these to your `.env.local` file:

```env
# Google Maps Configuration
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSy...your-api-key-here
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your-map-id-here  # Optional
```

## Step 6: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/contact`

3. You should see:
   - ✅ An interactive map centered on Fort Wayne, IN
   - ✅ A marker at your office location (41.0793, -85.1394)
   - ✅ Zoom and fullscreen controls

## Troubleshooting

### Map shows "Loading map..." forever

**Cause**: API key is invalid or Google Maps API is not enabled.

**Fix**:
1. Verify the API key is correct in `.env.local`
2. Check that Maps JavaScript API is enabled in Cloud Console
3. Check browser console for specific error messages

### Map shows "For development purposes only" watermark

**Cause**: Billing is not enabled on your Google Cloud project.

**Fix**:
1. Go to **Billing** in Cloud Console
2. Enable billing and add a payment method
3. Don't worry - Google offers $200/month free credit (plenty for a small site)

### Map loads but is gray/blank

**Cause**: Map ID is invalid or doesn't exist.

**Fix**:
1. Remove the `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID` from `.env.local`
2. Or create a valid Map ID following Step 4

### "RefererNotAllowedMapError"

**Cause**: Your domain is not whitelisted in API key restrictions.

**Fix**:
1. Go to **APIs & Services** → **Credentials**
2. Click your API key
3. Add your domain to **HTTP referrers**
4. Save and wait a few minutes for changes to propagate

## Customizing the Map

### Change Office Location

Edit `src/app/(public)/contact/page.tsx`:

```tsx
<GoogleMap
  center={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }}
  zoom={15}
  // ... other props
/>
```

To find your coordinates:
1. Go to [Google Maps](https://maps.google.com)
2. Right-click your office location
3. Click the coordinates to copy them

### Customize Map Styling

1. Go to [Maps Platform Styling Wizard](https://mapstyle.withgoogle.com/)
2. Customize colors to match your brand
3. Click **Export as JSON**
4. Apply styles in `GoogleMap.tsx` via `innerMap.setOptions({ styles: [...] })`

### Add Custom Marker Icon

In `GoogleMap.tsx`, modify the marker creation:

```tsx
const content = document.createElement('div')
content.innerHTML = '<img src="/marker-icon.png" alt="Office" />'

markerRef.current = new AdvancedMarkerElement({
  map: innerMap,
  position: center,
  content: content,
  title: markerTitle,
})
```

## Cost Considerations

### Pricing

- **Maps JavaScript API**: $7 per 1,000 loads
- **Free tier**: First $200/month is free
- **$200 credit** = ~28,500 map loads per month

### For a typical law firm website:
- Estimated visitors per month: 1,000
- Estimated map loads: 500 (50% visit contact page)
- **Monthly cost**: $0 (well within free tier)

### Cost-saving tips:
1. Only load map on Contact page (already implemented)
2. Use lazy loading (load map when user scrolls to it)
3. Set API key restrictions to prevent abuse

## Production Checklist

Before deploying:

- [ ] API key created and restricted to production domains
- [ ] Maps JavaScript API enabled
- [ ] Billing enabled in Google Cloud
- [ ] Map ID created (optional but recommended)
- [ ] Environment variables added to Vercel
- [ ] Test map loads correctly on production domain
- [ ] Verify marker appears at correct location
- [ ] Check mobile responsiveness
- [ ] Monitor usage in Google Cloud Console

## Support

- [Google Maps JavaScript API Documentation](https://developers.google.com/maps/documentation/javascript)
- [Maps Platform Support](https://developers.google.com/maps/support)
- [Stack Overflow - Google Maps](https://stackoverflow.com/questions/tagged/google-maps)
