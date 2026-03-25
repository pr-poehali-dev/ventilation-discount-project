import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ClientsSection from '@/components/sections/ClientsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Index() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-gray-900 font-sans">
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ReviewsSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}