
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 animate-fade-in">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-xl transition-all duration-300 animate-fade-in delay-200">
          <CardContent className="p-8">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              Versatile engineering graduate with practical exposure to AI/ML, cloud services, DevSecOps, and data workflows. 
              Skilled in Python, SQL, and tools like Docker, Git, and Power BI. Experienced in building smart, secure, and 
              cloud-enabled solutions through hands-on projects. Driven by curiosity and a problem-solving mindset, with a 
              focus on scalable tech that delivers real-world impact.
            </p>
          </CardContent>
        </Card>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in delay-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">AI</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">AI & Machine Learning</h3>
              <p className="text-slate-600">Specialized in adversarial ML, cybersecurity applications, and intelligent systems</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in delay-400">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">☁️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Cloud & DevOps</h3>
              <p className="text-slate-600">Experienced with AWS, Azure, and implementing scalable cloud solutions</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in delay-500">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">IoT & Security</h3>
              <p className="text-slate-600">Building secure IoT systems with focus on ethical hacking and cybersecurity</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
