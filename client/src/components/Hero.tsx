import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Star } from "lucide-react";

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
                وكالة إبداع رقمية
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-foreground">نساعد المتاجر</span>
              <br />
              <span className="text-primary">
                على تحقيق النمو
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              متخصصون في تصميم الهويات البصرية، برمجة المواقع، بناء المتاجر،
              إدارة السوشيال ميديا، وإطلاق علامتك التجارية بأعلى معايير الجودة والاحترافية
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
                  ابدأ مشروعك
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
                  استعرض أعمالنا
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 space-x-reverse">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-xs text-primary font-bold">{i}</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+500 عميل سعيد</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <span className="text-sm text-muted-foreground mr-1">4.9 تقييم</span>
              </div>
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
                {/* Soft shadow behind */}
                <div className="absolute inset-4 bg-primary/10 blur-3xl rounded-3xl" />
                
                {/* Main device mockup */}
                <div className="relative bg-white rounded-3xl p-4 border border-border shadow-2xl">
                  {/* Phone screen */}
                  <div className="bg-muted/30 rounded-2xl overflow-hidden aspect-[9/16]">
                    {/* Status bar */}
                    <div className="h-6 bg-white flex items-center justify-between px-4">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <div className="w-1 h-1 bg-primary/60 rounded-full" />
                        <div className="w-1 h-1 bg-primary/30 rounded-full" />
                      </div>
                      <div className="w-12 h-1.5 bg-foreground/10 rounded-full" />
                    </div>
                    
                    {/* Content preview */}
                    <div className="p-4 space-y-4">
                      <div className="w-20 h-6 bg-primary/20 rounded-lg" />
                      <div className="space-y-2">
                        <div className="w-full h-3 bg-border rounded" />
                        <div className="w-4/5 h-3 bg-border rounded" />
                        <div className="w-3/5 h-3 bg-border rounded" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-4">
                        <div className="aspect-square bg-primary/10 rounded-xl border border-primary/10" />
                        <div className="aspect-square bg-primary/10 rounded-xl border border-primary/10" />
                        <div className="aspect-square bg-primary/10 rounded-xl border border-primary/10" />
                        <div className="aspect-square bg-primary/10 rounded-xl border border-primary/10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  className="absolute -top-4 -right-4 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg animate-float"
                  style={{ animationDelay: "0s" }}
                >
                  <Sparkles className="w-7 h-7 text-primary-foreground" />
                </div>
                <div
                  className="absolute -bottom-2 -left-6 px-4 py-2 bg-white rounded-xl border border-border shadow-lg animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">تقييم العملاء</p>
                      <p className="text-sm font-bold text-foreground">4.9/5</p>
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
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
