import React from "react";
import "./styles.css"; // Make sure to import your CSS file
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
  return (
    <section className="relative py-10 bg-white h-screen overflow-hidden z-20">
      <div className="mt-10 flex justify-center overflow-hidden">
        
        <div className="flex animate-marquee space-x-10">
          <FontAwesomeIcon icon={faHtml5} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faCss3Alt} size="5x" className="text-black" />
          <SiTailwindcss className="text-black" style={{ fontSize: "5rem" }} />
          <FontAwesomeIcon icon={faJs} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faNodeJs} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faReact} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faAws} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faDatabase} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faGithub} size="5x" className="text-black" />
          <FontAwesomeIcon
            icon={faGitkraken}
            size="5x"
            className="text-black"
          />
          <FontAwesomeIcon
            icon={faGooglePlay}
            size="5x"
            className="text-black"
          />
          <FontAwesomeIcon icon={faUnity} size="5x" className="text-black" />
          <SiUnrealengine className="text-black" style={{ fontSize: "5rem" }} />
          <SiDotnet className="text-black" style={{ fontSize: "5rem" }} />
          <SiMysql className="text-black" style={{ fontSize: "5rem" }} />
          <PiFileSqlFill className="text-black" style={{ fontSize: "5rem" }} />
          {/* Duplicate the icons for seamless looping */}
          <FontAwesomeIcon icon={faHtml5} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faCss3Alt} size="5x" className="text-black" />
          <SiTailwindcss className="text-black" style={{ fontSize: "5rem" }} />
          <FontAwesomeIcon icon={faJs} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faNodeJs} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faReact} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faAws} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faDatabase} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faGithub} size="5x" className="text-black" />
          <FontAwesomeIcon
            icon={faGitkraken}
            size="5x"
            className="text-black"
          />
          <FontAwesomeIcon
            icon={faGooglePlay}
            size="5x"
            className="text-black"
          />
          <FontAwesomeIcon icon={faUnity} size="5x" className="text-black" />
          <SiUnrealengine className="text-black" style={{ fontSize: "5rem" }} />
          <SiDotnet className="text-black" style={{ fontSize: "5rem" }} />
          <SiMysql className="text-black" style={{ fontSize: "5rem" }} />
          <PiFileSqlFill className="text-black" style={{ fontSize: "5rem" }} />
          {/* Duplicate the icons for seamless looping */}
          <FontAwesomeIcon icon={faHtml5} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faCss3Alt} size="5x" className="text-black" />
          <SiTailwindcss className="text-black" style={{ fontSize: "5rem" }} />
          <FontAwesomeIcon icon={faJs} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faNodeJs} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faReact} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faAws} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faDatabase} size="5x" className="text-black" />
          <FontAwesomeIcon icon={faGithub} size="5x" className="text-black" />
          <FontAwesomeIcon
            icon={faGitkraken}
            size="5x"
            className="text-black"
          />
          <FontAwesomeIcon
            icon={faGooglePlay}
            size="5x"
            className="text-black"
          />
          <FontAwesomeIcon icon={faUnity} size="5x" className="text-black" />
          <SiUnrealengine className="text-black" style={{ fontSize: "5rem" }} />
          <SiDotnet className="text-black" style={{ fontSize: "5rem" }} />
          <SiMysql className="text-black" style={{ fontSize: "5rem" }} />
          <PiFileSqlFill className="text-black" style={{ fontSize: "5rem" }} />
        </div>
      </div>

      {/* Technical Skills Section */}
      <div
        className="flex flex-wrap gap-4 justify-center items-center mt-5"
        style={{ fontFamily: "Inter, sans-serif", fontSize: "1.25rem" }}
      >
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 tracking-wider">
          <div className="p-4 flex flex-col">
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "#1a3769" }}
            >
              Technical Skills
            </h1>
            <ul class="list-disc pl-5 text-2xl">
              <li> Programming Languages C++, C#, Swift</li>
              <li>Javascript, React Js, CSS, TailwindCSS</li>
              <li> ASP.Net Architectures, MVC and RESTful APIs</li>
              <li> SQL and MY SQL Server Database Management</li>
              <li>Entity Framework and Database Modeling</li>
            </ul>
          </div>
          <div className="p-4 flex flex-col mt-14">
            <ul class="list-disc pl-5 text-2xl">
              <li>HTML/CSS/TailwindCSS and Bootstrap for Web Development</li>
              <li>
                Experience in Deploying on Microsoft Databases and Web
                Applications
              </li>
              <li>
                Experience with AWS and its services: Cognito, Lambda, S3,
                DynamoDB, AWS Amplify Gen1 and Gen2
              </li>
            </ul>
          </div>
          <div className="p-4 flex flex-col mt-14">
            <ul class="list-disc pl-5 text-2xl">
              <li> Experience with Wordpress Web development</li>
              <li>
                {" "}
                Unity Experience in developing projects using unity game engine.
                Published a game on Google Play
              </li>
              <li> Unreal Engine: Game Dev Software Dev Life Cycle (SDLC)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Personal Skills Section - With full-width amber background */}
      <div
        className="absolute bottom-0 left-0 w-full h-2/5 tracking-wider"
        style={{ backgroundColor: "#e6f5fb" }}
      >
        <div
          className="flex flex-wrap gap-4 justify-center items-center py-8"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "1.25rem" }}
        >
          <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            <div className="p-4 flex flex-col">
              <h1
                className="text-4xl font-bold mb-4"
                style={{ color: "#1a3769" }}
              >
                Personal Skills
              </h1>
              <ul class="list-disc pl-5 text-2xl">
                <li> Communicate complex ideas clearly and concisely</li>
                <li> Collaborate effectively with cross functional teams</li>
                <li> Able to solve Problems creatively and efficiently</li>
                <li>
                  Demonstrate patience while debugging complex issues and
                  mentoring team members
                </li>
              </ul>
            </div>
            <div className="p-4 flex flex-col mt-14">
              <ul class="list-disc pl-5 text-2xl">
                <li> Adapt quickly to new technologies and workflows</li>
                <li>Manage time and prioritize tasks effectively</li>
                <li> Loves a challenge and always ready to push limits</li>
                <li>
                  Identify user needs during product development discussions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
