import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ClientMarquee from "@/components/ClientMarquee";
import FeaturedStores from "@/components/FeaturedStores";
import Testimonials from "@/components/Testimonials";
import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <ClientMarquee />
        <FeaturedStores />
        <Testimonials />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
}
