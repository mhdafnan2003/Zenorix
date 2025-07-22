import SlideUp from "@utils/animations/slideUp"

const About = () => {
    return (
        <section className="funder-says-area" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="founder-say-part text-center">
                            <h3>
                                We’re <span>Zenorix</span> — a team of passionate Engineering Students chasing a shared dream. 
                                From day one, we knew we were building more than just code or designs — we’re building a legacy. 
                                Each team member is a powerhouse — design, development, branding, or UI/UX. 
                                We’re not just good — we’re <em>at our prime</em> and hungry to prove it. 
                                This isn’t just a company. It’s a dream forged through sleepless nights and side hustles. 
                                We don’t chase trends — we set them. Welcome to Zenorix.
                            </h3>
                            <div className="founder-name-part">
                                {/* <img src="/images/about/team.png" alt="team" title="Zenorix Team" /> */}
                                {/* <h2>Team Zenorix</h2> */}
                                {/* <p>Designers • Developers • Dreamers</p> */}
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
