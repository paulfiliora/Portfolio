/* -- Full Screen Viewport Container
   ---------------------------- */

$(window).load(function(){
	$(' .spinner ').addClass(' wow fadeOut animated');
	$(' .preloader ').delay( 800 ).fadeOut(1000); // set duration in brackets
	 wow.init();
});              
/****************************version v1.1*********************/
// niceScroll
jQuery("html").niceScroll({
    scrollspeed: 50,
    mousescrollstep: 38,
    cursorwidth: 7,
    cursorborder: 0,
    cursorcolor: '#932785',
    autohidemode: false,
    zindex: 9999999,
    horizrailenabled: false,
    cursorborderradius: 0
});

//////////////////////////////////////////////////////
//													//
//													//
//	Mobile Navigation Toggle						//
//													//
//													//
//////////////////////////////////////////////////////		


$('.hamburger').click(toggleNav);

function toggleNav() {
	if ( $('.hamburger').hasClass('open') ) {
		$('.navi').hide();
		$('.header').removeClass('solid');
		$('.hamburger').removeClass('open');
		$('.logo').removeClass('mobile');
	} else {
		$('.navi').show();
		$('.header').addClass('solid');
		$('.hamburger').addClass('open');
		$('.logo').addClass('mobile');
		
	}
}
window.addEventListener("resize", myFunction);


function myFunction() {
	// returns width of browser viewport
	if( $(window).width() > 998)
	{
		$('.navi').hide();
		$('.header').removeClass('solid');
		$('.logo').removeClass('mobile');
		$('.hamburger').removeClass('open');
	}
}
//////////////////////////////////////////////////////
//													//
//													//
//	Smooth Scrolling								//
//													//
//													//
//////////////////////////////////////////////////////		



// Add smooth scrolling to all links inside a navbar
$(".see-more a").on('click', function(event){

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash (#)
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    }); // End if statement
  };
 });

$(".navi a").on("click", function(){
   $(".navi").find(".selected").removeClass("selected");
   $(this).addClass("selected");
});



//////////////////////////////////////////////////////
//													//
//													//
//	Full SCREEN VIDEO								//
//													//
//													//
//////////////////////////////////////////////////////		


$('.popup-vimeo, .popup-youtube').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 50,
        preloader: false,
        fixedContentPos: false
});

$(".see-more-button").click(function() {

    $("html, body").animate({
        scrollTop: $(window).scrollTop() + viewportSize.getHeight()
    }, 500, function() {
    	isSmoothScrolling = true;
    });

});



/*=========================*/
     /*========Animation on scroll with wow.js====*/
     /*==========================*/
     
wow = new WOW(
   {
     animateClass: 'animated',
     offset:       30,
     mobile:       true
   }
 );



