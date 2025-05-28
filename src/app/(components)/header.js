'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {


    const pathname = usePathname();

    useEffect(() => {

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

        $(window).on('scroll', function () {
            const scrollY = $(this).scrollTop();
            const parallaxOffset = -scrollY * 0.05;
            const parallaxBgOffset = -scrollY * 0.03;
            $('.parallax').css('transform', "translateY(parallaxOffset + 'px')");
            $('.parallax-bg').css('transform', "translateY(parallaxBgOffset + 'px')");
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
                if ($(document).scrollTop() > 35) {
                    $("header").addClass('scrolled');
                } else {
                    $("header").removeClass('scrolled');
                }
            }
            else {
                $("header").addClass('scrolled');
            }
        });

        $('.menu-item > a').on('click', function () {
            if ($('#menu-toggle').hasClass('active')) {
                closeMenu();
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

        $('.menu-item-has-children > a').on('click', function (e) {
            e.preventDefault();
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

    }, []);


    return (
        <header id="header-background">
            <div id="header-content">
                <div id="header-top">
                    <div id="header-top-left">
                        <p>
                            <Link target="_blank" rel="noopener noreferrer"
                                href="http://maps.google.com/maps?q=Plot%2030%20Unique%20Estate,%20Mubarak%20Bus%20Stop,%20Akute,%20Ogun,%20Nigeria">
                                <img src="/img/location.png" alt="location icon" />
                                Plot 30 Unique Estate, Mubarak Bus Stop, Akute, Ogun, Nigeria
                            </Link>
                        </p>
                    </div>
                    <div id="header-top-right">
                        <p>
                            <Link href="#">
                                <img src="/img/phone.png" alt="phone icon" />
                                07035102854 | 08025843632
                            </Link>
                        </p>
                        <p>
                            <Link href="mailto:test@gmail.com">
                                <img src="/img/email.png" alt="email icon" />
                                contact@litehouse.com
                            </Link>
                        </p>
                    </div>
                </div>
                <hr />
                <div id="header-bottom">
                    <Link href="/" rel="home">
                        <img src="/img/logo-long-no-background.png" alt="Logo Lite House" id="logo" />
                    </Link>
                    <nav id="site-navigation" role="navigation">
                        <ul id="primary-menu">
                            <li className="menu-item"><Link href="/">Home</Link></li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="#">Properties</Link>
                                <ul className="sub-menu">

                                    <li className="menu-item"><Link href="/flat/list">Rooms</Link></li>
                                    <li className="menu-item"><Link href="/land">Land</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item"><Link href="/about">About</Link></li>
                            <li className="menu-item contact"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <button id="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                        <i aria-hidden="true" className="fa fa-bars"></i>
                    </button>
                </div>
                <div id="header-responsive">
                    <nav id="site-navigation-responsive" role="navigation">
                        <ul id="primary-menu">
                            <li className="menu-item"><Link href="/">Home</Link></li>
                            <li className="menu-item-has-children">
                                <button href="#">Properties
                                    <i aria-hidden="true" className="fa fa-caret-down"></i>
                                </button>
                                <ul className="sub-menu-responsive">
                                    <li className="menu-item"><Link href="/flat/list">Rooms</Link></li>
                                    <li className="menu-item"><Link href="/land">Land</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item"><Link href="/about">About</Link></li>
                            <li className="menu-item contact"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}