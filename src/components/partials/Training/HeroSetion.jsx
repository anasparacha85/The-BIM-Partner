import React from 'react';
import { Phone, MessageCircle, Check, Award, Users, BookOpen, Clock } from 'lucide-react';

// Hero Section
const BIMHeroSection = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80')`
      }}>
      
      <div className="max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="w-2 h-20 bg-orange-500"></div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              BIM Course <span className="text-orange-500">In Dubai</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              BIM is the use of 3D modeling software to help architecture, engineering, and construction (AEC) 
              individuals. Ease your project planning with professional training.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                'Job Oriented Course',
                'Hands-On Practice Sessions',
                'Flexible schedule | Online and physical sessions available'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="space-y-6 pt-4">
              <h2 className="text-2xl font-bold text-orange-500">
                BOOK YOUR FREE DEMO SESSION
              </h2>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                  <Phone className="w-5 h-5" />
                   +91-7022894585
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Award className="w-8 h-8" />, title: "Certified", desc: "Industry Recognition" },
              { icon: <Users className="w-8 h-8" />, title: "10,000+", desc: "Successful Students" },
              { icon: <BookOpen className="w-8 h-8" />, title: "70+", desc: "Certification Courses" },
              { icon: <Clock className="w-8 h-8" />, title: "Flexible", desc: "Learning Schedule" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-opacity-20 transition-all">
                <div className="text-orange-500 mb-3">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.title}</h3>
                <p className="text-gray-300 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BIMHeroSection;