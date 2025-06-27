
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    console.log('Downloading resume...');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Interactive background elements that follow mouse */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          left: '10%',
          top: '20%'
        }}
      />
      <div 
        className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          right: '10%',
          bottom: '20%'
        }}
      />

      <div className="container mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full backdrop-blur-sm animate-bounce delay-100">
              <Code className="h-8 w-8 text-blue-400" />
            </div>
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full backdrop-blur-sm animate-bounce delay-300">
              <Sparkles className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full backdrop-blur-sm animate-bounce delay-500">
              <Zap className="h-8 w-8 text-indigo-400" />
            </div>
          </div>

          {/* Name with advanced animations */}
          <div className="mb-8">
            <h1 className="text-6xl lg:text-8xl font-bold mb-4">
              <span className="inline-block animate-fade-in bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Shravani
              </span>
            </h1>
            <h1 className="text-6xl lg:text-8xl font-bold mb-6">
              <span className="inline-block animate-fade-in delay-300 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Karambelkar
              </span>
            </h1>
          </div>
          
          {/* Animated Role */}
          <div className="mb-8 animate-fade-in delay-500">
            <p className="text-2xl lg:text-3xl text-blue-200 mb-2">
              AI & Cloud Engineer
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <p className="text-lg text-slate-300">Fresher • Tech Enthusiast • Problem Solver</p>
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-12 animate-fade-in delay-700">
            <Button 
              onClick={downloadResume} 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToAbout} 
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              <ArrowDown className="mr-2 h-5 w-5" />
              Explore More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce delay-1000">
            <div className="mx-auto w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
