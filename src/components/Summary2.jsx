import React from "react";
import "./styles.css";

const Summary = () => {
  // Data for experience counters - easier to maintain
  const experienceData = [
    { count: "05", label: "Years of Experience" },
    { count: "05", label: "Programming Languages" }
  ];

  return (
    <section className="relative py-10 bg-blue-950 min-h-screen flex flex-col justify-center px-4 md:px-20 overflow-hidden">
      {/* Bordered Circle on the Right */}
      <div
        className="absolute w-[300px] h-[300px] md:w-[700px] md:h-[700px] border-70
        border-blue-150 rounded-full right-[-10%] md:-right-[5%] top-[60%] md:top-[40%] -z-10"
        style={{ borderColor: "rgba(13, 71, 161, 0.1)" }}
      ></div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:items-start">
          {/* Professional Summary Content */}
          <div className="w-full flex flex-col items-center md:items-start z-10">
            <h1 className="text-2xl font-bold text-blue-300 font-inter text-center md:text-left">
              Professional Summary
            </h1>

            <p className="text-3xl md:text-5xl text-white font-bold font-inter text-center md:text-left mt-2 leading-tight">
              Full Stack Web Developer
            </p>
            
            <p className="text-xl md:text-2xl text-white font-bold font-inter text-center md:text-left mt-4 leading-relaxed">
              React | Wordpress | AWS Services | ASP.NET Architectures | RESTful APIs
            </p>
            
            <p className="text-base md:text-xl mt-6 text-white text-center md:text-left leading-relaxed">
              Proactive Software Engineer Intern with a solid foundation in
              software development methodologies from an immersive bootcamp.
              Proficient in .NET architectures, C#, and web technologies.
              Skilled in crafting efficient code and collaborating with
              cross-functional teams. Translated design concepts into
              user-friendly web applications with optimal performance.
              Problem-solving expertise evident in resolving complex programming
              challenges. Contributed to agile development processes and
              possesses a Diploma in Software Engineering. Committed to learning and 
              eager to contribute to dynamic projects, learn from
              experienced professionals, and grow in a collaborative environment.
            </p>
          </div>
        </div>

        {/* Experience Counters */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-10 md:gap-16 mt-10 md:mt-16 text-blue-400 z-10">
          {experienceData.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="text-4xl md:text-5xl font-bold font-inter">{item.count}</div>
              <div className="w-4"></div>
              <div className="text-base md:text-xl">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Summary };