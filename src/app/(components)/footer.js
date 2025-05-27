import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div id="footer-content">
                <div className="footer-div">
                    <p>&copy; Lite House Residences 2025</p>
                    <p>All rights reserved</p>
                </div>
                <div className="footer-div">
                    <Link href="#">Privacy Policy</Link>
                </div>
                <div className="footer-div">
                    <p className="contact-details">
                        <Link target="_blank" rel="noopener noreferrer" href="http://maps.google.com/maps?q=Plot%2030%20Unique%20Estate,%20Mubarak%20Bus%20Stop,%20Akute,%20Ogun,%20Nigeria">
                            <img src="/img/location.png" alt="location icon" />
                            Plot 30 Unique Estate, Mubarak Bus Stop, Akute, Ogun, Nigeria
                        </Link>
                    </p>
                </div>
                <div className="footer-div">
                    <p className="contact-details">
                        <Link href="#">
                            <img src="/img/phone.png" alt="phone icon" />
                            07035102854 | 08025843632
                        </Link>
                    </p>
                    <p className="contact-details">
                        <Link href="mailto:test@gmail.com">
                            <img src="/img/email.png" alt="email icon" />
                            contact@litehouse.com
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}