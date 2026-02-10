# Font Setup Guide

## Required Fonts

This portfolio uses custom fonts for a distinctive look. Follow these steps to set them up:

### 1. Geist Sans (Primary Font)

**Download:**
- Visit: https://vercel.com/font
- Download the Geist font package
- Extract `GeistVF.woff2` (variable font)

**Installation:**
```bash
# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Place the file at:
public/fonts/GeistVF.woff2
```

### 2. Clash Display (Display/Heading Font)

**Download:**
- Visit: https://www.fontshare.com/fonts/clash-display
- Click "Download family"
- Extract the variable font: `ClashDisplay-Variable.woff2`

**Installation:**
```bash
# Place the file at:
public/fonts/ClashDisplay-Variable.woff2
```

### 3. JetBrains Mono (Monospace - Auto-loaded)

This font is loaded automatically via Google Fonts. No manual installation needed.

## Verification

After placing the fonts, your `public/fonts/` directory should contain:
```
public/fonts/
├── GeistVF.woff2
└── ClashDisplay-Variable.woff2
```

## Fallback Fonts

If you don't install the custom fonts, the site will automatically fall back to:
- **Geist** → system-ui → sans-serif
- **Clash Display** → system-ui → sans-serif
- **JetBrains Mono** → Consolas → monospace

The site will still work, but won't have the distinctive typography.

## Alternative: Use System Fonts

If you prefer to skip custom fonts, you can modify `app/layout.tsx`:

```typescript
// Replace the localFont imports with:
const geistSans = {
  variable: '--font-geist',
  className: 'font-sans',
};

const clashDisplay = {
  variable: '--font-clash',
  className: 'font-sans',
};
```

Then update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['system-ui', 'sans-serif'],
  display: ['system-ui', 'sans-serif'],
  mono: ['Consolas', 'monospace'],
},
```

## License Information

- **Geist**: SIL Open Font License - Free for commercial use
- **Clash Display**: Free for personal and commercial use
- **JetBrains Mono**: SIL Open Font License - Free for commercial use

All fonts are properly licensed for use in this portfolio.
