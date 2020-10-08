/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ./swiper-bundle.esm.browser.min.js ;

function isElementInViewport(el) {
    if (el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

$.fn.isInViewport = function () {
    var top_of_element = $(this).offset().top;
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        // the element is visible, do something
    } else {
        // the element is not visible, do something else
    }
};

function scrollToAnchor(el, time) {
    $('.content').animate({scrollTop: $(el).get(0).offsetTop}, time);
}

let scrolling = false;
const scrollingTime = 1000;

$(document).ready(function () {
    const slideClass = 'content__slide';
    window.addEventListener('wheel', function (e) {
        if (!scrolling) {
            scrolling = true;
            const section = $(e.target).hasClass(slideClass) ? e.target : $(e.target).parents('.' + slideClass);
            let nextSection;
            if(e.deltaY > 0) {
                const nextEl = $(section).next('.' + slideClass);
                nextSection = nextEl.length > 0 ? nextEl : $('.footer');
            } else {
                nextSection = $(section).prev('.' + slideClass);
            }

            if (nextSection.length > 0) {
                scrollToAnchor(nextSection, scrollingTime)
                setTimeout(function () {
                    scrolling = false;
                }, scrollingTime)
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

