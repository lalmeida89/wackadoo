$(document).ready(function () {
	$('.home-slider').slick({
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		adaptiveHeight: true,
		fade: true,
		cssEase: 'linear',
	});
	$('.design-slider').slick({
		lazyLoad: 'ondemand',
		arrows: true,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: false,
		adaptiveHeight: true,
		cssEase: 'linear',
		centerPadding: 0
	});
	$(window).scroll(function () {
		var height = $(window).scrollTop();
		if (height > 50) {
			$('#header').addClass('notTop').removeClass('atTop');
		} else {
			$('#header').removeClass('notTop').addClass('atTop');
		}
	});
	$('.menu-button').click(function (e) {
		if ($('.mobile-nav-container').hasClass('inactive')) {
			$('.mobile-nav-container').removeClass('inactive').addClass('active');
		} else {
			$('.mobile-nav-container').removeClass('active').addClass('inactive');
		}
	})
	$('.mobile-nav-list li').click(function () {
		$('.menu-button').click();
	})
	$('.nav-list li.designs').click(function () {
		$('html, body').animate({ scrollTop: $('#designs').offset().top - 100 }, 'slow');
	})
	$('.nav-list li.about').click(function () {
		$('html, body').animate({ scrollTop: $('#leather').offset().top - 150 }, 'slow');
	})
	$('.nav-list li.contact').click(function () {
		$('html, body').animate({ scrollTop: $('#footer').offset().top }, 'slow');
	})
	$('#header .logo').click(function(){
		$('html, body').animate({ scrollTop: $('#homebanner').offset().top - 200}, 'slow');
	})
})
