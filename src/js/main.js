/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ./swiper-bundle.esm.browser.min.js ;

$(document).ready(function () {

    //SLIDER
    let swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-slide__heading .swiper-button-next',
            prevEl: '.swiper-slide__heading .swiper-button-prev',
        },
    });

     // POPUP
    $(".popup-trigger").click(function (e) {
        e.preventDefault();

        $("#popup-wrapper").addClass("active_popup");

    });

    $("#popup-wrapper, #close-popup").click(function (e) {
        $("#popup-wrapper").removeClass("active_popup");

    });

    $(".modal").click(function (e) {
        e.stopPropagation();
    });

     // TOP PLACEHOLDER
    $('input').change(function() {
        if ($(this).val())
            $(this).addClass('has_value');
        else
            $(this).removeClass('has_value');
    });
});

