
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    { name: "Python", level: 90, icon: "🐍", color: "from-yellow-400 to-green-400" },
    { name: "SQL", level: 85, icon: "🗄️", color: "from-blue-400 to-indigo-400" },
    { name: "Machine Learning", level: 80, icon: "🤖", color: "from-purple-400 to-pink-400" },
    { name: "Cloud & DevOps (AWS, Azure)", level: 75, icon: "☁️", color: "from-cyan-400 to-blue-400" },
    { name: "IoT & Security", level: 80, icon: "🔐", color: "from-red-400 to-orange-400" }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl p-3 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden backdrop-blur-sm">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
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
