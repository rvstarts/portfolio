import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#home" className="text-2xl font-bold text-gradient mb-2">
            VIKASH
          </a>
          <p className="text-slate-500 text-sm">
            Full-Stack Developer focused on scalable AI solutions.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="https://github.com/rvstarts" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/vikash-kumar-singh" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vikash14singh1421@gmail.com" className="text-slate-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-slate-600 text-xs flex items-center gap-1.5 font-mono uppercase tracking-widest">
            Designed & Built by <span className="text-slate-400 font-bold">Vikash Kumar Singh</span> 
          </p>
        </div>

        <div className="text-slate-600 text-sm font-mono">
          © {currentYear} • All rights reserved
        </div>
      </div>
      
      <div className="mt-8 text-center text-[10px] text-slate-800 uppercase tracking-[0.5em] select-none">
        Crafted with Passion & Precision
      </div>
    </footer>
  );
};

export default Footer;
