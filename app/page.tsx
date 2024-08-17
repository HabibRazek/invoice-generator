import EstimateSection from "@/components/Landing/EstimateSection";
import HeroSection from "@/components/Landing/HeroSection";
import Footer from "@/components/Nav/Footer";
import Navbar from "@/components/Nav/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <EstimateSection
        title="Invoice"
        description="Send professional invoices to your clients and instantly track payments."
        additionalText="Simple yet sophisticated invoicing software made for small businesses and freelancers. Your client profiles are at your fingertips with Invoice Maker."
        imageSrc="/features-clients.svg"
      />
      <Footer />
    </div>
  );
}
