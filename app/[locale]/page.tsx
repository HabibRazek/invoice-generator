import EstimateSection from "@/components/Landing/EstimateSection";
import HeroSection from "@/components/Landing/HeroSection";
import Footer from "@/components/Nav/Footer";
import Navbar from "@/components/Nav/Navbar";
import {unstable_setRequestLocale} from 'next-intl/server';


type Props = {
  params: {locale: string};
};


export default function Home({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);


  return (
    <div>
      <Navbar />
      <HeroSection />
      <EstimateSection
        imageSrc="/features-clients.svg"
      />
      <Footer />
    </div>
  );
}
