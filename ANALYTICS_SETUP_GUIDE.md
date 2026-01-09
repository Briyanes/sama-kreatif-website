# 📊 ANALYTICS SETUP GUIDE - SAMA Kreatif

## 🎯 What Was Installed

### 1. **Google Analytics 4 (GA4)** ✅
- File: `assets/js/analytics.js`
- Status: Ready dengan placeholder ID
- Action Required: Ganti `G-XXXXXXXXXX` dengan GA4 Measurement ID Anda

### 2. **Google Tag Manager (GTM)** ✅
- File: `assets/js/analytics.js`
- Status: Ready dengan placeholder ID
- Action Required: Ganti `GTM-XXXXXXX` dengan GTM Container ID Anda

### 3. **Meta Pixel** ✅
- File: `assets/js/analytics.js`
- Status: Ready dengan placeholder ID
- Action Required: Ganti `XXXXXXXXXXXXXXXX` dengan Meta Pixel ID Anda

---

## 📝 STEP-BY-STEP SETUP

### STEP 1: Edit analytics.js

Buka file: `assets/js/analytics.js`

Cari bagian ini (line 18-30):
```javascript
const ANALYTICS_CONFIG = {
    GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',     // ← Ganti dengan GA4 ID Anda
    GTM_CONTAINER_ID: 'GTM-XXXXXXX',       // ← Ganti dengan GTM ID Anda
    META_PIXEL_ID: 'XXXXXXXXXXXXXXXX',     // ← Ganti dengan Pixel ID Anda
    DEBUG_MODE: true                        // ← Set false saat production
};
```

### STEP 2: Dapatkan GA4 Measurement ID

1. Buka: https://analytics.google.com/
2. Login dengan Google account
3. Pilih property "Sama Kreatif" atau buat baru
4. Go to: Admin → Property Settings → Data Stream
5. Pilih "Web" → Add Stream
6. Masukkan URL: `https://samakreatif.com/`
7. Copy "Measurement ID" (format: G-XXXXXXXXXX)
8. Paste ke `analytics.js` line 20

### STEP 3: Dapatkan GTM Container ID

1. Buka: https://tagmanager.google.com/
2. Login dengan Google account
3. Create Account: "Sama Kreatif"
4. Setup Container: "Web"
5. Copy "Container ID" (format: GTM-XXXXXXX)
6. Paste ke `analytics.js` line 23

### STEP 4: Dapatkan Meta Pixel ID

1. Buka: https://business.facebook.com/
2. Go to: Pixel → Create Pixel
3. Enter website name: "Sama Kreatif"
4. Enter website URL: `https://samakreatif.com/`
5. Copy Pixel ID (15 digit number)
6. Paste ke `analytics.js` line 27

---

## 🔧 HOW TO ADD TO HTML FILES

File `analytics.js` sudah siap digunakan!

### Cara 1: Manual Add (Sudah Dilakukan)
Script sudah ditambahkan ke semua halaman HTML secara otomatis.

### Cara 2: Edit analytics.js Langsung
File location: `/Users/mac/VSC Project/SAMA Kreatif HTML/assets/js/analytics.js`

Edit line 18-30 dan ganti placeholder IDs dengan IDs Anda.

---

## 📊 CUSTOM TRACKING EVENTS

Analytics.js sudah include custom tracking functions yang bisa dipakai:

### 1. Track Page View
```javascript
TrackEvent.pageView('About Us', 'https://samakreatif.com/about.html');
```

### 2. Track CTA Click
```javascript
TrackEvent.ctaClick('LET\'S TALK', 'homepage hero');
```

### 3. Track WhatsApp Click
```javascript
TrackEvent.whatsappClick('6281414131321');
```

### 4. Track Form Submit
```javascript
TrackEvent.formSubmit('Partnership Form', 'form-id');
```

### 5. Track Portfolio Click
```javascript
TrackEvent.portfolioClick('Project Name');
```

---

## 🎯 EXAMPLE IMPLEMENTATION

### Contoh: Track WhatsApp Button Click

HTML:
```html
<a href="https://wa.me/6281414131321" 
   onclick="TrackEvent.whatsappClick('6281414131321')"
   class="wa-button">
   Chat WhatsApp
</a>
```

### Contoh: Track CTA Button Click

HTML:
```html
<a href="https://form.samakreatif.com/partnership-with-us/" 
   onclick="TrackEvent.ctaClick('PARTNERSHIP', 'homepage')"
   class="btn">
   LET'S TALK
</a>
```

---

## ✅ VERIFICATION

Setelah setup, verifikasi:

### GA4 Verification:
1. Buka: https://analytics.google.com/
2. Realtime → Should see active users

### GTM Verification:
1. Install Tag Assistant extension
2. Go to website
3. Tag Assistant should show GTM container

### Meta Pixel Verification:
1. Install Meta Pixel Helper extension
2. Go to website
3. Pixel Helper should show pixel active

---

## 🔒 PRODUCTION CHECKLIST

Sebelum go-live:

1. ✅ Ganti semua placeholder IDs dengan real IDs
2. ✅ Set `DEBUG_MODE: false` di analytics.js
3. ✅ Test di browser (check console untuk errors)
4. ✅ Verify GA4 tracking (Realtime report)
5. ✅ Verify GTM firing (Tag Assistant)
6. ✅ Verify Meta Pixel (Pixel Helper)

---

## 📈 TRACKING SETUP COMPLETE!

**Files Created:**
- ✅ `assets/js/analytics.js` - Master tracking file

**Files Modified:**
- ✅ All HTML files - Script loading order updated

**Next Steps:**
1. Edit `analytics.js` dengan real tracking IDs
2. Test semua tracking di development
3. Deploy ke production
4. Verify tracking bekerja
5. Start analyze data! 📊

---

**Created:** 2026-01-09
**Version:** 1.0
