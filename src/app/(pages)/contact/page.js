'use client'

import TopSection from "app/(components)/top-section";
import { useEffect } from "react";


export default function Contact() {

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

    useEffect(() => {
        initMap();
    }, []);

    return (
        <div id="main-content" className="contact-page">
            <TopSection
                backgroundImage={""}
                h1={"Contact us"}
                p={""}
                noImg={true}
            />
            <div id="form-container">
                <form action="GET">
                    <div className="form-item left">
                        <h2>Send an email</h2>
                        <h3>Feel free to write us</h3>
                        <div id="form-content">
                            <div className="form-group">
                                <select name="subject">
                                    <option value="book-a-room">Book a room</option>
                                    <option value="property-inquiry">Property inquiry</option>
                                    <option value="schedule-a-site-visit">Schedule a site visit</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" name="firstname" placeholder="Your first name" />
                                <input type="text" name="lastname" placeholder="Your last name" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your email" />
                                <input type="tel" name="phone" placeholder="Your phone number" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Message"></textarea>
                            </div>
                            <button type="submit">Send a message</button>
                        </div>

                    </div>
                    <div className="form-item right">
                        <h2>Need any help?</h2>
                        <h3>Get in touch with us</h3>
                        <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                            accusantium est,
                            reprehenderit quis veritatis atque dolor error autem at eos? Doloribus in quasi odit quos,
                            exercitationem repellat velit aperiam enim.</p>
                        <div className="contact-info">
                            <div className="contact-icon">
                                <img src="/img/email.png" alt="email icon" />
                            </div>
                            <div className="contact-info-content">
                                <h4>Have any question?</h4>
                                <p>07035102854 | 08025843632</p>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="contact-icon">
                                <img src="/img/phone.png" alt="phone icon" />
                            </div>
                            <div className="contact-info-content">
                                <h4>Write email</h4>
                                <p>contact@litehouse.com</p>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="contact-icon">
                                <img src="/img/location.png" alt="location icon" />
                            </div>
                            <div className="contact-info-content">
                                <h4>Visit anytime</h4>
                                <p>Plot 30 Unique Estate, Mubarak Bus Stop, Akute, Ogun, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div id="map"></div>
        </div>
    );
}