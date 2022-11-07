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
