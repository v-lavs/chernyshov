/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ./swiper-bundle.esm.browser.min.js ;
//= include ./scrollify.js ;

$(document).ready(function () {
    $('.nav-services li').each(function (i, item) {
        $(item).css({animationDelay: (i + 1) * 100 + 200 + 'ms'})
    });


    //SCROLLIfY
    // if ($(window).width() > 1080 && $('body').hasClass('home')) {
        $.scrollify({
            section: ".content__slide, .footer",
            scrollSpeed: 1100,
            offset: 0,
            touchScroll:true,
            standardScrollElements: ".footer",
             before: function (currIndex, sections) {
                sections.forEach(function (section) {
                    section.removeClass('section_active')
                });
                sections[currIndex].addClass('section_active');
            }
        });
    // }





    //SIDEBAR OPEN
    var sidebar = $('.sidebar');

    $('.btn-burger').click(function (e) {
        e.preventDefault();
        sidebar.addClass('open-sidebar');

    });

    $('.close').click(function (e) {
        e.preventDefault();
        sidebar.removeClass('open-sidebar');

    });

    //SLIDER
    let swiper = new Swiper('.service-slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.nav-services a').click(function (e) {
        e.preventDefault();
        const index = $(e.target).parent().data('slide');

        if ($('.service-slider').length > 0) {
            $('html, body').animate({
                scrollTop: $('.service-slider').offset().top
            }, 750);
        }
        swiper.slideTo(+index);
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

