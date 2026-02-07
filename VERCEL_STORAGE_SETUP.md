# Fix "Failed to save content" Error on Vercel

## Problem
Vercel's serverless environment has a **read-only file system**. You cannot write to files using `fs.writeFileSync()`.

## Solutions

### Option 1: Vercel KV (Redis) - RECOMMENDED ✅
Fastest and easiest solution for storing JSON data.

#### Setup Steps:

1. **Install Vercel KV package:**
```bash
cd portfolio-site
npm install @vercel/kv
```

2. **Add KV Storage in Vercel Dashboard:**
   - Go to your project on Vercel
   - Navigate to "Storage" tab
   - Click "Create Database"
   - Select "KV" (Redis)
   - Name it (e.g., "portfolio-content")
   - Click "Create"
   - Copy the environment variables automatically added to your project

3. **Environment variables are auto-added:**
   - `KV_URL`
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
   - `KV_REST_API_READ_ONLY_TOKEN`

4. **Update your local `.env.local`:**
   - Copy the KV variables from Vercel dashboard to your local `.env.local`

5. **Deploy the updated code** (I'll create it below)

---

### Option 2: Vercel Postgres
Better for complex data relationships.

#### Setup Steps:

1. **Install package:**
```bash
npm install @vercel/postgres
```

2. **Create Postgres database in Vercel Dashboard:**
   - Storage → Create Database → Postgres
   - Environment variables auto-added

---

### Option 3: Vercel Blob Storage
Good for larger files and media.

#### Setup Steps:

1. **Install package:**
```bash
npm install @vercel/blob
```

2. **Create Blob store in Vercel Dashboard:**
   - Storage → Create Store → Blob

---

## Recommended: Use Vercel KV

I'll update your API route to use Vercel KV. It's the simplest and fastest solution for your use case.

### What I'll do:
1. Update `app/api/content/route.ts` to use KV instead of file system
2. Create a migration script to upload your current `data/content.json` to KV
3. Add fallback to read from file system in development

### After Setup:
- Run the migration script once to upload your data
- Admin dashboard will work on Vercel
- Local development will still work
