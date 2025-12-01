import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function CTAStrip() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      data-testid="section-cta"
    >
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating sparkles */}
      <div className="absolute top-8 right-1/4 animate-float" style={{ animationDelay: "0s" }}>
        <Sparkles className="w-8 h-8 text-white/30" />
      </div>
      <div className="absolute bottom-8 left-1/4 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-6 h-6 text-white/20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
            جاهز للتواصل معنا؟
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            إذا كنت واحد من هؤلاء، دعنا نحول رؤيتك إلى واقع رقمي يليق بطموحاتك
          </p>

          {/* CTA Button */}
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-10 text-lg font-bold bg-white text-primary hover:bg-white/90 shadow-2xl"
              data-testid="button-cta-strip"
            >
              ابدأ الآن
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
