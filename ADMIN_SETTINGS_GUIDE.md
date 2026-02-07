# Admin Settings Guide

## Changes Made ✅

### 1. Login Page Updated
- ❌ Removed "Default credentials: admin / admin123" text
- ✅ Clean, professional login page
- No hints about default credentials

### 2. Settings Section Added
New "Settings" tab in Admin Dashboard with:

#### Profile Settings
- **Display Name** - Shows in "Welcome, [NAME]!" message
- **Username** - Used for login
- Save button to update profile

#### Password Settings
- **Current Password** - Verify identity
- **New Password** - Minimum 6 characters
- **Confirm Password** - Must match new password
- Password visibility toggle (eye icon)
- Separate "Change Password" button

### 3. Welcome Message
- Dashboard header now shows: **"Welcome, [NAME]!"**
- Name is fetched from admin settings
- Updates automatically when profile is saved

### 4. Admin Data Structure
```json
{
  "username": "admin",
  "password": "admin123",
  "name": "Admin"
}
```

---

## How to Use

### Change Your Display Name
1. Go to Admin Dashboard
2. Click **Settings** tab (bottom of sidebar)
3. Update "Display Name" field
4. Click **Save Profile**
5. Dashboard header will show: "Welcome, [Your Name]!"

### Change Username
1. Go to Settings tab
2. Update "Username" field
3. Click **Save Profile**
4. Use new username for next login

### Change Password
1. Go to Settings tab
2. Scroll to "Change Password" section
3. Enter current password
4. Enter new password (min 6 characters)
5. Confirm new password
6. Click **Change Password**
7. Use new password for next login

---

## API Routes Created

### `/api/admin/settings`
- **GET** - Fetch admin name and username (password excluded)
- **POST** - Update name and username

### `/api/admin/change-password`
- **POST** - Change password with verification

---

## Security Features

✅ Current password verification required  
✅ Password minimum length (6 characters)  
✅ Password confirmation required  
✅ Password never sent to frontend in GET requests  
✅ Separate endpoint for password changes  
✅ No default credentials shown on login page  

---

## Default Credentials

**Initial Login:**
- Username: `admin`
- Password: `admin123`

**⚠️ IMPORTANT:** Change these immediately after first login!

---

## Settings Tab Location

Admin Dashboard → Sidebar → **Settings** (last item)

Features:
- 👤 Profile Information
- 🔒 Change Password
- 💾 Save buttons for each section
- 👁️ Password visibility toggles

---

## Files Modified

### New Files
- `components/admin/editors/SettingsEditor.tsx`
- `app/api/admin/settings/route.ts`
- `app/api/admin/change-password/route.ts`

### Modified Files
- `app/admin/login/page.tsx` - Removed default credentials text
- `components/admin/AdminDashboard.tsx` - Added Settings tab and Welcome message
- `components/admin/editors/index.ts` - Export SettingsEditor
- `data/admin.json` - Added name field

---

## Testing Checklist

- [ ] Login page doesn't show default credentials
- [ ] Dashboard shows "Welcome, [Name]!"
- [ ] Settings tab appears in sidebar
- [ ] Can update display name
- [ ] Can update username
- [ ] Can change password with current password
- [ ] Password validation works (min 6 chars)
- [ ] Password confirmation works
- [ ] Can login with new credentials
- [ ] Welcome message updates after name change

---

## Troubleshooting

### "Failed to load settings"
- Check that `data/admin.json` exists
- Verify file has correct structure

### "Current password is incorrect"
- Double-check you're entering the right password
- Password is case-sensitive

### "Password must be at least 6 characters"
- New password needs minimum 6 characters
- No maximum length

### Welcome message shows "Admin"
- Update your name in Settings tab
- Click Save Profile
- Refresh the page

---

## Future Enhancements

Possible additions:
- Email notifications for password changes
- Password strength indicator
- Two-factor authentication
- Session timeout settings
- Activity log
- Multiple admin users
