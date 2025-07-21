import { portfolioData } from "../../utils/fackData/portfolioData"

const RecentProjects = () => {
    return (
        <div className="recent-projects-area" id="portfolio">
            <div className="custom-icon"><img src="/images/shapes/work-scribble.png" alt="custom" /></div>
            <div className="container-fluid">
                <div className="row">
                    {
                        portfolioData.map(({id, img}) => {
                            return (
                                <div key={id} className="col-md-3 col-6">
                                    <div className="single-header-work-img"><img src={img} alt="img" /></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentProjects