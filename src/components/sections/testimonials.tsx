import Marquee from "react-fast-marquee"
import { testimonilasData } from "@utils/fackData/testimonilasData"
import { clientLogoData } from "../../utils/fackData/clientLogoData"

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

const Testimonials = () => {
  return (
    <section className="zenorix-reviews" id="clients" aria-labelledby="reviews-title">
      <div className="zenorix-reviews__inner">
        <div className="zenorix-reviews__top">
          <p className="zenorix-about__label">
            <i className="ri-arrow-right-up-line" aria-hidden="true" />Testimonials
          </p>
          <h2 id="reviews-title">What our clients say</h2>
        </div>

        <div className="zenorix-reviews__grid">
          {testimonilasData.map(({ id, name, position, review }) => (
            <div className="zenorix-reviews__col" key={id}>
              <article className="zenorix-reviews__card">
                <div className="zenorix-reviews__stars" aria-label="5 out of 5 stars">
                  {"★★★★★"}
                </div>
                <p>{review}</p>
              </article>
              <div className="zenorix-reviews__profile">
                <span className="zenorix-reviews__avatar" aria-hidden="true">{initials(name)}</span>
                <div>
                  <h3>{name}</h3>
                  <span>{position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="zenorix-reviews__clients">
          <p>Real brands. Real trust. Real results.</p>
          <Marquee gradient={false} speed={40}>
            {clientLogoData.map(({ id, img }) => (
              <img key={id} src={img} alt="Client logo" loading="lazy" decoding="async" />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
