import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import ContactUs from './Contact';
import resume from '../assets/RanjeetResume.pdf (3).pdf';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = useRef('Full Stack Developer | MERN Developer');
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(fullText.current.slice(0, indexRef.current));
      indexRef.current++;
      if (indexRef.current > fullText.current.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Home Section */}
      <div
        className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 py-12"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="bg-white/5 max-w-3xl w-full shadow-[0_10px_50px_rgba(0,0,0,0.3)] rounded-2xl p-8 sm:p-12 transform hover:scale-[1.02] transition-transform duration-300">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-2 text-center tracking-wide">
            Ranjeet Tiwari
          </h1>
          <div className="text-center mb-6">
            <p className="text-lg sm:text-xl text-gray-700 italic">
              {displayText}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <a
              href={resume}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              download="Ranjeet_Tiwari_Resume.pdf"
            >
              Download Resume
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 bg-white rounded-xl text-base font-semibold hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
            >
              Contact US
            </Link>
          </div>
        </div>
      </div>

      {/* Sections Below Home with Consistent Gaps */}
      <div className="px-4">
        <div className="py-12">
          <About />
        </div>
        <div className="py-12">
          <Skills />
        </div>
        <div className="py-12">
          <Projects />
        </div>
        <div className="py-12">
          <ContactUs />
        </div>

        <footer className="bg-gray-800 text-white py-4">
          <div className="max-w-screen-lg mx-auto text-center">
            <p className="text-sm">
              &copy; 2025 Ranjeet Tiwari. All rights reserved. 
              Privacy Policy | Terms & Conditions
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
