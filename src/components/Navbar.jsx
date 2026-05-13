import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gradient"
        >
          VIKASH
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-slate-300 hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-4 border-l border-white/10 pl-8"
          >
            <div className="flex gap-4">
              <a href="https://github.com/rvstarts" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-slate-400 hover:text-primary hover:scale-110 transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/vikash-kumar-singh" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-slate-400 hover:text-primary hover:scale-110 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-slate-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 pt-4">
                <a href="https://github.com/rvstarts" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><Github size={24} /></a>
                <a href="https://linkedin.com/in/vikash-kumar-singh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><Linkedin size={24} /></a>
                <a href="mailto:vikash14singh1421@gmail.com" className="text-slate-400 hover:text-white"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
