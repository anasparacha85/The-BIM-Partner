import React, { useState } from 'react';
import { Flag, Gift, Users } from 'lucide-react';
import CountUp from '../../../Animations/CountUp';

const QuoteRequestComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black text-white md:h-[80vh] flex items-center justify-center p-6 md:p-8">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        
        {/* Left side - Statistics */}
        <div className="flex flex-col space-y-12 w-full lg:w-1/3">
          <div className="flex items-center gap-6">
            <Flag className="text-orange-500 w-10 h-10 md:w-12 md:h-12" />
            <div>
              <div className="text-orange-500 text-3xl md:text-4xl font-bold"><CountUp
                  from={0}
                  to={32}
                  separator=","
                  direction="up"
                  duration={0.5}
                  className="count-up-text "
                /></div>
              <div className="text-gray-300 text-base md:text-lg">Years Experience</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Gift className="text-orange-500 w-10 h-10 md:w-12 md:h-12" />
            <div>
              <div className="text-orange-500 text-3xl md:text-4xl font-bold"><CountUp
                  from={0}
                  to={368}
                  separator=","
                  direction="up"
                  duration={0.5}
                  className="count-up-text "
                /></div>
              <div className="text-gray-300 text-base md:text-lg">Projects</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Users className="text-orange-500 w-10 h-10 md:w-12 md:h-12" />
            <div>
              <div className="text-orange-500 text-3xl md:text-4xl font-bold"><CountUp
                  from={0}
                  to={989}
                  separator=","
                  direction="up"
                  duration={0.5}
                  className="count-up-text "
                /></div>
              <div className="text-gray-300 text-base md:text-lg">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Right side - Quote Form */}
        <div className="flex-1 max-w-2xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Request a Quote
            <div className="w-16 h-1 bg-orange-500 mt-3"></div>
          </h2>
          
          <div className="space-y-6">
            {/* Name + Message */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 input-gray border rounded px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="flex-1 input-gray border rounded px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"
              />
            </div>
            
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full input-gray border rounded px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            />
            
            {/* Service + Button */}
            <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-end">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="flex-1 input-gray border rounded px-4 py-4 text-white focus:outline-none focus:border-orange-500"
              >
                <option value="">Select Services</option>
                <option value="consulting">Consulting</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
              </select>
              
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded transition-colors w-full md:w-auto"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestComponent;
