import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnquiryForm from "@/components/EnquiryForm";
import LocationSection from "@/components/LocationSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <EnquiryForm />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
