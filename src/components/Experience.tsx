import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Java Full Stack Developer",
      company: "Cigna Healthcare",
      location: "Phoenix, Arizona",
      period: "Dec 2024 - Present",
      achievements: [
        "Developed responsive full-stack healthcare apps using React.js, Redux Toolkit, and Spring Boot for EHR and insurance workflows.",
        "Implemented secure login and role-based access with Spring Security, OAuth2, and JWT to meet HIPAA standards.",
        "Automated cloud infrastructure on AWS using Terraform and deployed scalable services via Lambda, ECS, and API Gateway.",
        "Integrated GraphQL and FHIR APIs to enable efficient patient data retrieval and improve front-end performance.",
        "Streamlined CI/CD pipelines with Jenkins, GitLab CI, Docker, and Kubernetes, reducing deployment time by 40%.",
        "Collaborated in Agile teams and consistently delivered sprint goals with 95%+ on-time completion rate",
      ],
      technologies: [
        "Java",
        "Spring Security",
        "React.js",
        "REST APIs",
        "GraphQL",
        "AWS",
        "CI/CD",
        "Docker",
        "Gitlab",
        "Jenkins",
        "kubernetes",
        "Agile",
      ],
    },
    {
      title: "Java Full Stack Developer",
      company: "Synchrony Financial",
      location: "Cincinnati, Ohio",
      period: "Apr 2024 - Nov 2024",
      achievements: [
        "Built and deployed serverless APIs using Node.js, AWS Lambda, and DynamoDB, improving deployment speed by 25%.",
        "Developed scalable microservices with Java 8, Spring Boot, and Hibernate, deployed on GCP (GKE, Cloud Run).",
        "Developed secure, scalable APIs using Java and Spring Boot, while building WCAG-compliant front-end modules with TypeScript and Angular, ensuring accessibility across browsers and user groups.",
        "Supported deployment of containerized microservices on Google Cloud Platform (GCP) using Cloud Run and GKE during infrastructure scaling initiatives for Synchrony’s financial transaction modules. ",
        "Created a POC in Go for transaction validation using lightweight concurrency and goroutines.",
        "Delivered responsive SPAs with Angular, TypeScript, and SCSS, enhancing UI consistency by 20%",
        "Enabled real-time monitoring with Kafka, Datadog, and infrastructure automation using Terraform.",
      ],
      technologies: [
        "Java 8/17",
        "Spring Boot",
        "Node.js",
        "Angular.js",
        "GO",
        "TypeScript",
        "DynamoDB",
        "AWS Lambda",
        "GCP",
        "Kafka",
        "Datadog",
        "Terraform",
      ],
    },
    {
      title: "Java Full Stack Developer",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      period: "Aug 2021 - Dec 2023",
      achievements: [
        "Built responsive UIs with React.js (v16–v18) and Hooks, boosting performance and receiving positive client feedback.",
        "Integrated REST APIs with Redux and Context API to enable scalable front-end data flow.",
        "Reduced page load time by 30% through React optimization, code splitting, and React.memo.",
        "Developed secure microservices with Spring Boot and enforced RBAC using Spring Security, JWT, and OAuth2.",
        "Enabled real-time updates using WebSockets in chat modules and improved system performance with Coherence caching.",
        "Achieved 97%+ test coverage with Jest, JUnit, and API validation via Postman and Swagger.",
      ],
      technologies: [
        "Java 8/17",
        "React.js",
        "Redux",
        "REST APIs",
        "JWT",
        "TypeScript",
        "Spring Security",
        "Jest",
        "Junit",
      ],
    },
    {
      title: "Java Developer",
      company: "Kotak Mahindra Bank",
      location: "Chennai, India",
      period: "Jun 2018 - Jul 2021",
      achievements: [
        "Built high-performance Hibernate DAO layer for IBM DB2, streamlining financial data access.",
        "Refactored legacy monoliths to Spring Boot microservices and REST, cutting downtime by 30 %.",
        "Automated loan-processing batches with Autosys, SQL Invoker, and UNIX scripts, boosting operational efficiency.",
        "Deployed a multi-rack Apache Cassandra cluster and integrated ActiveMQ JMS for fault-tolerant, asynchronous  banking workflows.",
        "Created secure REST/SOAP integrations on AWS EC2, improving inter-service reliability by 25 %.",
        "Delivered responsive Angular.js dashboards and optimized PL/SQL procedures for faster reconciliations.",
      ],
      technologies: [
        "Java 8/17",
        "Angular.js",
        "Hibernate",
        "REST API/ SOAP",
        "JWT",
        "ActiveMQ",
        "AWS EC2",
        "Apache Cassandra",
        "PL/SQL",
        "Junit",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section py-12"
      style={{
        background: "radial-gradient(circle at top left, #1a2a3a, #0c1a27)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              My professional journey has been focused on mastering Java full
              stack development and contributing to meaningful projects that
              make a difference.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                <div
                  className={`w-full md:w-[90%] ${
                    index % 2 === 0
                      ? "md:pr-12 md:ml-auto"
                      : "md:pl-12 md:mr-auto"
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        {exp.company}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-600">
                        <div className="text-sm text-slate-500 flex items-center gap-1">
                          <Calendar size={18} className="text-emerald-600" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 text-blue-600">
                          <MapPin size={18} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-bold text-gray-800 mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="list-disc list-inside space-y-2 text-[15px] font-medium text-gray-700 leading-relaxed">
                        {exp.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-blue-800 dark:text-blue-100 font-semibold text-sm rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
