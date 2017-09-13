$(document).ready(function () {
    // carousel main jumbotron
    $(".owl-carousel.main-carousel").owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        animateOut: 'fadeOutLeft',
        animateIn: 'slideInRight',
        autoplay: true,
        autoplayTimeout: 4500,
        autoHeight: true,
        dots: true
    });
    // carousel restaurant photos
    $(".owl-carousel.burger-carousel").owlCarousel({
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })

    //lightbox for burger photos
    $(".burger-zoomers").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 250, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By default it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

});