'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Modernize Your Farm?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Request a demo to see the Ploomba platform in action and get a
            custom quote.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Request a Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

