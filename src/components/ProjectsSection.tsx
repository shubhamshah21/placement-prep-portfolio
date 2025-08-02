import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import projectWeb from '@/assets/project-web.jpg';
import projectMobile from '@/assets/project-mobile.jpg';
import projectAI from '@/assets/project-ai.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Features admin dashboard for inventory management.",
      image: projectWeb,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      githubLink: "https://github.com/shubhamshah/ecommerce-app",
      liveLink: "https://ecommerce-demo.vercel.app",
      category: "Full Stack",
      role: "Full Stack Developer"
    },
    {
      title: "Task Management Mobile App",
      description: "Cross-platform mobile application for task management with real-time synchronization, offline support, and collaborative features for team productivity.",
      image: projectMobile,
      technologies: ["React Native", "Firebase", "Redux", "AsyncStorage"],
      githubLink: "https://github.com/shubhamshah/task-manager",
      liveLink: null,
      category: "Mobile Development",
      role: "Mobile Developer"
    },
    {
      title: "Student Performance Predictor",
      description: "Machine learning model to predict student academic performance using various factors. Includes data visualization dashboard and recommendation system.",
      image: projectAI,
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Chart.js"],
      githubLink: "https://github.com/shubhamshah/student-predictor",
      liveLink: "https://student-predictor.herokuapp.com",
      category: "Machine Learning",
      role: "Data Scientist & Backend Developer"
    },
    {
      title: "Real-time Chat Application",
      description: "Secure real-time messaging application with group chats, file sharing, message encryption, and responsive design for seamless communication.",
      image: projectWeb,
      technologies: ["Socket.io", "React", "Node.js", "MongoDB", "JWT"],
      githubLink: "https://github.com/shubhamshah/chat-app",
      liveLink: "https://secure-chat-app.netlify.app",
      category: "Real-time Application",
      role: "Full Stack Developer"
    },
    {
      title: "Portfolio Website Builder",
      description: "Dynamic portfolio builder allowing users to create professional portfolios with customizable templates, drag-and-drop interface, and responsive designs.",
      image: projectWeb,
      technologies: ["Vue.js", "Laravel", "MySQL", "TailwindCSS"],
      githubLink: "https://github.com/shubhamshah/portfolio-builder",
      liveLink: "https://portfolio-builder.com",
      category: "Web Application",
      role: "Frontend Lead"
    },
    {
      title: "Weather Forecast Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, historical data analysis, weather maps, and personalized weather alerts.",
      image: projectMobile,
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      githubLink: "https://github.com/shubhamshah/weather-dashboard",
      liveLink: "https://weather-dashboard-pro.netlify.app",
      category: "Data Visualization",
      role: "Frontend Developer"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my technical skills through real-world applications and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group shadow-elegant hover:shadow-elevated transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="tech-badge bg-primary text-primary-foreground text-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium">Role:</span> {project.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="tech-badge bg-secondary text-secondary-foreground text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </Button>
                  {project.liveLink && (
                    <Button
                      size="sm"
                      className="flex-1 gradient-primary text-white hover:opacity-90"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Live
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://github.com/shubhamshah', '_blank')}
          >
            <Code2 className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;