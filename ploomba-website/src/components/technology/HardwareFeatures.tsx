'use client';

import { motion } from 'framer-motion';
import { Truck, Scan, Shield, SprayCan, Bot, Sparkles } from 'lucide-react';
import Image from 'next/image';

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
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/ploomba_in_field_1.png"
                alt="Autonomous Wagon"
                width={800}
                height={600}
                className="w-full"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
            />
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Key Features</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Autonomous </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                Wagon
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Customizable, intelligent, and built for the field. Our
              autonomous assistant reduces soil compaction and analyzes fields
              as it passes.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group flex items-start gap-4"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                    <span className="text-lg pt-2.5 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.text}
                    </span>
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

