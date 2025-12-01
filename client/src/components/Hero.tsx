import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, TrendingUp, Users, Award } from "lucide-react";

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
      {/* Subtle background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]"
          style={{
            transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-muted/50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content - Right side in RTL */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                وكالة تسويق رقمي خليجية
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-foreground">نمي مشروعك</span>
              <br />
              <span className="text-primary">
                مع أفضل الحلول الرقمية
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              وكالة تسويق رقمي سعودية متخصصة في بناء العلامات التجارية الفاخرة والحلول الرقمية المبتكرة
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
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
                  className="h-14 px-8 text-lg font-semibold"
                  data-testid="button-hero-portfolio"
                >
                  شاهد محفظتنا
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground font-semibold">+500 عميل سعيد</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground font-semibold">نمو 300%</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground font-semibold">+50 جائزة</span>
              </div>
            </div>
          </div>

          {/* Stats Section - Left side in RTL */}
          <div
            className="order-1 lg:order-2 flex justify-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-border">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">خدماتنا</h3>
                    <p className="text-sm text-muted-foreground">متكاملة وشاملة</p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border/50">
                    <span className="text-sm text-muted-foreground">تصميم الهويات</span>
                    <span className="text-lg font-bold text-primary">50+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border/50">
                    <span className="text-sm text-muted-foreground">المتاجر المطورة</span>
                    <span className="text-lg font-bold text-primary">120+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border/50">
                    <span className="text-sm text-muted-foreground">حملات إعلانية</span>
                    <span className="text-lg font-bold text-primary">200+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border/50">
                    <span className="text-sm text-muted-foreground">العملاء النشطين</span>
                    <span className="text-lg font-bold text-primary">500+</span>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-3 py-1.5 bg-primary rounded-full text-white text-xs font-bold shadow-lg">
                  الأفضل في الخليج
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
