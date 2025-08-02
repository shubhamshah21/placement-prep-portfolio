import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/shubhamshah', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shubhamshah', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shubham@email.com', label: 'Email' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary text-sm font-medium mb-6">
            👋 Hello, I am
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Shubham <span className="text-primary">Shah</span>
          </h1>

          {/* Professional Title */}
          <div className="text-lg md:text-xl text-muted-foreground mb-2">
            B.Tech CSE Student | Aspiring Software Engineer
          </div>

          {/* CGPA Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            8.5 CGPA
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate about <span className="text-primary font-medium">Data Structures & Algorithms</span>, 
            <span className="text-primary font-medium"> Web Development</span>, and solving real-world problems 
            through innovative technology solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-moderate hover:shadow-elevated"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;