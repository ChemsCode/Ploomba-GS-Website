"use client";

import React from 'react';

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

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Latest News &amp; Insights
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Post Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-8">
                {/* Tag */}
                <p className="text-sm font-medium text-primary mb-3">
                  {post.tag}
                </p>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <button
                  onClick={() => handleReadMore(post.slug)}
                  className="text-primary hover:text-primary-hover font-medium transition-colors duration-200 hover:underline"
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentTeaser;
