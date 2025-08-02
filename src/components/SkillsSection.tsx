import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C++", "Python", "Java", "JavaScript", "C"]
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: ["React", "HTML/CSS", "Node.js", "Express.js", "Tailwind CSS"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "VS Code", "Docker", "Linux", "Postman"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "MongoDB", "Firebase", "PostgreSQL"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My technical toolkit for building innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-elegant hover:shadow-elevated transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="tech-badge bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills as Badges */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST APIs", "JSON", "Bootstrap", "jQuery", "AJAX", 
              "Data Structures", "Algorithms", "System Design", "OOP", 
              "Responsive Design", "Version Control", "Agile"
            ].map((tech, index) => (
              <span 
                key={index}
                className="tech-badge bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;