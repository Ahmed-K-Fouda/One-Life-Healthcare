import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact relative mt-20 w-full ">
      <h1 className="flex justify-center mt-5 text-[38px] font-semibold items-center text-center">
        <span className="mx-3 p-2 b hover:-translate-x-1 transition-transform">
          <Link to="/" className="text-black">
            &larr;
          </Link>
        </span>
        Contact Us
      </h1>
      <section className="pb-4 mb-4 px-4 sm:px-6 lg:px-8 text-gray-800">
        <div className="max-w-3xl mx-auto mt-14">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="mb-4">
            We do not offer refunds for any payments made for our services,
            including but not limited to subscription fees, credits, or
            promotional offers. Once a payment is made, it is non-refundable.
          </p>
          <div className="mb-6">
            <h3 className="text-lg flex justify-start items-center font-semibold mb-2">
              <span className="mx-1">
                <MdEmail />
              </span>
              Email Support
            </h3>
            <p className="mb-2">
              You can email us at{" "}
              <a
                href="mailto:support@onelifehealth.care"
                className="text-blue-600 hover:underline"
              >
                support@onelifehealth.care
              </a>{" "}
              for any inquiries or assistance you may need. Our support team
              will respond to your email as soon as possible.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="flex justify-start items-center text-lg font-semibold mb-2">
              <FaInstagram />
              Instagram
            </h3>
            <p>
              You can also reach out to us on Instagram{" "}
              <a
                href="https://www.instagram.com/onelifehealth_care"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                @onelifehealth_care
              </a>{" "}
              by sending us a direct message. Our Instagram page is monitored
              regularly, and we will do our best to assist you promptly.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="underline text-lg font-semibold mb-2">
              Hours of Operation
            </h3>
            <p>
              Our support team is available to assist you during the following
              hours:
              <br />
              <span className="font-semibold">Monday to Friday:</span> 9:00 AM
              to 6:00 PM (GMT+5:30)
              <br />
              <span className="font-semibold">
                Closed on weekends and public holidays
              </span>
            </p>
          </div>
          <div>
            <h3 className="underline text-lg font-semibold mb-2">
              Response Time
            </h3>
            <p>
              We strive to respond to all inquiries and messages within 24-48
              hours during our hours of operation. However, please note that
              response times may vary depending on the volume of inquiries
              received.
            </p>
          </div>
          <div className="mt-8">
            <p>Please Note:</p>
            <ul className="list-disc pl-5">
              <li>
                For urgent matters or technical issues, please include{" "}
                <strong>"URGENT"</strong> in the subject line of your email or
                message.
              </li>
              <li>
                When contacting us, please provide as much detail as possible
                about the issue you are experiencing or the assistance you
                require. This will help us understand your needs and provide a
                more effective response.
              </li>
            </ul>
            <p className="mt-4">
              Thank you for choosing One Life HealthCare for your mental health
              support and community needs. We are here to assist you every step
              of the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
