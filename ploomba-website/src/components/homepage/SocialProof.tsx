"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Star, Award } from 'lucide-react';

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
    <section className={`relative py-20 sm:py-32 overflow-hidden ${className}`}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-muted via-muted/50 to-muted" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-8 sm:p-12 shadow-2xl">
            {/* Quote Icon with animated background */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2 
              }}
              className="absolute -top-6 left-1/2 -translate-x-1/2"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent rounded-full blur-xl"
                />
                <div className="relative w-16 h-16 rounded-full bg-linear-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                  <Quote className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
            
            {/* Star Rating */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-center gap-1 mb-6 mt-4"
            >
              {[...Array(5)].map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <Star className="w-5 h-5 fill-primary text-primary" />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Quote Text */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8"
            >
              &ldquo;Ploomba represents the future of agricultural innovation. Their commitment 
              to developing cutting-edge autonomous solutions aligns perfectly with our vision 
              for sustainable farming practices and technological advancement.&rdquo;
            </motion.blockquote>
            
            {/* Attribution */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground">Dr. Mourad Debbabi</div>
                  <div className="text-sm text-muted-foreground">Associate Dean, Université Concordia</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative gradient */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Partner Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            Trusted By Our Partners
          </h3>
          
          {/* Logo Grid */}
          <div className="flex justify-center">
            {partnerLogos.map((partner, idx) => (
              <motion.div 
                key={partner.id} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center justify-center p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card hover:border-primary/30 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={200}
                  height={80}
                  className="h-20 w-auto filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
