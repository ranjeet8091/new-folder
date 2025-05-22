
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const contactData = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      text: 'Ranjeet Tiwari',
      link: 'https://www.linkedin.com/in/ranjeet-tiwari/',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      text: 'ranjeet8091',
      link: 'https://github.com/ranjeet8091',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      text: 'ranjeettt88@gmail.com',
      link: 'mailto:ranjeettt88@gmail.com',
    },
    {
      icon: <FaPhoneAlt />,
      label: 'Phone',
      text: '+91 80917 37829',
      link: 'tel:+918091737829',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      text: 'Nalagarh, Himachal Pradesh, 174101',
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 py-16 text-gray-900"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="text-center text-gray-900 mb-12">
        <h1 className="text-4xl font-extrabold mb-2">Contact Me</h1>
        <p className="text-lg text-gray-700">Feel free to reach out!</p>
      </div>

      <div className="w-full max-w-3xl grid gap-6 sm:grid-cols-2">
        {contactData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => item.link && window.open(item.link, '_blank')}
          >
            <div className="text-2xl text-blue-600">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-lg font-semibold text-gray-800">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
