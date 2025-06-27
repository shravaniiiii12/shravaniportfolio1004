
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowDown, Download, Mail, Phone, Github, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // This would trigger resume download
    console.log('Downloading resume...');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Image and Info */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="w-64 h-64 mx-auto lg:mx-0 relative">
              <img
                src="/lovable-uploads/4fa360dd-37d0-42fd-88d5-da0f364919ae.png"
                alt="Shravani Karambelkar"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-indigo-500/20"></div>
            </div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-4 animate-fade-in delay-200">
            Shravani<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Karambelkar
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 animate-fade-in delay-300">
            AI & Cloud Engineer (Fresher)
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in delay-400">
            <Button onClick={downloadResume} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" onClick={scrollToAbout} className="border-blue-300 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
              <ArrowDown className="mr-2 h-4 w-4" />
              Learn More
            </Button>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4 animate-fade-in delay-500">
          <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-blue-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-semibold text-slate-800">shravanikarambelkar7088@gmail.com</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-blue-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <p className="font-semibold text-slate-800">7758050169</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-blue-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-semibold text-slate-800">Pune, India</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-blue-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg">
                <Github className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500">GitHub</p>
                <p className="font-semibold text-slate-800">github.com/shravaniiiii12</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
