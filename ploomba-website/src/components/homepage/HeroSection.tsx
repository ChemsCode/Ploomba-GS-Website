"use client";

import React from 'react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section className={`relative h-screen overflow-hidden ${className}`}>
      {/* Background Video - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Fallback Background Image - Visible on mobile */}
      <div 
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://placehold.co/600x800/2B3036/FFFFFF?text=Ploomba+Robot)'
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Smarter Farming.{' '}
            <span className="block">Stronger Yields.</span>
          </h1>

          {/* Sub-heading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            {/* cspell:disable-next-line */}
            Ploomba&apos;s autonomous robots and AI-driven analytics help you reduce soil compaction and optimize your harvest.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* Primary CTA */}
            <button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Request a Demo
            </button>

            {/* Secondary CTA */}
            <button className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 border border-border hover:border-border/80">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
