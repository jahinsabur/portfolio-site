# Design System - Engineering Portfolio

## Overview
This portfolio uses a distinctive engineering-inspired aesthetic that breaks away from generic AI patterns. The design draws inspiration from oscilloscopes, circuit boards, and technical documentation.

## Color Palette

### Primary (Orange/Amber - Engineering Warning Color)
- Used for CTAs, accents, and interactive elements
- Evokes technical equipment, warning labels, and engineering tools
- `primary-600`: #f0730b (main)
- `primary-700`: #e15706 (hover)

### Accent (Teal - Circuit Board Green)
- Secondary accent inspired by PCB solder mask
- Used for highlights and secondary elements
- `accent-500`: #14b8a6
- `accent-600`: #0d9488

### Neutrals (Slate)
- Professional, technical gray scale
- Dark mode optimized

## Typography

### Font Stack
1. **Geist Sans** (Primary) - Modern, technical sans-serif
   - Download: https://vercel.com/font
   - Place in: `public/fonts/GeistVF.woff2`
   - Fallback: system-ui, sans-serif

2. **Clash Display** (Headings) - Bold, distinctive display font
   - Download: https://www.fontshare.com/fonts/clash-display
   - Place in: `public/fonts/ClashDisplay-Variable.woff2`
   - Fallback: system-ui, sans-serif

3. **JetBrains Mono** (Code/Technical) - Monospace for technical elements
   - Loaded via Google Fonts
   - Used for: badges, technical labels, code snippets

### Usage
- **Headings**: Clash Display (font-display)
- **Body**: Geist Sans (font-sans)
- **Technical**: JetBrains Mono (font-mono)

## Design Elements

### Grid Background
- Engineering blueprint aesthetic
- 40px × 40px grid pattern
- Subtle, non-intrusive

### Circuit Lines
- Horizontal accent lines inspired by circuit traces
- Animated scan effects on hover
- Gradient glows for depth

### Cards
- Frosted glass effect (backdrop-blur)
- 2px borders for technical feel
- Hover animations with light sweep effect
- Lift on hover (-translate-y-1)

### Buttons
- Monospace uppercase text
- Letter-spacing for technical aesthetic
- Glow effects on primary buttons
- Border emphasis

### Badges/Tags
- Monospace font
- Uppercase with wide tracking
- Gradient backgrounds
- Border outlines

## Animations

### Micro-interactions
- `hover:scale-105` - Subtle scale on interactive elements
- `animate-pulse-slow` - Slow pulse for background elements
- `animate-scan` - Oscilloscope-style scanning line
- `animate-glow` - Pulsing glow effect

### Page Load
- Staggered reveals with animation-delay
- Fade-in + slide-up combinations
- 0.8s duration for smooth entrance

## Avoiding AI Slop

### What We DON'T Use
- ❌ Inter font
- ❌ Poppins font
- ❌ Generic blue gradients
- ❌ Purple on white
- ❌ Rounded-full everywhere
- ❌ Soft, timid colors

### What We DO Use
- ✅ Distinctive font pairings
- ✅ Bold orange/teal color scheme
- ✅ Technical, engineering-inspired elements
- ✅ Monospace for technical content
- ✅ Sharp, purposeful design choices
- ✅ Grid patterns and circuit aesthetics

## Implementation Notes

### Font Installation
1. Download Geist from Vercel: https://vercel.com/font
2. Download Clash Display from Fontshare: https://www.fontshare.com/fonts/clash-display
3. Place variable font files in `public/fonts/`
4. Fonts are loaded via `next/font/local` in layout.tsx

### Fallback Strategy
If custom fonts fail to load:
- Geist → system-ui → sans-serif
- Clash Display → system-ui → sans-serif
- JetBrains Mono → Consolas → monospace

### Dark Mode
- Optimized for both light and dark themes
- Dark mode uses deeper blacks (#0a0e1a)
- Increased contrast for readability
- Adjusted opacity for glass effects

## Customization

To maintain the distinctive aesthetic:
1. Keep the orange/teal color scheme
2. Use monospace for technical elements
3. Maintain grid backgrounds
4. Keep circuit-inspired line elements
5. Use uppercase + tracking for labels
6. Preserve the engineering theme

## Browser Support
- Modern browsers with CSS Grid support
- Backdrop-filter for frosted glass
- CSS custom properties for theming
- Fallbacks provided for older browsers
