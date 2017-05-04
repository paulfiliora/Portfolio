/* -- Full Screen Viewport Container
   ---------------------------- */

$(window).load(function(){
	 wow.init();
});              

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



