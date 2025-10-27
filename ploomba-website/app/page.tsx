import HeroSection from '../src/components/homepage/HeroSection';
import ServicesOverview from '../src/components/homepage/ServicesOverview';
import SocialProof from '../src/components/homepage/SocialProof';
import ContentTeaser from '../src/components/homepage/ContentTeaser';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <SocialProof />
      <ContentTeaser />
    </main>
  );
}
