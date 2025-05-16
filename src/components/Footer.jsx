import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-sm leading-6 text-gray-300">
            I'm <strong>Bihari Kumar Rawat</strong>, a passionate Full Stack
            Developer with expertise in React, Node.js, MongoDB, and GrapesJS. I
            love building dynamic web experiences and custom page editors.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="md:col-span-1 flex flex-col items-start md:items-center">
          <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className="w-7 h-7 hover:scale-110 transition-transform duration-200"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact or Newsletter (Optional) */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-sm text-gray-300 mb-2">
            Interested in working together? Let's connect!
          </p>
          <Link
            to="/contact"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <strong className="text-white">Bihari Kumar Rawat</strong>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
