"use client";

import React from 'react';

interface SocialProofProps {
  className?: string;
}

const SocialProof: React.FC<SocialProofProps> = ({ className = '' }) => {
  const partnerLogos = [
    {
      id: 1,
      name: 'Partner 1',
      logo: 'https://placehold.co/150x60/F3F4F5/6F757C?text=Partner+Logo'
    },
    {
      id: 2,
      name: 'Partner 2',
      logo: 'https://placehold.co/150x60/F3F4F5/6F757C?text=Partner+Logo'
    },
    {
      id: 3,
      name: 'Partner 3',
      logo: 'https://placehold.co/150x60/F3F4F5/6F757C?text=Partner+Logo'
    },
    {
      id: 4,
      name: 'Partner 4',
      logo: 'https://placehold.co/150x60/F3F4F5/6F757C?text=Partner+Logo'
    },
    {
      id: 5,
      name: 'Partner 5',
      logo: 'https://placehold.co/150x60/F3F4F5/6F757C?text=Partner+Logo'
    },
  ];

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Testimonial */}
        <div className="text-center mb-16 sm:mb-20">
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed mb-6">
              {/* cspell:disable-next-line */}
              &ldquo;Ploomba&apos;s technology has transformed our harvesting process. The autonomous wagon is reliable, and the data has saved us thousands.&rdquo;
            </p>
            <footer className="text-lg sm:text-xl text-muted-foreground">
              — John Farmer, XYZ Farms
            </footer>
          </blockquote>
        </div>

        {/* Partner Logos Section */}
        <div className="bg-muted rounded-lg p-8 sm:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
              Trusted By Our Partners
            </h2>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
            {partnerLogos.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
