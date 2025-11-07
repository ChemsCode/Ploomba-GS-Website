'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    tag: string;
    excerpt: string;
    imageUrl: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <motion.div 
      className="h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full overflow-hidden rounded-3xl border-2 border-border bg-card transition-all duration-300 hover:shadow-2xl hover:border-primary/50"
      >
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </motion.div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Tag Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm border border-primary">
              <p className="text-xs font-bold uppercase text-primary-foreground tracking-wide">
                {post.tag}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col justify-between p-6 bg-card">
          {/* Hover gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary leading-tight mb-3">
              {post.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>
          
          <div className="relative z-10 mt-6 flex items-center font-bold text-primary">
            <span>Read More</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-4 w-4 ml-2" />
            </motion.div>
          </div>
          
          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 origin-left"
          />
        </div>
      </Link>
    </motion.div>
  );
}
