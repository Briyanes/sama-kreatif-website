/**
 * Testimonials Carousel Initialization
 * Uses Slick Slider for responsive testimonial carousel
 */

(function($) {
    'use strict';

    $(document).ready(function() {
        // Initialize Testimonials Carousel
        if ($('.testimonials-carousel').length) {
            $('.testimonials-carousel').slick({
                dots: true,
                arrows: true,
                infinite: true,
                speed: 600,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: true,
                adaptiveHeight: true,
                prevArrow: '<button type="button" class="testimonial-nav prev"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="testimonial-nav next"><i class="fas fa-chevron-right"></i></button>',
                appendDots: '.testimonials-container',
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true,
                            adaptiveHeight: true
                        }
                    }
                ]
            });

            // Track testimonial interactions for analytics
            $('.testimonials-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                if (typeof TrackEvent !== 'undefined') {
                    TrackEvent.customEvent('testimonial_view', {
                        slide_index: nextSlide,
                        total_slides: slick.slideCount
                    });
                }
            });

            // Track testimonial author clicks
            $('.testimonial-author').on('click', function() {
                const authorName = $(this).find('.author-name').text();
                if (typeof TrackEvent !== 'undefined') {
                    TrackEvent.customEvent('testimonial_author_click', {
                        author_name: authorName
                    });
                }
            });
        }

        // Add animation on scroll
        const testimonialsSection = $('.testimonials-section');
        if (testimonialsSection.length) {
            const observerOptions = {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        testimonialsSection.addClass('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            observer.observe(testimonialsSection[0]);
        }

        // Star rating hover effect
        $('.star-rating .star').on('mouseenter', function() {
            const index = $(this).index();
            $(this).siblings('.star').slice(0, index).addClass('hovered');
        }).on('mouseleave', function() {
            $(this).siblings('.star').removeClass('hovered');
        });

        // Add smooth fade-in for testimonials
        $('.testimonial-item').each(function(index) {
            $(this).css('animation-delay', (index * 0.1) + 's');
        });
    });

})(jQuery);
