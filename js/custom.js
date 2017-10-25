/* -- Full Screen Viewport Container
   ---------------------------- */

$(window).load(function () {
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

//	Mobile Navigation//

$('.hamburger').click(toggleNav);

function toggleNav() {
  if ($('.hamburger').hasClass('open')) {
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
window.addEventListener("resize", resizeCheck);


function resizeCheck() {
  if ($(window).width() > 998) {
    $('.navi').hide();
    $('.header').removeClass('solid');
    $('.logo').removeClass('mobile');
    $('.hamburger').removeClass('open');
  }
}


// Define smooth scrolling behavior to all links inside a navbar
$(".smoothScroll").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function () {
      window.location.hash = hash;
    });
  };
});

$(".navi a").on("click", function () {
  $(".navi").find(".selected").removeClass("selected");
  $(this).addClass("selected");
});

/*========Animation on scroll with wow.js====*/
wow = new WOW(
  {
    animateClass: 'animated',
    offset: 30,
    mobile: true
  }
);