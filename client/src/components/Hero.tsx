import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import founderImage from "@assets/Group-1000004454-1_1764570612464.png";

export default function Hero() {
  return (
    <section
      className="relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden bg-background"
      data-testid="section-hero"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-foreground/80">
                شريكك في النجاح الرقمي
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">نساعد المتاجر الإلكترونية</span>
              <br />
              <span className="text-primary">على تحقيق النمو</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-0">
              نقدم خدمات متكاملة في تصميم المتاجر، الموشن جرافيك، التسويق الرقمي، والبرمجة المخصصة لنساعدك على تحقيق أهدافك
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-black font-bold px-8 h-14 text-lg btn-glow"
                  data-testid="button-hero-cta"
                >
                  ابدأ مشروعك الآن
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link href="/#portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 h-14 text-lg"
                  data-testid="button-hero-portfolio"
                >
                  <Play className="w-5 h-5 ml-2" />
                  شاهد أعمالنا
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 space-x-reverse">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-bold text-black">👤</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  +500 عميل سعيد
                </span>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">5.0 تقييم</span>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
            </div>
            
            {/* Founder Image */}
            <div className="relative z-10">
              <img
                src={founderImage}
                alt="مؤسس سُليمان"
                className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px] h-auto object-contain"
                data-testid="img-founder"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
