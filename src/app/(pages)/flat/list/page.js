'use client'

import TopSection from "app/(components)/top-section";
import { useEffect } from "react";

export default function FlatList() {

    useEffect(() => {
        $(".flat-list-item").on("touchstart", function (e) {
            $(this).addClass("flat-item-active")
        });

        $(".flat-list-item").on("touchend", function (e) {
            $(this).removeClass("flat-item-active")
        });
    })

    return (
        <div id="main-content" className="flat-list-page">
            <TopSection
                backgroundImage={"url('/img/houses/top-section.jpeg')"}
                h1={"Lite House Rooms"}
                p={"Your dream home awaits"}
            />
            <div id="flat-filter">
                <form id="filter-form">
                    <div className="filter-group">
                        <label htmlFor="bedrooms">Bedrooms</label>
                        <select name="bedrooms" className="filter-select">
                            <option value="any">Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3+</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <label htmlFor="sort">Price</label>
                        <select name="sort" className="filter-select">
                            <option value="any">Any</option>
                            <option value="price-asc">Low to High</option>
                            <option value="price-desc">High to Low</option>
                        </select>
                    </div>
                    <button type="submit" className="filter-button">Filter</button>
                </form>
            </div>
            <hr />
            <div className="flat-list-grid">
                <div className="flat-list-item">
                    <img src="/img/houses/Abuja1-3.jpeg" alt="Flat 1" />
                    <h2>Flat 1</h2>
                    <div className="flat-list-item-bottom">
                        <p>₦ 100,000/month</p>
                        <a href="/flat/detail">Book now</a>
                    </div>
                </div>
                <div className="flat-list-item">
                    <img src="/img/houses/Abuja2-6.JPG" alt="Flat 2" />
                    <h2>Flat 2</h2>
                    <div className="flat-list-item-bottom">
                        <p>₦ 120,000/month</p>
                        <a href="/flat/detail">Book now</a>
                    </div>
                </div>
                <div className="flat-list-item">
                    <img src="/img/houses/Abuja3-6.jpeg" alt="Flat 3" />
                    <h2>Flat 3</h2>
                    <div className="flat-list-item-bottom">
                        <p>₦ 150,000/month</p>
                        <a href="/flat/detail">Book now</a>
                    </div>
                </div>
                <div className="flat-list-item">
                    <img src="/img/houses/Abuja4-1.jpg" alt="Flat 4" />
                    <h2>Flat 4</h2>
                    <div className="flat-list-item-bottom">
                        <p>₦ 180,000/month</p>
                        <a href="/flat/detail">Book now</a>
                    </div>
                </div>
                <div className="flat-list-item">
                    <img src="/img/houses/Abuja1-3.jpeg" alt="Flat 1" />
                    <h2>Flat 1</h2>
                    <div className="flat-list-item-bottom">
                        <p>₦ 100,000/month</p>
                        <a href="/flat/detail">Book now</a>
                    </div>
                </div>
                <div className="flat-list-item">
                    <img src="/img/houses/Abuja2-6.JPG" alt="Flat 2" />
                    <h2>Flat 2</h2>
                    <div className="flat-list-item-bottom">
                        <p>₦ 120,000/month</p>
                        <a href="/flat/detail">Book now</a>
                    </div>
                </div>
                <div className="flat-list-item">
                    <img src="/img/houses/Abuja3-6.jpeg" alt="Flat 3" />
                    <h2>Flat 3</h2>
                    <div className="flat-list-item-bottom">
                        <p>₦ 150,000/month</p>
                        <a href="/flat/detail">Book now</a>
                    </div>
                </div>
                <div className="flat-list-item">
                    <img src="/img/houses/Abuja4-1.jpg" alt="Flat 4" />
                    <h2>Flat 4</h2>
                    <div className="flat-list-item-bottom">
                        <p>₦ 180,000/month</p>
                        <a href="/flat/detail">Book now</a>
                    </div>
                </div>
                <div className="flat-list-item">
                    <img src="/img/houses/Abuja1-3.jpeg" alt="Flat 1" />
                    <h2>Flat 1</h2>
                    <div className="flat-list-item-bottom">
                        <p>₦ 100,000/month</p>
                        <a href="/flat/detail">Book now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}