"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface FoundingStoryProps {
  className?: string;
}

interface Milestone {
  id: number;
  date: string;
  title: string;
  description: string;
}

const FoundingStory: React.FC<FoundingStoryProps> = ({ className = '' }) => {
  const milestones: Milestone[] = [
    {
      id: 1,
      date: "2023",
      title: "The Concept",
      description: "The Ploomba concept was born from recognizing the critical need for sustainable agricultural solutions that reduce soil compaction while improving farm efficiency."
    },
    {
      id: 2,
      date: "2024",
      title: "Development Begins",
      description: "Our team began developing the autonomous wagon prototype and agricultural management software, focusing on creating practical solutions for modern farmers."
    },
    {
      id: 3,
      date: "2024",
      title: "Technology Integration",
      description: "Integration of AI-driven analytics and robotic systems, bringing together cutting-edge technology with real-world agricultural expertise."
    },
    {
      id: 4,
      date: "2025",
      title: "Seeking Partnerships",
      description: "Actively partnering with forward-thinking organizations to bring our agricultural technology solutions to farms worldwide."
    }
  ];

  return (
    <section className={`py-20 sm:py-32 bg-muted/30 relative overflow-hidden ${className}`}>
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Our Journey</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            From Idea to
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60"> Innovation</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Vertical Line with gradient */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-primary/50 via-primary/30 to-primary/50 origin-top hidden md:block"
          />

          {/* Animated traveling dot */}
          <motion.div
            animate={{
              y: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50 z-20 hidden md:block"
            style={{ top: 0 }}
          />

          {/* Mobile Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-4 w-0.5 h-full bg-linear-to-b from-primary/50 via-primary/30 to-primary/50 origin-top md:hidden"
          />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="relative"
              >
                {/* Desktop Layout - Alternating sides */}
                <div className={`hidden md:grid md:grid-cols-2 md:gap-12 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  {/* Content Card */}
                  <motion.div 
                    className={index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}
                    whileHover={{ scale: 1.02, x: index % 2 === 0 ? -5 : 5 }}
                  >
                    <div className="relative group rounded-2xl border-2 border-border bg-card backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                      
                      <div className="relative z-10">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary font-bold text-sm mb-4 ${index % 2 === 0 ? 'md:float-right' : ''}`}>
                          <Calendar className="w-4 h-4" />
                          {milestone.date}
                        </div>
                        <div className="clear-both">
                          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty column for spacing */}
                  <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} />
                </div>

                {/* Timeline Dot - Desktop with pulse */}
                <motion.div 
                  className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
                >
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-xl shadow-primary/30" />
                    {/* Pulse ring */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                      className="absolute inset-0 rounded-full bg-primary"
                    />
                  </div>
                </motion.div>

                {/* Mobile Layout */}
                <motion.div 
                  className="md:hidden pl-12"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="relative group rounded-2xl border-2 border-border bg-card backdrop-blur-sm p-6 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 text-primary font-bold text-sm mb-3">
                        <Calendar className="w-3 h-3" />
                        {milestone.date}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Dot - Mobile */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="md:hidden absolute left-4 top-6 -translate-x-1/2 z-20"
                >
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-muted shadow-lg" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingStory;
