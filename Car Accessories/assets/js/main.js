(function ($) {
	'use strict';
	/*----------------------------------------*/
	/*  Preloader  
	/*----------------------------------------*/
	var windows = $(window);
	windows.on('load', function () {
		$(".preloader-activate").removeClass('preloader-active');
	});
	jQuery(window).on('load', function () {
		setTimeout(function () {
			jQuery('.open_tm_preloader').addClass('loaded');
		}, 1000);
	});

	/*----------------------------------------*/
	/*  Check if element exists
	/*----------------------------------------*/
	$.fn.elExists = function () {
		return this.length > 0;
	};

	/*-- Custom script to call Background
		Image & Color from html data attribute
	-----------------------------------*/
	$('[data-bg-image]').each(function () {
		var $this = $(this),
			$image = $this.data('bg-image');
		$this.css('background-image', 'url(' + $image + ')');
	});
	$('[data-bg-color]').each(function () {
		var $this = $(this),
			$color = $this.data('bg-color');
		$this.css('background-color', $color);
	});

	/*----------------------------------------*/
	/*  WOW
	/*----------------------------------------*/
	new WOW().init();

	/*---------------------------------------*/
	/*  Header Sticky
	/* ---------------------------------------*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			$('.header-sticky').addClass('sticky');
		} else {
			$('.header-sticky').removeClass('sticky');
		}
	});

	/*---------------------------------*/
	/*  Swiper All Slider
	/*---------------------------------*/

	/* ---Main Slider--- */
	if ($('.main-slider').elExists()) {
		var swiper = new Swiper('.main-slider', {
			loop: true,
			slidesPerView: 1,
			speed: 750,
			autoplay: {
				delay: 4000
			},
			effect: "coverflow",
			coverflowEffect: {
				rotate: 30,
				slideShadows: false,
			},
			navigation: {
				nextEl: '.custom-button-next',
				prevEl: '.custom-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: 'bullets'
			},
		});
	}
	$(".main-slider").hover(function () {
		(this).swiper.autoplay.stop();
	}, function () {
		(this).swiper.autoplay.start();
	});


	/* --- Product Slider--- */
	if ($('.product-slider').elExists()) {
		var mySwiper = new Swiper('.product-slider', {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: '.product-button-next',
				prevEl: '.product-button-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1501: {
					slidesPerView: 4,
				}
			}
		});
	}


	/* --- Testimonial Sliderr--- */
	if ($('.testimonial-slider').elExists()) {
		var mySwiper = new Swiper('.testimonial-slider', {
			preventInteractionOnTransition: true,
			slidesPerView: 3,
			spaceBetween: 40,
			loop: true,
			navigation: {
				nextEl: '.testimonial-button-next',
				prevEl: '.testimonial-button-prev',
			},
			pagination: {
				el: '.testimonial-pagination',
				clickable: true,
				type: 'bullets'
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					centeredSlides: false,
					centeredSlidesBounds: false,
				},
				768: {
					slidesPerView: 2,
					centeredSlides: false,
					centeredSlidesBounds: false,
				},
				992: {
					slidesPerView: 2,
					centeredSlides: false,
					centeredSlidesBounds: false,
				},
				1200: {
					slidesPerView: 3,
					centeredSlides: true,
					centeredSlidesBounds: true,
				}
			}
		});
	}

	/* --- Brand Slider--- */
	if ($('.brand-slider').elExists()) {
		var mySwiper = new Swiper('.brand-slider', {
			slidesPerView: 6,
			spaceBetween: 120,
			loop: true,
			speed: 750,
			autoplay: {
				delay: 4000
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				480: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 6,
				}
			}
		});
	}

	/*----------------------------------------*/
	/*  Countdown
	/*----------------------------------------*/
	function makeTimer($endDate, $this, $format) {
		var today = new Date();
		var BigDay = new Date($endDate),
			msPerDay = 24 * 60 * 60 * 1000,
			timeLeft = (BigDay.getTime() - today.getTime()),
			e_daysLeft = timeLeft / msPerDay,
			daysLeft = Math.floor(e_daysLeft),
			e_hrsLeft = (e_daysLeft - daysLeft) * 24,
			hrsLeft = Math.floor(e_hrsLeft),
			e_minsLeft = (e_hrsLeft - hrsLeft) * 60,
			minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60),
			e_secsLeft = (e_minsLeft - minsLeft) * 60,
			secsLeft = Math.floor((e_minsLeft - minsLeft) * 60);

		var yearsLeft = 0;
		var monthsLeft = 0
		var weeksLeft = 0;

		if ($format != 'short') {
			if (daysLeft > 365) {
				yearsLeft = Math.floor(daysLeft / 365);
				daysLeft = daysLeft % 365;
			}

			if (daysLeft > 30) {
				monthsLeft = Math.floor(daysLeft / 30);
				daysLeft = daysLeft % 30;
			}
			if (daysLeft > 7) {
				weeksLeft = Math.floor(daysLeft / 7);
				daysLeft = daysLeft % 7;
			}
		}

		var yearsLeft = yearsLeft < 10 ? "0" + yearsLeft : yearsLeft,
			monthsLeft = monthsLeft < 10 ? "0" + monthsLeft : monthsLeft,
			weeksLeft = weeksLeft < 10 ? "0" + weeksLeft : weeksLeft,
			daysLeft = daysLeft < 10 ? "0" + daysLeft : daysLeft,
			hrsLeft = hrsLeft < 10 ? "0" + hrsLeft : hrsLeft,
			minsLeft = minsLeft < 10 ? "0" + minsLeft : minsLeft,
			secsLeft = secsLeft < 10 ? "0" + secsLeft : secsLeft,
			yearsText = yearsLeft > 1 ? 'years' : 'year',
			monthsText = monthsLeft > 1 ? 'months' : 'month',
			weeksText = weeksLeft > 1 ? 'weeks' : 'week',
			daysText = daysLeft > 1 ? 'days' : 'day',
			hourText = hrsLeft > 1 ? 'hrs' : 'hr',
			minsText = minsLeft > 1 ? 'mins' : 'min',
			secText = secsLeft > 1 ? 'secs' : 'sec';

		var $markup = {
			wrapper: $this.find('.countdown__item'),
			year: $this.find('.yearsLeft'),
			month: $this.find('.monthsLeft'),
			week: $this.find('.weeksLeft'),
			day: $this.find('.daysLeft'),
			hour: $this.find('.hoursLeft'),
			minute: $this.find('.minsLeft'),
			second: $this.find('.secsLeft'),
			yearTxt: $this.find('.yearsText'),
			monthTxt: $this.find('.monthsText'),
			weekTxt: $this.find('.weeksText'),
			dayTxt: $this.find('.daysText'),
			hourTxt: $this.find('.hoursText'),
			minTxt: $this.find('.minsText'),
			secTxt: $this.find('.secsText')
		}

		var elNumber = $markup.wrapper.length;
		$this.addClass('item-' + elNumber);
		$($markup.year).html(yearsLeft);
		$($markup.yearTxt).html(yearsText);
		$($markup.month).html(monthsLeft);
		$($markup.monthTxt).html(monthsText);
		$($markup.week).html(weeksLeft);
		$($markup.weekTxt).html(weeksText);
		$($markup.day).html(daysLeft);
		$($markup.dayTxt).html(daysText);
		$($markup.hour).html(hrsLeft);
		$($markup.hourTxt).html(hourText);
		$($markup.minute).html(minsLeft);
		$($markup.minTxt).html(minsText);
		$($markup.second).html(secsLeft);
		$($markup.secTxt).html(secText);
	}

	if ($('.countdown').elExists()) {
		$('.countdown').each(function () {
			var $this = $(this);
			var $endDate = $(this).data('countdown');
			var $format = $(this).data('format');
			setInterval(function () {
				makeTimer($endDate, $this, $format);
			}, 0);
		});
	}

	/*-------------------------------------- */
	/* Toolbar Button
	/* ------------------------------------- */
	var $overlay = $('.global-overlay');
	$('.toolbar-btn').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		var target = $this.attr('href');
		var prevTarget = $this.parent().siblings().children('.toolbar-btn').attr('href');
		$(target).toggleClass('open');
		$(prevTarget).removeClass('open');
		$($overlay).addClass('overlay-open');
	});

	/*----------------------------------------*/
	/*  Click on Documnet
	/*----------------------------------------*/
	var $body = $('.global-overlay');

	$body.on('click', function (e) {
		var $target = e.target;
		var dom = $('.main-wrapper').children();

		if (!$($target).is('.toolbar-btn') && !$($target).parents().is('.open')) {
			dom.removeClass('open');
			dom.find('.open').removeClass('open');
			$overlay.removeClass('overlay-open');
		}
	});

	/*----------------------------------------*/
	/*  Close Button Actions
	/*----------------------------------------*/
	$('.button-close').on('click', function (e) {
		var dom = $('.main-wrapper').children();
		e.preventDefault();
		var $this = $(this);
		$this.parents('.open').removeClass('open');
		dom.find('.global-overlay').removeClass('overlay-open');
	});

	/*----------------------------------------*/
	/*  Offcanvas
	/*----------------------------------------*/
	var $offcanvasNav = $('.mobile-menu, .offcanvas-minicart_menu'),
		$offcanvasNavWrap = $(
			'.mobile-menu_wrapper, .offcanvas-minicart_wrapperm, .offcanvas-search_wrapper'
		),
		$offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu'),
		$menuToggle = $('.menu-btn'),
		$menuClose = $('.button-close');

	$offcanvasNavSubMenu.slideUp();

	$offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
		var $this = $(this);
		if (
			$this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
			($this.attr('href') === '#' || $this.attr('href') === '' || $this.hasClass('menu-expand'))
		) {
			e.preventDefault();
			if ($this.siblings('ul:visible').length) {
				$this.siblings('ul').slideUp('slow');
			} else {
				$this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
				$this.closest('li').siblings('li').removeClass('menu-open');
				$this.siblings('ul').slideDown('slow');
				$this.parent().siblings().children('ul').slideUp();
			}
		}
		if ($this.is('a') || $this.is('span') || $this.attr('class').match(/\b(menu-expand)\b/)) {
			$this.parent().toggleClass('menu-open');
		} else if ($this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/)) {
			$this.toggleClass('menu-open');
		}
	});

	$('.button-close').on('click', function (e) {
		e.preventDefault();
		$('.mobile-menu .sub-menu').slideUp();
		$('.mobile-menu .menu-item-has-children').removeClass('menu-open');
	})

	/*-------------------------------- */
	/*  Scroll To Top
	/* ------------------------------- */
	function scrollToTop() {
		var $scrollUp = $('.scroll-to-top'),
			$lastScrollTop = 0,
			$window = $(window);

		$window.on('scroll', function () {
			var topPos = $(this).scrollTop();
			if (topPos > $lastScrollTop) {
				$scrollUp.removeClass('show');
			} else {
				if ($window.scrollTop() > 200) {
					$scrollUp.addClass('show');
				} else {
					$scrollUp.removeClass('show');
				}
			}
			$lastScrollTop = topPos;
		});

		$scrollUp.on('click', function (evt) {
			$('html, body').animate({
				scrollTop: 0
			}, 600);
			evt.preventDefault();
		});
	}

	scrollToTop();

	/*--------------------------------
	/*  Hash Link Scroll To Top Prevent
	/* -------------------------------- */
	$('a[href="#"]').on('click', (function (e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
	}));


})(jQuery);


/*--------------------------------
	Product Categories / Tablinks
-------------------------------- */
function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultCar" and click on it
document.getElementById("defaultCar").click();
