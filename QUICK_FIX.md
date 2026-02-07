# Quick Fix for "Failed to save content"

## 🚀 Fast Setup (5 minutes)

### 1. Install Package
```bash
cd portfolio-site
npm install @vercel/kv
```

### 2. Create KV Database
- Go to Vercel Dashboard → Your Project → **Storage** tab
- Click **Create Database** → Select **KV**
- Name: `portfolio-content` → Click **Create**
- ✅ Environment variables auto-added

### 3. Copy Variables to Local
In Vercel Dashboard → **Settings** → **Environment Variables**

Copy to `portfolio-site/.env.local`:
```env
KV_URL="redis://..."
KV_REST_API_URL="https://..."
KV_REST_API_TOKEN="..."
KV_REST_API_READ_ONLY_TOKEN="..."
```

### 4. Upload Your Data
```bash
npm run migrate-kv
```

### 5. Deploy
```bash
git add .
git commit -m "Fix admin save with Vercel KV"
git push
```

### 6. Test
Go to: `https://your-site.com/admin/login`
- Login → Edit content → Save
- ✅ Should work now!

---

## What Changed?
- ✅ Code updated to use Vercel KV in production
- ✅ Still uses file system in local development
- ✅ Automatic environment detection

## Files Modified:
- `app/api/content/route.ts` - Now uses KV
- `package.json` - Added `@vercel/kv` dependency
- `scripts/migrate-to-kv.js` - Migration script

---

See `DEPLOYMENT_FIX.md` for detailed explanation.
