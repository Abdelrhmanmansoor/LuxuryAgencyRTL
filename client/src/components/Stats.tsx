import { useEffect, useRef, useState } from "react";
import { Store, Award, Briefcase, Star, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "+150",
    label: "متجر متكامل",
    description: "متاجر إلكترونية احترافية",
    icon: Store,
    color: "primary",
  },
  {
    id: 2,
    value: "+90",
    label: "علامة تجارية",
    description: "هوية بصرية متكاملة",
    icon: Award,
    color: "secondary",
  },
  {
    id: 3,
    value: "+320",
    label: "مشروع منفّذ",
    description: "بجودة استثنائية",
    icon: Briefcase,
    color: "accent",
  },
  {
    id: 4,
    value: "4.9",
    label: "تقييم من 5",
    description: "رضا عملائنا",
    icon: Star,
    color: "primary",
  },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string; glow: string } } = {
      primary: {
        bg: "bg-primary/10",
        border: "border-primary/30",
        text: "text-primary",
        glow: "group-hover:shadow-primary/20",
      },
      secondary: {
        bg: "bg-secondary/10",
        border: "border-secondary/30",
        text: "text-secondary",
        glow: "group-hover:shadow-secondary/20",
      },
      accent: {
        bg: "bg-accent/10",
        border: "border-accent/30",
        text: "text-accent",
        glow: "group-hover:shadow-accent/20",
      },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
      data-testid="section-stats"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            إنجازاتنا بالأرقام
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            أرقام تتحدث عن نفسها
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نفخر بثقة عملائنا ونسعى دائماً لتقديم أفضل النتائج
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = getColorClasses(stat.color);
            
            return (
              <div
                key={stat.id}
                className={`group relative p-6 md:p-8 rounded-2xl bg-card border ${colors.border} transition-all duration-500 hover:shadow-2xl ${colors.glow} hover-elevate ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`stat-card-${stat.id}`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
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
