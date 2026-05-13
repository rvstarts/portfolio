import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      <div className="relative w-24 h-24 mb-8">
        <motion.div 
          animate={{ 
            rotate: 360,
            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-full h-full border-4 border-primary border-t-transparent flex items-center justify-center"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-primary font-bold text-2xl"
        >
          V
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center gap-2"
      >
        <h2 className="text-xl font-bold tracking-[0.2em] text-white">VIKASH SINGH</h2>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
