import React, { useState } from 'react';

const BIMPartnerFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: ''
  });

  const handleInputChange = (e) => {
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
    <div className="bg-white py-16">
      {/* Partner Logos */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center h-20">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Official_seal_of_Telangana.svg/200px-Official_seal_of_Telangana.svg.png" 
              alt="Government Partner" 
              className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <div className="text-2xl font-bold text-blue-600">idp | IELTS</div>
          </div>
          <div className="flex items-center justify-center h-20">
            <div className="text-2xl font-bold text-blue-600">BRITISH COUNCIL</div>
          </div>
          <div className="flex items-center justify-center h-20">
            <div className="text-2xl font-bold text-red-600">EXCELLIS</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - BIM Course Info */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="BIM Course"
                className="w-full h-96 object-cover"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent p-8 flex flex-col justify-center">
                <div className="max-w-md">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-red-600 font-bold text-2xl">Learnovate</div>
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-2">BIM</h2>
                  <h3 className="text-3xl font-bold text-red-600 mb-6">COURSE IN DUBAI</h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    BIM is the use of 3D modeling software to help architecture, 
                    engineering, and construction (AEC) individuals. Also, it will 
                    ease the project planning for AEC.
                  </p>
                  
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold transition-colors duration-300 mb-4">
                    BOOK FREE DEMO
                  </button>
                  
                  <div className="transform rotate-12 inline-block">
                    <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold skew-x-12">
                      KHDA APPROVED
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-sm text-gray-600 ml-2">www.learnovateenecenter.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Request Form */}
          <div className="bg-red-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-8">Request Course Info</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number <span className="text-red-300">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter UAE Contact Number Or WhatsApp Number"
                  className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-red-300">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Course <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  placeholder="Enter Course Name"
                  className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                  required
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BIMPartnerFormSection;