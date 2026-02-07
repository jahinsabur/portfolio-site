# Portfolio Admin Architecture

## Before (Broken on Vercel)

```
┌─────────────────────────────────────────┐
│  Admin Dashboard                        │
│  (Edit content)                         │
└────────────┬────────────────────────────┘
             │ POST /api/content
             ▼
┌─────────────────────────────────────────┐
│  API Route                              │
│  fs.writeFileSync('content.json')       │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  File System (READ-ONLY on Vercel) ❌   │
│  data/content.json                      │
└─────────────────────────────────────────┘

❌ Error: "Failed to save content"
```

---

## After (Fixed with Vercel KV)

### Development (Local)
```
┌─────────────────────────────────────────┐
│  Admin Dashboard                        │
│  (Edit content)                         │
└────────────┬────────────────────────────┘
             │ POST /api/content
             ▼
┌─────────────────────────────────────────┐
│  API Route                              │
│  if (development) {                     │
│    fs.writeFileSync('content.json')     │
│  }                                      │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  File System ✅                          │
│  data/content.json                      │
└─────────────────────────────────────────┘
```

### Production (Vercel)
```
┌─────────────────────────────────────────┐
│  Admin Dashboard                        │
│  (Edit content)                         │
└────────────┬────────────────────────────┘
             │ POST /api/content
             ▼
┌─────────────────────────────────────────┐
│  API Route                              │
│  if (production) {                      │
│    await kv.set('portfolio-content')    │
│  }                                      │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  Vercel KV (Redis) ✅                    │
│  Cloud Database                         │
└─────────────────────────────────────────┘
```

---

## Data Flow

### Reading Content (GET)
```
User visits site
    ↓
GET /api/content
    ↓
Production? → YES → Read from Vercel KV
           → NO  → Read from content.json
    ↓
Return JSON to frontend
    ↓
Display content
```

### Saving Content (POST)
```
Admin edits content
    ↓
Click "Save Changes"
    ↓
POST /api/content
    ↓
Production? → YES → Save to Vercel KV ✅
           → NO  → Save to content.json ✅
    ↓
Success message
```

---

## Why Vercel KV?

| Feature | File System | Vercel KV |
|---------|-------------|-----------|
| Works on Vercel | ❌ Read-only | ✅ Yes |
| Speed | Fast | Very Fast (Redis) |
| Scalability | Limited | Unlimited |
| Setup | None | 5 minutes |
| Cost | Free | Free tier available |
| Reliability | Single point | Distributed |

---

## Environment Detection

The API route automatically detects the environment:

```typescript
const isProduction = process.env.NODE_ENV === 'production';
const useKV = isProduction && process.env.KV_REST_API_URL;

if (useKV) {
  // Use Vercel KV
  await kv.set('portfolio-content', data);
} else {
  // Use file system
  fs.writeFileSync(contentPath, JSON.stringify(data));
}
```

This means:
- ✅ Local development: Uses files (no KV needed)
- ✅ Production: Uses KV (files are read-only anyway)
- ✅ No code changes needed between environments
