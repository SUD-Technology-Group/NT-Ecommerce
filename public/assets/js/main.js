//add box-shadow to header when scrolling
$(window).scroll(() => {
    $(this).scrollTop() > 0 ? $('.navbar').addClass('navbar_shadow') : $('.navbar').removeClass('navbar_shadow');
});

//hover list header
$(document).ready(function () {
    $('.navbar-light .dmenu').hover(
        function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        },
        function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105);
        },
    );
});

//to top button
$(function () {
    // previous detection logic
    $('.to-top-btn').on('click', function () {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            200,
        );
    });
});

$(document).ready(function () {
    // Assign some jquery elements we'll need
    var $swiper = $('.swiper-container');
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    var $bottomSlideContent = null; // Slide content that gets passed between the
    // panning slide stack and the position 'behind'
    // the stack, needed for correct animation style

    var mySwiper = new Swiper('.swiper-container', {
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
