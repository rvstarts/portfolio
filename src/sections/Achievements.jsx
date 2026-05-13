import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Users, CheckCircle2 } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "AWS Academy Graduate",
      desc: "Cloud Foundations & Introduction to Cloud (Semester 1).",
      icon: <Award className="text-primary" />
    },
    {
      title: "AWS Machine Learning Foundations",
      desc: "Certified in foundational ML models and AWS cloud services.",
      icon: <Star className="text-secondary" />
    },
    {
      title: "Agile Leadership",
      desc: "Led backend integration, achieving 25% faster sprint delivery.",
      icon: <Users className="text-primary" />
    },
    {
      title: "District Rank Holder",
      desc: "Recognized for academic excellence in Board Examinations.",
      icon: <Trophy className="text-secondary" />
    },
    {
      title: "School Topper (Class 10 & 12)",
      desc: "Achieved top positions in both secondary and senior secondary boards.",
      icon: <Trophy className="text-primary" />
    }
  ];

  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-mono text-sm uppercase tracking-widest mb-4"
          >
            Milestones
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Achievements & <span className="text-gradient">Certifications</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 {React.cloneElement(item.icon, { size: 100 })}
              </div>
              
              <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
              
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] font-bold uppercase tracking-widest">
                <CheckCircle2 size={14} /> Verified Achievement
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
