import { Clock, Dribbble, Facebook, Instagram, Linkedin, MapPin, Phone, Twitter } from "lucide-react";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TheBIMPartner from "/public/LOGO_The BIM Partner.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
   { name: "BIM Training", path: "/bim-training" },
  { name: "BIM Staffing", path: "/bim-staffing" },
  {
    name: "Our Services",
    path: "/services",
    children: [
      { name: "Virtual Design & Construction", path: "/services/virtual-design-construction" },
      { name: "BIM Modeling Services", path: "/services/bim-modeling-dubai-uae" },
        { name: "4D & 5D BIM Cost Scheduling", path: "/services/4d-5d-bim-cost-scheduling" },

      { name: "Scan to BIM Services", path: "/services/scan-to-bim" },
      { name: "BIM Project Management Services", path: "/services/bim-project-management" },
          { name: "BIM Secondment & Resource Augmentation", path: "/services/bim-secondment-services" },
    ],
  },
   { name: "Blogs", path: "/blogs" },
  { name: "Career", path: "/career" },
  { name: "Contact Us", path: "/contact-us" },
 
  
 
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 230);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <header className="w-full z-50">
  {/* Top Header */}
  <div
    className={`bg-white border-b border-gray-200 px-4 py-3 transition-all duration-500 ease-in-out ${
      scrolled ? "opacity-0" : "opacity-100"
    }`}
  >
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
      {/* Logo */}
      <div className="flex items-center mb-4 lg:mb-0">
        <span className="text-2xl font-bold text-gray-800">
          <img src={TheBIMPartner} alt="The BIM Partner" width={200} />
        </span>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 text-sm">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 text-orange-500 mr-2" />
          <div>
            <div className="font-semibold">Mantri Commercio Tower-A,</div>
            <div>Bengaluru, India.</div>
          </div>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 text-orange-500 mr-2" />
          <div>
            <div className="font-semibold">Monday to Sat: 9 AM to 6 PM</div>
            <div>Sunday: Closed</div>
          </div>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 text-orange-500 mr-2" />
          <div>
            <div className="font-semibold">
<a 
  href="tel:+917022894585" 
  className="hover:underline hover:text-orange-400 transition-colors"
>
  +91-7022894585
</a></div>
           <div>
  <a 
    href="mailto:info@yourbimpartner.com" 
    className="hover:underline hover:text-gray-500 transition-colors"
  >
    info@yourbimpartner.com
  </a>
</div>

          </div>
        </div>
        <button
          onClick={() => navigate("/#quotes")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold transition-colors"
        >
          Get a Quote
        </button>
      </div>
    </div>
  </div>

 <nav
  className={`transition-all duration-500 ${
    scrolled
      ? "fixed top-0 left-0 z-[40] w-full bg-black shadow-md"
      : "relative bg-black"
  }`}
>
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 relative">
          {navLinks.map((link, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(link.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-white hover:text-orange-400 transition-colors"
                }
              >
                {link.name}
              </NavLink>

              {/* Dropdown */}
              {link.children && openDropdown === link.name && (
                <div className="absolute top-full z-[50] left-0 bg-white text-black shadow-lg rounded w-56">
                  <ul className="py-2">
                    {link.children.map((child, cIdx) => (
                      <li key={cIdx}>
                        <NavLink
                          to={child.path}
                          className="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                        >
                          {child.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <Facebook className="w-5 h-5 text-white hover:text-orange-400 cursor-pointer" />
          <Twitter className="w-5 h-5 text-white hover:text-orange-400 cursor-pointer" />
          <Instagram className="w-5 h-5 text-white hover:text-orange-400 cursor-pointer" />
          <Linkedin className="w-5 h-5 text-white hover:text-orange-400 cursor-pointer" />
          <Dribbble className="w-5 h-5 text-white hover:text-orange-400 cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black pb-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 font-semibold py-2 block"
                      : "text-white hover:text-orange-400 py-2 block"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>

                {/* Mobile Dropdown */}
                {link.children && (
                  <div className="pl-4">
                    {link.children.map((child, cIdx) => (
                      <NavLink
                        key={cIdx}
                        to={child.path}
                        className="block text-sm text-gray-300 hover:text-orange-400 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </nav>
</header>
  )
};

export default Navbar;
