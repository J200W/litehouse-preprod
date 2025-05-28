'use client'

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
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

        $(window).on('scroll', function () {
            const scrollY = $(this).scrollTop();
            const parallaxOffset = -scrollY * 0.05;
            const parallaxBgOffset = -scrollY * 0.03;
            $('.parallax').css('transform', `translateY(${parallaxOffset}px)`);
            $('.parallax-bg').css('transform', `translateY(${parallaxBgOffset}px)`);
        });
    }, [])

    return (
        <div id="main-content" className="landing-page">
            <div id="landing-page-presentation">
                <div className="text parallax">
                    <h1><span>L</span>ite your<br /> way <span>H</span>ome.</h1>
                    <Link id="read-more" href="#welcome">Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="feather feather-arrow-right">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
                <div className="swiper landing-page-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="/img/houses/Abuja3-6.jpeg" alt="Slide 1" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/img/houses/Abuja3-4.jpeg" alt="Slide 2" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/img/houses/Abuja3-3.jpeg" alt="Slide 3" />
                        </div>
                    </div>
                    <div className="swiper-pagination landing-page-pagination"></div>
                </div>
            </div>
            <div id="advantages">
                <section id="welcome" className="section-left advantages">
                    <div className="text">
                        <h2 className="title-section">Welcome to Lite House</h2>
                        <p>Whether you&apos;re looking for a short let or a long stay, Lite House offers premium homes and
                            land across Nigeria&apos;s top locations. From business trips to extended relocations, enjoy trusted
                            listings, seamless booking, and personalized support so you can focus on living, not
                            searching.
                        </p>
                    </div>
                    <div className="image">
                        <div className="parallax-bg" style={{ backgroundImage: 'url(/img/houses/Abuja2-1.png)' }}></div>
                    </div>
                </section>
                <section className="section-right advantages">
                    <div className="text">
                        <h2 className="title-section">A Better Way to Stay</h2>
                        <ul>
                            <li><i aria-hidden="true" className="fa fa-check-circle"></i>
                                Cleanning & Maintenance
                            </li>
                            <li><i aria-hidden="true" className="fa fa-check-circle"></i>
                                24/7 Security with CCTV
                            </li>
                            <li><i aria-hidden="true" className="fa fa-check-circle"></i>
                                Hot water supply
                            </li>
                            <li><i aria-hidden="true" className="fa fa-check-circle"></i>
                                Parking space
                            </li>
                            <li><i aria-hidden="true" className="fa fa-check-circle"></i>
                                10 minutes drive from Lagos
                            </li>
                        </ul>
                    </div>
                    <div className="image">
                        <div className="parallax-bg" style={{ backgroundImage: 'url(/img/houses/Abuja2-7.jpg)' }}></div>
                    </div>
                </section>
                <section className="section-left advantages">
                    <div className="text">
                        <h2 className="title-section">Made For You</h2>
                        <ul>
                            <li><i aria-hidden="true" className="fa fa-check-circle"></i>
                                Business travelers
                            </li>
                            <li><i aria-hidden="true" className="fa fa-check-circle"></i>
                                Expats & returning residents
                            </li>
                            <li><i aria-hidden="true" className="fa fa-check-circle"></i>
                                Investors looking for short-term land leases
                            </li>
                            <li><i aria-hidden="true" className="fa fa-check-circle"></i>
                                Locals seeking city breaks
                            </li>
                        </ul>
                    </div>
                    <div className="image">
                        <div className="parallax-bg" style={{ backgroundImage: 'url(/img/houses/Abuja2-3.jpg)' }}></div>
                    </div>
                </section>
            </div>

            <section className="flat-section">
                <div className="text">
                    <h2>Available Properties</h2>
                    <h3>From weekend stays to extended living find your perfect fit.</h3>
                </div>
                <div className="flat-list swiper">
                    <div className="swiper-wrapper">
                        <div className="flat-item swiper-slide">
                            <img src="/img/houses/Abuja1-3.jpeg" alt="Flat 1" />
                            <h4>Flat 1</h4>
                            <div className="flat-item-bottom">
                                <p>₦ 100,000/month</p>
                                <Link href="/flat/detail">Book now</Link>
                            </div>
                        </div>
                        <div className="flat-item swiper-slide">
                            <img src="/img/houses/Abuja2-6.JPG" alt="Flat 2" />
                            <h4>Flat 2</h4>
                            <div className="flat-item-bottom">
                                <p>₦ 120,000/month</p>
                                <Link href="/flat/detail">Book now</Link>
                            </div>
                        </div>
                        <div className="flat-item swiper-slide">
                            <img src="/img/houses/Abuja3-6.jpeg" alt="Flat 3" />
                            <h4>Flat 3</h4>
                            <div className="flat-item-bottom">
                                <p>₦ 150,000/month</p>
                                <Link href="/flat/detail">Book now</Link>
                            </div>
                        </div>
                        <div className="flat-item swiper-slide">
                            <img src="/img/houses/Abuja4-1.jpg" alt="Flat 4" />
                            <h4>Flat 4</h4>
                            <div className="flat-item-bottom">
                                <p>₦ 180,000/month</p>
                                <Link href="/flat/detail">Book now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination flat-list-pagination"></div>
                    <div className="swiper-button-next flat-list-btn-next"></div>
                    <div className="swiper-button-prev flat-list-btn-prev"></div>
                </div>
                <Link href="/flat/list" className="view-more">View more</Link>
            </section>
            <section className="land-section">
                <div className="land-section-item left" style={{ backgroundImage: 'url(/img/land/land1.webp)' }}></div>
                <div className="land-section-item right">
                    <h2>Secure your piece of Nigeria</h2>
                    <h3>Own a piece of tomorrow and start building your legacy today.</h3>
                    <p>Looking to build, invest, or secure a long-term asset ? Lite House offers access to carefully
                        vetted
                        plots of land in Nigeria’s most promising areas from urban developments to emerging suburban
                        hubs.</p>
                    <Link href="/land" className="view-more">See available land</Link>
                </div>
            </section>
        </div>
    );
}
