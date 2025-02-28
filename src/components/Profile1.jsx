import React from 'react';
import './styles.css'; // Make sure to import your CSS file
import user from '../assets/user.png'; // Uncomment and use the correct path to the user's picture
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className="relative py-10 fixed-container">
                 <div className="relative py-10 ">
            <div className="relative z-10 border-b-3 border-gray-300 w-full mx-auto">
                <div className="flex justify-between items-center bg-white text-indigo-950 py-8 ">
                    <p className="text-[30px] font-bold ">CHRIS FERNANDO | RESUME</p>
                    <nav>
                        <ul className="text-2xl flex space-x-10 font-bold">
                            <li>Contact</li>
                            <li>Projects</li>
                            <li>Resume</li>
                        </ul>
                    </nav>
                </div>
            </div>
             {/* <div className="blue-circle-bg"></div> */}
        </div>
            <div className="flex justify-center items-center mt-10">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="absolute w-64 h-64 md:w-80 md:h-120 md:w-140 -z-10 md:mt-20 md:-ml-70"
                 style={{ backgroundColor: '#1A2E6C' }}></div> {/* Darker blue square */}
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        {/* Uncomment and use the correct path to the user's picture */}
                        <img src={user} alt="User" className="w-148 h-128 rounded-full md:mr-30 md:-mt-10" />
                        
                    </div>
                    <div className="md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-10">
                    <h1 className="text-7xl font-bold text-blue-950 leading-tight">
                            Chris<br />Fernando
                        </h1>
                        <p className="text-2xl font-bold text-blue-900"  style={{ fontSize: '1.75rem' }}>Full Stack Developer</p>
                      
                        <button className="mt-6 px-6 py-3 bg-blue-900 text-white text-xl font-bold rounded-full hover:bg-blue-500">
                            Contact Me
                        </button>
                        <div className="mt-20 space-y-4">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-blue-900 mr-2" />
                                <p className="text-xl">123 Main St, City, Country</p>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-blue-900 mr-2" />
                                <p className="text-xl">+123 456 7890</p>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-blue-900 mr-2" />
                                <p className="text-xl">email@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blue-circle-bg -mt-90"></div> {/* This is the blue circle background */}
        </div>
    )
}

export { Profile };