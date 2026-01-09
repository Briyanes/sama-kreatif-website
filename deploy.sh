#!/bin/bash

# ============================================
# Deployment Script - SAMA Kreatif Website
# ============================================

echo "=================================="
echo "SAMA Kreatif Website Deployment"
echo "=================================="
echo ""

# Step 1: Create ZIP file
echo "Step 1: Creating production ZIP file..."
cd "/Users/mac/VSC Project/SAMA Kreatif HTML"

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
    DEPLOYMENT_GUIDE.md \
    -x "*.DS_Store" \
    -x "*.bak" \
    -x "*.py" \
    -x ".git/*" \
    -x "about-original.html"

echo "✅ ZIP file created: sama-kreatif-website-production.zip"
echo ""

# Step 2: Check ZIP file size
ZIP_SIZE=$(du -h sama-kreatif-website-production.zip | cut -f1)
echo "📦 ZIP file size: $ZIP_SIZE"
echo ""

# Step 3: List contents
echo "📋 ZIP Contents:"
unzip -l sama-kreatif-website-production.zip | head -20
echo "..."
echo ""

# Step 4: Instructions
echo "=================================="
echo "NEXT STEPS:"
echo "=================================="
echo ""
echo "1. Upload ZIP to hosting:"
echo "   - cPanel: File Manager → Upload → Extract"
echo "   - FTP: Upload using FileZilla"
echo "   - Rename 'htaccess' to '.htaccess' after upload"
echo ""
echo "2. Configure Analytics:"
echo "   - Edit assets/js/analytics.js"
echo "   - Replace placeholder IDs"
echo "   - Set DEBUG_MODE: false"
echo ""
echo "3. Test website:"
echo "   - Open in browser"
echo "   - Check all links work"
echo "   - Test WhatsApp button"
echo "   - Verify analytics tracking"
echo ""
echo "4. Push to GitHub (if needed):"
echo "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
echo "   git push -u origin main"
echo ""
echo "=================================="
echo "✅ Deployment package ready!"
echo "=================================="
