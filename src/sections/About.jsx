import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layout, Brain, Cpu, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Server className="text-primary" />, title: 'Spring Boot Expert', desc: 'Crafting robust and scalable backend systems with modern architecture.' },
    { icon: <Layout className="text-secondary" />, title: 'React Developer', desc: 'Building dynamic and responsive user interfaces with a focus on UX.' },
    { icon: <Brain className="text-primary" />, title: 'AI Integration', desc: 'Leveraging LLMs and AI APIs to create intelligent applications.' },
    { icon: <Zap className="text-secondary" />, title: 'Performance Optimization', desc: 'Optimizing backend latency and frontend load times for better UX.' },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-primary font-mono text-sm uppercase tracking-widest mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Passionate <span className="text-gradient">Full-Stack</span> Developer</h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a dedicated Full-Stack Developer currently pursuing my B.Tech in CSE with a specialization in AIML at ABES Engineering College. My expertise lies in building high-performance web applications using <span className="text-white font-semibold">Spring Boot</span> and <span className="text-white font-semibold">ReactJS</span>.
              </p>
              <p>
                With a strong foundation in <span className="text-white font-semibold">REST APIs, JWT Authentication, and AI Integration</span>, I focus on creating scalable backend systems that power intuitive frontend experiences. I thrive in Agile environments and enjoy tackling complex architectural challenges.
              </p>
              <p>
                My goal is to bridge the gap between intelligent backend logic and modern, fluid user interfaces. When I'm not coding, you'll find me exploring new technologies or optimizing my development workflow.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass p-4 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-1">8.62</div>
                <div className="text-sm text-slate-500 font-mono uppercase tracking-tight">Current CGPA</div>
              </div>
              <div className="glass p-4 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-slate-500 font-mono uppercase tracking-tight">Projects Built</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-3xl relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-4 p-3 bg-white/5 rounded-2xl w-fit">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
