"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Brain, Target } from 'lucide-react';

interface MissionVisionProps {
  className?: string;
}

const MissionVision: React.FC<MissionVisionProps> = ({ className = '' }) => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Reducing soil compaction and environmental impact through innovative autonomous solutions that protect farmland for future generations."
    },
    {
      icon: Users,
      title: "Farmer-First",
      description: "Designing technology that empowers farmers with practical tools, actionable insights, and solutions that address real-world agricultural challenges."
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Leveraging cutting-edge AI and robotics to transform agricultural practices and optimize farming operations for maximum efficiency."
    }
  ];

  return (
    <section className={`py-20 sm:py-32 bg-background relative overflow-hidden ${className}`}>
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Specializing in Agricultural Technology Development
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ploomba is a new company specializing in agricultural technology development. 
              We are currently seeking partners to continue the development of our robotic 
              cart and our agricultural management and analysis software.
            </p>
            
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 w-32 bg-linear-to-r from-primary to-transparent rounded-full origin-left"
            />
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                  
                  <div className="relative z-10 flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                        <value.icon className="h-6 w-6 text-primary" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
