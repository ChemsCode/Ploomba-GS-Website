'use client';

import { useEffect } from 'react';
import HardwareFeatures from '../../src/components/technology/HardwareFeatures';
import SoftwareFeatures from '../../src/components/technology/SoftwareFeatures';
import TechSpecs from '../../src/components/technology/TechSpecs';
import UseCases from '../../src/components/technology/UseCases';
import CallToAction from '../../src/components/CallToAction';
import { motion } from 'framer-motion';

export default function TechnologyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="bg-muted pt-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Ploomba Technology
        </motion.h1>
      </section>
      <HardwareFeatures />
      <SoftwareFeatures />
      <TechSpecs />
      <UseCases />
      <CallToAction />
    </main>
  );
}

