import { useEffect, useRef, useState } from "react";
import { Star, Award, Users, CheckCircle, TrendingUp, ShoppingBag, Building2, Briefcase, Crown, Globe } from "lucide-react";

const clients = [
  { id: 1, name: "متجر العطور الفاخرة", category: "تجارة إلكترونية", rating: 5 },
  { id: 2, name: "مجموعة الريادة التجارية", category: "شركة استثمارية", rating: 5 },
  { id: 3, name: "مكتب المحاماة السعودي", category: "خدمات قانونية", rating: 5 },
  { id: 4, name: "متجر ألماس للمجوهرات", category: "مجوهرات فاخرة", rating: 5 },
  { id: 5, name: "شركة النخبة للتطوير", category: "عقارات", rating: 5 },
  { id: 6, name: "منصة سوق الخليج", category: "ماركت بليس", rating: 5 },
  { id: 7, name: "مؤسسة الإبداع الرقمي", category: "تقنية", rating: 5 },
  { id: 8, name: "متجر البيت الأنيق", category: "ديكور ومفروشات", rating: 5 },
  { id: 9, name: "مجموعة الصفوة المالية", category: "خدمات مالية", rating: 5 },
  { id: 10, name: "متجر السيارات الفاخرة", category: "سيارات", rating: 5 },
  { id: 11, name: "مكتب العدالة للمحاماة", category: "محاماة", rating: 5 },
  { id: 12, name: "منصة التعلم الذكي", category: "تعليم", rating: 5 },
];

const stats = [
  { icon: Users, value: "+500", label: "عميل راضٍ" },
  { icon: ShoppingBag, value: "+200", label: "متجر إلكتروني" },
  { icon: TrendingUp, value: "300%", label: "متوسط النمو" },
  { icon: Award, value: "+50", label: "جائزة" },
];

const icons = [Building2, Crown, Globe, Briefcase, ShoppingBag, Star];

export default function ClientMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="py-16 md:py-24 bg-card/30 relative overflow-hidden"
      data-testid="section-clients"
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Crown className="w-4 h-4" />
            شركاؤنا في النجاح
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            يثق بنا أكثر من 500+ علامة تجارية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نفخر بخدمة أبرز العلامات التجارية في الخليج
          </p>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-4 rounded-xl bg-background/50 border border-primary/10">
                <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-card/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-card/30 to-transparent z-10 pointer-events-none" />

          {/* Marquee track */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {/* First set */}
              {clients.map((client, index) => {
                const IconComponent = icons[index % icons.length];
                return (
                  <div
                    key={client.id}
                    className="flex-shrink-0 mx-2 md:mx-3"
                    data-testid={`client-logo-${client.id}`}
                  >
                    <div className="group px-5 py-4 flex items-center gap-4 rounded-xl bg-background border border-primary/10 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-right">
                        <span className="block text-sm font-bold text-foreground whitespace-nowrap">
                          {client.name}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {client.category}
                        </span>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(client.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-accent fill-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Duplicate for seamless loop */}
              {clients.map((client, index) => {
                const IconComponent = icons[index % icons.length];
                return (
                  <div
                    key={`dup-${client.id}`}
                    className="flex-shrink-0 mx-2 md:mx-3"
                  >
                    <div className="group px-5 py-4 flex items-center gap-4 rounded-xl bg-background border border-primary/10 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-right">
                        <span className="block text-sm font-bold text-foreground whitespace-nowrap">
                          {client.name}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {client.category}
                        </span>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(client.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-accent fill-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust badge */}
        <div className={`mt-10 flex flex-wrap justify-center gap-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>معتمدون من سلة وزد</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>شركاء Shopify</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>دفع آمن 100%</span>
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  );
}
