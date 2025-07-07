import { GraduationCap, CalendarClock } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Information Technology",
      school: "University of Cincinnati",
      location: "Cincinnati, USA",
      duration: "Jan 2024 - Apr 2025",
      description:
        "Comprehensive study of computer science fundamentals including programming, data structures, algorithms, database management, and software engineering principles.",
      achievements: [
        "Graduated with Distinction, GPA: 4.0/4.0",
        "Participated in multiple coding competitions and hackathons",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="section py-20 bg-gradient-to-r from-purple-50 via-white to-indigo-100"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Education & Learning
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My educational journey has provided me with a strong foundation in
              information technology and a commitment to continuous learning in
              software development.
            </p>
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-600" size={28} />
              Academic Background
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {edu.degree}
                      </h4>
                      <h5 className="text-lg font-semibold text-blue-600 mb-2">
                        {edu.school}
                      </h5>
                      <div className="flex items-center font-medium text-slate-500 dark:text-slate-400 mb-3">
                        <CalendarClock size={16} className="mr-1" />
                        <span className="mr-3">{edu.duration}</span> |{" "}
                        <span className="ml-3">{edu.location}</span>
                      </div>
                      <p className="font-medium text-gray-600 mb-4">
                        {edu.description}
                      </p>
                      <div>
                        <h6 className="font-semibold text-gray-800 mb-2">
                          Achievements:
                        </h6>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="font-medium text-md">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="text-blue-600" size={40} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
