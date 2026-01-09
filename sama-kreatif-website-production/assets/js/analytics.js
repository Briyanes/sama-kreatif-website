/**
 * ANALYTICS & TRACKING SETUP
 * ========================================
 *
 * File ini berisi semua script untuk tracking:
 * - Google Analytics 4 (GA4)
 * - Google Tag Manager (GTM)
 * - Meta Pixel (Facebook Ads)
 *
 * INSTRUKSI EDIT:
 * 1. Ganti 'G-XXXXXXXXXX' dengan GA4 Measurement ID Anda
 * 2. Ganti 'GTM-XXXXXXX' dengan GTM Container ID Anda
 * 3. Ganti 'XXXXXXXXXXXXXXXX' dengan Meta Pixel ID Anda
 *
 * CARA DAPATKAN ID:
 * - GA4: https://analytics.google.com/ → Admin → Property → Property Settings → Data Stream
 * - GTM: https://tagmanager.google.com/ → Admin → Install GTM → Container ID
 * - Meta: https://business.facebook.com/ → Pixel → Create Pixel
 */

(function() {
    'use strict';

    // ============================================
    // KONFIGURASI - EDIT BAGIAN INI
    // ============================================

    const ANALYTICS_CONFIG = {
        // Google Analytics 4 Measurement ID
        // Format: G-XXXXXXXXXX
        GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',

        // Google Tag Manager Container ID
        // Format: GTM-XXXXXXX
        GTM_CONTAINER_ID: 'GTM-XXXXXXX',

        // Meta Pixel ID
        // Format: XXXXXXXXXX (15 digit number)
        META_PIXEL_ID: 'XXXXXXXXXXXXXXXX',

        // Track events ke console (untuk debugging)
        DEBUG_MODE: true
    };

    // ============================================
    // GOOGLE ANALYTICS 4
    // ============================================

    function initGA4() {
        try {
            // Load GA4 only jika Measurement ID valid (bukan placeholder)
            if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID &&
                ANALYTICS_CONFIG.GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {

                // GA4 gtag.js
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.googletagmanager.com/gtag/js?id=' + ANALYTICS_CONFIG.GA4_MEASUREMENT_ID);

                // Initialize GA4
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}

                gtag('js', new Date());
                gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID);

                if (ANALYTICS_CONFIG.DEBUG_MODE) {
                    console.log('✅ GA4 initialized: ' + ANALYTICS_CONFIG.GA4_MEASUREMENT_ID);
                }
            } else {
                if (ANALYTICS_CONFIG.DEBUG_MODE) {
                    console.warn('⚠️  GA4 Measurement ID belum diset. Edit analytics.js dan masukkan GA4 ID Anda.');
                }
            }
        } catch (error) {
            console.error('❌ Error initializing GA4:', error);
        }
    }

    // ============================================
    // GOOGLE TAG MANAGER
    // ============================================

    function initGTM() {
        try {
            // Load GTM hanya jika Container ID valid (bukan placeholder)
            if (ANALYTICS_CONFIG.GTM_CONTAINER_ID &&
                ANALYTICS_CONFIG.GTM_CONTAINER_ID !== 'GTM-XXXXXXX') {

                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer',ANALYTICS_CONFIG.GTM_CONTAINER_ID);

                if (ANALYTICS_CONFIG.DEBUG_MODE) {
                    console.log('✅ GTM initialized: ' + ANALYTICS_CONFIG.GTM_CONTAINER_ID);
                }
            } else {
                if (ANALYTICS_CONFIG.DEBUG_MODE) {
                    console.warn('⚠️  GTM Container ID belum diset. Edit analytics.js dan masukkan GTM ID Anda.');
                }
            }
        } catch (error) {
            console.error('❌ Error initializing GTM:', error);
        }
    }

    // ============================================
    // META PIXEL (FACEBOOK ADS)
    // ============================================

    function initMetaPixel() {
        try {
            // Load Meta Pixel hanya jika Pixel ID valid (bukan placeholder)
            if (ANALYTICS_CONFIG.META_PIXEL_ID &&
                ANALYTICS_CONFIG.META_PIXEL_ID !== 'XXXXXXXXXXXXXXXX') {

                (function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');

                fbq('init', ANALYTICS_CONFIG.META_PIXEL_ID);
                fbq('track', 'PageView');

                if (ANALYTICS_CONFIG.DEBUG_MODE) {
                    console.log('✅ Meta Pixel initialized: ' + ANALYTICS_CONFIG.META_PIXEL_ID);
                }
            } else {
                if (ANALYTICS_CONFIG.DEBUG_MODE) {
                    console.warn('⚠️  Meta Pixel ID belum diset. Edit analytics.js dan masukkan Pixel ID Anda.');
                }
            }
        } catch (error) {
            console.error('❌ Error initializing Meta Pixel:', error);
        }
    }

    // ============================================
    // CUSTOM TRACKING EVENTS
    // ============================================

    // Custom event tracking helper
    window.TrackEvent = {
        // Track page views
        pageView: function(pageTitle, pageLocation) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'page_view', {
                    page_title: pageTitle,
                    page_location: pageLocation
                });
            }
        },

        // Track CTA clicks
        ctaClick: function(ctaName, ctaLocation) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    cta_name: ctaName,
                    cta_location: ctaLocation
                });
            }

            // Track ke Meta Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead');
            }
        },

        // Track WhatsApp clicks
        whatsappClick: function(phoneNumber) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    phone_number: phoneNumber
                });
            }

            // Track ke Meta Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Contact');
            }
        },

        // Track form submissions
        formSubmit: function(formName, formId) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'generate_lead', {
                    form_name: formName,
                    form_id: formId
                });
            }

            // Track ke Meta Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead');
            }
        },

        // Track portfolio clicks
        portfolioClick: function(projectName) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'portfolio_click', {
                    project_name: projectName
                });
            }
        }
    };

    // ============================================
    // INITIALIZATION
    // ============================================

    // Initialize semua analytics saat DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initGA4();
            initGTM();
            initMetaPixel();
        });
    } else {
        initGA4();
        initGTM();
        initMetaPixel();
    }

    // Log ke console jika debug mode aktif
    if (ANALYTICS_CONFIG.DEBUG_MODE) {
        console.log('🔍 Analytics Debug Mode Active');
        console.log('📊 GA4 ID:', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID);
        console.log('🏷️  GTM ID:', ANALYTICS_CONFIG.GTM_CONTAINER_ID);
        console.log('📱 Meta Pixel ID:', ANALYTICS_CONFIG.META_PIXEL_ID);
        console.log('💡 Custom Tracking Available: TrackEvent.pageView(), TrackEvent.ctaClick(), TrackEvent.whatsappClick()');
    }

})();
