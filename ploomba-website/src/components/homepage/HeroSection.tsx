"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section className={`relative h-screen w-full overflow-hidden ${className}`}>
      {/* Background Video - All devices */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/ploomba_in_field_2.png"
          className="absolute left-0 top-0 z-0 h-full w-full object-cover brightness-90 contrast-110 saturate-110"
        >
          {/* --- 1. WebM (Primary) --- */}
          <source src="/ploomba_hero.webm" type="video/webm" />
          
          {/* --- 2. MP4 (Fallback) --- */}
          <source src="/ploomba_hero.mp4" type="video/mp4" />
          
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Gradient Overlay - Clean and Cinematic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white p-8">
        {/* Animated Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Smarter Farming.{' '}
            <span className="block">Stronger Yields.</span>
          </h1>

          {/* Sub-heading */}
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            {/* cspell:disable-next-line */}
            Ploomba&apos;s autonomous robots and AI-driven analytics help you reduce soil compaction and optimize your harvest.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
            {/* Primary CTA */}
            <Link href="/contact" className="bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 rounded-md font-semibold transition-colors">
              Contact Us
            </Link>

            {/* Secondary CTA */}
            <Link href="/technology" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md font-semibold transition-colors">
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 z-20"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} className="text-white/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
