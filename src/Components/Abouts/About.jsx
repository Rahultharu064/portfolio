import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlobeAmericasIcon, CodeBracketIcon, CommandLineIcon, EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';

// Ensure this file exists at the specified path

const About = () => {
   
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    title: "Full-Stack Developer & Tech Lead",
    experience: "8+ years",
    location: "New York, NY",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate about creating impactful digital experiences through innovative solutions.",
    skills: ["React", "DSA", "HTML", "CSS", "TAILWINDCSS", "C"],
    experienceItems: [
      {
        year: "2020-Present",
        role: "Senior Software Engineer",
        company: "Tech Innovators Inc."
      },
      {
        year: "2018-2020",
        role: "Full-Stack Developer",
        company: "Digital Solutions Co."
      }
    ]
  });

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    // Set initial dark mode from system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
   
    
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <img
              src=""
                alt="Profile"
                className="w-64 h-64 rounded-full mx-auto mb-6 border-4 border-blue-500"
              />
              <h1 className="text-4xl font-bold mb-2">{profileData.name}</h1>
              <p className="text-xl text-blue-500 mb-4">{profileData.title}</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <GlobeAmericasIcon className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center">
                  <DevicePhoneMobileIcon className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{profileData.phone}</span>
                </div>
              </div>
              <div className="flex space-x-4 justify-center">
                <a href="#" className="p-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* Add other social icons */}
              </div>
            </motion.div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <motion.div
              variants={sectionVariants}
              className="bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
              <p className="text-lg leading-relaxed">
                {profileData.bio} Seasoned developer with {profileData.experience} of experience in delivering
                high-impact solutions for Fortune 500 companies. Specialized in modern web technologies
                and cloud-native architectures.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={sectionVariants}
              className="bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6">Technical Expertise</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {profileData.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center p-3 rounded-lg bg-blue-500 bg-opacity-10"
                  >
                    <CodeBracketIcon className="w-5 h-5 mr-2 text-blue-500" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={sectionVariants}
              className="bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6">Professional Journey</h2>
              <div className="space-y-8">
                {profileData.experienceItems.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="border-l-4 border-blue-500 pl-6 py-4"
                  >
                    <p className="text-blue-500 text-lg">{item.year}</p>
                    <h3 className="text-xl font-semibold mt-2">{item.role}</h3>
                    <p className="text-gray-500">{item.company}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </div>
    
    </>
  );
};

export default About;