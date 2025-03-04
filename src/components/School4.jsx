import React from "react";
import "./styles.css"; // Make sure to import your CSS file
import MDS from "../assets/school.png";

const School = () => {
  return (
    <section id="projects"  className="relative py-10 bg-blue-950 h-screen flex flex-col px-6 md:px-20">
      {/* Left side image - takes up 1/4 of the page width and full height */}
      <div className="absolute left-0 top-0 w-1/4 h-full bg-blue-900 flex items-center justify-center">
        <img
          src={MDS}
          alt="School image"
          className="object-cover h-full w-full"
        />
      </div>
      {/* Content area - pushed to the right to make space for the image */}
      <div className="w-3/4 h-full flex flex-col ml-auto tracking-wider">
        {" "}
        {/* Changed to ml-auto */}
        {/* First row */}
        <div className="w-full h-1/2 flex items-center justify-center border-blue-800 pl-6">
          <div className="text-white max-w-full">
            {" "}
            {/* Added max-w-full */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-200 font-inter mb-4">
              Education
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter">
              Bachelor of Software Engineering
            </p>
            <p className="text-xl mb-6 font-bold">Media Design School | Auckland, NZ </p>
            <p className="text-xl pr-6">
              {" "}
              {/* Added right padding */}
              Fully participated in Agile Software Development Object Oriented
              Design methodologies and Software Design principles. Worked with
              small teams on numerous projects using Unity, Unreal, OpenGL and
              Native PS4. Software Development in Multi-Threaded C++ on Windows.
              Performed Debug and Performance Analysis Documentation and usage
              of Source Control Management Tools- Github, GitKraken, Jira.
            </p>
          </div>
        </div>
        {/* Second row */}
        <div className="w-full h-2/3 flex flex-col pl-6 pr-6 tracking-wider">
          <div className="text-white max-w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-200 font-inter mb-4">
              Project Spotlight
            </h2>
          </div>

          {/* Split columns container */}
          <div className="flex w-full h-full flex-col md:flex-row">
            {/* Left column */}
            <div className="w-full md:w-1/2 flex flex-col mr-4">
              {/* Top row (1/4 height) with basis tags */}
              <div className="h-1/4 mb-4 rounded p-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-blue-300 rounded font-bold text-4xl md:text-5xl lg:text-6xl font-inter">
                    01
                  </span>
                  <div className="text-center">
                    <div className="text-white text-center font-bold rounded text-2xl md:text-3xl lg:text-4xl font-inter">
                      E - Commerce{" "}
                    </div>
                    <div className="text-white text-center font-bold rounded pl-8 text-2xl md:text-3xl lg:text-4xl font-inter">
                      {" "}
                      Web Application
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom row (3/4 height) */}
              <div className="h-3/4 bg-blue-950 border-t-2 border-blue-500 rounded p-4">
                <p className="text-white text-base md:text-lg lg:text-xl font-inter">
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

            {/* Right column */}
            <div className="w-full md:w-1/2 flex flex-col mr-4">
              {/* Top row (1/4 height) with basis tags */}
              <div className="h-1/4 mb-4 rounded p-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-blue-300 rounded font-bold text-4xl md:text-5xl lg:text-6xl font-inter">
                    02
                  </span>
                  <div className="text-center pl-8">
                    <div className="text-white text-center font-bold rounded text-2xl md:text-3xl lg:text-4xl font-inter">
                      Talent Matching{" "}
                    </div>
                    <div className="text-white text-center font-bold rounded text-2xl md:text-3xl lg:text-4xl font-inter">
                      {" "}
                      Web Application
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom row (3/4 height) */}
              <div className="h-3/4 bg-blue-950 border-t-2 border-blue-500 rounded p-4">
                <p className="text-white text-base md:text-lg lg:text-xl font-inter">
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