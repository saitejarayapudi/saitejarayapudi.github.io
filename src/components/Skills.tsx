const Skills = () => {
  const skillsData = {
    "Programming Languages": [
      "Java (8-17)",
      "J2EE",
      "SQL",
      "PL/SQL",
      "C/C++/C#",
      "Python",
      "Golang",
    ],
    "Web Technologies / Scripting Languages": [
      "React.js (v15–v18)",
      "Angular.js (v8–16)",
      "Node JS",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Bootstrap",
      "Tailwind CSS",
      "jQuery",
    ],
    Backend: [
      "Java (8–17)",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "RESTful APIs",
      "Microservices",
      "Hibernate",
      "JPA",
    ],
    Databases: ["MySQL", "Oracle", "PostgreSQL", "MongoDB"],
    "Cloud & DevOps": [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
      "GitLab",
      "Maven",
      "Gradle",
    ],
    Testing: [
      "JUnit",
      "Mockito",
      "Jest",
      "Postman",
      "Swagger",
      "Jasmine",
      "Karma",
    ],
    "Tools & Methodologies": [
      "IntelliJ IDEA",
      "VS Code",
      "STS",
      "Eclipse",
      "JIRA",
      "Agile/Scrum",
      "SDLC",
      "Bitbucket",
    ],
    "Operating System": ["Mac OS", "Windows", "Linux"],
  };

  return (
    <section
      id="skills"
      className="section py-20 bg-gradient-to-tr from-teal-50 via-white to-green-100 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm constantly learning and evolving my skillset to stay current
              with the latest technologies in Java full stack development.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-900 text-blue-100 text-sm font-medium px-3 py-1 rounded-full hover:scale-105 hover:shadow-md transition duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
