/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ./swiper-bundle.esm.browser.min.js ;
//= include ./jquery.waypoints.min.js ;



function scrollToAnchor(el, time) {
    $('.content').animate({scrollTop: $(el).get(0).offsetTop}, time);
}

let scrolling = false;
const scrollingTime = 1000;

$(document).ready(function () {

    var waypoints = $('.js-detect').waypoint(function(direction) {
       const $el = $(this.element);
       const delay = $el.data('delay') || 0;
       setTimeout(function () {
           $el.addClass('active');
       }, +delay);
    }, {
        offset: '75%'
    });



    const slideClass = 'content__slide';

    document.querySelector('.content').addEventListener('wheel', function (e) {

        const scrollTop = document.querySelector('.content').scrollTop;

        if (!scrolling) {
            const section = $(e.target).hasClass(slideClass) ? e.target : $(e.target).parents('.' + slideClass);
            let nextSection;
            if (e.deltaY > 0) {
                const nextEl = $(section).next('.' + slideClass);
                nextSection = nextEl.length > 0 ? nextEl : $('.footer');
            } else {
                nextSection = $(section).prev('.' + slideClass);
            }

            if (nextSection.length > 0) {
                // scrolling = true;
                // scrollToAnchor(nextSection, scrollingTime);
                //
                // setTimeout(function () {
                //     scrolling = false;
                // }, scrollingTime)
            }
        }
    });

    //SLIDER
    let swiper = new Swiper('.service-slider', {
        navigation: {
            nextEl: '.service-slider .swiper-button-next',
            prevEl: '.service-slider .swiper-button-prev',
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
    $('input').change(function () {
        if ($(this).val()) {
            $(this).addClass('has_value');
        } else {
            $(this).removeClass('has_value');
        }
    });
});

