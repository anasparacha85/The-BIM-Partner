import React from "react";

const JoinCommunity = () => {
  return (
    <section
      className="relative h-[70vh] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529680459049-bf0340fa0755?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative  max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 items-start gap-12">
        {/* Left Content */}
        <div className="text-white md:mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
             Join The BIM Partner Community
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
           Stay connected with the future of construction. At <span className="text-orange-400 font-semibold">The BIM Partner</span>, 
            we bring together engineers, architects, and innovators who are shaping tomorrow’s 
            projects with BIM technology. Subscribe to get the latest updates, insights, 
            and opportunities in digital construction.
          </p>

          {/* Input + Button */}
          <div className="flex w-full max-w-lg">
            <input
              type="email"
              placeholder="Your email.."
              className="w-full px-4 py-3 rounded-l-md bg-white focus:outline-none text-gray-800"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-6 md:px-8 py-3 rounded-r-md font-semibold text-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:-translate-y-20 lg:justify-end">
          <img
            src="https://demo.zozothemes.com/induzy/wp-content/uploads/sites/15/2018/06/industrial_worker.png" // replace with your worker image URL
            alt="Worker"
            className="w-[80%] md:w-[70%] lg:w-[60%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
