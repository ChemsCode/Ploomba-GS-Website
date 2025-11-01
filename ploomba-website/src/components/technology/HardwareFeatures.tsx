'use client';

import { motion } from 'framer-motion';
import { Truck, Scan, Shield, SprayCan, Bot } from 'lucide-react';

export default function HardwareFeatures() {
  const features = [
    {
      icon: Truck,
      text: 'Transports loads of up to 300 kg effortlessly',
    },
    {
      icon: Bot,
      text: 'Autonomous assistant for field work',
    },
    {
      icon: SprayCan,
      text: 'Precisely sprays phytosanitary products',
    },
    {
      icon: Scan,
      text: 'Analyzes the fields as it passes',
    },
    {
      icon: Shield,
      text: 'Reduces soil compaction',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://placehold.co/600x600/2B3036/FFFFFF?text=Autonomous+Wagon"
              alt="Autonomous Wagon"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Autonomous Wagon
            </h2>
            <p className="text-muted-foreground text-lg">
              Customizable, intelligent, and built for the field. Our
              autonomous assistant reduces soil compaction and analyzes fields
              as it passes.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg pt-2">{feature.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

