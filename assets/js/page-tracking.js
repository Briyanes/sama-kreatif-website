/**
 * PAGE-SPECIFIC META PIXEL EVENTS
 * ========================================
 * File ini berisi tracking events yang spesifik per halaman
 */

(function() {
    'use strict';

    // Track page view events after page load
    function trackPageEvents() {
        const path = window.location.pathname;
        const title = document.title;

        // Homepage - only PageView (already tracked in head)
        if (path === '/' || path === '/index.html' || path === '' || path.endsWith('/index')) {
            // Homepage already has PageView in Meta Pixel base code
            console.log('📊 Homepage PageView tracked');
        }
        // Inner pages - track ViewContent
        else if (path.includes('about')) {
            TrackEvent.contentView('About Us', 'Page');
        }
        else if (path.includes('digital-ads')) {
            TrackEvent.contentView('Digital Ads Service', 'Service Page');
        }
        else if (path.includes('social-media-management')) {
            TrackEvent.contentView('Social Media Management Service', 'Service Page');
        }
        else if (path.includes('instagram-shopping-activate')) {
            TrackEvent.contentView('Instagram Shopping Activate Service', 'Service Page');
        }
        else if (path.includes('visual-design')) {
            TrackEvent.contentView('Visual Design Service', 'Service Page');
        }
        else if (path.includes('website-development')) {
            TrackEvent.contentView('Website Development Service', 'Service Page');
        }
        else if (path.includes('team')) {
            TrackEvent.contentView('Team Page', 'Page');
        }
        else if (path.includes('work') || path.includes('project')) {
            TrackEvent.contentView('Portfolio/Work', 'Page');
        }
        else if (path.includes('contact')) {
            TrackEvent.formView('Contact Form', 'Contact Page');
        }
        else if (path.includes('konsultasi')) {
            TrackEvent.formView('Consultation Form', 'Consultation Page');
        }
    }

    // Track form submissions
    function setupFormTracking() {
        // Find all forms and add submit tracking
        const forms = document.querySelectorAll('form');
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                const formName = form.getAttribute('name') || form.className || 'Unknown Form';
                TrackEvent.formSubmit(formName, form.id || 'form-' + Date.now());
            });
        });
    }

    // Initialize tracking when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            trackPageEvents();
            setupFormTracking();
        });
    } else {
        trackPageEvents();
        setupFormTracking();
    }
})();
