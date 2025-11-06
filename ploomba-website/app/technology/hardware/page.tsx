"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, Shield } from 'lucide-react';
import HardwareFeatures from '../../../src/components/technology/HardwareFeatures';
import TechSpecs from '../../../src/components/technology/TechSpecs';
import CallToAction from '../../../src/components/CallToAction';

export default function HardwarePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-muted pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center py-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ploomba Hardware
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge autonomous technology designed to revolutionize your farm operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hardware Features Section */}
      <HardwareFeatures />

      {/* Technical Specifications Section */}
      <TechSpecs />

      {/* Innovation Pipeline Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Innovation Pipeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are constantly innovating. New tools for your farm are in development.
            </p>
          </motion.div>

          {/* Coming Soon Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Implements</h3>
              <p className="text-muted-foreground">
                Precision tools that adapt to your field conditions in real-time
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Sensors</h3>
              <p className="text-muted-foreground">
                Next-generation monitoring systems for comprehensive farm data
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border rounded-lg p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Field Protection</h3>
              <p className="text-muted-foreground">
                Automated systems to protect crops from pests and weather
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </main>
  );
}

