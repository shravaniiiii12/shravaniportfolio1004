
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "SQL", level: 85, icon: "🗄️" },
    { name: "Machine Learning", level: 80, icon: "🤖" },
    { name: "Cloud & DevOps (AWS, Azure)", level: 75, icon: "☁️" },
    { name: "IoT & Security", level: 80, icon: "🔐" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 animate-fade-in">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                  </div>
                  <span className="text-sm font-medium text-slate-600">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 200 + 500}ms`
                    }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
