# Assets Organization Guide

This directory contains all static assets for the New Era Catalogs application.

## Directory Structure

```
public/
├── icons/              # Icons and small graphics
│   └── google-maps.png
├── file.svg           # Next.js default icons
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

## Recommended Organization

For better asset management, consider organizing your files as follows:

### Icons (`/icons/`)
- Small graphics and icons (PNG, SVG)
- Brand icons (social media, external services)
- UI icons and pictograms

### Images (`/images/`)
- Product photos
- Hero images
- Background images
- Gallery images

### Logos (`/logos/`)
- Company logo variations
- Partner logos
- Brand assets

## Usage in Next.js

### Using Images with Next.js Image Component

```tsx
import Image from 'next/image';

// From public directory
<Image
  src="/icons/google-maps.png"
  alt="Google Maps"
  width={20}
  height={20}
/>
```

### Best Practices

1. **Optimize Images**: Use WebP or modern formats when possible
2. **Use Image Component**: Always prefer Next.js Image component for automatic optimization
3. **Descriptive Names**: Use clear, descriptive filenames (e.g., `google-maps.png` not `icon1.png`)
4. **Consistent Sizing**: Keep similar assets at consistent dimensions
5. **SVG for Icons**: Use SVG for icons when possible for scalability

## Adding New Assets

1. Place assets in the appropriate subdirectory
2. Use lowercase, hyphenated filenames (e.g., `product-image.jpg`)
3. Include alt text for accessibility
4. Document any external asset sources

## External Images

The app is configured to use images from:
- `images.unsplash.com` (configured in `next.config.ts`)

To add more external domains, update `next.config.ts`:

```ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-domain.com',
    },
  ],
}
```
