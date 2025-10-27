"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  image: string;
  tag: string;
  title: string;
  excerpt: string;
  slug: string;
}

interface ContentTeaserProps {
  className?: string;
}

const ContentTeaser: React.FC<ContentTeaserProps> = ({ className = '' }) => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: 'https://placehold.co/400x250/2B3036/FFFFFF?text=Blog+Post',
      tag: 'Technology',
      title: 'Our New AI Model Detects Pests 20% Faster',
      excerpt: 'A short, two-line excerpt of the article goes here...',
      slug: 'ai-model-pest-detection'
    },
    {
      id: 2,
      image: 'https://placehold.co/400x250/2B3036/FFFFFF?text=Blog+Post',
      tag: 'Innovation',
      title: 'Autonomous Farming: The Future is Here',
      excerpt: 'Discover how autonomous technology is revolutionizing modern agriculture and increasing efficiency.',
      slug: 'autonomous-farming-future'
    },
    {
      id: 3,
      image: 'https://placehold.co/400x250/2B3036/FFFFFF?text=Blog+Post',
      tag: 'Case Study',
      title: 'XYZ Farms Increases Yield by 35% with Ploomba',
      excerpt: 'Learn how one farm transformed their operations and achieved remarkable results using our technology.',
      slug: 'xyz-farms-case-study'
    },
  ];

  const handleReadMore = (slug: string) => {
    // TODO: Implement navigation to blog post
    console.log(`Navigate to blog post: ${slug}`);
  };

  const handleViewAll = () => {
    // TODO: Implement navigation to blog listing
    console.log('Navigate to all posts');
  };

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
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg"
            >
              {/* Post Image */}
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />

              {/* Content Block */}
              <div className="flex flex-1 flex-col justify-between p-6">
                {/* Tag */}
                <p className="text-xs font-medium uppercase text-primary">
                  {post.tag}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-base text-muted-foreground">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div 
                  onClick={() => handleReadMore(post.slug)}
                  className="mt-4 font-semibold text-primary transition-all group-hover:pl-1 cursor-pointer"
                >
                  Read More &rarr;
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button
            onClick={handleViewAll}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md font-semibold transition-colors"
          >
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentTeaser;
