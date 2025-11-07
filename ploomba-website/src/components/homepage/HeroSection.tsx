"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  // Words to cycle through
  const words = ["Yields.", "Insights.", "Harvests.", "Data."];
  const [index, setIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-based parallax
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  // Timer effect to cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section 
      ref={heroRef}
      className={`relative h-screen w-full overflow-hidden ${className}`}
    >
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: y1 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/ploomba_in_field_2.png"
          className="absolute left-0 top-0 h-[120%] w-full object-cover brightness-[0.65] contrast-110 saturate-110"
        >
          <source src="/ploomba_hero.webm" type="video/webm" />
          <source src="/ploomba_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Elegant gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/50 to-background/95 z-10" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10" />

      {/* Main Content */}
      <motion.div 
        className="relative z-30 flex h-full flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        <div className="max-w-6xl w-full space-y-10 sm:space-y-12">
          {/* Main Heading with Spectacular Animations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.1]">
              <motion.span 
                className="block text-foreground mb-2 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Smarter Farming.
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="text-foreground">Stronger </span>
                <span className="relative inline-block min-w-[280px] sm:min-w-[380px] md:min-w-[500px] text-left">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block bg-clip-text text-transparent bg-linear-to-r from-primary via-primary to-primary/80"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.span>
            </h1>
          </motion.div>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Autonomous robots and AI-driven analytics revolutionizing agriculture
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center pt-4"
          >
            {/* Primary CTA */}
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg sm:text-xl overflow-hidden shadow-2xl cursor-pointer"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-linear-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Content */}
                <span className="relative z-10 flex items-center gap-3">
                  Get Started
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.span>
                </span>
              </motion.div>
            </Link>

            {/* Secondary CTA */}
            <Link href="/technology/software">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-background/30 backdrop-blur-md border-2 border-foreground/20 text-foreground rounded-full font-bold text-lg sm:text-xl hover:bg-background/50 hover:border-foreground/40 transition-all duration-300 shadow-xl cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Learn More
                </span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Minimal feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-8 text-foreground/60"
          >
            {[
              '300kg Capacity',
              '24/7 Monitoring', 
              'AI-Powered'
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + idx * 0.1 }}
                className="text-sm sm:text-base font-medium tracking-wide"
              >
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Minimalist Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-foreground/50 rounded-full"
            />
          </div>
          <span className="text-xs text-foreground/40 tracking-wider uppercase">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
