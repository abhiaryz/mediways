import React from "react";
import { Heading } from "../components";

export default function TermsAndConditions() {
  return (
    <div className="flex w-full flex-col items-center gap-8 p-4 md:px-14 md:pt-20">
      <Heading title={"Terms and Conditions"} className={""} />
      <p className="family-poppins text-[1rem] text-gray-700">
        Last Updated: 08/17/2024
      </p>
      <p className="family-poppins text-[1rem] text-gray-700">
        Please read these Terms and Conditions (“Terms”, “Terms and Conditions”)
        carefully before using the https://aidcircle.in website operated by
        AidCircle (“AidCircle,” “we,” “us,” or “our”). Your access to and use of
        the Service is conditioned on your acceptance of and compliance with
        these Terms. These Terms apply to all visitors, users, and others who
        access or use the Service. By accessing or using the Service, you agree
        to be bound by these Terms. If you disagree with any part of these
        Terms, then you may not access the Service.
      </p>

      {/* Section 1: Purchases/Donations */}
      <div className="flex w-full flex-col gap-2">
        <h1 className="family-sora text-left text-[1.2rem] font-semibold text-darkBlue">
          1. Purchases/Donations
        </h1>
        <p className="family-poppins text-[1rem] text-gray-700">
          If you choose to make a purchase or donation through our Website, you
          may be required to provide certain information necessary for
          processing your order or donation. This information may include, but
          is not limited to, your name, contact details, and payment
          information. For details on how we use and protect your information,
          please refer to our Privacy Policy.
        </p>
      </div>

      {/* Section 2: Content */}
      <div className="flex w-full flex-col gap-2">
        <h1 className="family-sora text-left text-[1.2rem] font-semibold text-darkBlue">
          2. Content
        </h1>
        <p className="family-poppins text-[1rem] text-gray-700">
          Our Service may allow you to post, link, store, share, and otherwise
          make available certain information, text, graphics, videos, or other
          material (“Content”) viewable by others. You are solely responsible
          for the Content you post. We reserve the right to remove any Content
          deemed inappropriate or unsuitable for our Website without prior
          notice. Users who post offensive Content or Content unrelated to the
          purpose of our Website may be banned from further use.
        </p>
      </div>

      {/* Section 3: Links to Other Websites */}
      <div className="flex w-full flex-col gap-2">
        <h1 className="family-sora text-left text-[1.2rem] font-semibold text-darkBlue">
          3. Links to Other Websites
        </h1>
        <p className="family-poppins text-[1rem] text-gray-700">
          Our Service may contain links to third-party websites or services that
          are not owned or controlled by AidCircle. We do not endorse or assume
          responsibility for any third-party websites or services. You
          acknowledge and agree that we are not responsible or liable, directly
          or indirectly, for any damage or loss caused or alleged to be caused
          by or in connection with the use of or reliance on any such content,
          goods, or services available on or through any such third-party
          websites or services.
        </p>
      </div>

      {/* Section 4: Changes */}
      <div className="flex w-full flex-col gap-2">
        <h1 className="family-sora text-left text-[1.2rem] font-semibold text-darkBlue">
          4. Changes
        </h1>
        <p className="family-poppins text-[1rem] text-gray-700">
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If we make significant changes, we will
          notify you by posting the new Terms on our Website. You are advised to
          review these Terms periodically for any changes. Your continued use of
          the Service after any changes constitutes acceptance of the new Terms.
        </p>
      </div>

      {/* Section 5: Termination */}
      <div className="flex w-full flex-col gap-2">
        <h1 className="family-sora text-left text-[1.2rem] font-semibold text-darkBlue">
          5. Termination
        </h1>
        <p className="family-poppins text-[1rem] text-gray-700">
          We may terminate or suspend your access to our Service immediately,
          without prior notice or liability, for any reason, including if you
          breach these Terms. Upon termination, your right to use the Service
          will immediately cease.
        </p>
      </div>

      {/* Section 6: Disclaimer */}
      <div className="flex w-full flex-col gap-2">
        <h1 className="family-sora text-left text-[1.2rem] font-semibold text-darkBlue">
          6. Disclaimer
        </h1>
        <p className="family-poppins text-[1rem] text-gray-700">
          Our Service is provided on an "as-is" and "as-available" basis. We
          make no warranties or representations of any kind, express or implied,
          regarding the availability, accuracy, or reliability of the Service.
          Your use of the Service is at your own risk.
        </p>
      </div>

      {/* Section 7: Limitation of Liability */}
      <div className="flex w-full flex-col gap-2">
        <h1 className="family-sora text-left text-[1.2rem] font-semibold text-darkBlue">
          7. Limitation of Liability
        </h1>
        <p className="family-poppins text-[1rem] text-gray-700">
          In no event shall AidCircle, its directors, employees, partners, or
          agents be liable for any indirect, incidental, special, consequential,
          or punitive damages, including without limitation, loss of profits,
          data, or other intangible losses, resulting from (a) your use or
          inability to use the Service; (b) any unauthorized access to or use of
          our servers and/or any personal information stored therein; (c) any
          interruption or cessation of transmission to or from the Service; (d)
          any bugs, viruses, trojan horses, or the like that may be transmitted
          to or through the Service by any third party; or (e) any errors or
          omissions in any content or for any loss or damage incurred as a
          result of the use of any content posted, emailed, transmitted, or
          otherwise made available via the Service.
        </p>
      </div>

      {/* Section 8: Governing Law */}
      <div className="flex w-full flex-col gap-2">
        <h1 className="family-sora text-left text-[1.2rem] font-semibold text-darkBlue">
          8. Governing Law
        </h1>
        <p className="family-poppins text-[1rem] text-gray-700">
          These Terms shall be governed and construed in accordance with the
          laws of [Your Jurisdiction], without regard to its conflict of law
          principles. Any legal action or proceeding arising under these Terms
          shall be brought exclusively in the courts located in [Your
          Jurisdiction].
        </p>
      </div>

      {/* Section 9: Contact Us */}
      <div className="flex w-full flex-col gap-2">
        <h1 className="family-sora text-left text-[1.2rem] font-semibold text-darkBlue">
          9. Contact Us
        </h1>
        <p className="family-poppins text-[1rem] text-gray-700">
          If you have any questions about these Terms, please contact us at
          feedback@aidcircle.in.
        </p>
      </div>
    </div>
  );
}
