"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users2 } from 'lucide-react';

interface TeamShowcaseProps {
  className?: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamShowcase: React.FC<TeamShowcaseProps> = ({ className = '' }) => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Andrew Kappert",
      role: "Co-Founder",
      bio: "Visionary leader with 15+ years in agricultural technology, passionate about sustainable farming solutions and innovation.",
      image: "/andrew_kappert.jpg"
    },
    {
      id: 2,
      name: "Caleb Kaufmann",
      role: "Co-Founder",
      bio: "Robotics expert specializing in autonomous systems, bringing cutting-edge AI and engineering expertise to agricultural automation.",
      image: "/caleb_kaufmann.jpg"
    },
    {
      id: 3,
      name: "Nicolas Fortin",
      role: "Co-Founder",
      bio: "Product strategist with deep roots in agriculture, dedicated to creating farmer-first technology that solves real-world challenges.",
      image: "/nicolas_fortin.jpg"
    }
  ];

  return (
    <section className={`py-20 sm:py-32 bg-background relative overflow-hidden ${className}`}>
      {/* Background decoration */}
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
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meet Our
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60"> Team</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate innovators dedicated to revolutionizing agricultural technology
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative rounded-3xl border-2 border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-primary/0 group-hover:to-primary/10 transition-all duration-500 z-10" />
                
                {/* Team Member Image */}
                <div className="relative h-80 w-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient overlay at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-20 p-6 bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <p className="text-primary font-semibold text-sm">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Decorative element */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="mt-4 h-1 w-16 bg-linear-to-r from-primary to-transparent rounded-full origin-left group-hover:w-24 transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
