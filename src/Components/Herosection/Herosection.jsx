import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'

import rahul from '../../assets/rahul.jpg';


const HeroSection = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const typewriterRef = useRef(null);
  const words = [
    'Software Engineer',
    'Tech Leader',
    'Problem Solver',
    'Full Stack Developer'
  ];

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 1500;

    const animate = () => {
      const currentWord = words[wordIndex % words.length];
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      let speed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && text === currentWord) {
        speed = pauseDuration;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(prev => prev + 1);
        speed = 500;
      }

      typewriterRef.current = setTimeout(animate, speed);
    };

    typewriterRef.current = setTimeout(animate, typeSpeed);

    return () => {
      clearTimeout(typewriterRef.current);
    };
  }, [wordIndex, isDeleting, text]);

  // Scroll listener for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to next section
  const handleScrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Parallax Gradient Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full -top-48 -left-48 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute w-96 h-96 bg-violet-500/20 rounded-full -bottom-48 -right-48 blur-3xl"
          style={{ transform: `translateY(-${scrollY * 0.3}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full py-24">
      
                <div className="text-center lg:text-left mb-16 lg:mb-0 lg:w-1/2">
                <p className="text-purple-400 font-mono mb-6">
                  Hi, I'm
                </p>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8">
                  Rahul Chaudhary
                </h1>
                
                <h2 className="text-2xl sm:text-3xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
                  Senior
                  <span className="ml-2 typewriter-container inline-block">
                  <span className="typewriter-text text-purple-500">{text}</span>
                  <span className="typewriter-cursor" />
                  </span>
                </h2>
                
                <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
                  Building scalable solutions and leading engineering teams to success through innovative problem-solving.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <a
                  href="/contact"
     className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg"
                  >
                  Contact Me
                  </a>
                  <a
                  href="/projects"
                  className="px-8 py-4 border-2 border-purple-600 text-purple-500 hover:bg-purple-600/10 rounded-lg transition-colors font-medium text-lg"
                  >
                  View Experience
                  </a>
                </div>
                </div>

                {/* Right Content */}
          <div className="lg:w-1/2 flex justify-center relative mt-20 lg:mt-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 float-animation">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl" />
              <img 
                src={rahul }
                alt="Rahul chaudhary"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-purple-500/30"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-8">
          <a 
            href="https://twitter.com/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a 
            href="https://github.com/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.312.469-2.381 1.237-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <button 
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <svg 
            className="w-8 h-8 text-purple-500 hover:text-purple-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0px); }
        }

        @keyframes blink {
          from, to { opacity: 1 }
          50% { opacity: 0 }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .float-animation {
          animation: float 5s ease-in-out infinite;
        }

        .typewriter-cursor {
          display: inline-block;
          width: 2px;
          background-color: #8b5cf6;
          animation: blink 1s step-end infinite;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;