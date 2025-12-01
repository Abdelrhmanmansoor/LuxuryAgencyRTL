import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Sparkles, Star, Zap, TrendingUp, Award, Users } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 50;
        const y = (e.clientY - rect.top - rect.height / 2) / 50;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
      data-testid="section-hero"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[100px]"
          style={{
            transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(265 85% 65%) 1px, transparent 1px), linear-gradient(90deg, hsl(265 85% 65%) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-32 right-20 animate-float hidden lg:block" style={{ animationDelay: "0s" }}>
        <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
          <Star className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
        <div className="w-14 h-14 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
          <Zap className="w-6 h-6 text-secondary" />
        </div>
      </div>
      <div className="absolute top-1/2 right-10 animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
        <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              الوكالة الرقمية الأولى في الخليج
            </span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">نحوّل أفكارك إلى</span>
            <br />
            <span className="gradient-text">
              تجارب رقمية استثنائية
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            نصمم ونبني علامات تجارية فاخرة، متاجر إلكترونية احترافية، 
            وحملات تسويقية تحقق نتائج استثنائية
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-bold btn-glow"
                data-testid="button-hero-cta"
              >
                ابدأ مشروعك الآن
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link href="/#portfolio">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-10 text-lg font-semibold border-primary/30 hover:bg-primary/10"
                data-testid="button-hero-portfolio"
              >
                <Play className="w-5 h-5 ml-2" />
                شاهد أعمالنا
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="p-6 rounded-2xl bg-card/50 border border-primary/20 backdrop-blur-sm hover-elevate">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">+500</div>
              <div className="text-sm text-muted-foreground">عميل سعيد</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/50 border border-secondary/20 backdrop-blur-sm hover-elevate">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">300%</div>
              <div className="text-sm text-muted-foreground">متوسط النمو</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/50 border border-accent/20 backdrop-blur-sm hover-elevate">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">+50</div>
              <div className="text-sm text-muted-foreground">جائزة</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/50 border border-primary/20 backdrop-blur-sm hover-elevate">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">4.9</div>
              <div className="text-sm text-muted-foreground">تقييم العملاء</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
