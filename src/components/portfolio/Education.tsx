
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Electronics and Telecommunication Engineering",
      institution: "MIT Academy of Engineering, Pune",
      duration: "11/2022 - Present",
      location: "Pune, India",
      grade: "7.8 CGPA"
    },
    {
      degree: "Diploma in Electronics & Telecommunication Engineering",
      institution: "Satara Polytechnic Satara",
      duration: "06/2017 - 05/2021",
      location: "Satara, India",
      grade: "91.06%"
    },
    {
      degree: "SSC",
      institution: "Anant English School",
      duration: "07/2016 - 05/2017",
      location: "Satara, India",
      grade: "75.40%"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-3">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
