
const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 py-12"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="bg-white/5 max-w-3xl w-full shadow-[0_10px_50px_rgba(0,0,0,0.3)] rounded-2xl p-8 sm:p-12 transform hover:scale-[1.02] transition-transform duration-300">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 text-center tracking-wide">About Me</h1>
        <p className="text-lg sm:text-xl text-gray-700 text-center mb-6">
          I am a MERN stack developer from Bihar. Passionate about building full-stack web applications, I specialize in MongoDB, Express, React, and Node.js.
          My goal is to create fast, scalable, and user-friendly applications that solve real-world problems.
        </p>
        <div className="mt-10 text-center">
        
        </div>
      </div>
    </div>
  );
};

export default About;
