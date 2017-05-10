// owl carousel
$(document).ready(function () {
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
});
