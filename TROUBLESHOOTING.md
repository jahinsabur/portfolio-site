# Troubleshooting Guide

## Issue: Website shows only partial content (Projects, Skills, Footer)

### Symptoms
- Only seeing: "Featured Projects", "Technical Skills", and Footer
- Hero, About, and other sections are missing
- No loading indicators

### Root Cause
The `/api/content` endpoint is failing to return data, causing all sections to return `null` and not render.

### Solution Steps

#### 1. Check if you have a database configured

You need either:
- **Upstash Redis** (recommended for Vercel)
- **Vercel KV** (also works)

Check your `.env.local` for these variables:

**Upstash Redis:**
```env
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
```

**OR Vercel KV:**
```env
KV_REST_API_URL=https://...
KV_REST_API_TOKEN=...
```

#### 2. If you DON'T have a database configured:

**Option A: Use Upstash Redis (Recommended)**

1. Go to https://upstash.com/
2. Sign up/login
3. Create a new Redis database
4. Copy the REST URL and TOKEN
5. Add to `.env.local`:
   ```env
   UPSTASH_REDIS_REST_URL=https://your-url.upstash.io
   UPSTASH_REDIS_REST_TOKEN=your-token
   ```

**Option B: Use Vercel KV**

1. Go to Vercel Dashboard
2. Your Project → Storage → Create Database → KV
3. Variables are auto-added to Vercel
4. Copy them to local `.env.local`

#### 3. Upload your content to the database

```bash
cd portfolio-site
npm run migrate-kv
```

Expected output:
```
📡 Detected Upstash Redis configuration
📤 Uploading content to Upstash Redis...
✅ Migration successful!
✅ Verification successful
```

#### 4. Deploy to Vercel

```bash
git add .
git commit -m "Fix API route with proper fallback"
git push
```

#### 5. Verify locally first

```bash
npm run dev
```

Open http://localhost:3000 and check if all sections load.

---

## Issue: "Failed to save content" in Admin Dashboard

### Solution
Same as above - you need a database configured. The file system is read-only on Vercel.

---

## Issue: Content loads locally but not on Vercel

### Check:
1. Environment variables are set in Vercel Dashboard (Settings → Environment Variables)
2. You ran the migration script
3. The database is active (check Upstash/Vercel dashboard)

### Fix:
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Verify all Redis/KV variables are present
3. Redeploy: Dashboard → Deployments → [Latest] → Redeploy

---

## Issue: Migration script fails

### Error: "No database configuration found"
- Add Redis/KV variables to `.env.local`
- Make sure you're in the `portfolio-site` directory

### Error: "data/content.json not found"
- Check that the file exists at `portfolio-site/data/content.json`
- If missing, create it with default content

### Error: "Failed to connect"
- Check your internet connection
- Verify the Redis/KV URLs are correct
- Try regenerating the tokens in Upstash/Vercel dashboard

---

## Quick Test: Check if API works

### Test locally:
```bash
curl http://localhost:3000/api/content
```

Should return JSON with hero, about, projects, etc.

### Test on Vercel:
```bash
curl https://your-site.vercel.app/api/content
```

Should return the same JSON.

If you get an error or empty `{}`, the database isn't configured properly.

---

## Emergency Fix: Bypass database temporarily

If you need the site working NOW and can't set up a database:

1. Comment out the Redis check in `app/api/content/route.ts`:
   ```typescript
   // Force file system usage
   const isProduction = false; // Change this line
   ```

2. Deploy

⚠️ **Warning:** Admin dashboard won't work with this fix. It's only for displaying content.

---

## Still having issues?

1. Check Vercel logs: Dashboard → Deployments → [Latest] → Functions
2. Look for errors in the `/api/content` function
3. Check browser console for network errors (F12 → Network tab)
4. Verify `data/content.json` has valid JSON (use a JSON validator)

---

## Working Configuration Checklist

- ☐ Database created (Upstash Redis or Vercel KV)
- ☐ Environment variables in `.env.local`
- ☐ Environment variables in Vercel Dashboard
- ☐ Migration script ran successfully
- ☐ `npm install` completed
- ☐ Code deployed to Vercel
- ☐ API endpoint returns data: `/api/content`
- ☐ Website shows all sections
- ☐ Admin dashboard can save changes
