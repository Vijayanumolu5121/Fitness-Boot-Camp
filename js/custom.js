
$(window).load(function(){
    $('.preloader').fadeOut(1000);  
});

$(document).ready(function() {

$('.main-navigation').onePageNav({
        scrollThreshold: 0.2,
        scrollOffset: 75,
        filter: ':not(.external)',
        changeHash: true
    }); 

    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '0',
            "top": '-75'
        });
    }
    
$('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


$(function() {
        $('.navbar-default a, #home a, #overview a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


 function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#overview').parallax("100%", 0.3);
    $('#trainer').parallax("100%", 0.2);
    $('#newsletter').parallax("100%", 0.3);
    $('#blog').parallax("100%", 0.1);
    $('#price').parallax("100%", 0.2);
    $('#testimonial').parallax("100%", 0.2);

  }
  initParallax();

$(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
       "images/slider-img1.jpg", 
       "images/slider-img2.jpg",
       "images/slider-img3.jpg",
        ],  {duration: 2000, fade: 750});
    });
  })


 $(document).ready(function() {
    $("#owl-testimonial").owlCarousel({
      autoPlay: 6000,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
    });
  });


new WOW({ mobile: false }).init();

  });

