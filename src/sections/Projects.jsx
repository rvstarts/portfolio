import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Cpu, Mail as MailIcon } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CivicSphere",
      subtitle: "AI-Enhanced Reporting Platform",
      tech: ["Spring Boot", "PostgreSQL", "Google Gemini API", "JWT"],
      features: [
        "AI-driven issue categorization & automated priority assignment",
        "Real-time issue tracking & live mapping for active users",
        "Role-based Super Admin, Department, and Operator dashboards",
        "JWT-secured REST APIs for secure data exchange"
      ],
      icon: <Shield className="text-primary" />,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Smart Complaint System",
      subtitle: "Management & Routing System",
      tech: ["Spring Boot", "ReactJS", "MySQL", "JWT"],
      features: [
        "JWT-secured REST APIs for complaint processing & routing",
        "Real-time notifications & optimized database performance",
        "25% reduction in query response time via schema optimization",
        "Boosted departmental efficiency by 30%"
      ],
      icon: <Cpu className="text-secondary" />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "AI Email Reply Generator",
      subtitle: "Chrome Extension + Backend",
      tech: ["Spring Boot", "JavaScript", "Google Gemini API"],
      features: [
        "Chrome Extension & Spring Boot backend for AI reply generation",
        "NLP-powered responses via Google Gemini API integration",
        "RESTful endpoints with JWT authentication & Unit Testing",
        "Achieved 40% reduction in backend & frontend latency"
      ],
      icon: <MailIcon className="text-primary" />,
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-mono text-sm uppercase tracking-widest mb-4"
            >
              Portfolio
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-sm"
          >
            A showcase of my recent work in full-stack development, AI integration, and scalable system design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group border border-white/5 hover:border-primary/20 transition-all duration-500"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-50" />
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 z-10"
                >
                  {React.cloneElement(project.icon, { size: 40 })}
                </motion.div>
                
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center z-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-2">
                    {project.tech.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-1 bg-black/40 rounded-full font-mono text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-sm text-slate-500 font-medium mb-6 uppercase tracking-wider">{project.subtitle}</p>
                
                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <button className="text-xs font-bold text-primary flex items-center gap-1 group/btn">
                    LEARN MORE <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
