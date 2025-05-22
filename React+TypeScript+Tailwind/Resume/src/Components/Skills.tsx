

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 py-12"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="bg-white/5 max-w-3xl w-full shadow-[0_10px_50px_rgba(0,0,0,0.3)] rounded-2xl p-8 sm:p-12 transform hover:scale-[1.02] transition-transform duration-300">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 text-center tracking-wide">Skills of Ranjeet Tiwari</h1>
        
        {/* Programming Languages */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Programming Languages</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>TypeScript</li>
            <li>MySQL</li>
          </ul>
        </div>

        {/* Web Development */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Web Development</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Node.js, Express.js</li>
            <li>Tailwind CSS, Git</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Soft Skills</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Leadership</li>
            <li>Team Building</li>
            <li>Communication</li>
          </ul>
        </div>

        {/* Co-Curricular Activities */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Co-Curricular Activities</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Volleyball</li>
            <li>Kho-Kho</li>
            <li>Badminton</li>
            <li>Cricket (School Level)</li>
          </ul>
        </div>

        {/* Cloud Expertise */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cloud Expertise</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>AWS</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Databases</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Oracle SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">"Knowledge is power, and creativity is the fuel." – Anonymous</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
