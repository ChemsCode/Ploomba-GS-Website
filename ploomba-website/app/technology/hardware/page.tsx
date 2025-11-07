"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, Shield, Cpu } from 'lucide-react';
import HardwareFeatures from '../../../src/components/technology/HardwareFeatures';
import TechSpecs from '../../../src/components/technology/TechSpecs';
import CallToAction from '../../../src/components/CallToAction';

export default function HardwarePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const innovations = [
    {
      icon: Wrench,
      title: "Smart Implements",
      description: "Precision tools that adapt to your field conditions in real-time"
    },
    {
      icon: Zap,
      title: "Advanced Sensors",
      description: "Next-generation monitoring systems for comprehensive farm data"
    },
    {
      icon: Shield,
      title: "Field Protection",
      description: "Automated systems to protect crops from pests and weather"
    }
  ];

  return (
    <main>
      {/* Enhanced Hero Section */}
      <section className="relative bg-linear-to-b from-muted/50 via-background to-background pt-28 pb-12 overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Autonomous Systems</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">Ploomba </span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              Hardware
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Cutting-edge autonomous technology designed to revolutionize your farm operations
          </motion.p>
        </div>
      </section>

      {/* Hardware Features Section */}
      <HardwareFeatures />

      {/* Technical Specifications Section */}
      <TechSpecs />

      {/* Innovation Pipeline Section */}
      <section className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Coming Soon</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Innovation
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60"> Pipeline</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are constantly innovating. New tools for your farm are in development.
            </p>
          </motion.div>

          {/* Coming Soon Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card border-2 border-border rounded-3xl p-8 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-2xl overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300"
                  >
                    <innovation.icon className="w-10 h-10 text-primary" strokeWidth={2} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {innovation.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {innovation.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </main>
  );
}
