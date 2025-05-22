
import bloggerImage from '../assets/BloggerWebsite.png'; 
import userDashImage from '../assets/MERNAPP.png';
import aqiWeatherImage from '../assets/AQI.png';
import chatifyImage from '../assets/ChatApplication.png';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 py-12"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="bg-white/5 max-w-5xl w-full shadow-[0_10px_50px_rgba(0,0,0,0.3)] rounded-2xl p-8 sm:p-12 transform hover:scale-[1.02] transition-transform duration-300">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 text-center tracking-wide">My Projects</h1>

        {/* User Dash */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">USER DASH</h2>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Technologies Used:</span> MongoDB, Express.js, React.js, Node.js
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Developed a MERN application for profile management with a React frontend, an Express and Node.js backend, and MongoDB for efficient data storage.
          </p>
          <div className="flex flex-col items-center">
            <img src={userDashImage} alt="User Dash Project Screenshot" className="w-full h-auto object-contain rounded-lg mb-4" />
            <a
              href="https://github.com/ranjeet8091/UserDash.git"
              className="text-white-500 hover:underline bg-blue-500 p-2 rounded-lg"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Blogger Page */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">BLOGGER PAGE</h2>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Technologies Used:</span> HTML, CSS, JavaScript, Node.js, Express.js, MongoDB
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Developed a blogging platform with unified user/admin login, using MongoDB for data storage. Enabled users to manage blogs and admins to manage users and blogs.
          </p>
          <div className="flex flex-col items-center">
            <img src={bloggerImage} alt="Blogger Page Project Screenshot" className="w-full h-auto object-contain rounded-lg mb-4" />
            <a
              href="https://github.com/ranjeet8091/Blogger.git"
              className="text-white-500 hover:underline bg-blue-500 p-2 rounded-lg"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* AQI and Weather App */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">AQI AND WEATHER APP</h2>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Technologies Used:</span> HTML, CSS, JavaScript, API
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Developed a weather and AQI app using the Open Weather API, with AQI-based color indicators and dynamic data rendering across two interactive pages.
          </p>
          <div className="flex flex-col items-center">
            <img src={aqiWeatherImage} alt="AQI and Weather App Project Screenshot" className="w-full h-auto object-contain rounded-lg mb-4" />
            <a
              href="https://github.com/ranjeet8091/AQI.git"
              className="text-white-500 hover:underline bg-blue-500 p-2 rounded-lg"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Chatify */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">CHATIFY</h2>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Technologies Used:</span> MongoDB, Express.js, React.js, Node.js
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Developed a web chat application for individual and group messaging using WebSockets, with bcrypt for password encryption, ensuring real-time, secure, and private communication.
          </p>
          <div className="flex flex-col items-center">
            <img src={chatifyImage} alt="Chatify Project Screenshot" className="w-full h-auto object-contain rounded-lg mb-4" />
            <a
              href="https://github.com/ranjeet8091/Chat-Application.git"
              className="text-white-500 hover:underline bg-blue-500 p-2 rounded-lg"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
