import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">

                    {/* Row 1 - Social Icons */}
                    <div className="row mb-3">
                        <div className="col-12 d-flex justify-content-center ">
                            <div className="footer-social d-flex gap-3 flex-wrap justify-content-center">
                                <a href="https://www.facebook.com/profile.php?id=61578273194668" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF aria-hidden="true" /></a>
                                <a href="https://x.com/zenorix_group?s=11" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer"><FaXTwitter aria-hidden="true" /></a>
                                <a href="https://www.instagram.com/zenorix.in?igsh=bDVzNGNjbG5xMGp1&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram aria-hidden="true" /></a>
                                <a href="https://www.linkedin.com/company/zenorixgroup/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn aria-hidden="true" /></a>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 - Menu Links */}
                    <div className="row mb-3">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="footer-bottom-menu">
                                <ul className="d-flex flex-wrap gap-3 justify-content-center list-unstyled mb-0 text-center">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/#service">Service</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li>Terms &amp; Conditions</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 - Services (crawlable internal links) */}
                    <div className="row mb-3">
                        <div className="col-12 d-flex justify-content-center">
                            <nav className="footer-bottom-menu" aria-label="Services">
                                <ul className="d-flex flex-wrap gap-3 justify-content-center list-unstyled mb-0 text-center">
                                    <li><a href="/services/website-development">Website Development in Kerala</a></li>
                                    <li><a href="/services/ecommerce-development">E-commerce Development</a></li>
                                    <li><a href="/services/custom-software-development">Custom Software Development</a></li>
                                    <li><a href="/services/mobile-app-development">Mobile App Development</a></li>
                                    <li><a href="/services/ui-ux-design-branding">UI/UX Design &amp; Branding</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Row 4 - Address (NAP for local SEO; keep identical to Google Business Profile) */}
                    <div className="row mb-3">
                        <div className="col-12 text-center">
                            <address className="mb-0">
                                Zenorix, First Floor, Space11, Koodathai, Kozhikode (Calicut), Kerala 673573 ·{" "}
                                <a href="tel:+916282878105">+91 62828 78105</a> ·{" "}
                                <a href="mailto:zenorix.digitals@gmail.com">zenorix.digitals@gmail.com</a>
                            </address>
                        </div>
                    </div>

                    {/* Row 5 - Copyright */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="copyright-text">
                                <p>
                                  Copyright <a href="/">zenorix.in</a> All Rights Reserved.
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
