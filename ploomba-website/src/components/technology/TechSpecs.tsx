'use client';

import { motion } from 'framer-motion';

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
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Technical Specifications
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-x-auto rounded-lg border border-border max-w-4xl mx-auto"
        >
          <table className="w-full text-left">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-4 font-semibold text-lg">
                  Specification
                </th>
                <th className="px-6 py-4 font-semibold text-lg">Value</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index} className="even:bg-muted/50 border-t border-border">
                  <td className="px-6 py-4 font-medium">{spec.specification}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

