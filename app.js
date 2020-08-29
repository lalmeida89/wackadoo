$(document).ready(function () {
	$('.home-slider').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		adaptiveHeight: true,
		fade: true,
		cssEase: 'linear'
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
})