import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThreeSteps from "@/components/ThreeSteps";
import Services from "@/components/Services";
import RightPlace from "@/components/RightPlace";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Header />
      <main>
        <Hero />
        <ThreeSteps />
        <Services />
        <RightPlace />
        <Stats />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
