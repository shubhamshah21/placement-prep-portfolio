import { Card, CardContent } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  const highlights = [
    "Strong academic background in Computer Science",
    "Excellent problem-solving and analytical skills",
    "Effective team collaboration and leadership",
    "Clear communication and presentation abilities",
    "Continuous learner with growth mindset"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From Campus to Codebase, My Journey Begins
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-elevated">
                <img 
                  src={profilePhoto} 
                  alt="Shubham Shah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                🚀
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🚀 Learner. Builder. Future Engineer.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From classrooms to codebases — I'm constantly learning and building. Through projects, 
                internships, and self-initiated work, I've sharpened my problem-solving, team collaboration, 
                and development skills. Whether it's optimizing algorithms in C++ or building responsive 
                web applications with React, I bring a growth mindset to everything I do.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing B.Tech in Computer Science Engineering with a focus on full-stack 
                development and competitive programming. I'm passionate about creating efficient, 
                scalable solutions and am actively preparing for placement opportunities where I can 
                contribute to innovative projects and continue growing as a software engineer.
              </p>
            </div>

            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Key Strengths</h4>
                <ul className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;