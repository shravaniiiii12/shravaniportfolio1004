
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 animate-fade-in">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <div>
                <CardTitle className="text-2xl text-slate-800 mb-2">IoT and Security Intern</CardTitle>
                <div className="flex items-center text-blue-600 font-semibold mb-2">
                  <Building className="h-4 w-4 mr-2" />
                  Copper Cloud IOTech Pvt Ltd
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    07/2024 - 09/2024
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Pune, India
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">IoT-MQTT Shield Project</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Implemented a high-availability MQTT solution using AWS Lightsail
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Deployed EMQX brokers in a clustered setup with load balancing
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Configured persistent sessions and health checks for Failover
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Improved fault tolerance, scalability, and real-time IoT communication
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
