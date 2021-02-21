$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({
      indicators: true,
      height: 500,
      duration: 600,
      interval: 3000
    });
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy({
    	scrollOffset: 50
    });
});