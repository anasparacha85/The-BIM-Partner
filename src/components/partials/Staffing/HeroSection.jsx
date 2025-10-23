import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Users, Award, Clock, CheckCircle } from "lucide-react";

const StaffingHeroSection = () => {
  const typedRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const typed = new Typed(typedRef.current, {
      strings: [
        "Elite BIM Engineers Ready to Deploy",
        "Scale Your BIM Team On-Demand",
        "Certified Revit & Navisworks Experts",
        "4D/5D BIM Specialists Available Now",
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 2500,
      loop: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "BIM Professionals" },
    { icon: Award, value: "98%", label: "Client Satisfaction" },
    { icon: Clock, value: "24-48h", label: "Deployment Time" },
  ];

  const benefits = [
    "Pre-vetted & Certified Experts",
    "Flexible Contract Models",
    "Seamless Team Integration",
    "Ongoing Technical Support",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Subtle Orange Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      {/* grid*/}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div
        className={`relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-orange-400">
                Trusted by 200+ AEC Firms
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Professional
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                BIM Staffing Solutions
              </span>
            </h1>

            {/* Typed Animation */}
            <div className="min-h-[60px]">
              <h2 className="text-2xl lg:text-3xl font-semibold text-orange-400">
                <span ref={typedRef}></span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Connect with certified BIM professionals who seamlessly integrate
              into your workflow. From Revit modelers to BIM coordinators, we
              deliver talent that drives project success.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className="relative bg-white/10  rounded-[12px] shadow-2xl p-8 lg:p-10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500 rounded-xl mb-4 shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">
                  Start Staffing Today
                </h3>
                <p className="text-sm text-orange-500">
                  Get matched with BIM experts in 24-48 hours
                </p>
              </div>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full text-gray-200 placeholder:text-gray-200 bg-gray-100/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"

                />
                <input
                  type="email"
                  placeholder="Company Email *"
                  className="w-full text-gray-200 placeholder:text-gray-200 bg-gray-100/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"

                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full text-gray-200 placeholder:text-gray-200 bg-gray-100/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"

                />
                <select className="w-full bg-gray-100/10 text-gray-200  rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none cursor-pointer">
                  <option className="text-gray-700">BIM Modeler</option>
                  <option className="text-gray-700">BIM Coordinator</option>
                  <option className="text-gray-700">BIM Manager</option>
                 <option className="text-gray-700">Revit Specialist</option>
                   <option className="text-gray-700">Navisworks Expert</option>
                  <option className="text-gray-700">Other</option>
                </select>
                <button
                  type="submit"
                  className="w-full py-3 shadow-orange-600 cursor-pointer shadow-md bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition"
                >
                  Request BIM Staffing →
                </button>
              </form>

              <p className="mt-4 text-xs text-gray-500 text-center">
                🔒 Your information is secure and confidential
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffingHeroSection;
