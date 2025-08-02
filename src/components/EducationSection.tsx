import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = {
    degree: "Bachelor of Technology in Computer Science Engineering",
    college: "XYZ Institute of Technology",
    duration: "2021 - 2025",
    cgpa: "8.5",
    maxCgpa: "10.0"
  };

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Object-Oriented Programming",
    "Web Technologies",
    "Machine Learning",
    "Compiler Design",
    "System Design"
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation building my technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Details */}
          <Card className="shadow-elegant hover:shadow-elevated transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">{education.college}</p>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{education.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Current CGPA</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">{education.cgpa}</span>
                    <span className="text-muted-foreground">/{education.maxCgpa}</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(parseFloat(education.cgpa) / parseFloat(education.maxCgpa)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Relevant Coursework */}
          <Card className="shadow-elegant hover:shadow-elevated transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Relevant Coursework
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {coursework.map((course, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;