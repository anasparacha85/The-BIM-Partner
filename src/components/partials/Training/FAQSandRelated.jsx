import React, { useState } from 'react';
import { Plus, Minus, Star } from 'lucide-react';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

// FAQ Section
const FAQSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqData = [
    {
      question: "What is the BIM course in Dubai?",
      answer: "The BIM (Building Information Modeling) course in Dubai provides you with the skills and knowledge necessary to use BIM in the design, construction, and management of buildings."
    },
    {
      question: "Who can enroll in the BIM course?",
      answer: "Anyone interested in architecture, engineering, construction, or project management can enroll. It's suitable for professionals, students, and career changers."
    },
    {
      question: "How long does the course last?",
      answer: "The duration varies depending on the program level and format chosen, typically ranging from 2-6 months for comprehensive training."
    },
    {
      question: "What will I learn in the BIM course?",
      answer: "You will learn 3D modeling, project coordination, clash detection, quantity takeoffs, 4D/5D BIM, and industry-standard software like Revit, Navisworks, and AutoCAD."
    },
    {
      question: "Will I receive certification?",
      answer: "Yes, you will receive a recognized certification upon successful completion, valued by employers in the construction and architecture industry."
    },
    {
      question: "How will the BIM course benefit me?",
      answer: "The course will enhance your career prospects, increase earning potential, provide hands-on experience with industry tools, and make you competitive in the construction technology sector."
    }
  ];

  const relatedCourses = [
    {
      title: "3Ds Max",
      description: "Learn 3Ds Max at your own pace. Start today and improve your skills with online/onsite training in Dubai.",
      rating: 4.5
    },
    {
      title: "Navisworks",
      description: "Autodesk Navisworks Essentials course instructs students on the best approaches to combine 3D geometry from cross disciplines.",
      rating: 4.5
    }
  ];

  const generateStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-orange-500 text-orange-500 opacity-50" />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* FAQ Section */}
        <div className="mb-16">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: `${index * 100}ms` }}>
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFAQ === index ? 
                    <Minus className="w-5 h-5 text-orange-500 flex-shrink-0" /> : 
                    <Plus className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  }
                </button>
                
                {expandedFAQ === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Courses */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Related Courses
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedCourses.map((course, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {generateStars(course.rating)}
                  </div>
                  <span className="text-sm text-gray-500">({course.rating})</span>
                </div>

                <button className="text-orange-500 hover:text-orange-600 font-semibold group-hover:underline transition-all">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className={`text-center mt-16 p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-xl transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your BIM Journey?
          </h3>
          <p className="text-orange-100 mb-6 text-lg">
            Book your free demo session today and take the first step towards mastering BIM
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
            Book Free Demo Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;