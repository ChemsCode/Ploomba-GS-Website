'use client';

import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

export default function TechSpecs() {
  const specs = [
    { specification: 'Load Capacity', value: '300 kg' },
    { specification: 'Drivetrain', value: 'Fully Electric, Autonomous' },
    { specification: 'Connectivity', value: '4G LTE, Wi-Fi, GPS' },
    { specification: 'Sensors', value: 'LiDAR, HD Cameras, GPS' },
    { specification: 'Battery Life', value: '8-10 hours (Typical)' },
    { specification: 'Software', value: 'Agro App, Analysis Platform, AI Tool' },
  ];

  return (
    <section className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Technical Details</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Technical </span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              Specifications
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-3xl border-2 border-border max-w-4xl mx-auto shadow-2xl bg-card"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="bg-muted/50 border-b-2 border-border">
                <th className="px-6 py-5 font-bold text-lg text-foreground">
                  Specification
                </th>
                <th className="px-6 py-5 font-bold text-lg text-foreground">Value</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="border-t border-border hover:bg-muted/30 transition-colors duration-200"
                >
                  <td className="px-6 py-5 font-semibold text-foreground">{spec.specification}</td>
                  <td className="px-6 py-5 text-muted-foreground">
                    {spec.value}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
