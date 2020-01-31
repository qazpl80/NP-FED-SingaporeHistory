// JavaScript source code

$.js = function (el) {
    return $('[data-js=' + el + ']')
};

$(document).ready(function () {
    $.js('carousel').slick({
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
$('button').on('click', function () {
    $('#slider').toggleClass('open');

})