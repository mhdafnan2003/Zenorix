import Marquee from "react-fast-marquee";
import { clientLogoData } from "../../utils/fackData/clientLogoData"

const Partners = () => {
    return (
        <div className="company-design-area partner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Real brands. Real trust. Real results.</h2>
                        <div className="company-list">
                            <div className="scroller">
                                <Marquee>
                                    {
                                        clientLogoData.map(({ id, img }) => (
                                            <img
                                                key={id}
                                                src={img}
                                                alt="company logo"
                                                style={{
                                                    filter: "brightness(0) invert(1)",
                                                //     margin: "0 30px",
                                                //     height: "50px"
                                                }}
                                            />
                                        ))
                                    }
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners;
