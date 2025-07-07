import { Code, Palette, Rocket, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Dev",
      description:
        "Building intuitive and responsive interfaces using React & Angular",
    },
    {
      icon: Palette,
      title: "Backend Dev",
      description:
        "Developing scalable microservices with Java, Spring Boot & REST APIs",
    },
    {
      icon: Rocket,
      title: "Web Apps",
      description: "Deploying secure, high-performance apps on AWS with CI/CD",
    },
    {
      icon: Heart,
      title: "Problem Solver",
      description:
        "Solving complex challenges with clean code and architectural thinking",
    },
  ];

  const iconColors = [
    "text-blue-400",
    "text-emerald-400",
    "text-orange-400",
    "text-pink-400",
  ];

  return (
    <section
      id="about"
      className="section py-16 text-white w-full"
      style={{
        background: "radial-gradient(circle at top left, #1a2a3a, #0c1a27)",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start px-10 w-full">
        <div className="lg:w-1/2 pr-6">
          <h2 className="text-4xl font-bold mb-6 border-b-2 inline-block border-blue-500 pb-1">
            About Me
          </h2>
          <div className="space-y-4 text-gray-200 text-[15px] leading-relaxed">
            <p>
              I'm a
              <span className="font-semibold"> Java Full Stack Developer</span>{" "}
              with <span className="text-orange-400 font-semibold">6+ </span>
              years of experience delivering scalable, high-performance web and
              cloud applications across healthcare, finance, and IoT domains.
            </p>
            <p>
              I focus on creating intuitive, secure microservices using Java, Spring
              Boot, GraphQL/REST APIs, and containerized solutions on AWS with
              Docker and Kubernetes.
            </p>
            <p>
              With hands-on DevOps experience (CI/CD via Jenkins, GitLab,
              Terraform), I ensure streamlined deployments and infrastructure
              management. I'm also passionate about open-source, mentoring, and
              continuous learning.
            </p>
            <p>
              Whether it’s building cloud-native applications, modernizing
              legacy systems, or optimizing end-to-end software delivery
              pipelines, I bring a holistic, innovation-focused approach to
              full-stack development.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 justify-end">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f2a38] p-5 rounded-xl shadow-md text-center hover:scale-105 transition-transform duration-200"
            >
              <div className="mb-3 flex justify-center">
                <item.icon
                  size={28}
                  className={`${iconColors[index]} transition-all duration-200`}
                />
              </div>
              <h4 className="text-base font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-300 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
