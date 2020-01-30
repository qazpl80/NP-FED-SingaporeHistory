$(document).ready(function () {
    "use strict";

    
    $('#jap-slider').on('slide.bs.carousel', function () {
        $("#moving-text").Morphext({
            animation: "fadeInDown",
            separator: ",",
            speed: 4000 
        });
    })

    
    $('#jap-slider').carousel({
        interval: 4000,
        pause: false
    })
});