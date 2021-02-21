$('.page-scroll').on('click', function(e) {
	let href = $(this).attr('href');
	let elementHref = $(href);

	$('html, body').animate({
		scrollTop: elementHref.offset().top - 50
	}, 1000, 'easeInOutExpo');
	e.preventDefault();
});

$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
	let wScroll = $(this).scrollTop();
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	if (wScroll > $('.portfolio').offset().top - 250) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
			$('.portfolio .thumbnail').eq(i).addClass('muncul');		
			}, 300 * (i+1));
		});
	}
});