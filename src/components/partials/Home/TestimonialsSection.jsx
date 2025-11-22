import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
      const prevRef = useRef(null);
      const nextRef = useRef(null);
      const navigate=useNavigate()
    
const testimonials = [
  {
    id: 1,
    name: "Paul Anderson",
    position: "Project Director",
    company: "Skyline Developers",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The BIM coordination team saved us months of rework on our high-rise project. Clash detection between MEP and structure was handled flawlessly.",
  },
  {
    id: 2,
    name: "Ruben Driggs",
    position: "Head of Engineering",
    company: "Metro Infrastructure Ltd",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Their BIM 4D scheduling helped us deliver our metro rail expansion on time. The digital twin approach made facility management much easier.",
  },
  {
    id: 3,
    name: "Clifford Donley",
    position: "Healthcare Facility Manager",
    company: "Global Hospitals",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    text: "Managing complex hospital MEP systems was a challenge, but their BIM models gave us full visibility, reducing errors and ensuring patient safety.",
  },
  {
    id: 4,
    name: "Kevin Nash",
    position: "Operations Manager",
    company: "Oil & Gas Corp",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Their BIM simulation for our processing plant improved efficiency, cut costs, and helped us stay compliant with safety standards.",
  },
];


  return (
    <section className="py-16 bg-white">
     <div className="w-[100%] flex justify-center">
      <div className="container w-[85%] mx-auto px-4">
        {/* Heading + Navigation */}
       
            <div className="flex items-center w-[85%] justify-between mb-8">
         <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Testimonials
            <div className="w-16 h-1 bg-orange-500 mt-4"></div>
          </h2>

          {/* Custom Swiper Navigation */}
           <div className="flex gap-4 mb-8">
            <button
             ref={prevRef}
              className="w-10 h-10 border border-orange-500 text-orange-500 rounded flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
             ref={nextRef}
              className="w-10 h-10 border border-orange-500 text-orange-500 rounded flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div> 
        
       

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          {/* Swiper for testimonial cards */}
          <div className="lg:col-span-3">
            <Swiper
              modules={[Navigation]}
             
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
               onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
              className="pb-10"
            >
              {testimonials.map((testimonial,index) => (
                <SwiperSlide key={testimonial.id}>
                  <div key={`${testimonial.id}-${index}`} className="bg-white p-6 rounded-lg border-gray-300 border mr-3">
                <div className="flex flex-col items-center text-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position.split(',')[0]}, <span className="text-orange-500">{testimonial.company}</span>
                  </p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Orange help card */}
         <div className="bg-orange-500 text-white p-8 rounded-lg max-w-sm">
          <h3 className="text-2xl font-bold mb-6">
            DO YOU NEED<br />
            ANY HELP?
          </h3>
          <p className="text-orange-100 mb-8 leading-relaxed">
            My job is to help professionals to achieve their industrial goals whilst having adequate protection.
          </p>
          <button onClick={()=>navigate('/contact-us')} className="bg-white text-orange-500 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            CONTACT NOW
          </button>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
