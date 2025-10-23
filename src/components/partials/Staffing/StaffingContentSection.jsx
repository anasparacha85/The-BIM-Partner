import { Phone, MessageCircle, Check, Users, Award, Briefcase, Clock, Target, ChevronRight, Mail } from 'lucide-react';
import blogsData from '../../../data/BlogData';
import { Link, useNavigate } from 'react-router-dom';

// Main Content Section
const StaffingContentSection = () => {
    const navigate=useNavigate()
  const staffCategories = [
    "BIM Modelers",
    "BIM Coordinators",
    "BIM Managers",
    "BIM Leads or BIM Specialists"
  ];

  const experienceLevels = [
    { level: "Entry Level", years: "Minimum 2 years of experience" },
    { level: "Mid Level", years: "Minimum 3 to 6 years of experience" },
    { level: "Senior Level", years: "Minimum 7 years of experience" }
  ];

  const advantages = [
    "Save money, time and resources hiring and training new employees",
    "Free up office space for more internal employees",
    "Keep up with growing responsibilities and tasks without hiring or training new staffs",
    "Allow internal employees to focus on more challenging and extensive tasks",
    "Streamline production and improve productivity",
    "Submit higher quality BIM projects on time"
  ];

  const majorProjects = [
    "Etihad Rail, UAE",
    "JTC FoodHub, Singapore",
    "Seven City JLT, Dubai, UAE (United Arab Emirates)",
    "Bedok Central, Singapore",
    "Punggol HDB, Singapore",
    "Four Districts, Kuwait",
    "Kuwait New Maternity Hospital, Kuwait"
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl rounded-[30px] mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Introduction */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                As <span className="font-bold text-gray-900">BIM Staffing</span>, we offer outsourcing our employees to our clients for completing certain BIM tasks saving money, increasing efficiency and streamlining their project deliveries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our BIM staffs work as contract employees having extensive experience and expertise on certain BIM related tasks and roles. They typically complete short term projects or ongoing assignments that require their experience to finish. Typically, they work remotely and can be deployed on-site at client premises on request.
              </p>
            </div>

            {/* Staff Categories */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Below are our BIM staffs that we place as BIM Secondment Services
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {staffCategories.map((category, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-800 font-medium">{category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Levels */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Experience Categories
              </h3>
              <p className="text-gray-700 mb-6">
                Each of our staffs are categorized among Entry level, Mid level, and Senior level categories based on their years of experiences in working on BIM projects.
              </p>
              <div className="space-y-4">
                {experienceLevels.map((level, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg hover:bg-orange-50 transition-all group">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{level.level}</h4>
                      <p className="text-gray-600">{level.years}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-6 leading-relaxed">
                Our BIM Managers, BIM Leads / BIM Specialists are having minimum 10 years of experience in working on BIM project deliveries involving{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600 font-semibold">BIM services</a>. Their roles differs among themselves based on the nature of responsibilities they have handled as{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600 font-semibold">BIM Project Management Services</a>.
              </p>
            </div>

            {/* Advantages */}
            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-8 text-orange-500">
                Advantages of outsourcing to our staffs:
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <ChevronRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                    <p className="text-gray-200">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Projects */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Major BIM projects that used our BIM Secondment Services:
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {majorProjects.map((project, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-white rounded-lg border border-orange-200 hover:border-orange-400 transition-all group">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 font-medium">{project}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Looking for BIM Staffing Solutions?
              </h3>
              <p className="mb-6 text-orange-100">
                If you are looking for a company who can provide you with BIM staffs, feel free to write us at{' '}
                <a href="mailto:contact@oneclickbim.com" className="underline font-semibold">contact@oneclickbim.com</a>
                {' '}or fill up the form requesting a <span className="font-bold">FREE</span> quote.
              </p>
              <button  className="bg-white text-orange-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
               <Link to={'/#quotes'}>REQUEST A QUOTE
              </Link> </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
              <div className="bg-gray-100 p-4 border-b-2 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900">RECENT POSTS</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {blogsData.map((post, index) => (
                
                  <div key={index} className="p-4 hover:bg-orange-50 transition-colors cursor-pointer group">
                    <p className="text-gray-700 text-sm flex items-start gap-2 group-hover:text-orange-600">
                      <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <Link to={`/blogs/${post.slug}`}>{post.title}</Link>  
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-100 p-4 border-b-2 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900">CATEGORIES</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {[
                  "BIM",
                  "BIM Coordination",
                  "BIM Execution Plan",
                  "Case Studies",
                  "IPD and VDC Approach",
                  "Outsourcing",
                  "Point Cloud to BIM",
                  "UAE"
                ].map((category, index) => (
                  <div key={index} className="p-4 hover:bg-orange-50 transition-colors cursor-pointer group">
                    <p className="text-gray-700 text-sm flex items-center gap-2 group-hover:text-orange-600">
                      <ChevronRight className="w-4 h-4 flex-shrink-0" />
                      {category}
                    </p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Contact CTA */}
            <div className="bg-orange-500 text-white p-8 rounded-lg shadow-lg sticky top-24">
              <h3 className="text-2xl font-bold mb-4">DO YOU NEED ANY HELP?</h3>
              <p className="mb-6 leading-relaxed">
                My job is to help professionals achieve their industrial goals whilst having adequate protection along the way.
              </p>
              <button onClick={()=>navigate('/contact')} className="w-full bg-white text-orange-600 px-6 py-3 rounded font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
                CONTACT NOW
              </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-lg shadow-lg p-6 ">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Search</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 transition-all">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StaffingContentSection