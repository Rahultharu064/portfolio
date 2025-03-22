import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { CodeBracketIcon, LinkIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with React & Node.js',
    image: 'https://source.unsplash.com/random/800x600/?ecommerce,shopping',
    demoUrl: '#',
    codeUrl: '#',
    details: 'Built a scalable e-commerce platform with real-time inventory management, payment gateway integration, and admin dashboard.'
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics',
    image: 'https://source.unsplash.com/random/800x600/?dashboard,analytics',
    demoUrl: '#',
    codeUrl: '#',
    details: 'Interactive data visualization dashboard with real-time updates and customizable widgets.'
  },
  {
    id: 3,
    title: 'Travel Blog',
    description: 'Modern travel blogging platform with geolocation',
    image: 'https://source.unsplash.com/random/800x600/?travel,blog',
    demoUrl: '#',
    codeUrl: '#',
    details: 'Feature-rich travel blogging platform with interactive maps and social sharing capabilities.'
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking application',
    image: 'https://source.unsplash.com/random/800x600/?fitness,workout',
    demoUrl: '#',
    codeUrl: '#',
    details: 'Cross-platform mobile app with workout tracking, progress visualization, and social features.'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore a collection of my professional and personal development projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="text-white bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <LinkIcon className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black/75" />

            <div className="relative bg-gray-800 rounded-xl max-w-2xl mx-4 p-8">
              {selectedProject && (
                <>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <Dialog.Title className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </Dialog.Title>
                  <p className="text-gray-300 mb-6">
                    {selectedProject.details}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                    >
                      <LinkIcon className="w-5 h-5" />
                      Visit Demo
                    </a>
                    <a
                      href={selectedProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600/10 transition-colors flex items-center gap-2"
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                      View Code
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;