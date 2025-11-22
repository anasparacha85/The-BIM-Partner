import React from "react";
import SEO from "../components/SEO";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us",
    "url": "https://yourbimpartner.com/contact-us",
    "organization": {
      "@type": "Organization",
      "name": "Your BIM Partner",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "info@yourbimpartner.com"
      }
    }
  };

  return (
    <div className="w-full">
      <SEO
        title="Contact Us - Your BIM Partner"
        description="Get in touch with Your BIM Partner for BIM solutions, staffing, and training. Contact us for more information about our services."
        keywords="contact BIM partner, BIM inquiry, construction services contact"
        url="https://yourbimpartner.com/contact-us"
        structuredData={structuredData}
      />
      {/* Page Header */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">CONTACT US</h1>
          <p className="text-gray-600">
            Home / <span className="text-black">Contact Us</span>
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Left Form Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-black mb-2">GET IN TOUCH</h2>
          <div className="w-20 h-1 bg-orange-500 mb-6"></div>
          <p className="text-gray-600 mb-8">
            Your Partner for Digital Construction Excellence. Whether you need
            BIM modeling, clash detection, 4D construction scheduling, quantity
            take-offs, or facility management integration, our expert team is
            ready to collaborate and deliver precision-driven solutions.
          </p>

          {/* === Original Contact Form (Commented Out) === */}
          {/*
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded bg-gray-100 focus:outline-none w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-4 rounded bg-gray-100 focus:outline-none w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded bg-gray-100 focus:outline-none w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-4 rounded bg-gray-100 focus:outline-none w-full"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="p-4 rounded bg-gray-100 focus:outline-none w-full md:col-span-2"
            ></textarea>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition-colors md:col-span-2 w-40">
              Send Now
            </button>
          </form>
          */}

          {/* === Embedded Enquiry Form (iFrame) === */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://techie-soft.com/system/enquiry-form/eyJpdiI6Ims2S3lObFRBL1hjLzZmVGhDTjJ0cVE9PSIsInZhbHVlIjoiWHYvbFd0aDJhbjg4WkJHcDdiTzBQdz09IiwibWFjIjoiYTAzMDU5M2M0ZTMwOTQ4MzMyN2IwMWJiYjc2YmE1ZTBmYmRhODkyZTg2ZjkwY2FmMjViNGJmMGE1MjdiNjYwNSIsInRhZyI6IiJ9"
              width="100%"
              height="950"
              style={{ overflow: "hidden", border: "none" }}
              frameBorder="0"
              title="Enquiry Form"
            ></iframe>
          </div>
        </div>

        {/* Right Contact Info */}
     <div className="bg-orange-400 text-white rounded-lg p-8 space-y-8 sticky top-24 h-fit">


          <div className="flex items-start space-x-4">
            <div className="bg-white text-orange-500 p-3 rounded-full">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">VISIT US</h3>
               <p>Mantri Commercio Tower-A,</p>
      <p>Marathahalli - Sarjapur Outer Ring Rd,</p>
      <p>Kariyammana Agrahara, Bellandur,</p>
      <p>Bengaluru, Karnataka 560103, India</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-white text-orange-500 p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">CALL US</h3>
              <p><a 
  href="tel:+917022894585" 
  className="hover:underline hover:text-gray-200 transition-colors"
>
  +91-7022894585
</a></p>
              <p><a 
  href="tel:+917022894585" 
  className="hover:underline hover:text-gray-200 transition-colors"
>
  +91-7022894585
</a></p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-white text-orange-500 p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">MAIL US</h3>
               <a
          href="mailto:info@yourbimpartner.com"
          className="hover:underline hover:text-gray-200 transition-colors"
        >
          info@yourbimpartner.com
        </a>
              <p>  <a
          href="mailto:info@yourbimpartner.com"
          className="hover:underline hover:text-gray-200 transition-colors"
        >
          info@yourbimpartner.com
        </a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      {/* Google Map */}
<div className="w-full h-[50vh]">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.533107813586!2d77.68136457480346!3d12.939987887371932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ff7ae71d3f%3A0x693c19c38e78d6aa!2sMantri%20Commercio%2C%20Tower-A%2C%20Marathahalli%20-%20Sarjapur%20Outer%20Ring%20Rd%2C%20Kariyammana%20Agrahara%2C%20Bellandur%2C%20Bengaluru%2C%20Karnataka%20560103%2C%20India!5e0!3m2!1sen!2sin!4v1730837299999!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>
  );
};

export default Contact;
