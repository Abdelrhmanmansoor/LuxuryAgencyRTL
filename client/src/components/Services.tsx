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
  ArrowLeft,
  Sparkles
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "تصميم هوية بصرية",
    description: "نصمم هوية متكاملة تعكس رؤيتك وتميزك في السوق",
    icon: Palette,
    color: "primary",
  },
  {
    id: 2,
    title: "تطوير متاجر سلة",
    description: "نبني متجرك الإلكتروني على منصة سلة بتصميم فريد",
    icon: ShoppingBag,
    color: "secondary",
  },
  {
    id: 3,
    title: "تصميم مواقع مخصصة",
    description: "مواقع احترافية مبنية بأحدث التقنيات العالمية",
    icon: Code2,
    color: "accent",
  },
  {
    id: 4,
    title: "صفحات هبوط",
    description: "صفحات مصممة لتحقيق أعلى معدلات التحويل",
    icon: Rocket,
    color: "primary",
  },
  {
    id: 5,
    title: "السوشيال ميديا",
    description: "إدارة احترافية مع محتوى إبداعي يبني علاقة قوية",
    icon: Share2,
    color: "secondary",
  },
  {
    id: 6,
    title: "الحملات الإعلانية",
    description: "حملات مدروسة لتحقيق أفضل عائد استثماري",
    icon: Target,
    color: "accent",
  },
  {
    id: 7,
    title: "تصوير المنتجات",
    description: "تصوير احترافي يبرز جودة منتجاتك ويجذب العملاء",
    icon: Camera,
    color: "primary",
  },
  {
    id: 8,
    title: "إعادة بناء البراند",
    description: "نجدد علامتك التجارية لتواكب التطور والمنافسة",
    icon: RefreshCcw,
    color: "secondary",
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string; gradient: string } } = {
      primary: {
        bg: "bg-primary/10",
        border: "border-primary/30 hover:border-primary/60",
        text: "text-primary",
        gradient: "from-primary/20 to-primary/5",
      },
      secondary: {
        bg: "bg-secondary/10",
        border: "border-secondary/30 hover:border-secondary/60",
        text: "text-secondary",
        gradient: "from-secondary/20 to-secondary/5",
      },
      accent: {
        bg: "bg-accent/10",
        border: "border-accent/30 hover:border-accent/60",
        text: "text-accent",
        gradient: "from-accent/20 to-accent/5",
      },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card/30 relative overflow-hidden"
      data-testid="section-services"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            خدماتنا المتكاملة
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            كل ما تحتاجه في مكان واحد
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدّم حلولاً متكاملة لصناعة علامة تجارية ناجحة ومميزة تنافس في السوق
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            const isHovered = hoveredId === service.id;
            
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative p-6 rounded-2xl bg-card border ${colors.border} transition-all duration-500 hover:shadow-2xl hover-elevate cursor-pointer ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
                data-testid={`service-card-${service.id}`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0`}>
                    اعرف المزيد
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
