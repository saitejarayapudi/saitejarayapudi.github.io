import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/saitejarayapudi",
      icon: <Github size={20} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sai-teja-rayapudi/",
      icon: <Linkedin size={20} />,
    },
    {
      label: "Email",
      href: "mailto:saitejarayapudi939@gmail.com",
      icon: <Mail size={20} />,
    },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-blue-400 font-semibold text-lg">
              🚀 Building Better Systems, One Commit at a Time
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white 
                transition transform hover:scale-110 shadow-sm
                ${label === "GitHub" ? "bg-gray-800 hover:bg-gray-700" : ""}
                ${label === "LinkedIn" ? "bg-blue-700 hover:bg-blue-600" : ""}
                ${label === "Email" ? "bg-red-500 hover:bg-red-400" : ""}`}
              >
                {icon}
              </a>
            ))}
          </div>
          <div className="flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors 
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 
              focus:ring-offset-slate-900"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 my-6 w-full" />
      <div className="text-center text-slate-400 text-sm pb-6">
        <p>
          &copy; {new Date().getFullYear()} Sai Teja Rayapudi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
