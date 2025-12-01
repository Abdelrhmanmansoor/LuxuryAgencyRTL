import { useEffect, useRef, useState } from "react";
import { 
  Palette, 
  ShoppingBag, 
  Code2, 
  Rocket, 
  Share2, 
  Target, 
  Camera, 
  RefreshCcw,
  ArrowLeft
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "تصميم هوية بصرية كاملة",
    description: "نصمم هوية متكاملة تعكس رؤيتك وتميزك في السوق بشكل احترافي وفاخر",
    icon: Palette,
  },
  {
    id: 2,
    title: "تطوير وتصميم متاجر سلة",
    description: "نبني متجرك الإلكتروني على منصة سلة بتصميم فريد وتجربة مستخدم سلسة",
    icon: ShoppingBag,
  },
  {
    id: 3,
    title: "تصميم مواقع مخصصة",
    description: "UI/UX + Frontend + Backend - مواقع احترافية مبنية بأحدث التقنيات",
    icon: Code2,
  },
  {
    id: 4,
    title: "صفحات هبوط عالية التحويل",
    description: "صفحات هبوط مصممة لتحقيق أعلى معدلات التحويل وجذب العملاء",
    icon: Rocket,
  },
  {
    id: 5,
    title: "إدارة حسابات السوشيال ميديا",
    description: "إدارة احترافية لحساباتك مع محتوى إبداعي يبني علاقة قوية مع جمهورك",
    icon: Share2,
  },
  {
    id: 6,
    title: "الحملات الإعلانية",
    description: "حملات مدروسة على Google / Meta / TikTok لتحقيق أفضل عائد استثماري",
    icon: Target,
  },
  {
    id: 7,
    title: "تصوير المنتجات التجاري",
    description: "تصوير احترافي لمنتجاتك يبرز جودتها ويجذب العملاء للشراء",
    icon: Camera,
  },
  {
    id: 8,
    title: "إعادة بناء العلامة التجارية",
    description: "Brand Refresh - نجدد علامتك التجارية لتواكب التطور وتحافظ على قوتها",
    icon: RefreshCcw,
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      data-testid="section-services"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary gold-text-glow">خدماتنا</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدّم حلولًا متكاملة لصناعة هوية فاخرة تميزك في السوق
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative p-6 rounded-2xl glass-panel-dark border border-primary/10 transition-all duration-500 hover:border-primary/30 card-3d ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
                data-testid={`service-card-${service.id}`}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gold-glow-sm" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Link */}
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    اعرف المزيد
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 left-0 w-24 h-24 overflow-hidden opacity-20">
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-primary/20 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
