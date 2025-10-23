import React, { useState, useEffect, useRef } from 'react';
import { Award, Truck, Cpu, Users } from 'lucide-react';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

// Custom hook for intersection observer

// Welcome Section Component
const WelcomeSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

const features = [
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      title: "Accurate BIM Models",
      description:
        "Delivering precise, data-rich 3D models that ensure clarity, efficiency, and better decision-making throughout the project lifecycle.",
      delay: "delay-100",
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: "Clash Detection",
      description:
        "Identify and resolve design conflicts early with advanced clash detection to reduce risks and avoid costly rework on site.",
      delay: "delay-200",
    },
    {
      icon: <Cpu className="w-12 h-12 text-orange-500" />,
      title: "4D & 5D BIM",
      description:
        "Integrating scheduling (4D) and cost estimation (5D) with BIM to ensure projects are delivered on time and within budget.",
      delay: "delay-300",
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Collaboration & Coordination",
      description:
        "Our expert BIM team works closely with architects, engineers, and contractors to streamline communication and project execution.",
      delay: "delay-400",
    },
  ];


 return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Welcome Content */}
          <div className="lg:col-span-1">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to <span className='text-orange-500'>The BIM Partner's</span> Solutions
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Your Trusted Partner in Digital Construction & Smart Engineering
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                We provide end-to-end BIM services including 3D modeling,
                clash detection, 4D/5D simulations, and digital twin solutions.
                Our mission is to improve collaboration, reduce costs, and
                enhance project efficiency from design to facility management.
              </p>

              {/* Signature */}
              <div className="mb-6">
                <div
                  className="text-4xl font-script text-gray-700 mb-2"
                  style={{ fontFamily: "cursive" }}
                >
                  Alex Johnson
                </div>
                <div className="text-gray-600">
                  <div className="font-semibold">Alex Johnson</div>
                  <div className="text-sm">CEO & BIM Specialist</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Columns - Feature Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 transform ${
                    isVisible
                      ? `opacity-100 translate-y-0 ${feature.delay}`
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="group hover:bg-white hover:shadow-xl transition-all duration-300 p-6 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        <button className="text-orange-500 hover:text-orange-600 font-semibold group-hover:underline transition-all">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection