
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Trophy, Users, Briefcase, Award, Target } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      title: "Maharashtra Innovation Challenge Dec-23",
      description: "Represented the 'Smart Tomato Cultivation' project at the Maharashtra Innovation Challenge organized by MSSDS, pitching for funding at Savitribai Phule University, Pune.",
      icon: Trophy,
      category: "Competition"
    },
    {
      title: "Technophilia'24 Feb-24",
      description: "Served as Joint Secretary of SPARK Club, coordinating the 'Technophilia' project and paper presentation competition.",
      icon: Award,
      category: "Leadership"
    },
    {
      title: "Volunteering at MAHATECH Exhibition Feb-24",
      description: "Gained hands-on experience in event coordination, attended industry sessions, and networked with professionals.",
      icon: Users,
      category: "Volunteering"
    },
    {
      title: "Kisan Agriculture Expo Visit Dec-23",
      description: "Visited Kisan Agro Expo at PIECC Moshi for major project research, exploring agricultural trends, conducting surveys, and seeking sponsorships.",
      icon: Briefcase,
      category: "Research"
    },
    {
      title: "EV Expo Visit Feb-24",
      description: "Explored the latest innovations in electric vehicle technology at the EV Expo in Auto Cluster.",
      icon: Target,
      category: "Learning"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Competition: "from-yellow-500 to-orange-500",
      Leadership: "from-purple-500 to-pink-500",
      Volunteering: "from-green-500 to-teal-500",
      Research: "from-blue-500 to-indigo-500",
      Learning: "from-red-500 to-rose-500"
    };
    return colors[category as keyof typeof colors] || "from-blue-500 to-indigo-500";
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 animate-fade-in">
            Extracurricular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <Card 
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 bg-gradient-to-br ${getCategoryColor(activity.category)} rounded-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                      {activity.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-slate-800 leading-tight">
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{activity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
