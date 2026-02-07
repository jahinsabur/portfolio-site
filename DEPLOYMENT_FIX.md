# Fix "Failed to save content" on Vercel

## The Problem
Vercel's serverless environment has a **read-only file system**. Your admin dashboard can't save changes because it tries to write to `data/content.json`, which isn't allowed in production.

## The Solution
Use **Vercel KV** (Redis) to store your content data instead of the file system.

---

## Step-by-Step Setup

### 1. Install Dependencies

```bash
cd portfolio-site
npm install @vercel/kv
```

### 2. Create Vercel KV Database

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your portfolio project
3. Click on the **"Storage"** tab
4. Click **"Create Database"**
5. Select **"KV"** (Redis)
6. Name it: `portfolio-content`
7. Click **"Create"**

✅ Vercel will automatically add these environment variables to your project:
- `KV_URL`
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`
- `KV_REST_API_READ_ONLY_TOKEN`

### 3. Add KV Variables to Local Environment

1. In Vercel Dashboard, go to **Settings → Environment Variables**
2. Copy the KV variables
3. Add them to your local `portfolio-site/.env.local` file:

```env
# Vercel KV (copy from Vercel Dashboard)
KV_URL="redis://..."
KV_REST_API_URL="https://..."
KV_REST_API_TOKEN="..."
KV_REST_API_READ_ONLY_TOKEN="..."
```

### 4. Upload Your Content to KV

Run the migration script to upload your current `data/content.json` to Vercel KV:

```bash
npm run migrate-kv
```

You should see:
```
📤 Uploading content to Vercel KV...
✅ Migration successful!
✅ Verification successful - data is stored in KV
```

### 5. Deploy to Vercel

```bash
git add .
git commit -m "Add Vercel KV support for admin dashboard"
git push
```

Vercel will automatically deploy your changes.

### 6. Test the Admin Dashboard

1. Go to your site: `https://your-subdomain.yourdomain.com/admin/login`
2. Login with your credentials
3. Edit any content
4. Click **"Save Changes"**
5. ✅ Should see "Content saved successfully!"

---

## How It Works

### Development (Local)
- Uses file system (`data/content.json`)
- Changes are saved to the file
- Works as before

### Production (Vercel)
- Uses Vercel KV (Redis)
- Changes are saved to the cloud database
- Fast and reliable

The code automatically detects the environment and uses the right storage method.

---

## Troubleshooting

### Error: "KV_REST_API_URL not found"
- Make sure you created the KV database in Vercel Dashboard
- Check that environment variables are added to your project
- Redeploy after adding variables

### Error: "Failed to save content"
- Check Vercel logs: Dashboard → Deployments → [Latest] → Functions
- Verify KV database is active in Storage tab
- Try running the migration script again

### Migration script fails
- Ensure `.env.local` has the KV variables
- Check that `data/content.json` exists
- Run `npm install` to ensure `@vercel/kv` is installed

---

## Alternative: Keep Using File System (Not Recommended)

If you don't want to use KV, you can:

1. **Use a different hosting provider** that supports writable file systems (like a VPS or traditional hosting)
2. **Use Vercel Blob Storage** (for larger files)
3. **Use a different database** (Postgres, MongoDB, etc.)

But **Vercel KV is the simplest and fastest solution** for your use case.

---

## Need Help?

Check the Vercel KV documentation:
https://vercel.com/docs/storage/vercel-kv
