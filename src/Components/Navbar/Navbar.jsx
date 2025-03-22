import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="bg-gray-900 shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-white">PORTFOLIO</Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-white hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">Home</Link>
                <Link to="/About" className="text-white hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">About</Link>
                <Link to="\Portfolio" className="text-white hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">Projects</Link>
                <Link to="#skills" className="text-white hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">Skills</Link>
                <Link to="#contact" className="text-white hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">Contact</Link>
              </div>
              <div className="md:hidden">
                <button id="mobile-menu-button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div id="mobile-menu" className="md:hidden hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="#home" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="#about" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">About</Link>
              <Link to="#projects" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
              <Link to="#skills" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Skills</Link>
              <Link to="#contact" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
