$(document).ready(function () {
    $(this).scrollTop(0);

    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        const parallaxOffset = -scrollY * 0.05;
        const parallaxBgOffset = -scrollY * 0.03;
        $('.parallax').css('transform', `translateY(${parallaxOffset}px)`);
        $('.parallax-bg').css('transform', `translateY(${parallaxBgOffset}px)`);
    });

    const swiper = new Swiper('.swiper.landing-page-swiper', {
        speed: 1000,
        autoplay: true,
        loop: true,
        spaceBetween: 100,
        draggable: false,
        allowTouchMove: false,
        pagination: {
            el: '.landing-page-pagination',
            clickable: true,
        },
        effect: 'fade',
    });

    $('.menu-item-has-children')
        .on("mouseenter", function () {
            $(this).find('.sub-menu').show();
        })
        .on("mouseleave", function () {
            $(this).find('.sub-menu').hide();
        });

    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 40) {
            $("header").addClass('scrolled');
        } else {
            $("header").removeClass('scrolled');
        }
    });
    
});