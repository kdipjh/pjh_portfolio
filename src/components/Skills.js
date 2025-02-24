export default function Skills() {
  const skills = [
    { name: "JS", color: "from-yellow-400 to-yellow-600" },
    { name: "TS", color: "from-blue-400 to-blue-600" },
    { name: "React", color: "from-cyan-400 to-cyan-600" },
    { name: "Tailwindcss", color: "from-teal-400 to-teal-600" },
    { name: "Premierepro", color: "from-purple-400 to-purple-600" }
  ];

  return (
    <section id="skills" className="py-8 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text">
          Tech Skill
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-badge bg-gradient-to-r ${skill.color} text-white shadow-lg`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 