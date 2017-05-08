// owl carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        animateOut: 'fadeOutLeft',
        animateIn: 'slideInRight',
        autoplay: true,
        autoplayTimeout: 4500,
        autoHeight: true
    });
});


$(document).ready(function () {


    //navbar sticky 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky');
            $('#hold-spec').addClass('sticky-burger');
            $('.logo-award-lg').addClass('sticky-award');
        } else {
            $('.navbar').removeClass('sticky');
            $('#hold-spec').removeClass('sticky-burger');
            $('.logo-award-lg').removeClass('sticky-award');
        }
    });


});
