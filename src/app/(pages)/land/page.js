'use client'

import PopupSlider from "app/(components)/popup";
import TopSection from "app/(components)/top-section";
import Link from "next/link";
import { useEffect } from "react";

export default function Land() {

    const imageList = [
        {
            src: "/img/land/land1.webp",
            alt: "Land 1"
        },
        {
            src: "/img/land/land2.webp",
            alt: "Land 2"
        },
        {
            src: "/img/land/land3.webp",
            alt: "Land 3"
        },
        {
            src: "/img/land/land4.webp",
            alt: "Land 4"
        },
        {
            src: "/img/land/land5.webp",
            alt: "Land 5"
        },
    ];

    useEffect(() => {

        const swiperPopUp = new Swiper('.swiper.pop-up', {
            speed: 100,
            loop: true,
            spaceBetween: 40,
            allowTouchMove: true,
            slidesPerView: 1,
            effect: false,
            allowTouchMove: false
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

        $(".land-image-list.swiper .swiper-slide").on('click', function (e) {
            let position = $(this).attr('aria-label');
            position = parseInt(position) - 1;
            swiperPopUp.slideReset(500);
            swiperPopUp.slideTo(position);
            showPopUp();
        });

        var landAnimated = false;
        $.fn.isInViewport = function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            return elementBottom > viewportTop && elementTop < viewportBottom;
        };

        $(window).on('scroll load', function () {
            if (!landAnimated && $("#land-info").isInViewport()) {
                $("#land-info-top p span").spincrement({
                    thousandSeparator: ",",
                    duration: 5000,
                });
                landAnimated = true;
            }
        });

        const handleClick = function (e) {
            e.preventDefault();
            var $collapseContent = $(this).siblings('.collapse-content');
            if ($collapseContent.hasClass('open')) {
                $collapseContent.removeClass('open');
                $(this).removeClass('open');
                const $iframe = $collapseContent.children("iframe");
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
        }

        // Détache les anciens avant d'en attacher de nouveaux
        $('.collapse-header').off('click', handleClick);
        $('.collapse-header').on('click', handleClick);

        // Nettoyage automatique au démontage
        return () => {
            $('.collapse-header').off('click', handleClick);
        };
    });

    return (
        <div id="main-content" className="land-page">
            <PopupSlider imageList={imageList} />
            <TopSection
                backgroundImage={"url('/img/land/land5.webp')"}
                h1={"Lite House Land"}
                p={"Your Ground, Your Vision"}
            />
            <div className="land-image-list swiper">
                <div className="swiper-wrapper">
                    <div className="land-item swiper-slide zoom-item">
                        <img src="/img/land/land1.webp" alt="land 1" />
                        <div className="middle">
                            <i aria-hidden="true" className="fa fa-search-plus"></i>
                        </div>
                    </div>
                    <div className="land-item swiper-slide zoom-item">
                        <img src="/img/land/land2.webp" alt="land 1" />
                        <div className="middle">
                            <i aria-hidden="true" className="fa fa-search-plus"></i>
                        </div>
                    </div>
                    <div className="land-item swiper-slide zoom-item">
                        <img src="/img/land/land3.webp" alt="land 2" />
                        <div className="middle">
                            <i aria-hidden="true" className="fa fa-search-plus"></i>
                        </div>
                    </div>
                    <div className="land-item swiper-slide zoom-item">
                        <img src="/img/land/land4.webp" alt="land 3" />
                        <div className="middle">
                            <i aria-hidden="true" className="fa fa-search-plus"></i>
                        </div>
                    </div>
                    <div className="land-item swiper-slide zoom-item">
                        <img src="/img/land/land5.webp" alt="land 4" />
                        <div className="middle">
                            <i aria-hidden="true" className="fa fa-search-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="swiper-button-next land-image-list-btn-next"></div>
                <div className="swiper-button-prev land-image-list-btn-prev"></div>
            </div>
            <section id="land-info">
                <div id="land-info-top">
                    <p id="size-number">
                        <img src="/img/herbe.png" alt="grass" />
                        <span>3,000</span> sqft
                    </p>
                </div>
                <p id="land-info-text">
                    Whether you’re a first-time buyer or a seasoned investor, our listings come with verified
                    documents, transparent pricing, and support every step of the way.
                    Own land with peace of mind: Lite House makes it simple, secure, and smart.<br /><br />
                    Nestled in a rapidly developing area, this plot of land offers the perfect balance between urban
                    convenience and peaceful living. Whether you&apos;re looking to build your dream home or invest in a
                    high-growth zone, this location provides strong infrastructure access, proximity to major roads, and
                    verified legal documents. <br /><br />The flat terrain and ready-to-build status make it ideal for
                    residential
                    or commercial development. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
                    harum delectus ab sapiente non assumenda veritatis modi repellat soluta reiciendis! Modi excepturi
                    distinctio hic minus quos consequatur accusantium magni velit. <br /><br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
                    harum delectus ab sapiente non assumenda veritatis modi repellat soluta reiciendis! Modi excepturi
                    distinctio hic minus quos consequatur accusantium magni velit. <br /><br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
                    harum delectus ab sapiente non assumenda veritatis modi repellat soluta reiciendis! Modi excepturi
                    distinctio hic minus quos consequatur accusantium magni velit.
                </p>
            </section>
            <section id="faq">
                <div className="collapse">
                    <Link href="#" className="collapse-header">
                        <h4>How do I schedule a site visit to inspect the land?</h4>
                        <i aria-hidden="true" className="fa fa-angle-up"></i>
                    </Link>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio repudiandae suscipit
                            cupiditate rem, impedit fuga accusamus doloribus labore officiis ipsa voluptates! Id saepe
                            repudiandae suscipit distinctio a neque in?</p>
                    </div>
                </div>
                <div className="collapse">
                    <Link href="#" className="collapse-header">
                        <h4>What types of land do you offer (residential, commercial, agricultural, etc.)?</h4>
                        <i aria-hidden="true" className="fa fa-angle-up"></i>
                    </Link>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio repudiandae suscipit
                            cupiditate rem, impedit fuga accusamus doloribus labore officiis ipsa voluptates! Id saepe
                            repudiandae suscipit distinctio a neque in?</p>
                    </div>
                </div>
                <div className="collapse">
                    <Link href="#" className="collapse-header">
                        <h4>How do I inquire about land for sale?</h4>
                        <i aria-hidden="true" className="fa fa-angle-up"></i>
                    </Link>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio repudiandae suscipit
                            cupiditate rem, impedit fuga accusamus doloribus labore officiis ipsa voluptates! Id saepe
                            repudiandae suscipit distinctio a neque in?</p>
                    </div>
                </div>
                <div className="collapse">
                    <Link href="#" className="collapse-header">
                        <h4>Are land documents verified before listing?</h4>
                        <i aria-hidden="true" className="fa fa-angle-up"></i>
                    </Link>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio repudiandae suscipit
                            cupiditate rem, impedit fuga accusamus doloribus labore officiis ipsa voluptates! Id saepe
                            repudiandae suscipit distinctio a neque in?</p>
                    </div>
                </div>
                <div className="collapse">
                    <Link href="#" className="collapse-header">
                        <h4>Can I visit the land before purchasing?</h4>
                        <i aria-hidden="true" className="fa fa-angle-up"></i>
                    </Link>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio repudiandae suscipit
                            cupiditate rem, impedit fuga accusamus doloribus labore officiis ipsa voluptates! Id saepe
                            repudiandae suscipit distinctio a neque in?</p>
                    </div>
                </div>
                <div className="collapse">
                    <Link href="#" className="collapse-header">
                        <h4>Do you assist with land transfer or registration?</h4>
                        <i aria-hidden="true" className="fa fa-angle-up"></i>
                    </Link>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio repudiandae suscipit
                            cupiditate rem, impedit fuga accusamus doloribus labore officiis ipsa voluptates! Id saepe
                            repudiandae suscipit distinctio a neque in?</p>
                    </div>
                </div>
            </section>
        </div>
    );
}