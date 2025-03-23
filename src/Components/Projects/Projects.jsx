import React from "react";
import chatbot1 from "../../assets/chatbot.png";
import ecommerce from "../../assets/pharmacy.png";
import portfolio1 from "../../assets/porfolio.png";



const Projects = () => {
  const projectData = [
    {
      id: 1,
      category: "ECOMMERCE WEBSITE",
      title: "PHARMACY ECOMMERCE WEBSITE",
      description:
        "An online pharmacy platform that allows users to browse medicines, place orders, manage prescriptions, and track deliveries. Built for reliability and ease of use with a mobile-friendly interface.",
      role: "Full-stack Developer",
      techStack: "HTML, CSS, PHP,SQL",
      image: ecommerce,
    },
    {
      id: 2,
      category: "AI ASSISTANT",
      title: "CHATBOT AI",
      description:
        "A smart chatbot using Google's Gemini AI having the features like chat through text messages,Accepts image uploads for visual analysis,Supports voice search queries,Understands natural conversations with full responsive for btoh destop and mobile.",
      role: "AI Developer",
      techStack: "HTML, CSS, JAVASCRIPT,GEMINI API",
      image: chatbot1,
    },
    {
      id: 3,
      category: "PORTFOLIO WEBSITE",
      title: "PERSONAL PORTFOLIO",
      description:
        "A modern, responsive portfolio website showcasing my skills, projects, and contact information. Designed with clean aesthetics and smooth animations to create a strong professional presence.",
      role: "Frontend Developer",
      techStack: "React, Tailwind CSS, Framer Motion",
      image: portfolio1,
    },
  ];

  return (
    <div className="bg-black text-white py-14 px-6 md:px-20 lg:px-32">
      <h2 className="text-4xl font-bold text-center mb-4">FEATURED PROJECTS</h2>
      <p className="text-gray-400 text-center text-lg mb-16">
        Here are some of my recent projects that showcase my expertise in web development and software engineering.
      </p>

      <div className="space-y-24">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row md:space-x-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 mb-10 md:mb-0">
              <span className="text-sm text-gray-400 mb-2 block">
                {String(project.id).padStart(2, "0")}. {project.category}
              </span>
              <div className="border border-gray-800 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
              <p className="text-gray-400 text-lg">{project.description}</p>

              <div>
                <h4 className="font-semibold text-gray-300">PROJECT INFO</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mt-2">
                  <div>
                    <p className="text-white font-medium">ROLE</p>
                    <p>{project.role}</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">TECH STACK</p>
                    <p>{project.techStack}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-300 transition"
                >
                  CASE STUDY
                </a>
                <a
                  href="#"
                  className="text-gray-400 underline hover:text-white transition"
                >
                  VISIT SITE →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
