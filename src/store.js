/* eslint-disable no-undef */
import Vue from 'vue';
import Vuex from 'vuex';
import sendRequest from "./webSocket";
// import startAnimate from "./static/js/myMain.js";

Vue.use(Vuex);

const startAnimate = function () {
	setTimeout(function () {
		"use strict"; // start of use strict

		/*==============================
		Preloader
		==============================*/
		$(window).on('load', function () {
			$('body').imagesLoaded(function () {
				$('.preloader').fadeOut();
			});
		});

		/*==============================
		Animation
		==============================*/
		$('.animate').scrolla({
			once: true, // only once animation play on scroll
			mobile: false, // disable animation on mobiles 
		});

		/*==============================
		Mobile navigation
		==============================*/
		// $('.header__btn').on('click', function () {
		// 	console.log("Hello1");
		// 	$(this).toggleClass('header__btn--active');
		// 	$('.header__nav').toggleClass('header__nav--active');

		// 	if ($(window).scrollTop() == 0) {
		// 		$('.header').toggleClass('header--active');
		// 	}
		// 	console.log("Hello2");
		// });

		/*==============================
		Header
		==============================*/
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 0) {
				$('.header').addClass("header--active");
			} else {
				$('.header').removeClass("header--active");
			}
		});

		/*==============================
		Home slider
		==============================*/
		$('.home__slider').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			mouseDrag: false,
			dots: false,
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 6000,
		});

		$('.home__slider .item').each(function () {
			if ($(this).attr("data-bg")) {
				$(this).css({
					'background': 'url(' + $(this).data('bg') + ')',
					'background-position': 'center center',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
			}
		});

		/*==============================
		Section background img
		==============================*/
		$('.section--bg').each(function () {
			if ($(this).attr("data-bg")) {
				$(this).css({
					'background': 'url(' + $(this).data('bg') + ')',
					'background-position': 'center center',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
			}
		});

		/*==============================
		Partners slider
		==============================*/
		$('.partners__slider').owlCarousel({
			mouseDrag: false,
			dots: false,
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 500,
			responsive: {
				0: {
					items: 2,
					margin: 20
				},
				768: {
					items: 4,
					margin: 20
				},
				992: {
					items: 5,
					margin: 25
				},
				1200: {
					items: 6,
					margin: 30
				}
			}
		});

		/*==============================
		Team slider
		==============================*/
		$('.team').owlCarousel({
			center: true,
			mouseDrag: false,
			dots: false,
			loop: true,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 500,
			responsive: {
				0: {
					items: 2,
					margin: 20
				},
				768: {
					items: 4,
					margin: 20
				},
				992: {
					items: 4,
					margin: 30
				},
				1200: {
					items: 4,
					margin: 60
				},
				1600: {
					items: 4,
					margin: 80
				}
			}
		});

		/*==============================
		Counter
		==============================*/
		$('.counter__value').counterUp({
			delay: 10,
			time: 800
		});

		/*==============================
		Ticker
		==============================*/
		$('.ticker').marquee({
			pauseOnHover: true,
			duplicated: true,
			duration: 18000,
			gap: 0,
			startVisible: true
		});

		/*==============================
		Smooth scroll
		==============================*/
		var scroll = new SmoothScroll('[data-scroll]', {
			ignore: '[data-scroll-ignore]',
			header: '.header',
			speed: 600,
			offset: -10,
			easing: 'easeInOutCubic',
		});

		/*==============================
		Modal
		==============================*/
		/* video modal */
		$('.video__btn').magnificPopup({
			removalDelay: 200,
			type: 'iframe',
			preloader: false,
			mainClass: 'animated fadeIn'
		});

		/* form modal */
		$('.modal-btn').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true,
			mainClass: 'animated fadeIn'
		});
		$(document).on('click', '.modal__close', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	}, 0);
};

export default new Vuex.Store({
  state: {
    sendRequest,
    startAnimate,
    User: null,
    homePage: {
      coins: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      info: {},
      timeIntervalUpdate: 60 * 1000,
      intervalUpdate: "",
      partners: [
        "https://www.cryptocompare.com/media/19633/btc.png",
        "https://www.cryptocompare.com/media/19782/litecoin-logo.png",
        "https://www.cryptocompare.com/media/34477776/xrp.png",
        "https://www.cryptocompare.com/media/20696/str.png",
        "https://www.cryptocompare.com/media/1383672/usdt.png",
        "https://www.cryptocompare.com/media/20646/eth_logo.png",
        "https://www.cryptocompare.com/media/1383652/eos_1.png",
        "https://www.cryptocompare.com/media/1383919/12-bitcoin-cash-square-crop-small-grn.png",
        "https://www.cryptocompare.com/media/34477805/trx.jpg",
        "https://www.cryptocompare.com/media/12318177/ada.png"
      ]
    },
    personalPage: {
      coins: [],
      timeIntervalUpdate: 60 * 1000,
      intervalUpdate: ""
    },
    marketPage: {
      coins: [],
      timeIntervalUpdate: 60 * 1000,
      intervalUpdate: ""
    },
    historyPage: {
      coins: {
        purchasesTable: [],
        salesTable: []
      },
      timeIntervalUpdate: 60 * 1000,
      intervalUpdate: ""
    },
    allCoins: [
      'BTC',
      'LTC',
      'XRP',
      'XLM',
      'USDT',
      'ETH',
      'EOS',
      'BCH',
      'TRX',
      'ADA'
    ]
  },
  mutations: {},
  actions: {}
});
