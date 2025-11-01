"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MissionVision from '../../src/components/about/MissionVision';
import FoundingStory from '../../src/components/about/FoundingStory';
import TeamShowcase from '../../src/components/about/TeamShowcase';

export default function AboutPage() {
  return (
    <main>
      {/* Header Section */}
      <section className="bg-muted pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-center py-16"
          >
            About Ploomba
          </motion.h1>
        </div>
      </section>

      {/* Content Sections */}
      <MissionVision />
      <FoundingStory />
      <TeamShowcase />
    </main>
  );
}

