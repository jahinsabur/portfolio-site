# Font Download Instructions

## Automated Setup (Recommended)

### Option 1: Direct Download Links

**Geist Font:**
```
https://vercel.com/font
```
1. Click "Download" button
2. Extract the ZIP file
3. Find `GeistVF.woff2` in the extracted folder
4. Copy to: `portfolio-site/public/fonts/GeistVF.woff2`

**Clash Display:**
```
https://www.fontshare.com/fonts/clash-display
```
1. Click "Download family" button
2. Extract the ZIP file
3. Find `ClashDisplay-Variable.woff2` in the `Fonts/WEB/` folder
4. Copy to: `portfolio-site/public/fonts/ClashDisplay-Variable.woff2`

### Option 2: Manual Directory Setup

```bash
# From portfolio-site directory
mkdir -p public/fonts
cd public/fonts

# Now manually place the downloaded font files here:
# - GeistVF.woff2
# - ClashDisplay-Variable.woff2
```

## Verify Installation

After placing fonts, your directory should look like:
```
portfolio-site/
└── public/
    └── fonts/
        ├── GeistVF.woff2
        └── ClashDisplay-Variable.woff2
```

## Enable Custom Fonts

After installing fonts, edit `app/layout.tsx`:

1. **Comment out** the fallback section (lines 7-17)
2. **Uncomment** the custom font section (lines 19-38)

The file has clear comments showing what to change.

## Test Fonts Loaded

1. Run: `npm run dev`
2. Open browser DevTools (F12)
3. Go to Network tab
4. Filter by "font"
5. Refresh page
6. You should see GeistVF.woff2 and ClashDisplay-Variable.woff2 loading

## Alternative: Skip Custom Fonts

The site works fine with system fonts! The current fallback setup uses:
- System UI fonts (similar to San Francisco, Segoe UI)
- JetBrains Mono (loaded from Google Fonts)

You'll still get the engineering aesthetic, just without the distinctive typography.

## Font Licenses

Both fonts are **free for commercial use**:
- **Geist**: SIL Open Font License 1.1
- **Clash Display**: Free for personal and commercial projects

## Troubleshooting

### Fonts not loading?
1. Check file names match exactly (case-sensitive)
2. Verify files are in `public/fonts/` directory
3. Clear browser cache
4. Check browser console for 404 errors

### Build errors?
1. Make sure you uncommented the right section in layout.tsx
2. Verify font file paths are correct
3. Try `npm run build` to see specific errors

### Still not working?
Keep using the fallback fonts - the design still looks great!
