import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Index() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-gray-900 font-sans">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
