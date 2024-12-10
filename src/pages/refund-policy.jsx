import React from "react";
import { Heading } from "../components";

export default function RefundPolicy() {
  return (
    <div className="flex w-full flex-col items-center gap-8 overflow-hidden p-4 pt-12 md:p-24">
      <Heading title={"Refund Policy"} className={""} />
      <p className="family-poppins w-full text-[1rem] text-gray-700">
        At AidCircle, we deeply appreciate your contributions to support our
        mission. If you need to cancel your donation, we have established a
        reliable refund policy to ensure a smooth experience for you.
      </p>

      <p className="family-poppins w-full text-[1rem] text-gray-700">
        We process donations carefully according to the guidelines agreed upon
        in the donor forms, whether completed offline or online. If you
        encounter an erroneous deduction or wish to cancel your donation, please
        submit your request within 7 working days from the date of the donation.
      </p>

      <p className="family-poppins w-full text-[1rem] text-gray-700">
        Please note that the timing of your refund may vary depending on the
        type of card used for the transaction. To facilitate a refund, we will
        need proof of the deducted donation amount along with written
        communication requesting the refund within two days of the donation.
      </p>

      <p className="family-poppins w-full text-[1rem] text-gray-700">
        If a tax exemption certificate (10bd) has already been issued, a refund
        for the donation will not be possible. In other cases, refunds will be
        processed after deducting the applicable donation processing charges and
        payment gateway service fees.
      </p>

      <p className="family-poppins w-full text-[1rem] text-gray-700">
        To request a refund, please contact us at: feedback@aidcircle.in
      </p>
    </div>
  );
}
