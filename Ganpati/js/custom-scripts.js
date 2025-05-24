/*-------------------------------------------------------------------*/
/* Project: Pakkapati - Flooring Service HTML5 Template */
/* Ver: 1.0.0*/
/* Date: 25-06-2017*/
/* Author: xenioushk*/
/*-------------------------------------------------------------------*/

jQuery(function ($) {

    "use strict";

    // 00. RTL status check.
    var rtl_status = false;
    if ($('html').is('[dir]')) {
        rtl_status = true;
    }

    // DETECT TOUCH DEVICE
    function is_touch_device() {
        return !!('ontouchstart' in window) || (!!('onmsgesturechange' in window) && !!window.navigator.maxTouchPoints);
    }

    // ANIMATIONS //
    function animations() {
        animations = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 30,
            mobile: false,
            live: true
        });
        animations.init();
    }

    // PARALLAX
    if (typeof $.fn.stellar !== 'undefined') {
        if (!is_touch_device()) {
            $(window).stellar({
                horizontalScrolling: false,
                verticalScrolling: true,
                responsive: true,
                verticalOffset: 50
            });
        }
    }

    // SLIDER 1
    function slider_resize() {
        if ($(window).width() > 991) {
            $(".slider-content").first().attr("style", "margin-top: 0px;");
        } else {
            $(".slider-content").first().attr("style", "margin-top: 0px;");
        }
    }

    function hexToRgbA(hex, opacity) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';
        } else {
            return 'rgba("0,0,0,' + opacity + '")';
        }
    }

    // add animate.css class(es) to the elements to be animated
    function setAnimation(_elem, _InOut) {
        // Store all animationend event name in a string.
        // cf animate.css documentation
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        _elem.each(function () {
            var $elem = $(this);
            var $animationType = 'animated ' + $elem.data('animation-' + _InOut);
            $elem.addClass($animationType).one(animationEndEvent, function () {
                $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
            });
        });
    }


    if ($('.slider-wrap')) {
        var $this = $('.slider-wrap');
        if ($this.is('[data-bg_img]')) {
            var bg_img = 'url("' + $this.data('bg_img') + '")';
            $this.css({
                'background-image': bg_img,
                'background-repeat': 'repeat',
                'background-position': 'center center',
                'background-size': 'cover'
            });
        }
    }

    if ($("#slider_1").length) {

        // BG & Color Settings.
        $("#slider_1").find('.slider_item_container').each(function () {
            var $this = $(this);
            var bg_img = "",
                bg_color = "#000000",
                bg_opacity = "0.1";
            if ($this.is('[data-bg_img]')) {
                bg_img = ', url("' + $this.data('bg_img') + '")';
            }
            if ($this.is('[data-bg_color]')) {
                bg_color = $this.data('bg_color');
            }
            if ($this.is('[data-bg_opacity]')) {
                bg_opacity = $this.data('bg_opacity');
            }
            var $color_overlay = hexToRgbA(bg_color, bg_opacity);

            $this.find('.item').before('<div class="slide-bg"></div>');

            $this.find('.slide-bg').attr("style", "background:linear-gradient( " + $color_overlay + ",  " + $color_overlay + " )" + bg_img + "; background-position: center center; background-repeat: no-repeat; background-attachment: inherit; background-size: cover; overflow:hidden;");
        });

        slider_resize();

        $(window).on("resize", function () {
            if ($(window).width() > 767) {
                slider_resize();
            } else {
                $(".slider-content").removeAttr("style");
            }
        });

        // Carousel.
        var $slider_1 = $("#slider_1");
        var $this = $slider_1;
        var items_val = 1,
            bg_effect_val = true,
            nav_val = false,
            dots_val = true,
            autoplay_val = true,
            autoplaytimeout_val = 10000;
        // Status.
        if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {
            $this.removeClass('owl-carousel');
            return '';
        }

        // Status.
        if ($this.attr('data-bg_effect') && !isNaN($this.data('bg_effect'))) {
            bg_effect_val = $this.data('bg_effect');
        }
        // navigation status.
        if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
            nav_val = $this.data('nav');
        }

        // navigation status.
        if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
            dots_val = $this.data('dots');
        }
        // Autoplay status.
        if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
            autoplay_val = $this.data('autoplay');
        }
        // Autoplay status.
        if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
            autoplaytimeout_val = $this.data('autoplaytimeout');
        }

        $slider_1.owlCarousel({
            rtl: rtl_status,
            callbacks: true,
            margin: 0,
            items: items_val,
            loop: true,
            autoplay: autoplay_val,
            autoplayTimeout: autoplaytimeout_val,
            autoplayHoverPause: false,
            dots: dots_val,
            nav: nav_val,
            responsive: {
                0: {
                    items: items_val,
                    nav: false,
                    loop: true,
                    dots: false
                },
                600: {
                    items: items_val,
                    nav: false,
                    loop: true,
                    dots: false
                },
                1000: {
                    items: items_val
                }
            },
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

        var $slider_animation = $slider_1;

        // Fired before current slide change
        $slider_animation.on('change.owl.carousel', function (event) {
            var $currentItem = $('.owl-item', $slider_animation).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-out]");
            setAnimation($elemsToanim, 'out');
        });

        // Fired after current slide has been changed
        $slider_animation.on('changed.owl.carousel', function (event) {
            var $currentItem = $('.owl-item', $slider_animation).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-in]");
            setAnimation($elemsToanim, 'in');
        });

        if (bg_effect_val === true) {
            $slider_animation.on('translated.owl.carousel', function (e) {
                $(".active .slide-bg").addClass("slidezoom");
            });
            $slider_animation.on('translate.owl.carousel', function (e) {
                $(".active .slide-bg").removeClass("slidezoom");
            });
        }
    }

    // STICKY HEADER & MENU
    if ($(".main-header-2").length) {
        if ($(".main-header-2").attr('data-sticky_header')) {
            $('.main-header-2 .navbar-default').waypoint('sticky', {
                wrapper: '<div class="sticky-wrapper" />',
                stuckClass: 'stuck'
            });
        }
    }

    // CUSTOM BACKGROUND.
    if ($(".section-custom-bg").length) {
        $(".section-custom-bg").each(function () {
            var $this = $(this);
            var bg_img = "images/slider/contack-bg.jpg",
                bg_color = "#000000",
                bg_opacity = "0.5",
                bg_color_2 = "#000000",
                bg_opacity_2 = "0.8",
                bg_position = "center center",
                bg_repeat = "no-repeat",
                bg_size = "cover",
                bg_overflow = "hidden",
                bg_attachment = "inherit";

            // Background Image.
            if ($this.is('[data-bg_img]')) {
                bg_img = ', url("' + $this.data('bg_img') + '")';
            } else {
                bg_img = ', url("' + bg_img + '")';
            }

            // Background Color.
            if ($this.is('[data-bg_color]')) {
                bg_color = $this.data('bg_color');
            }

            if ($this.is('[data-bg_opacity]')) {
                bg_opacity = $this.data('bg_opacity');
            }

            var $color_overlay = hexToRgbA(bg_color, bg_opacity);
            $color_overlay_2 = $color_overlay;

            if ($this.is('[data-gardient]') && $this.data('gardient') === true) {
                if ($this.is('[data-bg_color_2]')) {
                    bg_color_2 = $this.data('bg_color_2');
                }

                if ($this.is('[data-bg_opacity_2]')) {
                    bg_opacity_2 = $this.data('bg_opacity_2');
                }
                var $color_overlay_2 = hexToRgbA(bg_color_2, bg_opacity_2);
            }

            // Background Position.
            var $bg_position = "";
            if ($this.is('[data-bg_position]')) {
                $bg_position += 'background-position: ' + $this.data('bg_position') + ';';
            } else {
                $bg_position += 'background-position: ' + bg_position + '; ';
            }

            // Background Repeat.
            var $bg_repeat = "";
            if ($this.is('[data-bg_repeat]')) {
                $bg_repeat += 'background-repeat: ' + $this.data('bg_repeat') + ';';
            } else {
                $bg_repeat += 'background-repeat: ' + bg_repeat + '; ';
            }

            // Background Size.
            var $bg_size = "";
            if ($this.is('[data-bg_size]')) {
                $bg_size += 'background-size: ' + $this.data('bg_size') + ';';
            } else {
                $bg_size += 'background-size: ' + bg_size + '; ';
            }

            // Background Size.
            var $bg_attachment = "";
            if ($this.is('[data-bg_attachment]')) {
                $bg_attachment += 'background-attachment: ' + $this.data('bg_attachment') + ';';
            } else {
                $bg_attachment += 'background-attachment: ' + bg_attachment + '; ';
            }

            // Background Overflow.
            var $bg_overflow = "";
            if ($this.is('[data-bg_overflow]')) {
                $bg_overflow += 'overflow: ' + $this.data('bg_overflow') + ';';
            } else {
                $bg_overflow += 'overflow: ' + bg_overflow + '; ';
            }

            $this.attr("style", "background:linear-gradient( " + $color_overlay + ",  " + $color_overlay_2 + " )" + bg_img + "; " + $bg_position + " " + $bg_repeat + " " + $bg_attachment + " " + $bg_size + " " + $bg_overflow + "");
        });
    }

    // GALLERY.
    if ($('.gallery-light-box').length) {
        $('.gallery-light-box').venobox();
    }

    // FITERABLE GALLERY.
    $(".filter-button").on("click", function () {
        var value = $(this).attr('data-filter');
        if (value === "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            // $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            // $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });

    // GALLERY CAROUSEL   
    if ($(".gallery-carousel").length) {
        var $gallery_carousel = $('.gallery-carousel');
        $gallery_carousel.each(function () {
            var $this = $(this);
            var items_val = 5,
                nav_val = false,
                dots_val = true,
                autoplay_val = true,
                autoplaytimeout_val = 5000;

            // Status.
            if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {
                $this.removeClass('owl-carousel');
                return '';
            }

            // no of items
            if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                items_val = $this.data('items');
            }

            // navigation status.
            if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                nav_val = $this.data('nav');
            }

            // navigation status.
            if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                dots_val = $this.data('dots');
            }

            // Autoplay status.
            if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                autoplay_val = $this.data('autoplay');
            }

            // Autoplay status.
            if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                autoplaytimeout_val = $this.data('autoplaytimeout');
            }

            $this.owlCarousel({
                rtl: rtl_status,
                items: items_val,
                loop: true,
                autoplay: autoplay_val,
                autoplayTimeout: autoplaytimeout_val,
                autoplayHoverPause: true,
                dots: dots_val,
                nav: nav_val,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 2,
                        nav: false
                    },
                    600: {
                        items: 3,
                        nav: false
                    },
                    1000: {
                        items: items_val
                    }
                }
            });
        });
    }

    // COUNTER
    if ($(".counter").length) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    //CLIENTS LOGOS 
    if ($(".logo-items").length) {
        var $logo_items = $('.logo-items');
        $logo_items.each(function () {
            var $this = $(this);
            var items_val = 6,
                nav_val = false,
                dots_val = true,
                autoplay_val = true,
                autoplaytimeout_val = 5000;

            // Status.
            if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {
                $this.removeClass('owl-carousel');
                return '';
            }

            // no of items
            if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                items_val = $this.data('items');
            }

            // navigation status.
            if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                nav_val = $this.data('nav');
            }

            // navigation status.
            if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                dots_val = $this.data('dots');
            }

            // Autoplay status.
            if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                autoplay_val = $this.data('autoplay');
            }

            // Autoplay status.
            if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                autoplaytimeout_val = $this.data('autoplaytimeout');
            }

            $this.owlCarousel({
                rtl: rtl_status,
                items: items_val,
                loop: true,
                autoplay: autoplay_val,
                autoplayTimeout: autoplaytimeout_val,
                autoplayHoverPause: true,
                dots: dots_val,
                nav: nav_val,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 2,
                        nav: false
                    },
                    600: {
                        items: 3,
                        nav: false
                    },
                    1000: {
                        items: items_val
                    }
                }
            });
        });
    }

    // TESTIMONIAL CAROUSEL.
    if ($(".testimonial-container").length) {
        var $testimonial_container = $('.testimonial-container');
        $testimonial_container.each(function () {
            var $this = $(this);
            var items_val = 2,
                nav_val = false,
                dots_val = true,
                autoplay_val = true,
                autoplaytimeout_val = 5000;

            // Status.
            if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {
                $this.removeClass('owl-carousel');
                return '';
            }

            // no of items
            if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                items_val = $this.data('items');
            }

            // navigation status.
            if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                nav_val = $this.data('nav');
            }

            // navigation status.
            if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                dots_val = $this.data('dots');
            }

            // Autoplay status.
            if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                autoplay_val = $this.data('autoplay');
            }

            // Autoplay status.
            if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                autoplaytimeout_val = $this.data('autoplaytimeout');
            }

            $this.owlCarousel({
                rtl: rtl_status,
                items: items_val,
                loop: true,
                autoplay: autoplay_val,
                autoplayTimeout: autoplaytimeout_val,
                autoplayHoverPause: true,
                dots: dots_val,
                nav: nav_val,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: items_val
                    }
                }
            });
        });
    }

    // CONTACT FORM 
    function email_checkRegexp(o, regexp) {
        if (!(regexp.test(o.val()))) {
            return false;
        } else {
            return true;
        }
    }

    //WoW Animation.
    animations();

    // BACK TO TOP BUTTON.
    if ($('#backTop').length === 1) {
        $('#backTop').backTop({
            'theme': 'custom'
        });
    }

    // Go to Specific Section After Load
    function bwl_on_load_scroll() {
        var urlHash = window.location.href.split("#")[1];

        if (typeof urlHash !== 'undefined') {
            var menu_height = $('header').find('.navbar').outerHeight();

            $('html,body').animate({
                scrollTop: $('.' + urlHash + ', #' + urlHash + ',[name=' + urlHash + ']').first().offset().top - parseInt(menu_height)
            }, 1000);
        }
    }

    // PRELOADER
    $(window).on("load", function () {
        if ($("#preloader").length) {
            $("#preloader").fadeOut(500);
        }
        bwl_on_load_scroll();
    });
});