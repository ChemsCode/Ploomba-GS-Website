"use client";

import React from 'react';
import PostCard from '../blog/PostCard';
import { allPosts } from '../../data/mock-posts';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ContentTeaserProps {
  className?: string;
}

const ContentTeaser: React.FC<ContentTeaserProps> = ({ className = '' }) => {
  const latestPosts = allPosts.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className={`py-16 sm:py-24 bg-background ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Latest News &amp; Insights
        </h2>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {latestPosts.map((post) => (
            <motion.div key={post.slug} variants={cardVariants} className="h-full">
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-block bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md font-semibold transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentTeaser;
