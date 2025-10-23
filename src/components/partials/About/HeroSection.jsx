import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Hero Section Component
const HeroSection = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-[90vh] ">
      {/* Header */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">About Us</h1>
          <p className="text-gray-600">
            Home / <span className="text-black">{"About us"}</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl   mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-orange-500 mb-2">
               Your Trusted Partner in  <span className="text-gray-900">BIM Modeling Services</span> AND <span className="text-gray-900">CAD Drawing Solutions</span>
              </h2>
              <div className="w-16 h-1 bg-orange-500 mb-8"></div>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              At The BIM Partner, we take immense pride in leading the provider of cutting-edge BIM modelling services and CAD drawing solutions. With a legacy spanning 15 years, we have consistently delivered excellence to a diverse clientele nationally and internationally.


Our core expertise lies in a wide array of services, including as-built surveys utilizing state-of-the-art 3D laser scanning, precision BIM modelling, and meticulous 2D and 3D drawing services. We understand the critical role of accurate and detailed design documentation in construction and engineering projects. Hence, our dedicated team of experienced engineers, designers, and BIM modelers are committed to delivering nothing short of excellence.
            </p>

            <button onClick={()=>navigate('/services')} className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-[16px] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              OUR SERVICES
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Industrial Machinery"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection