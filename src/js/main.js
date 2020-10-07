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


     // TOP PLACEHOLDER

    // $('.custom-input').on('input', function () {
    //     let $this = $(this);
    //     if ($this.val() === '') {
    //         $this.removeClass('custom-input-filled');
    //     } else {
    //         $this.addClass('custom-input-filled');
    //     }
    // });
    $('input').change(function() {
        if ($(this).val())
            $(this).addClass('has_value');
        else
            $(this).removeClass('has_value');
    });
});

