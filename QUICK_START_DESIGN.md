# Quick Start - New Design System

## 🎨 What Just Happened?

Your portfolio got a **complete design overhaul** with an engineering-inspired aesthetic that breaks away from generic AI patterns.

## ⚡ Quick Start (3 Steps)

### 1. Install Dependencies (if needed)
```bash
cd portfolio-site
npm install
```

### 2. Download Custom Fonts (Optional but Recommended)

**Geist Sans:**
- Visit: https://vercel.com/font
- Download and extract `GeistVF.woff2`
- Place in: `public/fonts/GeistVF.woff2`

**Clash Display:**
- Visit: https://www.fontshare.com/fonts/clash-display
- Download and extract `ClashDisplay-Variable.woff2`
- Place in: `public/fonts/ClashDisplay-Variable.woff2`

**After installing fonts**, uncomment the font code in `app/layout.tsx` (see comments in file).

### 3. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## 🎯 What's New?

### Colors
- **Orange** (#f0730b): Primary actions, engineering warning color
- **Teal** (#14b8a6): Accents, PCB green
- **Slate**: Professional grays

### Fonts
- **Geist Sans**: Body text (modern, technical)
- **Clash Display**: Headings (bold, distinctive)
- **JetBrains Mono**: Technical elements (monospace)

### Visual Style
- Grid backgrounds (engineering blueprints)
- Circuit-inspired lines and accents
- Oscilloscope-style animations
- Glass morphism effects
- Technical badges and labels

## 📱 Test Checklist

- [ ] Light mode looks good
- [ ] Dark mode looks good
- [ ] Mobile responsive
- [ ] Animations smooth
- [ ] Fonts loaded correctly
- [ ] All sections visible

## 🔧 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { ... }, // Change orange
  accent: { ... },  // Change teal
}
```

### Adjust Animations
Edit `app/globals.css`:
```css
@layer components {
  /* Modify animation speeds, effects */
}
```

### Update Content
Edit `data/content.json` or use the admin panel at `/admin/login`

## 📚 Documentation

- **DESIGN_CHANGES.md**: Complete overview of changes
- **DESIGN_SYSTEM.md**: Full design system documentation
- **FONT_SETUP.md**: Detailed font installation guide

## 🚀 Deploy

The design works with your existing deployment setup:
```bash
npm run build
npm start
```

## ⚠️ Known Issues

### Fonts Not Loading?
- Check `public/fonts/` directory exists
- Verify font files are named correctly
- See FONT_SETUP.md for troubleshooting

### Animations Laggy?
- Reduce backdrop-blur usage
- Disable some animations in globals.css
- Check browser compatibility

### Colors Look Off?
- Verify dark mode is working
- Check CSS custom properties
- Clear browser cache

## 🎨 Design Philosophy

This design avoids:
- ❌ Generic Inter/Poppins fonts
- ❌ Overused blue gradients
- ❌ Soft, timid aesthetics
- ❌ Cookie-cutter layouts

Instead, it embraces:
- ✅ Distinctive typography
- ✅ Bold engineering colors
- ✅ Technical precision
- ✅ Purposeful design choices

## 💡 Tips

1. **Dark Mode First**: Design looks best in dark mode
2. **Mobile Testing**: Always test on real devices
3. **Performance**: Monitor animation performance
4. **Accessibility**: Maintain color contrast ratios
5. **Consistency**: Use design system components

## 🆘 Need Help?

1. Check documentation files in this directory
2. Review Tailwind config for customization
3. Inspect browser console for errors
4. Test with fallback fonts first

---

**Enjoy your new distinctive, engineering-inspired portfolio! 🚀**
