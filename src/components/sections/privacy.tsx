import React, { FC } from "react";

const PrivacyPolicy: FC = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "10px",
          textAlign: "center",
          color: "#7a3cff",
        }}
      >
        Privacy Policy
      </h1>
      <p
        style={{
          fontSize: "14px",
          textAlign: "center",
          marginBottom: "30px",
          color: "#777",
        }}
      >
        Last Updated: 22-07-2025
      </p>

      <p>
        At <strong>Zenorix</strong>, we are committed to protecting your privacy
        and ensuring the security of your personal information. This Privacy
        Policy outlines how we collect, use, disclose, and safeguard your data
        when you interact with our services, website, or team.
      </p>

      <h2 style={{ fontSize: "20px", marginTop: "30px", color: "#7a3cff" }}>
        1. Information We Collect
      </h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, and other contact details provided when you book a call,
          inquire about services, or collaborate with us.
        </li>
        <li>
          <strong>Project Details:</strong> Information about your business,
          project requirements, and preferences shared during consultations.
        </li>
        <li>
          <strong>Technical Data:</strong> IP address, browser type, device
          information, and cookies (for website analytics and improvement).
        </li>
      </ul>

      <h2 style={{ fontSize: "20px", marginTop: "30px", color: "#7a3cff" }}>
        2. How We Use Your Information
      </h2>
      <ul>
        <li>Provide and improve our services.</li>
        <li>Communicate with you about projects, updates, or offers.</li>
        <li>Analyze website performance and user experience.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2 style={{ fontSize: "20px", marginTop: "30px", color: "#7a3cff" }}>
        3. Data Sharing & Disclosure
      </h2>
      <ul>
        <li>
          <strong>Team Members:</strong> Only to fulfill project requirements.
        </li>
        <li>
          <strong>Third-Party Tools:</strong> Trusted providers under strict
          confidentiality agreements.
        </li>
        <li>
          <strong>Legal Requirements:</strong> If required by law or to protect
          our rights.
        </li>
      </ul>

      <h2 style={{ fontSize: "20px", marginTop: "30px", color: "#7a3cff" }}>
        4. Data Security
      </h2>
      <p>
        We implement industry-standard measures (encryption, secure servers,
        access controls) to protect your data from unauthorized access or
        breaches.
      </p>

      <h2 style={{ fontSize: "20px", marginTop: "30px", color: "#7a3cff" }}>
        5. Your Rights
      </h2>
      <ul>
        <li>Request access to, correction, or deletion of your data.</li>
        <li>Opt out of marketing communications.</li>
        <li>Withdraw consent (where applicable).</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:zenorix.group@gmail.com" style={{ color: "#7a3cff" }}>
          zenorix.group@gmail.com
        </a>
        .
      </p>

      <h2 style={{ fontSize: "20px", marginTop: "30px", color: "#7a3cff" }}>
        6. Cookies & Tracking
      </h2>
      <p>
        Our website uses cookies to enhance user experience. You can disable
        cookies via browser settings, but some features may not function
        properly.
      </p>

      <h2 style={{ fontSize: "20px", marginTop: "30px", color: "#7a3cff" }}>
        7. Third-Party Links
      </h2>
      <p>
        Our website may link to external sites (e.g., client portfolios). We are
        not responsible for their privacy practices.
      </p>

      <h2 style={{ fontSize: "20px", marginTop: "30px", color: "#7a3cff" }}>
        8. Policy Updates
      </h2>
      <p>
        We may update this policy periodically. Changes will be posted on our
        website with an updated "Last Revised" date.
      </p>

      <h2 style={{ fontSize: "20px", marginTop: "30px", color: "#7a3cff" }}>
        9. Contact Us
      </h2>
      <p>
        For questions or requests regarding this policy, email us at{" "}
        <a href="mailto:zenorix.group@gmail.com" style={{ color: "#7a3cff" }}>
          zenorix.group@gmail.com
        </a>
        .
      </p>
    </section>
  );
};

export default PrivacyPolicy;
