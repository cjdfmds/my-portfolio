import React from "react";
import "./styles.css"; // Make sure to import your CSS file
import Pawlo from "../assets/PawloRef.png";
import Lincoln from "../assets/LincolnRef.png";
import Andy from "../assets/AndyRef.png";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

// Reusable Contact Info Component
const ContactInfo = ({ icon: Icon, text }) => (
    <div className="text-2xl flex items-center justify-center md:justify-start">
      <Icon className="text-black-900 mr-2" />
      <p className=" font-bold text-blue-900 font inter tracking-wide">{text}</p>
    </div>
  );

const References = () => {
  return (
    <section className="relative py-10 bg-white h-screen overflow-hidden z-20 px-6 md:px-20">
      <h3 className="text-3xl font-bold text-blue-800 mb-4 font-inter">
        Professional References
      </h3>
      <div className="flex-1 mb-8"></div>

      {/* References cards container - changed to flex-row with space-x-6 */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-0">
        {/* Reference Card 1 */}
        <div className="flex-1 flex flex-row bg-white overflow-hidden">
          {/* Photo section (full width, 1/3 height) */}
          <div className="w-full h-full bg-blue-100">
            <img
              src={Pawlo}
              alt="John Smith"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimony section (full width, 2/3 height) */}
          <div className="w-full flex-1 p-1 mt-12">
            <h4 className="text-xl font-bold text-blue-900 mb-2">Pawlo Pascual</h4>
            <p className="text-gray-600 mb-1 font-bold">Creative Director </p>
            <p className="text-gray-600 mb-4 font-bold">Pascual Creative</p>
            <p className="text-black italic  ">
              "Chris is an exceptional developer with strong problem-solving
              skills and a great team player. His technical knowledge and
              commitment to quality were evident in every project we worked on
              together."
            </p>
            <div className="mt-4 text-blue-900 font-bold">
              contact@pascualcreative.com
            </div>
          </div>
        </div>

        {/* Reference Card 2 */}
        <div className="flex-1 flex flex-row bg-white overflow-hidden">
          {/* Photo section (full width, 1/3 height) */}
          <div className="w-full h-full bg-blue-100">
            <img
              src={Andy}
              alt="John Smith"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimony section (full width, 2/3 height) */}
          <div className="w-full flex-1 p-1 mt-12">
            <h4 className="text-xl font-bold text-blue-900 mb-2">Pawlo Pascual</h4>
            <p className="text-gray-600 mb-1 font-bold">Creative Director </p>
            <p className="text-gray-600 mb-4 font-bold">Pascual Creative</p>
            <p className="text-black italic  ">
              "It was a pleasure working with Chris during his bootcamp at MVP Studio.
               His work on the Talent Matching web application highlighted his ability to integrate 
               complex front-end and back-end systems seamlessly. "
            </p>
            <div className="mt-4 text-blue-900 font-bold">
              Andy.Mckelvey@mvp.studio
            </div>
          </div>
        </div>
        {/* Reference Card 3 */}
        <div className="flex-1 flex flex-row bg-white overflow-hidden">
          {/* Photo section (full width, 1/3 height) */}
          <div className="w-full h-full bg-blue-100">
            <img
              src={Lincoln}
              alt="John Smith"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimony section (full width, 2/3 height) */}
          <div className="w-full flex-1 p-1 mt-12">
            <h4 className="text-xl font-bold text-blue-900 mb-2">Pawlo Pascual</h4>
            <p className="text-gray-600 mb-1 font-bold">Creative Director </p>
            <p className="text-gray-600 mb-4 font-bold">Pascual Creative</p>
            <p className="text-black italic  ">
              "Chris demonstrated exceptional problem-solving skills and a strong grasp of 
              software architecture principles during his time at MVP Studio. 
              He showcased his proficiency in Entity Framework, responsive design, and database management."
            </p>
            <div className="mt-4 text-blue-900 font-bold">
            Lincoln.Hu@mvp.studio
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden flex items-center mt-10 tracking-widest">
        <div className="flex-1">
          <h3 className="text-7xl mt-7 mb-2 font-inter font-bold  ">
            Christian
          </h3>
          <h3 className="text-7xl font-inter font-bold ">Fernando</h3>
          <p className="text-4xl font-inter font-extrabold  text-blue-900 ">
            Full Stack Developer
          </p>
        </div>
        <div className="flex-1 flex ">
          <div className="mt-8 space-y-4">
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
