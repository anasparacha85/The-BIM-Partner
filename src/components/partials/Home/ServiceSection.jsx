import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import VirtualDesign from '/public/VirtualDesignService.jpg'
import BIMModeling from '/public/BIMEngineeringModeling.jpg'
import ScanToBim from '/public/ScanToBIMServices.jpg'
import BIMProjectManagement from '/public/BIMProjectManagementServices.jpg'
import BIMSecondment from '/public/BIMSecondmentServices.jpg'
import BIM4DService from '/public/4DBIMService.jpg'
import { useNavigate } from "react-router-dom";
const ServicesSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const navigate=useNavigate()

  const services = [
    {
      image:
        VirtualDesign,
      title: "Virtual Design & Construction Services",
      description:
        "Deliver smarter projects through advanced VDC workflows, improving collaboration, visualization, and project delivery.",
      delay: "delay-100",
    },
    {
      image:
        BIMModeling,
      title: "BIM Modeling Services in Dubai, UAE",
      description:
        "Accurate and data-rich BIM models tailored for architectural, structural, and MEP disciplines, supporting Dubai’s growing construction industry.",
      delay: "delay-200",
    },
    {
      image:
      ScanToBim,
      title: "Scan to BIM Services",
      description:
        "Transform laser scans and point cloud data into precise BIM models for renovation, retrofitting, and facility management.",
      delay: "delay-300",
    },
    {
      image:BIMProjectManagement,
      title: "BIM Project Management Services",
      description:
        "Optimize project workflows with BIM-driven planning, scheduling, and cost management for better decision-making and efficiency.",
      delay: "delay-400",
    },
    {
      image:BIMSecondment,
      title: "BIM Secondment Services",
      description:
        "On-demand BIM experts and specialists to support your projects, ensuring seamless execution and integration with your team.",
      delay: "delay-500",
    },
  ];

  return (
    <section ref={ref} className="bg-white flex justify-center py-20">
      <div className="w-[85%] px-4">
        {/* Top Section: What We Do + 2 Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {/* Left: What We Do as a Card */}
          <div
            className={`bg-white p-6 transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <div className="w-20 h-1 bg-orange-500 mb-6"></div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We provide end-to-end BIM and VDC solutions that enhance design,
              construction, and facility management across all project phases.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              From BIM modeling and scan-to-BIM to project management and expert
              secondment, our services drive efficiency, reduce risks, and
              improve collaboration.
            </p>
            <button onClick={()=>navigate('/services')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-all transform hover:scale-105">
              View All Services
            </button>
          </div>

          {/* Right: First 2 Services */}
          {services.slice(0, 2).map((service, index) => (
            <div
              key={index}
              className={`group bg-white overflow-hidden transition-all duration-1000 transform ${
                isVisible
                  ? `opacity-100 translate-y-0 ${service.delay}`
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(2).map((service, index) => (
            <div
              key={index}
              className={`group bg-white overflow-hidden transition-all duration-1000 transform ${
                isVisible
                  ? `opacity-100 translate-y-0 ${service.delay}`
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
