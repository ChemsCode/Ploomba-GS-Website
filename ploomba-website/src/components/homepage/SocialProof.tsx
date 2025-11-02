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
      name: 'Partner 1',
      logo: '/Ploomba_Logo_Without_Text.svg'
    },
    {
      id: 2,
      name: 'Partner 2',
      logo: '/Ploomba_Logo_Without_Text.svg'
    },
    {
      id: 3,
      name: 'Partner 3',
      logo: '/Ploomba_Logo_Without_Text.svg'
    },
    {
      id: 4,
      name: 'Partner 4',
      logo: '/Ploomba_Logo_Without_Text.svg'
    },
    {
      id: 5,
      name: 'Partner 5',
      logo: '/Ploomba_Logo_Without_Text.svg'
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
            &ldquo;Ploomba&apos;s technology has transformed our harvesting process. The autonomous wagon is reliable, and the data has saved us thousands.&rdquo;
          </blockquote>
          
          {/* Attribution */}
          <figcaption className="mt-6 text-base text-muted-foreground">
            — John Farmer, XYZ Farms
          </figcaption>
        </motion.figure>

        {/* Partner Logos */}
        <div className="mt-16">
          {/* Title */}
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted By Our Partners
          </h3>
          
          {/* Logo Grid */}
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {partnerLogos.map((partner) => (
              <div key={partner.id} className="col-span-1 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16 filter grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
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