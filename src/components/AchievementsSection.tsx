import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Star, Code, Target, Users } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      category: "Internships",
      icon: Users,
      items: [
        {
          title: "Software Development Intern",
          organization: "Infosys Springboard",
          duration: "June 2024 - August 2024",
          description: "Developed REST APIs and frontend components, contributing to enterprise-level applications."
        },
        {
          title: "Web Development Intern", 
          organization: "TechCorp Solutions",
          duration: "May 2023 - July 2023",
          description: "Built responsive web applications using React and Node.js, improving user experience by 40%."
        }
      ]
    },
    {
      category: "Certifications",
      icon: Award,
      items: [
        {
          title: "Complete Web Development Bootcamp",
          organization: "Coursera - University of Michigan",
          duration: "2024",
          description: "Comprehensive full-stack development certification covering modern web technologies."
        },
        {
          title: "Python for Data Science",
          organization: "Infosys Springboard",
          duration: "2023",
          description: "Specialized certification in Python programming for data analysis and machine learning."
        },
        {
          title: "JavaScript Algorithms and Data Structures",
          organization: "freeCodeCamp",
          duration: "2023",
          description: "Advanced certification focusing on algorithmic thinking and problem-solving."
        }
      ]
    },
    {
      category: "Competitive Programming",
      icon: Code,
      items: [
        {
          title: "LeetCode Profile",
          organization: "1200+ Problems Solved",
          duration: "Rating: 1850+",
          description: "Consistent problem solving with focus on data structures and algorithms."
        },
        {
          title: "CodeForces Profile",
          organization: "Specialist (1400+ Rating)",
          duration: "Active since 2022",
          description: "Regular participation in competitive programming contests."
        },
        {
          title: "GeeksforGeeks Profile",
          organization: "500+ Problems Solved",
          duration: "Institute Rank: Top 10",
          description: "Strong foundation in computer science fundamentals."
        }
      ]
    },
    {
      category: "Awards & Recognition",
      icon: Trophy,
      items: [
        {
          title: "Best Project Award",
          organization: "College Tech Fest 2024",
          duration: "March 2024",
          description: "Awarded for innovative e-commerce solution with AI-powered recommendations."
        },
        {
          title: "Academic Excellence Award",
          organization: "XYZ Institute of Technology",
          duration: "2023-2024",
          description: "Recognized for maintaining consistently high academic performance."
        },
        {
          title: "Hackathon Winner",
          organization: "Smart India Hackathon",
          duration: "October 2023",
          description: "First place in healthcare technology category for patient monitoring system."
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition of my dedication to continuous learning and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-elegant hover:shadow-elevated transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>

                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-primary/20 pl-4 hover:border-primary/50 transition-colors duration-200">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-primary font-medium text-sm mb-2">{item.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Target, label: "Problems Solved", value: "1700+" },
            { icon: Trophy, label: "Contest Rating", value: "1850+" },
            { icon: Award, label: "Certifications", value: "8+" },
            { icon: Star, label: "GitHub Stars", value: "150+" }
          ].map((stat, index) => (
            <Card key={index} className="text-center shadow-moderate hover:shadow-elevated transition-shadow duration-300">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;