
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shravanikarambelkar7088@gmail.com",
      action: () => window.open("mailto:shravanikarambelkar7088@gmail.com")
    },
    {
      icon: Phone,
      label: "Phone",
      value: "7758050169",
      action: () => window.open("tel:7758050169")
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      action: () => {}
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shravaniiiii12",
      action: () => window.open("https://github.com/shravaniiiii12")
    }
  ];

  const interests = [
    "Exploring new cultures through travel and trekking",
    "Reading to expand perspective and knowledge",
    "Learning and practicing new languages",
    "Immersing in diverse global experiences"
  ];

  const languages = [
    { name: "English", level: 5 },
    { name: "Hindi", level: 4 },
    { name: "Marathi", level: 4 }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 animate-fade-in">Get In Touch</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={contact.action}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-blue-200">{contact.label}</p>
                          <p className="font-semibold text-white">{contact.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 w-full md:w-auto"
                onClick={() => window.open("mailto:shravanikarambelkar7088@gmail.com")}
              >
                <Send className="mr-2 h-4 w-4" />
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Languages */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in delay-300">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-white">Languages</h4>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-blue-200">{lang.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full ${
                                i < lang.level ? 'bg-blue-400' : 'bg-white/20'
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
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in delay-400">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-white">Interests</h4>
                <ul className="space-y-2">
                  {interests.map((interest, index) => (
                    <li key={index} className="flex items-start text-blue-200">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {interest}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2025 Shravani Karambelkar. Crafted with passion for technology and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
