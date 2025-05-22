import  { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">MyPortfolio</Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link to="/skills" className="hover:text-gray-300">Skills</Link></li>
              <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2">
            <li><Link to="/" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/skills" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>Skills</Link></li>
            <li><Link to="/projects" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar
