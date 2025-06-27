
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Azure Fundamentals AZ900",
      duration: "06/2024 - 12/2024",
      description: "Gained foundational knowledge of Azure services, pricing, and governance including secure cloud solutions."
    },
    {
      name: "CISEH Certified Information Security and Ethical Hacker",
      duration: "01/2022 - 10/2022",
      description: "Acquired expertise in identifying vulnerabilities, penetration testing, and implementing security measures."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg mr-3">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.duration}
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-800 leading-tight">
                  {cert.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-slate-600">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
