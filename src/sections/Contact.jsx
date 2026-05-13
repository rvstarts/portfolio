import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare, User, AtSign } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Message sent! (Simulation)");
  };

  const contactInfo = [
    { icon: <Mail className="text-primary" />, label: "Email", value: "vikash14singh1421@gmail.com", href: "mailto:vikash14singh1421@gmail.com" },
    { icon: <Linkedin className="text-secondary" />, label: "LinkedIn", value: "linkedin.com/in/vikash-kumar-singh", href: "https://linkedin.com/in/vikash-kumar-singh" },
    { icon: <Github className="text-primary" />, label: "GitHub", value: "github.com/rvstarts", href: "https://github.com/rvstarts" },
    { icon: <MapPin className="text-secondary" />, label: "Location", value: "Ghaziabad, India", href: "#" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-mono text-sm uppercase tracking-widest mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Let's Build Something <span className="text-gradient">Together</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-4 glass rounded-3xl group"
                >
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-semibold text-slate-200">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1 flex items-center gap-2">
                  <User size={14} /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1 flex items-center gap-2">
                  <AtSign size={14} /> Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1 flex items-center gap-2">
                  <MessageSquare size={14} /> Your Message
                </label>
                <textarea
                  required
                  rows="5"
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg">
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
