# Professional Engineering Portfolio with File-Based Admin

Modern portfolio with **simple admin panel** - no database needed! Perfect for cPanel hosting.

## ✨ Features

✅ Professional portfolio design  
✅ Admin panel to edit all content  
✅ No database required (uses JSON files)  
✅ Works on any hosting (cPanel, Vercel, etc.)  
✅ Dark/light mode  
✅ Fully responsive  
✅ SEO optimized  

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd portfolio-site
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit: **http://localhost:3000**

### 3. Login to Admin

Visit: **http://localhost:3000/admin/login**

**Default credentials:**
- Username: `admin`
- Password: `admin123`

### 4. Start Editing!

Edit all content through the admin panel:
- Hero section
- About section
- Projects (add/edit/delete)
- Skills
- Sensoreact section
- Contact & social links

Click **"Save Changes"** to save!

## 📁 How It Works

### File-Based Storage

All content is stored in JSON files:

- **`data/content.json`** - All portfolio content
- **`data/admin.json`** - Admin credentials

No database needed!

### Change Admin Password

Edit `data/admin.json`:
```json
{
  "username": "admin",
  "password": "your-new-password"
}
```

## 🌐 Deployment

### Option 1: Vercel (Recommended - FREE)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Portfolio"
git push origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Click "Deploy"
   - Done!

3. **Setup Subdomain:**
   - In cPanel DNS: Add CNAME record
   - Name: `portfolio`
   - Value: `cname.vercel-dns.com`
   - In Vercel: Add domain `portfolio.sensoreact.com`

**See CPANEL_DEPLOYMENT_GUIDE.md for detailed instructions**

### Option 2: cPanel with Node.js

If your cPanel supports Node.js:

1. Upload files via FTP/File Manager
2. Setup Node.js app in cPanel
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Start app

**See CPANEL_DEPLOYMENT_GUIDE.md for step-by-step guide**

## 📊 Admin Features

### What You Can Edit:

✏️ **Hero Section**
- Name, title, subtitle
- Mission statement

✏️ **About Section**
- Professional summary
- Core focus areas

➕ **Projects**
- Add new projects
- Edit existing projects
- Delete projects
- Problem/solution format
- Tech stack tags
- GitHub/Hackster links

➕ **Skills**
- Add/edit categories
- Manage skills per category

✏️ **Sensoreact**
- Company description
- Features list
- Website URL

✏️ **Contact & Social**
- Email and location
- Social media links

## 📁 Project Structure

```
portfolio-site/
├── app/                    # Next.js pages
│   ├── admin/             # Admin panel
│   └── api/               # API routes
├── components/            # React components
│   ├── admin/            # Admin components
│   └── sections/         # Portfolio sections
├── data/                 # Content storage
│   ├── content.json     # Portfolio content
│   └── admin.json       # Admin credentials
├── lib/                  # Utilities
└── public/              # Static assets
```

## 🔒 Security

### Change Default Password

**Important:** Change the default password before deploying!

Edit `data/admin.json`:
```json
{
  "username": "admin",
  "password": "your-secure-password"
}
```

### Production Security

- Use strong passwords
- Don't commit `data/admin.json` with real passwords
- Use HTTPS in production
- Consider adding IP restrictions

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React, TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Storage:** JSON files (no database)
- **Deployment:** Vercel / cPanel

## 📚 Documentation

- **README.md** - This file
- **CPANEL_DEPLOYMENT_GUIDE.md** - Detailed cPanel deployment
- **SETUP_GUIDE.md** - Additional setup info

## 🎯 Key URLs

- **Portfolio:** `http://localhost:3000`
- **Admin Login:** `http://localhost:3000/admin/login`
- **Admin Dashboard:** `http://localhost:3000/admin/dashboard`

## ✅ Commands

```bash
npm run dev    # Development server
npm run build  # Production build
npm start      # Production server
```

## 🎉 Benefits

### No Database Hassle
- No MongoDB setup
- No connection strings
- No database hosting costs
- Works on any hosting

### Simple Admin
- Easy to use interface
- Edit all content
- No code editing needed
- Instant updates

### Easy Deployment
- Deploy to Vercel (free)
- Or use cPanel
- Or any Node.js host
- Point subdomain easily

---

**Your portfolio is ready!** Login at `/admin/login` and start editing your content!

For cPanel deployment with subdomain `portfolio.sensoreact.com`, see **CPANEL_DEPLOYMENT_GUIDE.md**
