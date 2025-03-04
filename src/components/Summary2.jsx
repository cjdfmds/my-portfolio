import React from "react";
import "./styles.css"; // Make sure to import your CSS file

const Summary = () => {
  return (
    <section className="relative py-10 bg-blue-950 h-screen flex items-center px-6 md:px-20">
      {/* Bordered Circle on the Right */}
      <div
        className="absolute w-[600px] h-[600px] md:w-[700px] md:h-[700px] border-70
        border-blue-150 rounded-full right-[-5%] md:-right-[5%] top-[40%] -z-10 "
        style={{ borderColor: "rgba(13, 71, 161, 0.1)", zIndex: 1 }}
      ></div>

      <div className="justify-center items-center mt-10">
        <div className="flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {/* Add any additional content here */}
          </div>
          <div className="flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-12 tracking-wider">
            <h1
              className="text-2xl font-bold text-blue-300"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "2rem" }}
            >
              Professional Summary
            </h1>

            <p
              className="text-3xl text-white font-bold"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "3rem" }}
            >
              Full Stack Web Developer
            </p>
            <p
              className="text-3xl text-white font-bold"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1.25rem" }}
            >
              React | Wordpress | AWS Services | ASP.NET Architectures | RESTful 
              APIs 
            </p>
            <p className="text-xl mt-4 text-white" style={{ fontSize: "1.25rem" }}>
              Proactive Software Engineer Intern with a solid foundation in
              software development methodologies from an immersive bootcamp.
              <br/>
              Proficient in .NET architectures, C#, and web technologies.
              Skilled in crafting efficient code and collaborating with
              cross-functional
              <br/>
              teams. Translated design concepts into
              user-friendly web applications with optimal performance.
              Problem-solving expertise evident
              <br/>
              in resolving complex programming
              challenges. Contributed to agile development processes and
              possesses a Diploma in Software
              <br/>
              Engineering. Committed to learning and Eager to contribute to dynamic projects, learn from
              experienced professionals, and grow in a 
              <br/>
              collaborative environment.
            </p>
          </div>
        </div>
        <div className="flex flex-row h-20 text-blue-400 py-4 px-10">
          <div className="basis-8 text-5xl font-bold" style={{ fontSize: "4rem" }}>05</div>
          <div className="basis-2"></div>
          <div className="basis-16 items-center" style={{ fontSize: "1.25rem" }}>Years of Experience</div>
          <div className="basis-16 "></div>
          <div className="basis-8 text-5xl font-bold" style={{ fontSize: "4rem" }}>05</div>
          <div className="basis-2"></div>
          <div className="basis-16 items-center" style={{ fontSize: "1.25rem" }}>Programming Languages</div>
        </div>
      </div>
    </section>
  );
};

export { Summary };