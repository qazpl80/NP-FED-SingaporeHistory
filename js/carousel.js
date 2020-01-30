// JavaScript source code
$(document).ready(function slick() {
    $.js('timeline-carousel').slick({
        infinite: true,
        arrows: false,
        dotsClass: 'slick-dots',
        dots: true,
        autoplay: false,
        swipe: true,
        speed: 1100,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
})
