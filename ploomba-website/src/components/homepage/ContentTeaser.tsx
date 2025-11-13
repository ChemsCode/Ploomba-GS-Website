"use client";

import React from 'react';
import PostCard from '../blog/PostCard';
import { allPosts } from '../../data/mock-posts';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Newspaper } from 'lucide-react';

interface ContentTeaserProps {
  className?: string;
}

const ContentTeaser: React.FC<ContentTeaserProps> = ({ className = '' }) => {
  const latestPosts = allPosts.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    }
  };

  return (
    <section className={`relative py-20 sm:py-32 overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />
      
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Latest News &amp;
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              Industry Insights
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground">
            Stay updated with the latest developments in agricultural technology and farming innovation.
          </p>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {latestPosts.map((post) => (
            <motion.div 
              key={post.slug} 
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              className="h-full"
              whileHover={{ y: -10 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 bg-card border-2 border-primary/30 text-foreground px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>View All Posts</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentTeaser;
