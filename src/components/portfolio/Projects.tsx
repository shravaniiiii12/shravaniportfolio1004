
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Adversarial Machine Learning for Cybersecurity",
      duration: "02/2025 - Present",
      description: "Explored FGSM & PGD adversarial attacks on AI threat detection; implemented defenses like feature squeezing & adversarial training to boost robustness and ensure secure, ethical AI in cybersecurity.",
      technologies: ["Python", "Machine Learning", "Cybersecurity", "FGSM", "PGD"],
      status: "Current",
      link: "https://github.com/shravaniiiii12"
    },
    {
      title: "Code Generation Chat Bot",
      duration: "01/2025 - 03/2025",
      description: "Built an intelligent chatbot using Python and NLP capable of understanding user prompts to generate relevant code snippets. Integrated dynamic response handling for multiple programming queries.",
      technologies: ["Python", "NLP", "Chatbot", "Code Generation"],
      status: "Completed",
      link: "https://github.com/shravaniiiii12"
    },
    {
      title: "Smart Tomato Cultivation",
      duration: "06/2023 - 12/2024",
      description: "Developed an IoT-based smart farming system using Python and machine learning (CNN) to detect tomato crop diseases. Integrated cloud for real-time data storage and visualization. Enabled automated analysis of leaf images and remote monitoring, enhancing accuracy and efficiency in agricultural decision-making.",
      technologies: ["Python", "IoT", "CNN", "Cloud Computing", "Computer Vision"],
      status: "Completed",
      link: "https://github.com/shravaniiiii12/Smart_Tomato_Cultivation"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-fade-in h-full flex flex-col group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                    project.status === 'Current' 
                      ? 'bg-green-400/20 text-green-300 border border-green-400/30' 
                      : 'bg-blue-400/20 text-blue-300 border border-blue-400/30'
                  }`}>
                    {project.status}
                  </span>
                  <div className="flex items-center text-sm text-slate-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.duration}
                  </div>
                </div>
                <CardTitle className="text-2xl text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-slate-300 mb-6 flex-1 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm rounded-full font-medium border border-blue-400/30 hover:border-blue-400/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 w-full group"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
