import React from "react";
import "./styles.css";
import MDS from "../assets/school.png";

const School = () => {
  return (
    <section id="projects" className="relative py-10 bg-blue-950 min-h-screen flex flex-col px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Left side image - full width on mobile, 1/4 width on larger screens */}
      <div className="lg:absolute lg:left-0 lg:top-0 w-full lg:w-1/4 h-64 lg:h-full bg-blue-900 flex items-center justify-center mb-6 lg:mb-0">
        <img
          src={MDS}
          alt="School image"
          className="object-cover h-full w-full"
        />
      </div>
      
      {/* Content area - full width on mobile, pushed right on larger screens */}
      <div className="w-full lg:w-3/4 lg:ml-auto tracking-wider lg:pl-8">
        {/* Education section */}
        <div className="w-full lg:h-1/2 flex items-start lg:items-center justify-start mb-8 lg:mb-0">
          <div className="text-white max-w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-200 font-inter mb-4">
              Education
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter">
              Bachelor of Software Engineering
            </p>
            <p className="text-lg sm:text-xl mb-6 font-bold">Media Design School | Auckland, NZ </p>
            <p className="text-base sm:text-lg lg:text-xl pr-2 sm:pr-4 lg:pr-6">
              Fully participated in Agile Software Development Object Oriented
              Design methodologies and Software Design principles. Worked with
              small teams on numerous projects using Unity, Unreal, OpenGL and
              Native PS4. Software Development in Multi-Threaded C++ on Windows.
              Performed Debug and Performance Analysis Documentation and usage
              of Source Control Management Tools- Github, GitKraken, Jira.
            </p>
          </div>
        </div>
        
        {/* Project Spotlight section */}
        <div className="w-full lg:h-2/3 flex flex-col pr-2 sm:pr-4 lg:pr-6 tracking-wider">
          <div className="text-white max-w-full mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-200 font-inter mt-12">
              Project Spotlight
            </h2>
          </div>

          {/* Projects container - stacked on mobile, side by side on larger screens */}
          <div className="flex w-full flex-col md:flex-row gap-8 md:gap-4">
            {/* Project 01 */}
            <div className="w-full md:w-1/2 flex flex-col">
              {/* Project header */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-blue-300 font-bold text-4xl md:text-5xl lg:text-6xl font-inter">
                    01
                  </span>
                  <div>
                    <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter">
                      E - Commerce{" "}
                    </div>
                    <div className="text-white font-bold pl-0 sm:pl-4 md:pl-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter">
                      Web Application
                    </div>
                  </div>
                </div>
              </div>

              {/* Project description */}
              <div className="bg-blue-950 border-t-2 border-blue-500 rounded p-4 flex-grow">
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-inter">
                  Developed a web application that allows users to input and
                  output Customer, Product, Store and Sales Data. Implemented a
                  Code-First approach based on Entity Framework, allowing for
                  efficient data modeling and manipulation. Supported
                  Database-First approach, providing flexibility in database
                  design and development. Utilized responsive design principles,
                  using Semantic UI, for a seamless user experience.
                </p>
              </div>
            </div>

            {/* Project 02 */}
            <div className="w-full md:w-1/2 flex flex-col">
              {/* Project header */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-blue-300 font-bold text-4xl md:text-5xl lg:text-6xl font-inter">
                    02
                  </span>
                  <div className="pl-0 sm:pl-4 md:pl-8">
                    <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter">
                      Talent Matching{" "}
                    </div>
                    <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter">
                      Web Application
                    </div>
                  </div>
                </div>
              </div>

              {/* Project description */}
              <div className="bg-blue-950 border-t-2 border-blue-500 rounded p-4 flex-grow">
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-inter">
                  Developed User Details Components including fields for
                  Address, Nationality, Languages, Skills, Work Experience, Visa
                  Status, Job Seeking Status, and Photo Upload. Front-End:
                  Implemented the Talent Feed page, utilizing React.js for
                  dynamic rendering. Back-End: Integrated AJAX calls to retrieve
                  data from the controllers. Implemented action methods in
                  controllers and services to fetch data from the database.
                  Leveraged Microservices architecture and hosted the
                  application on Microsoft Azure for scalability and
                  reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { School };