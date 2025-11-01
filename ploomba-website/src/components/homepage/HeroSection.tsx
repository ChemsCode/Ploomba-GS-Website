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
      {/* Background Video - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        <video
          className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Fallback Background Image - Visible on mobile */}
      <div 
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://placehold.co/600x800/2B3036/FFFFFF?text=Ploomba+Robot)'
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

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
              Request a Demo
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
