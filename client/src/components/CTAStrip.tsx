import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Zap, Star } from "lucide-react";

export default function CTAStrip() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      data-testid="section-cta"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating icons */}
      <div className="absolute top-10 right-1/4 animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white/60" />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/4 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <Zap className="w-5 h-5 text-white/60" />
        </div>
      </div>
      <div className="absolute top-1/2 left-10 animate-float hidden lg:flex" style={{ animationDelay: "2s" }}>
        <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <Star className="w-7 h-7 text-white/60" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <Star className="w-4 h-4" />
            جاهز للانطلاق؟
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            حوّل أفكارك إلى واقع رقمي
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            دعنا نساعدك في بناء علامة تجارية قوية ومتجر إلكتروني احترافي يحقق أهدافك
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Link href="/store">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg font-semibold border-white/30 text-white hover:bg-white/10"
              >
                تصفح خدماتنا
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
