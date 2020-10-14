/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ./swiper-bundle.esm.browser.min.js ;
//= include ./scrollify.js ;

// CUSTOM SCRIPTS

$(document).ready(function () {
    //SCROLLIfY
    $.scrollify({
        section: ".content__slide",
        scrollSpeed: 1000,
        offset: 0,
        touchScroll: false,
        interstitialSection: ".footer",
        before: function (currIndex, sections) {
            sections.forEach(function (section) {
                section.removeClass('section_active')
            });
            sections[currIndex].addClass('section_active');
        }
    });

    if ($(window.innerWidth) <= 1080) {
        if (!$.scrollify.isDisabled()) {
            $.scrollify.disable();
        }
    } else {
        if ($.scrollify.isDisabled()) {
            $.scrollify.enable();
        }
    }

    $('.nav-services li').each(function (i, item) {
        $(item).css({animationDelay: (i + 1) * 100 + 200 + 'ms'})
    });


    //SIDEBAR OPEN
    let sidebar = $('.sidebar');

    $('.btn-burger').click(function (e) {
        e.preventDefault();
        sidebar.addClass('open-sidebar');
        $.scrollify.disable();
    });

    $('.close').click(function (e) {
        e.preventDefault();
        sidebar.removeClass('open-sidebar');
        $.scrollify.enable();
    });

    //SLIDER

    let swiper = new Swiper('.service-slider', {
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    function getArrowTitles() {
        const slides = $('.service-slider .swiper-slide');
        const prevSlide = slides.get(swiper.activeIndex - 1);
        const nextSlide = slides.get(swiper.activeIndex + 1);

        $('.sticky-prev-name').html(swiper.activeIndex > 0 ? $(prevSlide).find('.section__title').text() : '');
        $('.sticky-next-name').html($(nextSlide).find('.section__title').text() || '');

    }

    getArrowTitles();

    swiper.on('slideChange', function () {
        getArrowTitles();
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
        $.scrollify.disable();
    });

    $("#popup-wrapper, #close-popup").click(function () {
        $("#popup-wrapper").removeClass("active_popup");
        $.scrollify.enable();
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