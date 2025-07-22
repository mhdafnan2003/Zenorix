import { Link } from 'react-scroll';
import SlideUp from "@utils/animations/slideUp"

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3><i className="ri-refresh-line" /> From idea to impact — we build what you envision</h3>
<h2>Zenorix — Designing Digital Experiences That Stand Out</h2>
<p>We craft powerful websites, intuitive software, and compelling visuals that drive results. Whether you’re a startup or a brand in growth mode — we’re your creative tech partner.</p>
<div className="hero-btns">
  <Link to="service" smooth={true} className="theme-btn">Explore Our Work</Link>
  <Link to="book" smooth={true} className="theme-btn differenct-color">Book a Free Discovery Call</Link>
</div>

                            <div className="dot-shape"><img src="/images/shapes/shape1.png" alt="Shape" style={{ filter: "invert(1)" }} /></div>
                            {/* <div className="dot-shape2"><img src="/images/shapes/shape2.png" alt="Shape" /></div> */}
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero