import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TeamSection = () => {
  const teamMembers = [
  {
    name: "Margaret Griffith",
    position: "BIM Project Manager",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description:
      "Leads BIM projects from start to finish, ensuring models, data, and workflows align with client requirements and deadlines.",
  },
  {
    name: "Geoffrey Smith",
    position: "Lead BIM Coordinator",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description:
      "Expert in clash detection, multidisciplinary coordination, and delivering seamless integration across architectural, structural, and MEP models.",
  },
  {
    name: "Andrew Fry",
    position: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description:
      "Provides leadership and vision, driving the growth of the company with a focus on BIM innovation and client satisfaction.",
  },
  {
    name: "Sophia Turner",
    position: "BIM Technology Director",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description:
      "Oversees digital transformation, implementing cutting-edge BIM tools, 4D/5D workflows, and digital twin technologies.",
  },
  {
    name: "Michael Johnson",
    position: "BIM Implementation Specialist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description:
      "Ensures smooth BIM adoption by supporting project teams, managing standards, and training staff for optimal project delivery.",
  },
  
];


  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Meet Our Team
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        //   pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 shadow-2xl shadow-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSection;
