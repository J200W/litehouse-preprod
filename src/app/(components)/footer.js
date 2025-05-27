
export default function Footer() {
    return (
        <footer>
            <div id="footer-content">
                <div className="footer-div">
                    <p>&copy; Lite House Residences 2025</p>
                    <p>All rights reserved</p>
                </div>
                <div className="footer-div">
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-div">
                    <p className="contact-details">
                        <a target="_blank" rel="noopener noreferrer" href="http://maps.google.com/maps?q=Plot%2030%20Unique%20Estate,%20Mubarak%20Bus%20Stop,%20Akute,%20Ogun,%20Nigeria">
                            <img src="/img/location.png" alt="location icon" />
                            Plot 30 Unique Estate, Mubarak Bus Stop, Akute, Ogun, Nigeria
                        </a>
                    </p>
                </div>
                <div className="footer-div">
                    <p className="contact-details">
                        <a href="#">
                            <img src="/img/phone.png" alt="phone icon" />
                            07035102854 | 08025843632
                        </a>
                    </p>
                    <p className="contact-details">
                        <a href="mailto:test@gmail.com">
                            <img src="/img/email.png" alt="email icon" />
                            contact@litehouse.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}