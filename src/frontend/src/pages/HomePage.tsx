import { useEffect } from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import FeaturedServices from '@/components/home/FeaturedServices';
import ServiceLocationsGrid from '@/components/home/ServiceLocationsGrid';
import OurTeamSection from '@/components/home/OurTeamSection';
import EcoFriendlySection from '@/components/home/EcoFriendlySection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Pest Control Star Solutions - Leading Pest Management in Mumbai & Pune';
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSlider />
      <FeaturedServices />
      <ServiceLocationsGrid />
      <OurTeamSection />
      <EcoFriendlySection />
      <WhyChooseUsSection />
    </div>
  );
}
