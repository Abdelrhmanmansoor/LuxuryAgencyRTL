import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Sparkles, Star, TrendingUp, Award, Users } from "lucide-react";

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
      className="relative py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-background"
      data-testid="section-hero"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[80px]"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-accent/6 rounded-full blur-[60px]"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
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
    </section>
  );
}
