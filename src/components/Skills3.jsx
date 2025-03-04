import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faAws,
  faUnity,
  faGithub,
  faGitkraken,
  faNodeJs,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  SiUnrealengine,
  SiMysql,
  SiDotnet,
  SiTailwindcss,
} from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";

const Skills = () => {
  // Tech skills data for better maintenance
  const technicalSkills = [
    ["Programming Languages C++, C#, Swift", 
     "Javascript, React Js, CSS, TailwindCSS",
     "ASP.Net Architectures, MVC and RESTful APIs",
     "SQL and MY SQL Server Database Management",
     "Entity Framework and Database Modeling"],
    ["HTML/CSS/TailwindCSS and Bootstrap for Web Development",
     "Experience in Deploying on Microsoft Databases and Web Applications",
     "Experience with AWS and its services: Cognito, Lambda, S3, DynamoDB, AWS Amplify Gen1 and Gen2"],
    ["Experience with Wordpress Web development",
     "Unity Experience in developing projects using unity game engine. Published a game on Google Play",
     "Unreal Engine: Game Dev Software Dev Life Cycle (SDLC)"]
  ];

  // Personal skills data for better maintenance
  const personalSkills = [
    ["Communicate complex ideas clearly and concisely",
     "Collaborate effectively with cross functional teams",
     "Able to solve Problems creatively and efficiently",
     "Demonstrate patience while debugging complex issues and mentoring team members"],
    ["Adapt quickly to new technologies and workflows",
     "Manage time and prioritize tasks effectively",
     "Loves a challenge and always ready to push limits",
     "Identify user needs during product development discussions"]
  ];

  // Tech icons for the marquee
  const techIcons = [
    { icon: faHtml5, component: FontAwesomeIcon },
    { icon: faCss3Alt, component: FontAwesomeIcon },
    { icon: SiTailwindcss, component: SiTailwindcss },
    { icon: faJs, component: FontAwesomeIcon },
    { icon: faNodeJs, component: FontAwesomeIcon },
    { icon: faReact, component: FontAwesomeIcon },
    { icon: faAws, component: FontAwesomeIcon },
    { icon: faDatabase, component: FontAwesomeIcon },
    { icon: faGithub, component: FontAwesomeIcon },
    { icon: faGitkraken, component: FontAwesomeIcon },
    { icon: faGooglePlay, component: FontAwesomeIcon },
    { icon: faUnity, component: FontAwesomeIcon },
    { icon: SiUnrealengine, component: SiUnrealengine },
    { icon: SiDotnet, component: SiDotnet },
    { icon: SiMysql, component: SiMysql },
    { icon: PiFileSqlFill, component: PiFileSqlFill }
  ];

  // Generate icons for the marquee with one duplication for seamless loop
  const renderMarqueeIcons = () => {
    const allIcons = [...techIcons, ...techIcons];
    
    return allIcons.map((item, index) => {
      if (item.component === FontAwesomeIcon) {
        return (
          <FontAwesomeIcon 
            key={index} 
            icon={item.icon} 
            size="5x" 
            className="text-black mx-4 md:mx-5"
          />
        );
      } else {
        const IconComponent = item.component;
        return (
          <IconComponent 
            key={index} 
            className="text-black mx-4 md:mx-5" 
            style={{ fontSize: "4rem" }}
          />
        );
      }
    });
  };

  return (
    <section className="relative py-8 md:py-10 bg-white min-h-screen overflow-hidden z-20">
      {/* Icons Marquee Section */}
      <div className="mt-6 md:mt-10 flex justify-center overflow-hidden">
        <div className="flex animate-marquee space-x-4 md:space-x-10">
          {renderMarqueeIcons()}
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="flex flex-wrap justify-center items-center mt-4 md:mt-5 font-inter text-base md:text-xl px-4 md:px-0">
        <div className="w-full md:w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-6 md:mt-10 tracking-wider">
          <div className="p-2 md:p-4 flex flex-col">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-blue-900">
              Technical Skills
            </h1>
            <ul className="list-disc pl-5 text-base md:text-xl lg:text-2xl space-y-1 md:space-y-2">
              {technicalSkills[0].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="p-2 md:p-4 flex flex-col md:mt-14">
            <ul className="list-disc pl-5 text-base md:text-xl lg:text-2xl space-y-1 md:space-y-2">
              {technicalSkills[1].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="p-2 md:p-4 flex flex-col md:mt-14">
            <ul className="list-disc pl-5 text-base md:text-xl lg:text-2xl space-y-1 md:space-y-2">
              {technicalSkills[2].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Personal Skills Section - With full-width background */}
      <div className="absolute bottom-0 left-0 w-full tracking-wider bg-blue-50 py-4 md:py-8" style={{ height: "auto", minHeight: "30%" }}>
        <div className="flex flex-wrap justify-center items-center font-inter text-base md:text-xl px-4 md:px-0">
          <div className="w-full md:w-11/12 grid grid-cols-1 md:grid-cols-2">
            <div className="p-2 md:p-4 flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-blue-900">
                Personal Skills
              </h1>
              <ul className="list-disc pl-5 text-base md:text-xl lg:text-2xl space-y-1 md:space-y-2">
                {personalSkills[0].map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="p-2 md:p-4 flex flex-col mt-2 md:mt-14">
              <ul className="list-disc pl-5 text-base md:text-xl lg:text-2xl space-y-1 md:space-y-2">
                {personalSkills[1].map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };