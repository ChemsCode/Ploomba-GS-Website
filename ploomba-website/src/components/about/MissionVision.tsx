"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Brain } from 'lucide-react';

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
    <section className={`py-16 sm:py-24 bg-background ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-primary font-semibold uppercase text-sm tracking-wider mb-4">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Specializing in Agricultural Technology Development
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ploomba is a new company specializing in agricultural technology development. 
              We are currently seeking partners to continue the development of our robotic 
              cart and our agricultural management and analysis software.
            </p>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <ul className="space-y-6">
              {values.map((value, index) => (
                <li key={index} className="flex gap-4">
                  <div className="shrink-0">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

