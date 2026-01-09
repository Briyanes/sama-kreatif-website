# Deployment Guide - SAMA Kreatif Website

## 📋 Table of Contents
1. [Push to GitHub](#push-to-github)
2. [Create Production ZIP](#create-production-zip)
3. [Upload to Hosting](#upload-to-hosting)
4. [Post-Deployment Checklist](#post-deployment-checklist)

---

## 🚀 Push to GitHub

### Option 1: Create New GitHub Repository

#### Step 1: Create Repository on GitHub
1. Go to [GitHub](https://github.com/new)
2. Click **"New repository"**
3. Fill in repository details:
   - **Repository name**: `sama-kreatif-website` (or your preferred name)
   - **Description**: `SAMA Kreatif Digital Agency Website`
   - **Visibility**: Choose Private or Public
   - **DO NOT** initialize with README, .gitignore, or license
4. Click **"Create repository"**

#### Step 2: Push Local Repository to GitHub

After creating the repository, GitHub will show you instructions. Run these commands in your terminal:

```bash
cd "/Users/mac/VSC Project/SAMA Kreatif HTML"

# Add remote repository (replace with your username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/sama-kreatif-website.git

# Verify remote
git remote -v

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/sama-kreatif-website.git
git push -u origin main
```

### Option 2: Push to Existing Repository

If you already have a GitHub repository:

```bash
cd "/Users/mac/VSC Project/SAMA Kreatif HTML"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/EXISTING-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Verify on GitHub

1. Go to your GitHub repository page
2. Verify all files are uploaded
3. Check that `index.html` is present
4. Verify all assets folders are there

---

## 📦 Create Production ZIP

### Method 1: Using Command Line (Recommended)

Run this command to create a clean ZIP file for production:

```bash
cd "/Users/mac/VSC Project/SAMA Kreatif HTML"

# Create ZIP file excluding .git and development files
zip -r sama-kreatif-website-production.zip \
    index.html \
    about.html \
    contact.html \
    work.html \
    team.html \
    social-media-management.html \
    instagram-shopping-activate.html \
    visual-design.html \
    website-development.html \
    digital-ads.html \
    faq-igshop.html \
    faq-webdev.html \
    project-details.html \
    error.html \
    under-construction.html \
    assets/ \
    htaccess \
    robots.txt \
    sitemap.xml \
    FEATURES_IMPLEMENTATION_GUIDE.md \
    RINGKASAN_IMPLEMENTASI.md \
    ANALYTICS_SETUP_GUIDE.md \
    -x "*.DS_Store" \
    -x "*.bak" \
    -x "*.py"
```

### Method 2: Using Finder (Mac)

1. Open Finder
2. Navigate to `/Users/mac/VSC Project/SAMA Kreatif HTML`
3. Select these files and folders:
   - All `.html` files (except `about-original.html`, `*.bak` files)
   - `assets/` folder
   - `htaccess` file
   - `robots.txt`
   - `sitemap.xml`
   - Documentation files (optional)
4. Right-click → **"Compress X items"**
5. Rename to `sama-kreatif-website-production.zip`

### Important Notes:
- ✅ **Include**: `htaccess` (not `.htaccess` - rename after upload)
- ✅ **Include**: All HTML files
- ✅ **Include**: `assets/` folder
- ✅ **Include**: `robots.txt`, `sitemap.xml`
- ❌ **Exclude**: `.git/` folder
- ❌ **Exclude**: `.gitignore`
- ❌ **Exclude**: `*.py` files
- ❌ **Exclude**: `about-original.html`
- ❌ **Exclude**: `*.bak` files

---

## 🌐 Upload to Hosting

### cPanel Hosting (Most Common)

#### Step 1: Access File Manager
1. Login to cPanel
2. Go to **File Manager**
3. Navigate to `public_html/` (or your domain folder)

#### Step 2: Upload Files
**Option A: Upload ZIP**
1. Click **Upload**
2. Select `sama-kreatif-website-production.zip`
3. After upload, right-click the ZIP → **Extract**
4. Files will be extracted to `public_html/`

**Option B: Upload Individual Files**
1. Drag and drop files from your computer
2. Upload all HTML files to `public_html/`
3. Upload entire `assets/` folder
4. Upload `htaccess`, `robots.txt`, `sitemap.xml`

#### Step 3: Rename htaccess
1. Find `htaccess` file in File Manager
2. Right-click → **Rename**
3. Change to `.htaccess` (with dot in front)

#### Step 4: Set Permissions
1. Right-click `assets/` folder → **Change Permissions**
2. Set to `755` (folders)
3. Set to `644` (files)

### FTP/SFTP Upload

#### Using FileZilla:
1. Open FileZilla
2. Connect to your hosting with FTP credentials
3. Navigate to remote folder: `/public_html/`
4. Navigate to local folder: `/Users/mac/VSC Project/SAMA Kreatif HTML`
5. Upload files:
   - All `.html` files
   - `assets/` folder
   - `htaccess` (will rename to `.htaccess` on server)
   - `robots.txt`, `sitemap.xml`

### Hosting-Specific Instructions:

**Shared Hosting (cPanel)**
- Upload to: `public_html/`
- Rename: `htaccess` → `.htaccess`

**VPS/Cloud Server**
- Upload to: `/var/www/html/` (Apache) or `/usr/share/nginx/html/` (Nginx)
- Rename: `htaccess` → `.htaccess`
- Restart web server if needed

**GitHub Pages (Free Hosting)**
1. Push to GitHub repository
2. Go to repository **Settings**
3. Scroll to **GitHub Pages**
4. Source: Deploy from a branch → `main` → `/ (root)`
5. Save
6. Access at: `https://YOUR_USERNAME.github.io/sama-kreatif-website/`

**Netlify (Free Hosting)**
1. Go to [Netlify](https://netlify.com)
2. Drag and drop the folder
3. Site will be live instantly
4. Get custom domain instructions

---

## ✅ Post-Deployment Checklist

### 1. Verify Files Upload

```bash
# Check if files are accessible
curl -I https://samakreatif.com/index.html
curl -I https://samakreatif.com/assets/css/style.css
curl -I https://samakreatif.com/assets/js/analytics.js
```

### 2. Test Website Functionality

**Desktop Testing:**
- [ ] Open website in Chrome
- [ ] Open website in Firefox
- [ ] Open website in Safari
- [ ] Test all navigation links
- [ ] Test all CTAs (work correctly)
- [ ] Test WhatsApp button (opens WhatsApp)
- [ ] Test testimonials carousel (slides work)
- [ ] Test portfolio hover effects
- [ ] Test contact form (if applicable)
- [ ] Check for console errors (F12 → Console)

**Mobile Testing:**
- [ ] Test on iPhone (Safari & Chrome)
- [ ] Test on Android (Chrome)
- [ ] Test responsive layout
- [ ] Test mobile menu
- [ ] Test touch interactions
- [ ] Test WhatsApp button on mobile

### 3. Analytics Configuration

**CRITICAL - Must Do:**

1. Edit `assets/js/analytics.js`:
```javascript
const ANALYTICS_CONFIG = {
    GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',     // REPLACE THIS
    GTM_CONTAINER_ID: 'GTM-XXXXXXX',       // REPLACE THIS
    META_PIXEL_ID: 'XXXXXXXXXXXXXXXX',     // REPLACE THIS
    DEBUG_MODE: false                      // CHANGE TO false
};
```

2. Upload updated `analytics.js` to hosting

3. Verify Analytics:
   - Open browser console
   - Check for initialization messages
   - Use [Google Tag Assistant](https://tagassistant.google.com/)
   - Check GA4 real-time reports
   - Check GTM preview mode
   - Check Meta Pixel helper

### 4. SEO Verification

- [ ] Check `sitemap.xml` is accessible: `https://samakreatif.com/sitemap.xml`
- [ ] Check `robots.txt` is accessible: `https://samakreatif.com/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test with Google Rich Results Test
- [ ] Check Open Graph tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Check Twitter Card tags with [Card Validator](https://cards-dev.twitter.com/validator)

### 5. Performance Testing

- [ ] Test with [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Test with [GTmetrix](https://gtmetrix.com/)
- [ ] Test with [Pingdom](https://pingdom.com/)
- [ ] Target: 90+ score on both mobile and desktop
- [ ] Check loading time (should be < 3 seconds)

### 6. Security Check

- [ ] Test `.htaccess` redirects work
- [ ] Check security headers (use [securityheaders.com](https://securityheaders.com/))
- [ ] Verify HTTPS is enforced
- [ ] Check no directory listing (access `https://samakreatif.com/assets/`)

### 7. SSL/HTTPS

- [ ] Verify SSL certificate is valid
- [ ] Check all links use HTTPS
- [ ] Update `robots.txt` sitemap URL to HTTPS
- [ ] Update `sitemap.xml` URLs to HTTPS

### 8. Final Checks

- [ ] Update contact email if needed
- [ ] Update WhatsApp number if needed
- [ ] Update social media links
- [ ] Replace placeholder testimonials with real ones
- [ ] Update portfolio with real projects
- [ ] Check all images load correctly
- [ ] Check no broken links (use [Screaming Frog](https://www.screamingfrogseo.co.uk/))

---

## 🔧 Common Issues & Solutions

### Issue 1: .htaccess Not Working

**Problem:** Server configuration not applied

**Solution:**
1. Verify file is named `.htaccess` (with dot)
2. Check file permissions (644)
3. Verify mod_rewrite is enabled on server
4. Contact hosting support if needed

### Issue 2: Analytics Not Tracking

**Problem:** No data in GA4/GTM

**Solution:**
1. Check browser console for errors
2. Verify IDs are correct (no typos)
3. Check ad-blocker is disabled
4. Use Google Tag Assistant
5. Set `DEBUG_MODE: true` temporarily

### Issue 3: Images Not Loading

**Problem:** Broken image icons

**Solution:**
1. Verify `assets/img/` folder is uploaded
2. Check file permissions (644)
3. Verify case-sensitive filenames
4. Check file paths in HTML

### Issue 4: WhatsApp Button Not Showing

**Problem:** Floating button missing

**Solution:**
1. Check `assets/css/whatsapp-button.css` is uploaded
2. Verify HTML includes WhatsApp button code
3. Check for CSS conflicts
4. Clear browser cache

### Issue 5: Carousel Not Working

**Problem:** Testimonials not sliding

**Solution:**
1. Verify `assets/js/testimonials.js` is uploaded
2. Check Slick Slider is loaded
3. Verify jQuery is loaded first
4. Check for JavaScript errors in console

---

## 📞 Support Resources

### Documentation:
- [FEATURES_IMPLEMENTATION_GUIDE.md](FEATURES_IMPLEMENTATION_GUIDE.md) - Complete feature guide
- [RINGKASAN_IMPLEMENTASI.md](RINGKASAN_IMPLEMENTASI.md) - Indonesian summary
- [ANALYTICS_SETUP_GUIDE.md](ANALYTICS_SETUP_GUIDE.md) - Analytics setup

### Useful Links:
- [Google Analytics 4](https://analytics.google.com/)
- [Google Tag Manager](https://tagmanager.google.com/)
- [Meta Business Suite](https://business.facebook.com/)
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🎉 Deployment Complete!

Once all steps are complete and verified:

1. **Test thoroughly** on all devices and browsers
2. **Monitor analytics** for first few days
3. **Check SEO** indexing status
4. **Monitor uptime** using uptime monitoring tools
5. **Backup regularly** - keep copy of files

---

**Last Updated:** January 2026
**Version:** 1.0
**Status:** ✅ Ready for Production
