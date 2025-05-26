// OPEN STREET MAP INIT

function initMap() {
    const location = { lat: 6.669495293032142, lng: 3.3672108055884826 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: location,
        mapTypeControl: false,
        styles: [
            { featureType: "poi", stylers: [{ visibility: "off" }] },
            { featureType: "transit", stylers: [{ visibility: "off" }] }
        ]
    });

    new google.maps.Marker({
        position: location,
        map: map,
        icon: {
            path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
            fillColor: "#ff7b3d",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            anchor: new google.maps.Point(0, 20),
        }
    });

    class LabelOverlay extends google.maps.OverlayView {
        constructor(position, text) {
            super();
            this.position = position;
            this.text = text;
            this.div = null;
        }

        onAdd() {
            this.div = document.createElement("div");
            this.div.style.position = "absolute";
            this.div.innerHTML = `
          <div style="
                background: #ff7b3d;
                color: white;
                padding: 6px 12px;
                border-radius: 12px;
                font-size: 14px;
                font-family: sans-serif;
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                white-space: nowrap;
          ">
            ${this.text}
          </div>
        `;
            const panes = this.getPanes();
            panes.overlayLayer.appendChild(this.div);
        }

        draw() {
            const overlayProjection = this.getProjection();
            const pos = overlayProjection.fromLatLngToDivPixel(this.position);
            if (this.div) {
                this.div.style.left = (pos.x - 50) + "px";
                this.div.style.top = (pos.y - 90) + "px"; // Position au-dessus du marqueur
            }
        }

        onRemove() {
            if (this.div) {
                this.div.parentNode.removeChild(this.div);
                this.div = null;
            }
        }
    }

    const label = new LabelOverlay(location, "<center>Lite House <br>Residences</center>");
    label.setMap(map);
}

$(document).ready(function () {
    // $(this).scrollTop(0);

    var landAnimated = false;
    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        const parallaxOffset = -scrollY * 0.05;
        const parallaxBgOffset = -scrollY * 0.03;
        $('.parallax').css('transform', `translateY(${parallaxOffset}px)`);
        $('.parallax-bg').css('transform', `translateY(${parallaxBgOffset}px)`);
    });

    const swiperLanding = new Swiper('.swiper.landing-page-swiper', {
        speed: 1000,
        autoplay: true,
        loop: true,
        spaceBetween: 100,
        allowTouchMove: true,
        pagination: {
            el: '.landing-page-pagination',
            clickable: true,
        },
        effect: 'fade',
    });

    const swiperFlatList = new Swiper('.swiper.flat-list', {
        speed: 1000,
        autoplay: false,
        loop: true,
        spaceBetween: 10,
        allowTouchMove: true,
        slidesPerView: 3,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: '.flat-list-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.flat-list-btn-next',
            prevEl: '.flat-list-btn-prev',
        },
    });

    const swiperFlatImageList = new Swiper('.swiper.flat-image-list', {
        speed: 500,
        loop: true,
        loopAddBlankSlides: false,
        allowTouchMove: true,
        numberOfDuplicateSlides: 4,
        slidesPerView: 1.1,
        loopedSlides: 2,
        centeredSlides: true,
        grabCursor: true,

        breakpoints: {
            768: {
                numberOfDuplicateSlides: 4,
                slidesPerView: 2.5,
                loopedSlides: 4,
                centeredSlides: true,
            },
        },

        navigation: {
            nextEl: '.flat-image-list-btn-next',
            prevEl: '.flat-image-list-btn-prev',
        },
    });

    const swiperLandImageList = new Swiper('.swiper.land-image-list', {
        speed: 500,
        loop: true,
        loopAddBlankSlides: false,
        allowTouchMove: true,
        numberOfDuplicateSlides: 4,
        slidesPerView: 1.1,
        loopedSlides: 2,
        centeredSlides: true,
        grabCursor: true,

        breakpoints: {
            768: {
                numberOfDuplicateSlides: 4,
                slidesPerView: 2.5,
                loopedSlides: 4,
                centeredSlides: true,
            },
        },

        navigation: {
            nextEl: '.land-image-list-btn-next',
            prevEl: '.land-image-list-btn-prev',
        },
    });

    const swiperPopUp = new Swiper('.swiper.pop-up', {
        speed: 500,
        loop: true,
        spaceBetween: 40,
        allowTouchMove: true,
        slidesPerView: 1,
        effect: false,
        allowTouchMove: false
    });

    $('.menu-item-has-children')
        .on("mouseenter", function () {
            $(this).find('.sub-menu').show();
        })
        .on("mouseleave", function () {
            $(this).find('.sub-menu').hide();
        });

    $(document).on("scroll", function () {
        if ($(document).width() > 768) {
            if ($(document).scrollTop() > 40) {
                $("header").addClass('scrolled');
            } else {
                $("header").removeClass('scrolled');
            }
        }
        else {
            $("header").addClass('scrolled');
        }
    });

    $('#menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        if ($('#menu-toggle').hasClass('active')) {
            openMenu();
        }
        else {
            closeMenu();
        }
    });

    $('.menu-item-has-children > button').on('click', function (e) {
        e.preventDefault();
        var $subMenu = $(this).siblings('.sub-menu-responsive');
        $subMenu.toggleClass('active-sub-menu');
    });


    $("#header-responsive").mouseup(function (e) {
        var navigation = $('#header-responsive #primary-menu');

        if (!navigation.is(e.target) && navigation.has(e.target).length === 0) {
            closeMenu();
        }
    });

    $(window).on('resize', function () {
        if ($(document).width() > 768) {
            closeMenu();
        }
    });

    $(".collapse-header").on('click', function (e) {
        e.preventDefault();
        var $collapseContent = $(this).siblings('.collapse-content');
        if ($collapseContent.hasClass('open')) {
            $collapseContent.removeClass('open');
            $(this).removeClass('open');
            $iframe = $collapseContent.children("iframe");
            if ($iframe) {
                let vidUrl = $iframe.attr('src');
                $iframe.attr("src", "");
                $iframe.attr("src", vidUrl);
            }
        }
        else {
            $collapseContent.addClass('open');
            $(this).addClass('open');
        }
    });

    $(".flat-image-list.swiper .swiper-slide").on('click', function (e) {
        let position = $(this).attr('aria-label');
        position = parseInt(position[0]) - 1;
        swiperPopUp.slideReset(500);
        swiperPopUp.slideTo(position);
        showPopUp();
    });

    $(".land-image-list.swiper .swiper-slide").on('click', function (e) {
        let position = $(this).attr('aria-label');
        position = parseInt(position[0]) - 1;
        swiperPopUp.slideReset(500);
        swiperPopUp.slideTo(position);
        showPopUp();
    });

    $(".collapse-content .zoom-item").on('click', function (e) {
        let position = $(this).attr('data-position-img');
        swiperPopUp.slideReset(500);
        swiperPopUp.slideTo(position)
        showPopUp();
    });

    $(".flat-list-item").on("touchstart", function (e) {
        $(this).addClass("flat-item-active")
    });

    $(".flat-list-item").on("touchend", function (e) {
        $(this).removeClass("flat-item-active")
    });

    try {
        initMap();
    }
    catch (e) {
        console.error(e)
    }

    $(window).on('scroll', function () {
      if (!landAnimated && $("#land-info").isInViewport()) {
          $("#land-info-top p span").spincrement({
              thousandSeparator: ",",
              duration: 5000,
          });
          landAnimated = true; // On marque l'animation comme déjà lancée
      }
    });
});

// FUNCTIONS

function openMenu() {
    $('#menu-toggle > i').addClass('fa-times');
    $('#menu-toggle > i').removeClass('fa-bars');
    $('#menu-toggle').addClass('active');
    $('#header-responsive').addClass('active');
    $('#header-responsive').removeClass('inactive');
}

function closeMenu() {
    $('#menu-toggle > i').removeClass('fa-times');
    $('#menu-toggle > i').addClass('fa-bars');
    $('#menu-toggle').removeClass('active');
    $('#header-responsive').removeClass('active');
    $('#header-responsive').addClass('inactive');
}

function showPopUp() {
    $("#pop-up-background").css("display", "flex");
    $("#pop-up-background").on("click", function (e) {
        const images = $('#pop-up-background img');
        if (!images.is(e.target) && images.has(e.target).length === 0) {
            $("#pop-up-background").css("display", "none");
        }
    })
}