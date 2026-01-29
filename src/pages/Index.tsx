import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AbadaOptions from "@/components/AbadaOptions";
import Benefits from "@/components/Benefits";
import ProductDetails from "@/components/ProductDetails";
import AbadaTypes from "@/components/AbadaTypes";
import Promotions from "@/components/Promotions";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import MoreProducts from "@/components/MoreProducts";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AbadaOptions />
      <Benefits />
      <ProductDetails />
      <AbadaTypes />
      <Promotions />
      <WhatsAppCTA />
      <MoreProducts />
      <HowItWorks />
      <FAQ />
      <Partners />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
