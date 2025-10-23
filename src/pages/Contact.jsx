import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full">
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
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Form Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-black mb-2">GET IN TOUCH</h2>
          <div className="w-20 h-1 bg-orange-500 mb-6"></div>
         <p className="text-gray-600 mb-8">
  Your Partner for Digital Construction Excellence. Whether you need BIM
  modeling, clash detection, 4D construction scheduling, quantity take-offs,
  or facility management integration, our expert team is ready to collaborate
  and deliver precision-driven solutions.
</p>


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
        </div>

        {/* Right Contact Info */}
        <div className="bg-orange-500 text-white rounded-lg p-8 space-y-8">
          <div className="flex items-start space-x-4">
            <div className="bg-white text-orange-500 p-3 rounded-full">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">VISIT US</h3>
              <p>No. 12 Julius Ave,</p>
              <p>North Ryde, Australia,</p>
              <p>Postcode- 2113</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-white text-orange-500 p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">CALL US</h3>
              <p>+(528) 456-7592</p>
              <p>+(528) 456-7592</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-white text-orange-500 p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">MAIL US</h3>
              <p>info@induzy.com</p>
              <p>info@induzy.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-[50vh]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.755276994252!2d151.1241989762402!3d-33.78677637324659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a7f26762b18b%3A0xb6d6f5e497d4e7f7!2sNorth%20Ryde%20NSW%202113%2C%20Australia!5e0!3m2!1sen!2sau!4v1695800230836!5m2!1sen!2sau"
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
