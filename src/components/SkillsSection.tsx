import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C++", level: 90, color: "bg-tech-blue" },
        { name: "Python", level: 85, color: "bg-tech-yellow" },
        { name: "Java", level: 80, color: "bg-tech-red" },
        { name: "JavaScript", level: 85, color: "bg-tech-orange" },
        { name: "C", level: 75, color: "bg-tech-purple" }
      ]
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: [
        { name: "React", level: 85, color: "bg-tech-blue" },
        { name: "HTML/CSS", level: 90, color: "bg-tech-orange" },
        { name: "Node.js", level: 75, color: "bg-tech-green" },
        { name: "Express.js", level: 70, color: "bg-tech-purple" },
        { name: "Tailwind CSS", level: 85, color: "bg-tech-blue" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, color: "bg-tech-red" },
        { name: "VS Code", level: 90, color: "bg-tech-blue" },
        { name: "Docker", level: 65, color: "bg-tech-purple" },
        { name: "Linux", level: 75, color: "bg-tech-orange" },
        { name: "Postman", level: 80, color: "bg-tech-green" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: 80, color: "bg-tech-blue" },
        { name: "MongoDB", level: 70, color: "bg-tech-green" },
        { name: "Firebase", level: 75, color: "bg-tech-orange" },
        { name: "PostgreSQL", level: 65, color: "bg-tech-purple" }
      ]
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

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
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