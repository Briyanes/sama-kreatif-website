# SAMA Kreatif Digital Agency Website

<div align="center">

![SAMA Kreatif](https://img.shields.io/badge/SAMA_Kreatif-Digital_Agency-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

**Professional Digital Agency Website with Complete Analytics & SEO Implementation**

[Live Demo](#) • [View Documentation](#documentation) • [Report Bug](#)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [Documentation](#-documentation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🎨 Design & UX
- ✅ Modern, responsive design
- ✅ Mobile-first approach
- ✅ Smooth animations (GSAP 3.12.2)
- ✅ Interactive portfolio with case studies
- ✅ Client testimonials carousel
- ✅ Professional typography (Poppins & Unbounded fonts)

### 📊 Analytics & Tracking
- ✅ Google Analytics 4 (GA4) integration
- ✅ Google Tag Manager (GTM) setup
- ✅ Meta Pixel (Facebook) tracking
- ✅ Custom event tracking
- ✅ Debug mode for testing

### 🔧 Functionality
- ✅ WhatsApp floating button
- ✅ Contact forms
- ✅ Portfolio/project showcase
- ✅ Team profiles
- ✅ Service pages (5 services)
- ✅ FAQ sections
- ✅ Blog layout

### 🔍 SEO Optimization
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Schema.org JSON-LD markup
- ✅ XML sitemap
- ✅ robots.txt
- ✅ Canonical URLs
- ✅ Semantic HTML5

### ⚡ Performance
- ✅ GZIP compression
- ✅ Browser caching (1 year images, 1 month CSS/JS)
- ✅ Optimized images (WebP format)
- ✅ Minified CSS & JS
- ✅ Lazy loading
- ✅ CDN-ready structure

### 🔒 Security
- ✅ Security headers
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ XSS Protection
- ✅ Referrer-Policy

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Markup
- **CSS3** - Styling with Bootstrap 5
- **JavaScript (ES6+)** - Interactivity

### Libraries & Frameworks
- **jQuery 3.6.0** - DOM manipulation
- **Bootstrap 5.3** - CSS framework
- **GSAP 3.12.2** - Animations
- **Slick Slider** - Carousels
- **Magnific Popup** - Lightboxes
- **CounterUp** - Animated counters
- **WOW.js** - Scroll animations
- **Isotope** - Filtering layouts

### Analytics
- **Google Analytics 4**
- **Google Tag Manager**
- **Meta Pixel**

### Tools
- **Sass** - CSS preprocessing
- **GZIP** - Compression
- **.htaccess** - Server configuration

---

## 📦 Installation

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Web server (Apache, Nginx) or hosting account
- Text editor (for configuration)

### Quick Start

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/sama-kreatif-website.git
   cd sama-kreatif-website
   ```

2. **Configure analytics** (see [Configuration](#configuration))
   ```bash
   # Edit assets/js/analytics.js
   # Replace placeholder IDs with your actual IDs
   ```

3. **Upload to hosting**
   - Using cPanel: Upload ZIP → Extract
   - Using FTP: Upload all files
   - Using CLI: `deploy.sh` script

4. **Rename htaccess**
   ```
   htaccess → .htaccess
   ```

5. **Test website**
   - Open in browser
   - Check all functionality
   - Verify analytics tracking

---

## ⚙️ Configuration

### Analytics Setup

**IMPORTANT:** Before production deployment, update analytics configuration:

Open `assets/js/analytics.js` and replace placeholder IDs:

```javascript
const ANALYTICS_CONFIG = {
    GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',     // Replace with your GA4 ID
    GTM_CONTAINER_ID: 'GTM-XXXXXXX',       // Replace with your GTM ID
    META_PIXEL_ID: 'XXXXXXXXXXXXXXXX',     // Replace with your Meta Pixel ID
    DEBUG_MODE: false                      // Set to 'false' for production
};
```

#### Getting Your IDs:

**Google Analytics 4:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Admin → Data Streams → Web Stream
3. Copy Measurement ID

**Google Tag Manager:**
1. Go to [GTM](https://tagmanager.google.com/)
2. Create container → Copy Container ID

**Meta Pixel:**
1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Create pixel → Copy Pixel ID

### WhatsApp Number

Edit in all HTML files (bottom before `</body>`):

```html
<a href="https://wa.me/6281414131321?text=..."
```

Replace `6281414131321` with your WhatsApp number.

### Contact Information

Update in all HTML files:
- Email addresses
- Phone numbers
- Social media links
- Physical address

---

## 📁 Project Structure

```
sama-kreatif-website/
├── assets/
│   ├── css/                 # Stylesheets
│   │   ├── style.css        # Main styles
│   │   ├── bootstrap.min.css
│   │   ├── whatsapp-button.css    # WhatsApp floating button
│   │   ├── portfolio-enhanced.css # Enhanced portfolio
│   │   └── testimonials.css        # Testimonials section
│   ├── js/                  # JavaScript files
│   │   ├── main.js          # Main functionality
│   │   ├── analytics.js     # Analytics configuration
│   │   ├── testimonials.js  # Testimonials carousel
│   │   └── vendor/          # Third-party libraries
│   ├── img/                 # Images
│   │   ├── hero/            # Hero section images
│   │   ├── portfolio/       # Portfolio project images
│   │   ├── team/            # Team member photos
│   │   ├── services/        # Service-related images
│   │   └── ...
│   ├── fonts/               # Font files
│   └── sass/                # Sass source files
├── index.html               # Homepage
├── about.html               # About page
├── contact.html             # Contact page
├── work.html                # Portfolio page
├── team.html                # Team page
├── social-media-management.html      # Service: SMM
├── instagram-shopping-activate.html   # Service: IG Shopping
├── visual-design.html        # Service: Visual Design
├── website-development.html  # Service: Web Development
├── digital-ads.html          # Service: Digital Ads
├── faq-igshop.html          # FAQ: IG Shopping
├── faq-webdev.html          # FAQ: Web Development
├── project-details.html     # Single project details
├── error.html               # 404 error page
├── under-construction.html  # Coming soon page
├── htaccess                 # Server configuration
├── robots.txt               # Search engine rules
├── sitemap.xml              # XML sitemap
├── README.md                # This file
├── FEATURES_IMPLEMENTATION_GUIDE.md   # Feature documentation
├── DEPLOYMENT_GUIDE.md      # Deployment instructions
├── GITHUB_PUSH_GUIDE.md     # GitHub push instructions
└── deploy.sh                # Deployment script
```

---

## 📚 Documentation

### Main Documentation Files:

- **[FEATURES_IMPLEMENTATION_GUIDE.md](FEATURES_IMPLEMENTATION_GUIDE.md)** - Complete feature implementation guide
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Step-by-step deployment instructions
- **[GITHUB_PUSH_GUIDE.md](GITHUB_PUSH_GUIDE.md)** - GitHub repository setup guide
- **[RINGKASAN_IMPLEMENTASI.md](RINGKASAN_IMPLEMENTASI.md)** - Indonesian summary
- **[ANALYTICS_SETUP_GUIDE.md](ANALYTICS_SETUP_GUIDE.md)** - Analytics configuration

### Quick Links:

- [View Features](FEATURES_IMPLEMENTATION_GUIDE.md)
- [Deployment Guide](DEPLOYMENT_GUIDE.md)
- [GitHub Setup](GITHUB_PUSH_GUIDE.md)
- [Analytics Setup](ANALYTICS_SETUP_GUIDE.md)

---

## 🚀 Deployment

### Quick Deploy (Script)

Run the deployment script to create production ZIP:

```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Deploy

1. Create ZIP file:
   ```bash
   zip -r production.zip *.html assets/ htaccess robots.txt sitemap.xml
   ```

2. Upload to hosting:
   - cPanel: File Manager → Upload → Extract
   - FTP: Upload using FileZilla
   - CLI: Use rsync or scp

3. Rename `htaccess` to `.htaccess`

4. Test website

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### Development Setup

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Coding Standards

- Use semantic HTML5
- Follow BEM naming for CSS classes
- Write clean, commented JavaScript
- Test on multiple browsers and devices
- Optimize images before adding

---

## 📄 License

This project is proprietary software. All rights reserved.

**Copyright © 2024 PT. Sumber Arto Moro Abadi Kreatif**

---

## 👥 Authors

**SAMA Kreatif Digital Agency**

- Website: [https://samakreatif.com](https://samakreatif.com)
- Email: [halo@samakreatif.com](mailto:halo@samakreatif.com)
- WhatsApp: +62 812-3065-4014

---

## 📞 Support

For support, please contact:

- **Email:** halo@samakreatif.com
- **WhatsApp:** +62 812-3065-4014
- **Address:** Jl. Anggajaya 2 No.47, Condongcatur, Depok, Sleman, Yogyakarta 5528

---

## 🔗 Links

- [Website](https://samakreatif.com)
- [Partnership Form](https://form.samakreatif.com/partnership-with-us/)
- [Facebook](https://www.facebook.com/samakreatif.hub)
- [Instagram](https://www.instagram.com/samakreatif.hub/)
- [YouTube](https://youtube.com/samakreatif.hub)
- [TikTok](https://tiktok.com/@samakreatif.hub)

---

<div align="center">

**Made with ❤️ by SAMA Kreatif Digital Agency**

[⬆ Back to Top](#sama-kreatif-digital-agency-website)

</div>
