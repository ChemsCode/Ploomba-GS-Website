// app/blog/[slug]/page.tsx
'use client';

import { allPosts, ContentBlock } from '../../../src/data/mock-posts';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PostCard from '../../../src/components/blog/PostCard';
import { Quote } from 'lucide-react';

// Helper function to animate variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeInOut" },
};

// Component to render individual content blocks
function ContentBlockRenderer({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="text-lg leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      );
    
    case 'heading':
      if (block.level === 2) {
        return (
          <h2
            key={index}
            className="mt-12 text-2xl md:text-3xl font-bold tracking-tight text-foreground"
          >
            {block.text}
          </h2>
        );
      } else {
        return (
          <h3
            key={index}
            className="mt-12 text-xl md:text-2xl font-bold tracking-tight text-foreground"
          >
            {block.text}
          </h3>
        );
      }
    
    case 'image':
      return (
        <div key={index} className="my-8 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <Image
            src={block.src}
            alt={block.alt}
            fill
            className="object-cover"
          />
        </div>
      );
    
    case 'quote':
      return (
        <blockquote
          key={index}
          className="my-10 p-6 bg-card rounded-lg shadow-md border-l-4 border-primary"
        >
          <div className="flex gap-3">
            <Quote className="h-6 w-6 text-primary shrink-0 mt-1" />
            <div>
              <p className="text-lg font-medium text-foreground leading-relaxed">
                {block.text}
              </p>
              {block.author && (
                <p className="mt-3 text-sm text-muted-foreground">
                  — {block.author}
                </p>
              )}
            </div>
          </div>
        </blockquote>
      );
    
    default:
      return null;
  }
}

export default function PostPage() {
  // 1. Get the slug from params
  const params = useParams();
  const slug = params?.slug as string;

  // 2. Get the post data
  const post = allPosts.find((p) => p.slug === slug);

  // 3. Handle not found
  if (!post) {
    notFound();
  }

  // 4. Get related posts (posts that are not the current one)
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // 5. Render the new, structured layout
  return (
    <main className="pt-28">
      {/* --- Article Header --- */}
      <motion.header
        className="max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-base font-semibold uppercase text-primary">
          {post.tag}
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          By {post.author} • {post.date} • 6 min read
        </p>
      </motion.header>

      {/* --- Featured Image --- */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="relative w-full max-w-5xl mx-auto h-64 md:h-96 px-4">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* --- Article Body --- */}
      <motion.article
        className="max-w-2xl mx-auto px-4 py-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="space-y-6">
          {/* Render all content blocks dynamically */}
          {post.content.map((block, index) => (
            <ContentBlockRenderer key={index} block={block} index={index} />
          ))}
        </div>
      </motion.article>

      {/* --- Related Posts Section --- */}
      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
