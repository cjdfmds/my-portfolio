import React from "react";
import "./styles.css"; // Ensure your CSS file is imported
import user from "../assets/user.png"; // Use the correct path to the user's picture
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

// Reusable Contact Info Component
const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex items-center justify-center md:justify-start">
    <Icon className="text-blue-900 mr-2" />
    <p className="text-lg md:text-xl">{text}</p>
  </div>
);

const Profile = () => {
  return (
    <section className="relative py-10 bg-gray-100 overflow-hidden h-[800px]">
      {/* Header Section */}
      <div className="relative z-10  w-full ">
        <div className="flex flex-col md:flex-row justify-between items-center
         text-indigo-950 py-8 px-6 md:px-20 ">
          <div className="flex-1">
            <p className="text-2xl md:text-2xl font-bold text-left"
            style={{ fontFamily: 'Tahoma, sans-serif' }}>
              CHRIS FERNANDO | RESUME
            </p>
          </div>
          <nav className="mt-4 md:mt-0 flex-1">
            <ul className="text-xl md:text-2xl flex flex-col md:flex-row 
            space-y-4 md:space-y-0 md:space-x-10 justify-end" 
            style={{ fontFamily: 'Tahoma, sans-serif' }}>
              <li>Contact</li>
              <li>Projects</li>
              <li>Resume</li>
            </ul>
          </nav>
        </div>
        <div className="w-11/12 md:w-11/12 mx-auto border-b-2 border-indigo-950"></div>
      </div>

      {/* Main Content Section */}
      <div className="flex justify-center items-center mt-10 px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center md:items-start relative w-full max-w-6xl mx-auto">
          {/* Blue Square on the Left */}
          <div
            className="absolute w-[400px] h-[300px] md:w-[700px] md:h-[500px]
             bg-blue-950 -left-[40%] md:right-[50%] top-[30%] -z-10"
            style={{ zIndex: 1 }}
          ></div>

          {/* Bordered Circle on the Right */}
          <div
            className="absolute w-[600px] h-[600px] md:w-[700px] md:h-[700px] border-70
           border-blue-950 rounded-full right-[-5%] md:-right-[20%] -top-[90%] -z-10"
            style={{ borderColor: "rgba(13, 71, 161, 0.1)", zIndex: 1 }}
          ></div>

          {/* Profile Picture */}
          <div className="w-[200px] h-[200px] md:w-[500px] md:h-[500px] flex justify-center 
          md:justify-start md:right-[10%] relative z-20">
            <img
              src={user}
              alt="User"
              className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full shadow-lg"
            />
          </div>

          {/* Profile Details */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-10">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-950 
            leading-tight text-center md:text-left"  
            style={{ fontFamily: 'Verdana, sans-serif' }}>
              Chris
              <br />
              Fernando
            </h1>
            <p className="text-xl md:text-2xl font-bold text-blue-900 text-center 
            md:text-left mt-2" style={{ fontFamily: 'Verdana, sans-serif' }}>
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl mt-4 text-center md:text-left max-w-md">
              Passionate about building scalable web applications and solving
              real-world problems with code.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-900 text-white text-lg md:text-xl font-bold rounded-md hover:bg-blue-700 transition-colors">
              Contact Me
            </button>

            {/* Contact Information */}
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
      </div>
    </section>
    
  );
};

export { Profile };
