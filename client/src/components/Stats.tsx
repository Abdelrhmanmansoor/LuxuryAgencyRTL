import { useEffect, useRef, useState } from "react";
import { Store, Award, Briefcase, Star } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "+150",
    label: "متجر متكامل",
    icon: Store,
  },
  {
    id: 2,
    value: "+90",
    label: "علامة تجارية",
    icon: Award,
  },
  {
    id: 3,
    value: "+320",
    label: "مشروع منفّذ",
    icon: Briefcase,
  },
  {
    id: 4,
    value: "4.9",
    label: "تقييم من 5",
    icon: Star,
  },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      data-testid="section-stats"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`group relative p-6 md:p-8 rounded-2xl bg-muted/30 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`stat-card-${stat.id}`}
              >
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Value */}
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
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
