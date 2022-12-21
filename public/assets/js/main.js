$(document).ready(function () {
    //* add box-shadow to header when scrolling functionality
    $(window).scroll(() => {
        $(this).scrollTop() > 0 ? $('.navbar').addClass('navbar_shadow') : $('.navbar').removeClass('navbar_shadow');
    });

    //* hover list header functionality
    $('.navbar-light .dmenu').hover(
        function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        },
        function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105);
        },
    );

    //* to top button functionality
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
    // Assign some jquery elements we'll need
    const $swiper = $('.swiper-container');
    const $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    const $bottomSlideContent = null; // Slide content that gets passed between the
    // panning slide stack and the position 'behind'
    // the stack, needed for correct animation style

    const mySwiper = new Swiper('.swiper-container', {
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

    //* Giai Phap Tong The form section
    $('.giai-phap-tong-the-section .label').each(function (index) {
        $(this).click(() => {
            $('.giai-phap-tong-the-section .label').removeClass('selected');
            document.querySelector('.giai-phap-tong-the-section .list.list-selected').classList.remove('list-selected');

            $(this).addClass('selected');
            document.querySelectorAll('.giai-phap-tong-the-section .list')[index].classList.add('list-selected');
        });
    });

    //* Thong tin bao chi section
    const NewspaperInfo = [
        {
            content: ['Thương hiệu mạnh giúp doanh nghiệp tăng lợi thế cạnh tranh'],
        },
        {
            content: ['Sao Kim Branding - 15 năm nâng tầm thương hiệu Việt'],
        },
        {
            content: ['Sao Kim Branding - Xây dựng thương hiệu doanh nghiệp theo mô hình Corporate Branding'],
        },
        {
            content: ['Bài toán trong xây dựng thương hiệu theo mô hình Corporate Branding'],
        },
        {
            content: ['4 Bước giúp doanh nghiệp xây dựng thương hiệu'],
        },
        {
            content: ['9 việc Brand manager cần quan tâm trong năm 2021'],
        },
        {
            content: ['Thương hiệu số là gì và vai trò của nó'],
        },
        {
            content: [
                '9 việc Brand manager cần quan tâm trong 2021',
                'Xây dựng thương hiệu, cửa sáng tương lai ngành nông sản',
                'Top 13 website thiết kế logo nhất định nên thử',
                'Digital Branding: Thương hiệu Việt và cuộc chiến khẳng định vị thế trong kỷ nguyên số',
                'Digital Branding: Thương hiệu Việt và cuộc chiến khẳng định vị thế trong kỷ nguyên số',
                'Thương hiệu số là gì và vai trò của nó',
                'Thiết kế profile công ty một cách chuyên nghiệp, tất cả những gì bạn cần biết!',
                '6 bước nâng cao trải nghiệm thương hiệu trên nền tảng số',
                '12 cách dùng màu sắc để “phù phép” cho website (tất cả các ngành hàng)',
            ],
        },
        {
            content: ['CEO Nguyễn Thanh Tuấn: Khởi nghiệp tinh gọn'],
        },
    ];

    $('.newspapers-info-section img').each(function (index) {
        $(this).click(() => {
            //* change the opacity logo
            $('.newspapers-info-section .img_selected').removeClass('img_selected');
            $(this).addClass('img_selected');
            const newLeft = document.querySelector('.newspapers-info-section .img_selected').offsetLeft;
            const newWidth = document.querySelector('.newspapers-info-section .img_selected').offsetWidth;

            $('.newspapers-info-section .line').css('left', `${newLeft}px`);
            $('.newspapers-info-section .line').css('width', `${newWidth}px`);

            //* change the text content below
            const text = NewspaperInfo[index].content.map((item) => `<li class="col-5">${item}</li>`);
            $('.newspapers-info-section ul').html(text);
        });
    });

    // * logo cooperate company section
    const swiper = new Swiper('.logo-cooperate-section', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            autoplay: true,
            delay: 5000,
        },
        keyboard: {
            keyboard: true,
            enabled: true,
            onlyInViewport: false,
        },
    });
});
