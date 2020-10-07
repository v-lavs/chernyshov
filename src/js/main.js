/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ./swiper-bundle.esm.browser.min.js ;

$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-slide__heading .swiper-button-next',
            prevEl: '.swiper-slide__heading .swiper-button-prev',
        },
    });
});