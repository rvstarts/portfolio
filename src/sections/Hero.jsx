import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = React.useState('');
  const fullText = "Full-Stack Developer | Spring Boot & ReactJS Developer";
  
  React.useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono mb-4 text-lg"
          >
            Hi, my name is
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="text-5xl md:text-7xl font-extrabold mb-4"
          >
            VIKASH KUMAR <span className="text-gradient">SINGH</span>
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-slate-400 font-bold mb-6 min-h-[1.5em]"
          >
            {text}<span className="text-primary animate-pulse">|</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed"
          >
            Building scalable AI-powered web applications with modern backend architecture and intuitive frontend experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
            <a 
              href="https://drive.google.com/file/d/11prR9UG0GS2zpJONv6vqTmqwRi46ZbwU/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors px-6 py-3 font-semibold group"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" /> Download Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-6"
          >
            <span className="text-slate-500 font-mono text-sm uppercase tracking-widest">Connect with me:</span>
            <div className="flex gap-4">
              <a href="https://github.com/rvstarts" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-slate-400 hover:text-primary hover:scale-110 transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/vikash-kumar-singh" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-slate-400 hover:text-primary hover:scale-110 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vikash14singh1421@gmail.com" className="p-2 glass rounded-lg text-slate-400 hover:text-primary hover:scale-110 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-3xl border border-white/10 relative overflow-hidden flex items-center justify-center group">
               <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
               <div className="text-8xl font-black text-white/5 select-none animate-pulse">VKS</div>
               {/* Replace with actual image later if needed */}
               <div className="absolute inset-4 rounded-2xl border border-white/5 flex items-center justify-center bg-slate-900/50">
                  <div className="text-primary/40 text-center px-6">
                    <div className="text-sm font-mono mb-2">&lt;Developer /&gt;</div>
                    <div className="text-xs text-slate-500">Focused on performance & scalability</div>
                  </div>
               </div>
            </div>
            {/* Floating cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 glass rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Status</div>
                  <div className="text-sm font-bold">Open to Work</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 p-4 glass rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold text-xs">
                  CSE
                </div>
                <div>
                  <div className="text-xs text-slate-400">Education</div>
                  <div className="text-sm font-bold">B.Tech @ ABES</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
