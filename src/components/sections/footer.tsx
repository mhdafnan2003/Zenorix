import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">

                    {/* Row 1 - Social Icons */}
                    <div className="row mb-3">
                        <div className="col-12 d-flex justify-content-center justify-content-lg-start mb-lg-0">
                            <div className="footer-social d-flex gap-3 flex-wrap justify-content-center">
                                <a href="#"><FaFacebookF /></a>
                                <a href="https://x.com/zenorix_group?s=11"><FaXTwitter /></a>
                                <a href="https://www.instagram.com/zenorix.in?igsh=bDVzNGNjbG5xMGp1&utm_source=qr"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/company/zenorixgroup/"><FaLinkedinIn /></a>
                                <a href="#"><SiFiverr /></a>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 - Menu Links */}
                    <div className="row mb-3">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="footer-bottom-menu">
                                <ul className="d-flex flex-wrap gap-3 justify-content-center list-unstyled mb-0 text-center">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#service">Service</a></li>
                                    <li><a href="#book">Contact</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 - Copyright */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="copyright-text">
                                <p>
                                    Copyright <a href="#">zenorix.in</a> All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;
