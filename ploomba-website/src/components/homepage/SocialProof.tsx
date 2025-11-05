"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface SocialProofProps {
  className?: string;
}

const SocialProof: React.FC<SocialProofProps> = ({ className = '' }) => {
  const partnerLogos = [
    {
      id: 1,
      name: 'Université Concordia',
      logo: '/Université_Concordia_(logo).svg'
    },
  ];

  return (
    <section className={`py-16 sm:py-24 bg-muted text-center ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Testimonial Block */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          {/* Quote Icon */}
          <Quote className="h-12 w-12 mx-auto text-primary" />
          
          {/* Quote */}
          <blockquote className="mt-6 max-w-3xl mx-auto text-2xl font-medium text-foreground md:text-3xl">
            {/* cspell:disable-next-line */}
            &ldquo;Ploomba represents the future of agricultural innovation. Their commitment to developing cutting-edge autonomous solutions aligns perfectly with our vision for sustainable farming practices and technological advancement.&rdquo;
          </blockquote>
          
          {/* Attribution */}
          <figcaption className="mt-6 text-base text-muted-foreground">
            — Dr. Mourad Debbabi, Associate Dean, Université Concordia
          </figcaption>
        </motion.figure>

        {/* Partner Logos */}
        <div className="mt-16">
          {/* Title */}
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted By Our Partners
          </h3>
          
          {/* Logo Grid */}
          <div className="mt-8 flex justify-center">
            {partnerLogos.map((partner) => (
              <div key={partner.id} className="flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={200}
                  height={80}
                  className="h-20 w-auto filter grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;