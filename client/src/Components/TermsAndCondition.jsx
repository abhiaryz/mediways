import React from 'react'

export default function TermsAndCondition() {
  return (
    <section
      className="PrivacyPolicy w-screen flex flex-col justify-center px-20 md:px-10 py-12"
      id="PrivacyPolicy"
      style={{ marginTop: "14vh" }}
    >
      <p className="PrivacyPolicy-title">Privacy Policy</p>
      <p className="PrivacyPolicy-description">
        At Mediways, we are committed to protecting the privacy and security of
        our website visitors and clients. This Privacy Policy outlines how we
        collect, use, and safeguard your personal information when you interact
        with our website or utilize our services.
      </p>
      <p className="PrivacyPolicy-subheading">Information We Collect</p>
      <p className="PrivacyPolicy-description">
        We may collect personal information from you when you visit our website,
        fill out a contact form, request information, or book services through
        our platform. The types of personal information we may collect include:
        <ul>
          <li>Contact details (e.g., email address, phone number)</li>
          <li>Medical history and treatment preferences (if provided)</li>
          <li>Payment information (e.g., credit card details)</li>
          <li>Demographic information (e.g., age, gender)</li>
        </ul>
      </p>
      <p className="PrivacyPolicy-subheading">How We Use Your Information</p>
      <p className="PrivacyPolicy-description">
        We use the information we collect for the following purposes:
        <ul>
          <li>
            To respond to your inquiries and fulfill your requests for services
          </li>
          <li>
            To personalize your experience and tailor our services to your needs
          </li>
          <li>To process transactions and facilitate payments</li>
          <li>
            To communicate with you regarding your medical journey and provide
            updates
          </li>
          <li>To improve our website and services based on your feedback</li>
          <li>To comply with legal and regulatory requirements</li>
        </ul>
      </p>
      <p className="PrivacyPolicy-subheading">
        Information Sharing and Disclosure
      </p>
      <p className="PrivacyPolicy-description">
        We may share your personal information with third-party service
        providers who assist us in delivering our services, such as medical
        facilities, travel agencies, and payment processors. We ensure that
        these third parties adhere to strict confidentiality and data protection
        standards.
        <br />
        We do not sell, trade, or rent your personal information to third
        parties for marketing purposes without your explicit consent.
      </p>
      <p className="PrivacyPolicy-subheading">Data Security</p>
      <p className="PrivacyPolicy-description">
        We implement security measures to protect your personal information from
        unauthorized access, alteration, disclosure, or destruction. However, no
        method of transmission over the internet or electronic storage is
        entirely secure, and we cannot guarantee absolute security.
      </p>
      <p className="PrivacyPolicy-subheading">Your Choices</p>
      <p className="PrivacyPolicy-description">
        You have the right to access, update, or delete your personal
        information held by us. If you wish to exercise any of these rights or
        have any questions about our Privacy Policy, please contact us using the
        information provided below.
      </p>
      <p className="PrivacyPolicy-subheading">Updates to Privacy Policy</p>
      <p className="PrivacyPolicy-description">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or applicable laws. We encourage you to review this
        page periodically for the latest information on our privacy practices.
      </p>
      <p className="PrivacyPolicy-subheading">Contact Us</p>
      <p className="PrivacyPolicy-description">
        If you have any questions, concerns, or feedback regarding our Privacy
        Policy or data practices, please contact us at Mediways.
        <br />
        Thank you for entrusting Mediways with your personal information. We are
        committed to maintaining the confidentiality and security of your data
        throughout your medical journey.
        <br />
        <br />
        Please note that this is a general template and may need to be
        customized based on the specific services and data collection practices
        of your medical tourism website. Additionally, it's essential to consult
        with legal counsel to ensure compliance with relevant privacy laws and
        regulations.
      </p>
    </section>
  )
}
