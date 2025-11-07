import HeroSection from '../src/components/homepage/HeroSection';
import ServicesOverview from '../src/components/homepage/ServicesOverview';
import StatsSection from '../src/components/homepage/StatsSection';
import FeaturesShowcase from '../src/components/homepage/FeaturesShowcase';
import SocialProof from '../src/components/homepage/SocialProof';
import ContentTeaser from '../src/components/homepage/ContentTeaser';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <FeaturesShowcase />
      <SocialProof />
      <ContentTeaser />
    </main>
  );
}
