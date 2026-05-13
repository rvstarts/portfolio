import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layers, Wrench, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-primary" />,
      skills: ["Java", "JavaScript", "HTML", "CSS", "C"]
    },
    {
      title: "Frameworks",
      icon: <Layers className="text-secondary" />,
      skills: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate (JPA)", "ReactJS", "Bootstrap"]
    },
    {
      title: "Databases",
      icon: <Database className="text-primary" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-secondary" />,
      skills: ["Docker", "Git", "GitHub", "Maven", "VS Code", "Postman"]
    },
    {
      title: "Concepts",
      icon: <Lightbulb className="text-primary" />,
      skills: ["REST API Design", "JWT Authentication", "Agile Methodology", "Unit Testing", "Web Architecture"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm uppercase tracking-widest mb-4"
          >
            My Stack
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Technical <span className="text-gradient">Proficiency</span>
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass p-8 rounded-3xl group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
