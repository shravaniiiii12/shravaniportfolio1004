
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Send, Globe } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shravanikarambelkar7088@gmail.com",
      action: () => window.open("mailto:shravanikarambelkar7088@gmail.com"),
      color: "from-red-400 to-pink-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7758050169",
      action: () => window.open("tel:+917758050169"),
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      action: () => {},
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shravaniiiii12",
      action: () => window.open("https://github.com/shravaniiiii12"),
      color: "from-purple-400 to-indigo-400"
    }
  ];

  const interests = [
    "🌍 Exploring new cultures through travel and trekking",
    "📚 Reading to expand perspective and knowledge",
    "🗣️ Learning and practicing new languages",
    "🎯 Immersing in diverse global experiences",
    "💡 Continuous learning in emerging technologies",
    "🎨 Creative problem-solving and innovation"
  ];

  const languages = [
    { name: "English", level: 5, color: "bg-blue-400" },
    { name: "Hindi", level: 4, color: "bg-green-400" },
    { name: "Marathi", level: 4, color: "bg-orange-400" }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 animate-fade-in">
            Let's <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities in AI, Cloud, and emerging technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-semibold text-black mb-8 animate-fade-in">Get In Touch</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in cursor-pointer group"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={contact.action}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 bg-gradient-to-br ${contact.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-slate-400 mb-1">{contact.label}</p>
                          <p className="font-semibold text-black group-hover:text-blue-400 transition-colors duration-300 truncate">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://wa.me/qr/ADNTYM75YXKQJ1")}
              >
                <Send className="mr-2 h-5 w-5" />
                Start a Conversation
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Languages */}
            <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-500 animate-fade-in delay-300">
              <CardContent className="p-6">
                <h4 className="text-2xl font-semibold mb-6 text-black flex items-center">
                  <Globe className="h-6 w-6 mr-2 text-blue-400" />
                  Languages
                </h4>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-black font-medium">{lang.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i < lang.level ? lang.color : 'bg-white/20'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-500 animate-fade-in delay-400">
              <CardContent className="p-6">
                <h4 className="text-2xl font-semibold mb-6 text-black">Interests</h4>
                <ul className="space-y-3">
                  {interests.map((interest, index) => (
                    <li key={index} className="flex items-start text-black hover:text-blue-600 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {interest}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-black text-lg">
            © 2025 Shravani Karambelkar • Crafted with 💙 for technology and innovation
          </p>
          <p className="text-slate-500 mt-2">
            Available for exciting opportunities in AI, Cloud Engineering, and IoT
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
