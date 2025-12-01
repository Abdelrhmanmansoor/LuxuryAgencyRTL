import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import GoldParticles from "./GoldParticles";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card pt-20"
      data-testid="section-hero"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
          }}
        />
      </div>

      {/* Gold particles */}
      <GoldParticles />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content - Right side in RTL */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                وكالة إبداع رقمية
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-foreground">سليمان — </span>
              <span className="text-primary gold-text-glow">
                نُطلق هويتك
              </span>
              <br />
              <span className="text-foreground">
                بأعلى معايير الفخامة
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              متخصصة في تصميم الهويات البصرية، برمجة المواقع، بناء المتاجر،
              إدارة السوشيال، وإطلاق براند كامل بنفس الجودة التي تتوقعها من
              وكالة عالمية.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold gold-glow animate-pulse-glow"
                  data-testid="button-hero-cta"
                >
                  ابدأ مشروعك
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link href="/#portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold border-primary/30 hover:border-primary/60 hover:bg-primary/5"
                  data-testid="button-hero-portfolio"
                >
                  استعرض أعمالنا
                </Button>
              </Link>
            </div>
          </div>

          {/* Floating Mockup - Left side in RTL */}
          <div
            className="order-1 lg:order-2 flex justify-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              {/* Mockup container */}
              <div className="relative w-72 md:w-80 lg:w-96">
                {/* Glow effect behind */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl" />
                
                {/* Main device mockup */}
                <div className="relative bg-gradient-to-br from-card via-card to-background rounded-3xl p-4 border border-primary/20 shadow-2xl gold-glow">
                  {/* Phone screen */}
                  <div className="bg-background rounded-2xl overflow-hidden aspect-[9/16]">
                    {/* Status bar */}
                    <div className="h-6 bg-card flex items-center justify-between px-4">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <div className="w-1 h-1 bg-primary/60 rounded-full" />
                        <div className="w-1 h-1 bg-primary/30 rounded-full" />
                      </div>
                      <div className="w-12 h-1.5 bg-card-foreground/20 rounded-full" />
                    </div>
                    
                    {/* Content preview */}
                    <div className="p-4 space-y-4">
                      <div className="w-20 h-6 bg-primary/20 rounded-lg" />
                      <div className="space-y-2">
                        <div className="w-full h-3 bg-muted rounded" />
                        <div className="w-4/5 h-3 bg-muted rounded" />
                        <div className="w-3/5 h-3 bg-muted rounded" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-4">
                        <div className="aspect-square bg-primary/10 rounded-xl border border-primary/20" />
                        <div className="aspect-square bg-primary/10 rounded-xl border border-primary/20" />
                        <div className="aspect-square bg-primary/10 rounded-xl border border-primary/20" />
                        <div className="aspect-square bg-primary/10 rounded-xl border border-primary/20" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg gold-glow-sm animate-float"
                  style={{ animationDelay: "0s" }}
                >
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <div
                  className="absolute -bottom-2 -left-6 px-4 py-2 bg-card rounded-xl border border-primary/20 shadow-lg animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm">⭐</span>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">تقييم العملاء</p>
                      <p className="text-sm font-bold text-primary">4.9/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
