# How to Change the Favicon

## Quick Guide

The favicon is located at:
```
portfolio-site/app/favicon.ico
```

## Steps to Change:

1. **Prepare your favicon file:**
   - Create or download a `.ico` file (16x16 or 32x32 pixels recommended)
   - You can also use `.png`, `.svg`, or other image formats

2. **Replace the file:**
   - Simply replace `portfolio-site/app/favicon.ico` with your new favicon
   - Keep the same filename: `favicon.ico`

3. **Alternative: Use different formats**
   - If you want to use PNG or SVG, you can add metadata in `app/layout.tsx`:
   ```tsx
   export const metadata = {
     icons: {
       icon: '/favicon.png',
       apple: '/apple-icon.png',
     },
   }
   ```

4. **Clear browser cache:**
   - After replacing, clear your browser cache or do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
   - Favicons are heavily cached by browsers

## Online Tools to Create Favicons:
- https://favicon.io/
- https://realfavicongenerator.net/
- https://www.favicon-generator.org/

## Current Location:
```
portfolio-site/
  └── app/
      └── favicon.ico  ← Replace this file
```
