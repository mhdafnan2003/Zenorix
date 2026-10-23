import type { FormEvent } from "react"

const ContactPage = () => {
  const composeWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const message = `Project enquiry: ${fields.get("service")}\n\nName: ${fields.get("name")}\n\nProject details:\n${fields.get("message")}`
    window.location.href = `https://wa.me/917012977575?text=${encodeURIComponent(message)}`
  }
  return (
    <main className="zenorix-contact">
      <section className="zenorix-contact__hero">
        <div className="zenorix-svcpage__inner">
          <p className="zenorix-svcpage__pill"><i className="ri-arrow-right-up-line" aria-hidden="true" />Contact Us</p>
          <h1>Great ideas start<br />with a <span>conversation.</span></h1>
          <p>Have a project in mind? Tell us what you’re building. We’ll help you find the right way forward.</p>
        </div>
      </section>
      <section className="zenorix-contact__content" aria-label="Get in touch">
        <div className="zenorix-svcpage__inner zenorix-contact__layout">
          <div>
            <p className="zenorix-contact__eyebrow">LET’S CONNECT</p>
            <h2>Your next chapter.<br />Built together.</h2>
            <p className="zenorix-contact__intro">From your first website to your next big product, we’re ready to hear your ideas.</p>
            <a className="zenorix-contact__channel" href="tel:+916282878105"><i className="ri-phone-line" aria-hidden="true" /><span><small>Give us a call</small>+91 62828 78105</span><b aria-hidden="true">↗</b></a>
            <a className="zenorix-contact__channel" href="tel:+917012977575"><i className="ri-phone-line" aria-hidden="true" /><span><small>Make an enquiry</small>+91 70129 77575</span><b aria-hidden="true">↗</b></a>
            <a className="zenorix-contact__channel" href="mailto:zenorix.group@gmail.com"><i className="ri-mail-line" aria-hidden="true" /><span><small>Drop us an email</small>zenorix.group@gmail.com</span><b aria-hidden="true">↗</b></a>
            <a className="zenorix-contact__channel" href="https://www.google.com/maps/search/?api=1&amp;query=First%20Floor%2C%20Space11%2C%20Koodathai%2C%20Calicut%2C%20Kerala%2C%20673573" target="_blank" rel="noopener noreferrer"><i className="ri-map-pin-line" aria-hidden="true" /><span><small>Our address</small>First Floor, Space11, Koodathai, Calicut, Kerala, 673573</span><b aria-hidden="true">↗</b></a>
          </div>
          <form className="zenorix-contact__form" onSubmit={composeWhatsApp}>
            <h2>Tell us about your project</h2>
            <p>A few details are all we need to get started.</p>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" autoComplete="name" placeholder="Your name" required maxLength={120} />
            <label htmlFor="contact-service">What can we help with?</label>
            <select id="contact-service" name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              <option>Website Development</option><option>E-commerce Development</option><option>Custom Software Development</option><option>Mobile App Development</option><option>UI/UX Design & Branding</option><option>General</option>
            </select>
            <label htmlFor="contact-message">Project details</label>
            <textarea id="contact-message" name="message" rows={4} placeholder="Tell us about your idea, goals, and timeline…" required maxLength={5000} />
            <button type="submit"><span className="zenorix-contact__submit-label"><i className="ri-whatsapp-line" aria-hidden="true" />Send enquiry on WhatsApp</span> <span aria-hidden="true">↗</span></button>
            <small>Opens WhatsApp with your enquiry ready to send to +91 70129 77575.</small>
          </form>
        </div>
      </section>
    </main>
  )
}
export default ContactPage
