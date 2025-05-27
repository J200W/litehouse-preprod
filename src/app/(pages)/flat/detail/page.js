'use client'

import PopupSlider from "app/(components)/popup";
import Link from "next/link";
import { useEffect } from "react";

export default function FlatDetail() {
    const imageList = [
        {
            src: "/img/houses/Abuja1-1.jpeg",
            alt: "Flat 1"
        },
        {
            src: "/img/houses/Abuja1-3.jpeg",
            alt: "Flat 2"
        },
        {
            src: "/img/houses/Abuja2-6.JPG",
            alt: "Flat 3"
        },
        {
            src: "/img/houses/Abuja3-6.jpeg",
            alt: "Flat 4"
        },
        {
            src: "/img/houses/Abuja4-1.jpg",
            alt: "Flat 5"
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

        $(".flat-image-list.swiper .swiper-slide").on('click', function (e) {
            let position = $(this).attr('aria-label');
            position = parseInt(position[0]) - 1;
            swiperPopUp.slideReset(100);
            swiperPopUp.slideTo(position);
            showPopUp();
        });

        $(".collapse-content .zoom-item").on('click', function (e) {
            let position = $(this).children("img").attr('data-position-img');
            swiperPopUp.slideReset(100);
            swiperPopUp.slideTo(position);
            showPopUp();
        });

        function showPopUp() {
            $("#pop-up-background").css("display", "flex");
            $("#pop-up-background").on("click", function (e) {
                const images = $('#pop-up-background img');
                if (!images.is(e.target) && images.has(e.target).length === 0) {
                    $("#pop-up-background").css("display", "none");
                }
            })
        }
    }, [])

    return (
        <div id="main-content" className="flat-page">
            <PopupSlider imageList={imageList} />

            <div className="flat-image-list swiper">
                <div className="swiper-wrapper">
                    <div className="flat-item swiper-slide zoom-item">
                        <img src="/img/houses/Abuja1-1.jpeg" alt="Flat 1" />
                        <div className="middle">
                            <i aria-hidden="true" className="fa fa-search-plus"></i>
                        </div>
                    </div>
                    <div className="flat-item swiper-slide zoom-item">
                        <img src="/img/houses/Abuja1-3.jpeg" alt="Flat 1" />
                        <div className="middle">
                            <i aria-hidden="true" className="fa fa-search-plus"></i>
                        </div>
                    </div>
                    <div className="flat-item swiper-slide zoom-item">
                        <img src="/img/houses/Abuja2-6.JPG" alt="Flat 2" />
                        <div className="middle">
                            <i aria-hidden="true" className="fa fa-search-plus"></i>
                        </div>
                    </div>
                    <div className="flat-item swiper-slide zoom-item">
                        <img src="/img/houses/Abuja3-6.jpeg" alt="Flat 3" />
                        <div className="middle">
                            <i aria-hidden="true" className="fa fa-search-plus"></i>
                        </div>
                    </div>
                    <div className="flat-item swiper-slide zoom-item">
                        <img src="/img/houses/Abuja4-1.jpg" alt="Flat 4" />
                        <div className="middle">
                            <i aria-hidden="true" className="fa fa-search-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="swiper-button-next flat-image-list-btn-next"></div>
                <div className="swiper-button-prev flat-image-list-btn-prev"></div>
            </div>
            <section id="flat-card">
                <div className="flat-card-image">
                    <img src="/img/houses/Abuja1-3.jpeg" alt="Flat 1" />
                </div>
                <div className="flat-card-details">
                    <h1>Flat 1</h1>
                    <p className="price">₦ 2,000,000</p>
                    <div className="flat-card-features">
                        <div className="flat-card-feat">
                            <i aria-hidden="true" className="fa fa-bed"></i>
                            <p>2 beds</p>
                        </div>
                        <div className="flat-card-feat">
                            <i aria-hidden="true" className="fa fa-bath"></i>
                            <p>2 baths</p>
                        </div>
                        <div className="flat-card-feat">
                            <i aria-hidden="true" className="fa fa-arrows-alt"></i>
                            <p>1200 sqft</p>
                        </div>
                    </div>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </section>
            <div className="flat-info">
                <section className="description collapse">
                    <Link href="#" className="collapse-header open">
                        <h4>Description</h4>
                        <i aria-hidden="true" className="fa fa-angle-up"></i>
                    </Link>
                    <p className="collapse-content open">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t
                        anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                        Internet
                        tend to repeat predefined chunks as necessary, making this the first true generator on the
                        Internet.

                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                    </p>
                </section>
                <section className="amenities collapse">
                    <Link href="#" className="collapse-header open">
                        <h4>Amenities</h4>
                        <i aria-hidden="true" className="fa fa-angle-up"></i>
                    </Link>
                    <div className="collapse-content open">
                        <ul className="advantages">
                            <li>
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                Air conditioning
                            </li>
                            <li>
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                Window covering
                            </li>
                            <li>
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                Central heating
                            </li>
                            <li>
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                Car parking
                            </li>
                            <li>
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                Alarm system
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="property-video collapse">
                    <Link href="#" className="collapse-header open">
                        <h4>Video presentation</h4>
                        <i aria-hidden="true" className="fa fa-angle-up"></i>
                    </Link>
                    <div className="collapse-content open">
                        <iframe src="https://www.youtube.com/embed/ec_fXMrD7Ow?si=YFF6W9ItUmjrEy5T&mute=1&rel=0"
                            title="Home tour" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </section>
                <section className="gallery collapse">
                    <Link href="#" className="collapse-header open">
                        <h4>Gallery</h4>
                        <i aria-hidden="true" className="fa fa-angle-up"></i>
                    </Link>
                    <div className="collapse-content open">
                        <div className="image-grid">
                            {imageList.map((image, key) => {
                                return (
                                    <div className="zoom-item" key={key}>
                                        <img src={image.src} alt={image.alt} data-position-img={key} />
                                        <div className="middle">
                                            <i aria-hidden="true" className="fa fa-search-plus"></i>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );

}