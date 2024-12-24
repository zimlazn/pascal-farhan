(function ($) {
    "use strict";

    $(document).ready(function($){
        
        // testimonial sliderss
        $(".testimonial-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:false,
                    loop:true
                }
            }
        });

        // homepage slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true
                },
                600:{
                    items:1,
                    nav:true,
                    loop:true
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true
                }
            }
        });

        // logo carousel
        $(".logo-carousel-inner").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 30,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                    loop:true
                }
            }
        });

        // count down
        if($('.time-countdown').length){  
            $('.time-countdown').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' + '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'));
            });
         });
        }

        // projects filters isotop
        $(".product-filters li").on('click', function () {
            
            $(".product-filters li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');

            $(".product-lists").isotope({
                filter: selector,
            });
            
        });
        
        // isotop inner
        $(".product-lists").isotope();

        // magnific popup
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // light box
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
        });

        // homepage slides animations
        $(".homepage-slider").on("translate.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").removeClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

        $(".homepage-slider").on("translated.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").addClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

       

        // stikcy js
        $("#sticker").sticky({
            topSpacing: 0
        });

        //mean menu
        $('.main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });
        
         // search form
        $(".search-bar-icon").on("click", function(){
            $(".search-area").addClass("search-active");
        });

        $(".close-btn").on("click", function() {
            $(".search-area").removeClass("search-active");
        });
    
    });


    //jQuery(window).on("load",function(){
        //jQuery(".loader").fadeOut(1000);
    //});

    // Wait for the document to be fully loadedd
    window.addEventListener("load", function() {
        // Set a timeout for 3 seconds (3000 milliseconds)
        setTimeout(function() {
            // Apply fade-out effect to the loader container
            document.querySelector('.loader-container').style.opacity = '0'; 
            
            // After the fade-out animation, hide the loader completely and show the content
            setTimeout(function() {
                document.querySelector('.loader-container').style.display = 'none'; // Hide loader
                document.querySelector('.contenta').style.display = 'block'; // Show content
            }, 1000); // Time for the fade-out effect to complete (1 second)
        }, 1500); // 3 seconds delay before fade-out starts
    });

    (function ($) {
    "use strict";

    $(document).ready(function($){
        
        // kode lain yang sudah ada di sini ...

        // Wait for the document to be fully loaded
        window.addEventListener("load", function() {
            // Set a timeout for 1.5 seconds before starting fade-out
            setTimeout(function() {
                // Apply fade-out effect to the loader container
                document.querySelector('.loader-container').style.opacity = '0'; 
                
                // After the fade-out animation, hide the loader completely and show the content
                setTimeout(function() {
                    document.querySelector('.loader-container').style.display = 'none'; // Hide loader
                    document.querySelector('.contenta').style.display = 'block'; // Show content
                    
                    // Show the custom alert popup
                    $('#popup-alert').fadeIn();
                }, 1000); // 1 second for the fade-out effect to complete
            }, 1500); // 1.5 second delay before fade-out starts
        });

        // Handling the "OK" button click to hide the popup
        $('#popup-ok-btn').on('click', function() {
            $('#popup-alert').fadeOut(); // Hide popup when "OK" is clicked
        });

    });

})(jQuery);


}(jQuery));

$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
      type: 'iframe'
    });
  });

  document.querySelector('.secret-button').addEventListener('click', function() {
    window.location.href = '../cry/';
});