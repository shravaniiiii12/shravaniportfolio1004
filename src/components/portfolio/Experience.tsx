
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "PLC Programming Intern",
      company: "Arun Maintenance Services",
      duration: "01/2025 - 06/2025",
      location: "Pune, India",
      description: "Currently working as PLC Programming Intern, gaining hands-on experience in industrial automation and control systems."
    },
    {
      title: "IoT and Security Intern",
      company: "Copper Cloud IOTech Pvt Ltd",
      duration: "07/2024 - 09/2024",
      location: "Pune, India",
      description: "IoT-MQTT Shield Project",
      responsibilities: [
        "Implemented a high-availability MQTT solution using AWS Lightsail",
        "Deployed EMQX brokers in a clustered setup with load balancing",
        "Configured persistent sessions and health checks for Failover",
        "Improved fault tolerance, scalability, and real-time IoT communication"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Internships</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl text-black mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-black">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                  <h4 className="text-lg font-semibold text-black mb-4">{exp.description}</h4>
                  {exp.responsibilities && (
                    <ul className="space-y-3 text-black">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
