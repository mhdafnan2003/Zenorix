const sections = [
  {
    title: "1. Information We Collect",
    intro: "We may collect the following categories of information when you engage with our website, team, or services:",
    items: [
      ["Personal Information", "Name, email address, phone number, and other contact details provided through forms or communication."],
      ["Project Information", "Business details, project requirements, and preferences shared during consultations or onboarding."],
      ["Technical Information", "IP address, browser type, device data, and cookies collected through website analytics to improve performance and user experience."],
    ],
  },
  {
    title: "2. How We Use Your Information",
    intro: "Your data is processed solely to:",
    items: [
      ["", "Deliver and improve our digital services (web development, branding, software solutions)."],
      ["", "Communicate project updates, responses, and promotional offers."],
      ["", "Analyze website usage and improve performance."],
      ["", "Fulfill legal or regulatory obligations."],
    ],
  },
  {
    title: "3. Data Sharing and Disclosure",
    intro: "We do not sell or rent your personal data. Your information may be shared only with:",
    items: [
      ["Authorized Team Members", "Access is limited to fulfill project or service requirements."],
      ["Trusted Third-Party Services", "For email, analytics, and hosting, only under strict confidentiality agreements."],
      ["Legal Authorities", "If required by law, or to defend our legal rights."],
    ],
  },
  {
    title: "4. Data Security",
    intro: "Zenorix employs robust security measures to protect your data:",
    items: [
      ["", "Encrypted transmission protocols (SSL/TLS)"],
      ["", "Secure cloud servers and infrastructure"],
      ["", "Access restrictions and authentication controls"],
    ],
  },
  {
    title: "5. Your Rights",
    intro: "You have the right to:",
    items: [
      ["", "Request access to or correction of your personal data"],
      ["", "Ask for deletion of your data (subject to retention policies)"],
      ["", "Withdraw consent or opt-out of non-essential communications"],
    ],
    outro: "To exercise your rights, contact us at zenorix.digitals@gmail.com.",
  },
  {
    title: "6. Cookies & Tracking Technologies",
    intro: "Our website uses cookies and similar technologies to:",
    items: [
      ["", "Enhance user navigation and experience"],
      ["", "Collect analytics for service improvement"],
    ],
    outro: "You may adjust your browser settings to disable cookies, though this may impact functionality.",
  },
  {
    title: "7. Third-Party Links",
    intro: "Our site may contain links to third-party websites or portfolios. We do not control these sites and are not responsible for their privacy practices.",
  },
  {
    title: "8. Policy Updates",
    intro: "This Privacy Policy may be revised periodically. Updates will be posted on our website with the new “Last Updated” date. We encourage users to review this page regularly.",
  },
] as const

const PrivacyPage = () => (
  <main className="zenorix-contact">
    <section className="zenorix-contact__hero">
      <div className="zenorix-svcpage__inner">
        <p className="zenorix-svcpage__pill"><i className="ri-arrow-right-up-line" aria-hidden="true" />Legal</p>
        <h1>Privacy <span>Policy</span></h1>
        <p>Effective Date: July 22, 2025</p>
      </div>
    </section>
    <section className="zenorix-contact__content zenorix-legal" aria-label="Privacy Policy">
      <div className="zenorix-svcpage__inner">
        <p>
          At Zenorix, your privacy is our priority. We are committed to safeguarding your personal data and ensuring
          transparency in how we collect, use, and protect your information. This Privacy Policy describes our practices
          regarding data collection, usage, disclosure, and your rights under applicable laws.
        </p>
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.intro}</p>
            {"items" in section && (
              <ul>
                {section.items.map(([label, text]) => (
                  <li key={text}>{label ? <><strong>{label}:</strong> {text}</> : text}</li>
                ))}
              </ul>
            )}
            {"outro" in section && <p>{section.outro}</p>}
          </section>
        ))}
        <section>
          <h2>9. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy, please reach out:</p>
          <ul>
            <li>Email: <a href="mailto:zenorix.digitals@gmail.com">zenorix.digitals@gmail.com</a></li>
            <li>Website: <a href="https://www.zenorix.in">www.zenorix.in</a></li>
          </ul>
        </section>
      </div>
    </section>
  </main>
)

export default PrivacyPage
