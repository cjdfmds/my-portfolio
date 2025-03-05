import React from "react";
import "./styles.css";
import Pawlo from "../assets/PawloRef.png";
import Lincoln from "../assets/LincolnRef.png";
import Andy from "../assets/AndyRef.png";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

// Reusable Contact Info Component
const ContactInfo = ({ icon: Icon, text }) => (
  <div className="text-base sm:text-lg md:text-xl lg:text-2xl flex items-center justify-start">
    <Icon className="text-black-900 mr-2 flex-shrink-0" />
    <p className="font-bold text-blue-900 font-inter tracking-wide">{text}</p>
  </div>
);

const References = () => {
  return (
    <section className="relative py-6 sm:py-8 md:py-10 bg-white min-h-screen overflow-x-hidden z-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 font-inter text-center md:text-left">
        Professional References
      </h3>

      {/* References cards container - stacked on mobile, side by side on larger screens */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 mb-8">
        {/* Reference Card 1 */}
        <div className="flex flex-col sm:flex-row bg-white overflow-hidden border border-gray-200 rounded-lg shadow-md">
          {/* Photo section */}
          <div className="w-full sm:w-2/3 h-48 sm:h-auto bg-blue-100">
            <img
              src={Pawlo}
              alt="Pawlo Pascual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimony section */}
          <div className="w-full sm:w-2/3 p-4">
            <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-1">Pawlo Pascual</h4>
            <p className="text-gray-600 mb-1 font-bold">Creative Director</p>
            <p className="text-gray-600 mb-2 font-bold">Pascual Creative</p>
            <p className="text-black italic text-sm sm:text-base">
              "Chris is an exceptional developer with strong problem-solving
              skills and a great team player. His technical knowledge and
              commitment to quality were evident in every project we worked on
              together."
            </p>
            <div className="mt-3 text-blue-900 font-bold text-sm sm:text-base">
              contact@pascualcreative.com
            </div>
          </div>
        </div>

        {/* Reference Card 2 */}
        <div className="flex flex-col sm:flex-row bg-white overflow-hidden border border-gray-200 rounded-lg shadow-md">
          {/* Photo section */}
          <div className="w-full sm:w-2/3 h-48 sm:h-auto bg-blue-100">
            <img
              src={Andy}
              alt="Andy McKelvey"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimony section */}
          <div className="w-full sm:w-2/3 p-4">
            <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-1">Andy McKelvey</h4>
            <p className="text-gray-600 mb-1 font-bold">Project Lead</p>
            <p className="text-gray-600 mb-2 font-bold">MVP Studio</p>
            <p className="text-black italic text-sm sm:text-base">
              "It was a pleasure working with Chris during his bootcamp at MVP Studio.
              His work on the Talent Matching web application highlighted his ability to integrate 
              complex front-end and back-end systems seamlessly."
            </p>
            <div className="mt-3 text-blue-900 font-bold text-sm sm:text-base">
              Andy.Mckelvey@mvp.studio
            </div>
          </div>
        </div>

        {/* Reference Card 3 */}
        <div className="flex flex-col sm:flex-row bg-white overflow-hidden border border-gray-200 rounded-lg shadow-md">
          {/* Photo section */}
          <div className="w-full sm:w-1/2 h-48 sm:h-auto bg-blue-100">
            <img
              src={Lincoln}
              alt="Lincoln Hu"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimony section */}
          <div className="w-full sm:w-2/3 p-4">
            <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-1">Lincoln Hu</h4>
            <p className="text-gray-600 mb-1 font-bold">CTO MVP Studio</p>
            <p className="text-gray-600 mb-2 font-bold">MVP Studio</p>
            <p className="text-black italic text-sm sm:text-base">
              "Chris demonstrated exceptional problem-solving skills and a strong grasp of 
              software architecture principles during his time at MVP Studio. 
              He showcased his proficiency in Entity Framework, responsive design, and database management."
            </p>
            <div className="mt-3 text-blue-900 font-bold text-sm sm:text-base">
              Lincoln.Hu@mvp.studio
            </div>
          </div>
        </div>
      </div>

      {/* Footer contact section */}
      <div className="bg-white overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-6 mt-6 md:mt-30 tracking-widest">
        {/* Name and title */}
        <div className="w-full md:w-1/2">
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-bold">
            Chris
          </h3>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-bold">
            Fernando
          </h3>
          <p className="text-2xl sm:text-3xl md:text-4xl font-inter font-extrabold text-blue-900">
            Full Stack Developer
          </p>
        </div>
        
        {/* Contact information */}
        <div className="w-full md:w-1/2">
          <div className="space-y-3 md:space-y-4">
            <ContactInfo
              icon={FaMapMarkerAlt}
              text="22 Ikara Rd, Papatoetoe, Auckland, New Zealand 2025"
            />
            <ContactInfo icon={FaPhone} text="+63 21 066 8629" />
            <ContactInfo icon={FaEnvelope} text="Christianjdf87@gmail.com" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { References };