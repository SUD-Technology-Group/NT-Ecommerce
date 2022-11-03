//add box-shadow to header when scrolling
$(window).scroll(() => {
    $(this).scrollTop() > 0 ? $('header').addClass('header_shadow') : $('header').removeClass('header_shadow');
});
