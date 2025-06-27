
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Adversarial Machine Learning for Cybersecurity",
      duration: "02/2025 - Present",
      description: "Explored FGSM & PGD adversarial attacks on AI threat detection; implemented defenses like feature squeezing & adversarial training to boost robustness and ensure secure, ethical AI in cybersecurity.",
      technologies: ["Python", "Machine Learning", "Cybersecurity", "FGSM", "PGD"],
      status: "Current"
    },
    {
      title: "Code Generation Chat Bot",
      duration: "01/2025 - 03/2025",
      description: "Built an intelligent chatbot using Python and NLP capable of understanding user prompts to generate relevant code snippets. Integrated dynamic response handling for multiple programming queries.",
      technologies: ["Python", "NLP", "Chatbot", "Code Generation"],
      status: "Completed"
    },
    {
      title: "Smart Tomato Cultivation",
      duration: "06/2023 - 12/2024",
      description: "Developed an IoT-based smart farming system using Python and machine learning (CNN) to detect tomato crop diseases. Integrated cloud for real-time data storage and visualization. Enabled automated analysis of leaf images and remote monitoring, enhancing accuracy and efficiency in agricultural decision-making.",
      technologies: ["Python", "IoT", "CNN", "Cloud Computing", "Computer Vision"],
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 animate-fade-in">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in h-full flex flex-col"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Current' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.duration}
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-800 leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-slate-600 mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 w-full"
                  onClick={() => console.log(`View ${project.title} project`)}
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
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
