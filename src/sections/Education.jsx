import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech CSE (AIML)",
      school: "ABES Engineering College, Ghaziabad",
      duration: "2023–2027",
      score: "CGPA: 8.62",
      icon: <GraduationCap className="text-primary" />,
      current: true
    },
    {
      degree: "XII (Science)",
      school: "B.S. College, Rohtas",
      duration: "2019–2021",
      score: "Percentage: 85%",
      icon: <Award className="text-secondary" />
    },
    {
      degree: "X",
      school: "Dedicated Public School, Rohtas",
      duration: "2017-2019",
      score: "Percentage: 93.2%",
      icon: <Award className="text-primary" />
    }
  ];

  return (
    <section id="education" className="section-padding bg-slate-950/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-mono text-sm uppercase tracking-widest mb-4"
          >
            My Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Education <span className="text-gradient">Timeline</span>
          </motion.h3>
        </div>

        <div className="space-y-8">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start md:items-center group hover:border-primary/20 transition-all">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="text-2xl font-bold">{item.degree}</h4>
                    <span className="flex items-center gap-2 text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                      <Calendar size={14} /> {item.duration}
                    </span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5"><MapPin size={16} /> {item.school}</span>
                  </div>

                  <div className="text-lg font-semibold text-white/90 bg-white/5 w-fit px-4 py-1.5 rounded-xl border border-white/10">
                    {item.score}
                  </div>
                </div>

                {item.current && (
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">Pursuing</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
