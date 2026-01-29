import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import Promotions from "@/components/Promotions";
import HowItWorks from "@/components/HowItWorks";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Products />
      <Promotions />
      <HowItWorks />
      <WhatsAppCTA />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
