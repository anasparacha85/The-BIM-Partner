import { Phone, MessageCircle, Check, Users, Award, Briefcase, Clock, Target, ChevronRight, Mail } from 'lucide-react';
import CountUp from '../../../Animations/CountUp';

// Stats Section
const StatsSection = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "BIM Professionals" },
    { icon: <Award className="w-8 h-8" />, number: "100+", label: "Projects Completed" },
    { icon: <Briefcase className="w-8 h-8" />, number: "50+", label: "Active Clients" },
    { icon: <Target className="w-8 h-8" />, number: "98%", label: "Success Rate" }
  ];

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-2"><CountUp
                                from={0}
                                to={stat.number}
                                separator=","
                                direction="up"
                                duration={0.5}
                                className="count-up-text "
                              />+</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection