import { useState, useEffect } from 'react';
import rahul12 from '../../assets/rahul1.jpg'

import { motion } from 'framer-motion';
import { 
  FaGlobeAmericas, 
  FaCode, 
  FaEnvelope, 
  FaMobileAlt, 
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';


const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [profileData] = useState({
    image:rahul12,
    name: "RAHUL CHAUDHARY",
    title: "WEB Developer & Tech Lead",
    experience: "1+ years",
    location: "Itahari,sunsari",
    email: "rahultharu46882@gmail.com.com",
    phone: "9815760082",
    bio: "I specialize in building modern web applications using React and robust backend systems. My core skills include frontend development, problem-solving with data structures, and creating responsive designs with TailwindCSS. I enjoy turning complex ideas into clean, efficient code.",
    skills: ["React", "DSA", "HTML", "CSS", "TAILWINDCSS", "C"],
  });

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
  <>
 
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>

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
                src={profileData.image}
                alt="Profile"
                className="w-64 h-64 rounded-full mx-auto mb-6 border-4 border-blue-500"
              />
              <h1 className="text-4xl font-bold mb-2">{profileData.name}</h1>
              <p className="text-xl text-blue-500 mb-4">{profileData.title}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <FaGlobeAmericas className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center">
                  <FaMobileAlt className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{profileData.phone}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 justify-center">
                <a 
                  href="#" 
                  className="p-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Me */}
            <motion.div
              variants={sectionVariants}
              className="bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-lg leading-relaxed">
                {profileData.bio} I focus on writing clean, maintainable code and building intuitive user interfaces. 
                Currently exploring low-level programming and performance optimization in C. When not coding, 
                I enjoy contributing to open-source projects and mentoring new developers.
              </p>
            </motion.div>

            {/* Technical Skills */}
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
                    <FaCode className="w-5 h-5 mr-2 text-blue-500" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
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