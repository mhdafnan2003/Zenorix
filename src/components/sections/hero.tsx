import { Link } from 'react-scroll';
import SlideUp from "@utils/animations/slideUp";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3>
                                <i className="ri-refresh-line" />
                                From idea to impact — we build what you envision
                            </h3>
                            <h2>Zenorix — Designing Digital Experiences That Stand Out</h2>
                            <p>
                                We craft powerful websites, intuitive software, and compelling visuals that drive results.
                                Whether you’re a startup or a brand in growth mode — we’re your creative tech partner.
                            </p>

                            <div className="hero-btns">
                                <Link to="service" smooth={true} className="theme-btn">
                                    View Our Work
                                </Link>
                                <a
                                    href="https://wa.me/916282878105?text=Hi!%20I%20need%20more%20details%20about%20your%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="theme-btn differenct-color"
                                    style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                                >
                                    Chat With Us <FaWhatsapp size={18} />
                                </a>
                            </div>

                            <div className="dot-shape">
                                <img
                                    src="/images/shapes/shape1.png"
                                    alt="Shape"
                                    style={{ filter: "invert(1)" }}
                                />
                            </div>
                            {/* <div className="dot-shape2">
                                <img 
                                    src="/images/shapes/shape2.png" 
                                    alt="Shape" 
                                />
                            </div> */}
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
