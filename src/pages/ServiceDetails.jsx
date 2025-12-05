import React, { useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { ChevronRight, ChevronDown, Star, FileText, ArrowLeft } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import services from "../data/servicesData";
import SEO from "../components/SEO";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const navigate=useNavigate()
  // structured data and meta
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service?.title || 'BIM Service',
    "description": service?.description || service?.fullDescription || 'BIM service by Your BIM Partner',
    "provider": {
      "@type": "Organization",
      "name": "Your BIM Partner",
      "url": "https://yourbimpartner.com"
    },
    "url": `https://yourbimpartner.com/services/${slug}`,
    "image": service?.image || 'https://yourbimpartner.com/LOGO_The BIM Partner.jpg'
  };

  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const toggleFAQ = (index) => setExpandedFAQ(expandedFAQ === index ? null : index);

  const COLORS = ["#3b82f6", "#ef4444", "#22c55e"];

  if (!service) {
    return <h2 className="text-center py-20">Service Not Found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`${service.title} | Your BIM Partner`}
        description={service.description || service.fullDescription?.slice(0, 160)}
        keywords={`${service.title}, BIM service, BIM solutions`}
        url={`https://yourbimpartner.com/services/${slug}`}
        image={service.image}
        structuredData={structuredData}
      />
      {/* Header */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">{service.title}</h1>
          <p className="text-gray-600">
            Home / services / <span className="text-black">{service.title}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full flex justify-center py-10">
        <div className="w-full md:w-[80%] mx-auto px-2 md:px-0 py-8 flex flex-col lg:flex-row gap-8">
          
          {/* Left Content */}
          <div className="flex-1">
            {/* Hero Image */}
            <div className="bg-white mb-8">
              <div className="relative h-64 md:h-96">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-green-900/20"></div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <p className="text-gray-600 mb-6">{service.fullDescription}</p>
                <div className="bg-gray-800 text-white p-6 rounded-lg border-l-4 border-orange-500 italic text-sm mb-6">
                  {service.quote}
                </div>
                 <p className="text-gray-600 mb-6">{service.secDescription}</p>
                <p className="text-gray-600 mb-6">{service.secFullDescription}</p>
              </div>
            </div>

            {/* Innovation & Research */}
            <div className="bg-white p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">INNOVATION AND RESEARCH</h2>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service?.innovations?.description}
                  </p>

                  <div className="space-y-4">
                  {service?.innovations?.childTexts.map((value,index)=>(
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{value}</span>
                    </div>
                  ))}
                    
                  
                </div>
                </div>

                {/* Pie Chart */}
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={service.pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
                      {service.pieData.map((_, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Work Process / FAQ */}
            <div className="bg-white p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">WORK PROCESS</h2>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>

              <div className="space-y-4 mb-8">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="text-[16px] font-medium text-gray-700">{faq.q}</span>
                      {expandedFAQ === index ? <ChevronDown /> : <ChevronRight />}
                    </button>
                    {expandedFAQ === index && <div className="px-6 pb-4 text-gray-600">{faq.a}</div>}
                  </div>
                ))}
              </div>

              {/* Service Report */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">SERVICE REPORT</h3>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Features */}
                <div className="space-y-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Star className="w-6 h-6 text-orange-500" />
                      <span className="text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Bar Chart */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={service.barData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value1" fill="#374151" name="Value 1" />
                      <Bar dataKey="value2" fill="#f97316" name="Value 2" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 lg:sticky lg:top-8 h-fit space-y-6">
            {/* Services Menu */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-100 p-4">
                <h3 className="text-xl font-bold text-gray-900">OUR SERVICES</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {services.map((s) => (
                  <NavLink
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className={({ isActive }) =>
                      `block p-4 transition-colors ${
                        isActive ? "bg-orange-500 text-white font-medium" : "text-gray-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    {s.title}
                  </NavLink>
                ))}
              </div>
            </div>
               <div className="bg-orange-400 text-white p-8 rounded-lg ">
                <h3 className="text-2xl font-bold mb-6">DO YOU NEED ANY HELP?</h3>
                <p className="mb-8 leading-relaxed">
                  My job is to help professionals to achieve their industrial goals 
                  whilst having adequate protection along the way.
                </p>
                <button onClick={()=>navigate('/contact-us')} className="bg-white text-orange-500 px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                  CONTACT NOW
                </button>
              </div>

            {/* Testimonial */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-6xl text-orange-500 mb-4">"</div>
              <p className="text-gray-600 mb-6">{service.testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img src={service.testimonial.image} alt={service.testimonial.author} className="w-16 h-16 rounded-full" />
                <div>
                  <h4 className="font-bold text-gray-900">{service.testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{service.testimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Company Presentation */}
            <button className="w-full bg-orange-500 text-white p-4 rounded-lg font-semibold flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              COMPANY PRESENTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
