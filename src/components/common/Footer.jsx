import React from "react";
import { Facebook, Instagram, Youtube, Mail, Phone, Clock, MapPin, Twitter, Linkedin } from "lucide-react";
import TheBIMPartner from '/public/LOGO_The BIM Partner.png'

// Yehi navLinks footer me bhi use karenge
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Services", path: "/services" },
  { name: "Career", path: "/career" },
  { name: "Contact Us", path: "/contact" },
  { name: "Blogs", path: "/blogs" },
  { name: "About Us", path: "/about" },
  { name: "BIM Training", path: "/training" },
  { name: "BIM Staffing", path: "/staffing" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 md:py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <div className="flex items-center mb-4 ">
            <span className="text-2xl font-bold text-gray-800">
             <img 
  src={TheBIMPartner} 
  alt="Your BIM Partner" 
  className="" 
  width={200} 
/>

            </span>
          </div>
          <p className="text-[16px] mb-4 leading-6">
            At <span className="text-white font-semibold">Your BIM Partner</span>, we empower businesses 
            with cutting-edge BIM solutions to transform construction efficiency and success.
          </p>
          <div className="flex items-center space-x-3 mt-8">
            <span className="text-white text-[16px] font-semibold">Follow Us:</span>
            <div className="flex space-x-2">
              <a href="#" className="bg-blue-500 text-white p-2 rounded-full"><Facebook size={16} /></a>
              <a href="#" className="bg-black text-white p-2 rounded-full"><Twitter size={16}/></a>
              <a href="#" className="bg-pink-500 text-white p-2 rounded-full"><Instagram size={16} /></a>
              <a href="#" className="bg-red-500 text-white p-2 rounded-full"><Youtube size={16} /></a>
              <a href="#" className="bg-blue-700 text-white p-2 rounded-full"><Linkedin size={16}/></a>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">USEFUL LINKS</h2>
          <div className="grid grid-cols-2 gap-5 text-[16px]">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.path} className="hover:text-orange-500">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white font-semibold mb-4">CONTACT INFO</h2>
          <ul className="space-y-5 text-[16px]">
            <li className="flex items-start space-x-4">
              <MapPin className="text-orange-500" size={16} />
              <span>Mantri Commercio Tower-A, <br /> Bengaluru, India.</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="text-orange-500" size={16} />
              <span>
<a 
  href="tel:+917022894585" 
  className="hover:underline hover:text-orange-400 transition-colors"
>
  +91-7022894585
</a>
</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="text-orange-500" size={16} />
              <span> <a 
    href="mailto:info@yourbimpartner.com" 
    className="hover:underline hover:text-gray-200 transition-colors"
  >
    info@yourbimpartner.com
  </a></span>
            </li>
            <li className="flex items-center space-x-2">
              <Clock className="text-orange-500" size={16} />
              <span>Mon-Fri: 9am to 5pm</span>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-white font-semibold mb-4">SUBSCRIBE</h2>
          <p className="text-[16px] mb-4">Get exclusive BIM insights & news delivered by Your BIM Partner</p>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-md bg-white text-black focus:outline-none"
            />
            <button className="bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600">Go</button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-[16px] text-gray-400 text-start">
        <p>
          Copyrights © 2025 <span className="text-orange-500">Your BIM Partner</span>. 
       
        </p>
      </div>
    </footer>
  );
}
