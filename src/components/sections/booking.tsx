import SlideUp from "@utils/animations/slideUp"

const Booking = () => {
    return (
        <section id="book" className="call-to-action-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="call-to-action-part text-center">
                            <h2>Let’s Build Something Great Together</h2>
                            <p>Have a project in mind or need assistance? Reach out to us, and our team will get back to you shortly.</p>
                            <div className="hero-btns">
                                <a href="tel:+916282878105" className="theme-btn">Book a free call</a>

                            </div>
                            {/* <a href="#">
                                <img src="/images/logos/logo.png" alt="Logo" title="Logo" />
                            </a> */}
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Booking