"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import MissionVision from '../../src/components/about/MissionVision';
import FoundingStory from '../../src/components/about/FoundingStory';
import TeamShowcase from '../../src/components/about/TeamShowcase';
import { Sparkles } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Enhanced Header Section */}
      <section className="relative bg-linear-to-b from-muted/50 via-background to-background pt-36 pb-20 overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">About </span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              Ploomba
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering the future of agriculture through innovation, sustainability, and farmer-focused technology
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <MissionVision />
      <FoundingStory />
      <TeamShowcase />
    </main>
  );
}
