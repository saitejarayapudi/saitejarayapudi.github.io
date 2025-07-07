import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "../assets/profilephoto.jpeg"
  
const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Sai_Teja_Rayapudi_Resume.docx";
    link.download = "Sai_Teja_Rayapudi_Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center pt-16 px-4 md:px-8 bg-gradient-to-br from-indigo-100 via-white to-purple-50">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-16 py-6 max-w-screen-xl mx-auto">
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover object-[center_100%] rounded-full"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left md:pl-12 lg:pl-16 mt-8 md:mt-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Hi, I'm <span className="text-blue-600">Sai Teja Rayapudi</span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-600 mb-4">
            Java Full Stack Developer
          </h2>
          <p className="text-gray-700 text-base lg:text-lg max-w-xl leading-relaxed mb-6">
            Passionate Java Full Stack Developer with expertise in Spring Boot,
            React, Angular, and cloud technologies. I create scalable, efficient
            solutions that drive business success and deliver exceptional user
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center md:justify-start">
            <button
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              View My Work
            </button>
            <button
              onClick={handleDownloadResume}
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center md:justify-start space-x-5">
            {[
              {
                icon: Github,
                href: "https://github.com/saitejarayapudi",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/sai-teja-rayapudi/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:saitejarayapudi939@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
    w-10 h-10 rounded-full flex items-center justify-center
    text-white transition transform hover:scale-110 shadow-sm
    ${label === "GitHub" ? "bg-gray-800 hover:bg-gray-700" : ""}
    ${label === "LinkedIn" ? "bg-blue-700 hover:bg-blue-600" : ""}
    ${label === "Email" ? "bg-red-500 hover:bg-red-400" : ""}
  `}
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
