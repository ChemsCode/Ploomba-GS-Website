"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className={`py-16 sm:py-24 bg-background ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Meet Our Team
        </h2>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50"
            >
              {/* Team Member Image */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamShowcase;

