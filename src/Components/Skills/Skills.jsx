import { FaCode, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  { 
    name: 'C Programming', 
    icon: <FaCode />, 
    level: 85,
    range: 'Advanced',
    color: 'bg-purple-500' 
  },
  { 
    name: 'Java', 
    icon: <FaJava />, 
    level: 80,
    range: 'Proficient',
    color: 'bg-red-500' 
  },
  { 
    name: 'DSA', 
    icon: <FaCode />, 
    level: 75,
    range: 'Intermediate',
    color: 'bg-blue-500' 
  },
  { 
    name: 'HTML5', 
    icon: <FaHtml5 />, 
    level: 95,
    range: 'Expert',
    color: 'bg-orange-500' 
  },
  { 
    name: 'CSS3', 
    icon: <FaCss3Alt />, 
    level: 90,
    range: 'Advanced',
    color: 'bg-blue-400' 
  },
  { 
    name: 'JavaScript', 
    icon: <FaJs />, 
    level: 85,
    range: 'Advanced',
    color: 'bg-yellow-400' 
  },
  { 
    name: 'React', 
    icon: <FaReact />, 
    level: 90,
    range: 'Expert',
    color: 'bg-blue-300' 
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Measured proficiency across key technologies and concepts
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-3xl text-white p-3 rounded-lg ${skill.color}`}>
                  {skill.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{skill.range}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Proficiency Level</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="relative">
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div 
                      className={`absolute top-0 left-0 h-2 rounded-full ${skill.color} transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;