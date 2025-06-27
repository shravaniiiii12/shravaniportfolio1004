
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Cloud, Shield, Database } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Cpu, title: "AI & ML", desc: "Adversarial ML & Cybersecurity" },
    { icon: Cloud, title: "Cloud", desc: "AWS & Azure Solutions" },
    { icon: Shield, title: "Security", desc: "IoT & Ethical Hacking" },
    { icon: Database, title: "Data", desc: "SQL & Analytics" }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 animate-fade-in">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 animate-fade-in delay-200">
            <CardContent className="p-8">
              <p className="text-xl text-black leading-relaxed text-center">
                Versatile engineering graduate with practical exposure to <span className="text-blue-400 font-semibold">AI/ML</span>, 
                <span className="text-cyan-400 font-semibold"> cloud services</span>, <span className="text-indigo-400 font-semibold">DevSecOps</span>, 
                and data workflows. Skilled in SQL, and tools like Docker, Git, and Power BI. Experienced in building smart, 
                secure, and cloud-enabled solutions through hands-on projects. Driven by curiosity and a problem-solving mindset, 
                with a focus on <span className="text-purple-400 font-semibold">scalable tech</span> that delivers real-world impact.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 150 + 400}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-black group-hover:text-slate-200 transition-colors duration-300">
                    {skill.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
