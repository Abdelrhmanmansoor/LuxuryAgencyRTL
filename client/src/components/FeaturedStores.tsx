import { useEffect, useRef, useState } from "react";
import { Store, ExternalLink } from "lucide-react";
import type { FeaturedStore } from "@shared/schema";

const featuredStores: FeaturedStore[] = [
  {
    id: 1,
    name: "متجر عطور فاخر",
    category: "عطور ومستحضرات",
    description: "متجر متكامل للعطور الفاخرة مع تجربة تسوق استثنائية وعرض ثلاثي الأبعاد للمنتجات",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
  },
  {
    id: 2,
    name: "متجر قهوة مختصة",
    category: "أغذية ومشروبات",
    description: "متجر متخصص في القهوة الفاخرة مع نظام اشتراكات وتوصيل دوري",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  },
  {
    id: 3,
    name: "متجر ديكور منزلي",
    category: "ديكور ومفروشات",
    description: "متجر للديكور الفاخر مع خاصية AR لعرض المنتجات في منزلك",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    id: 4,
    name: "متجر أزياء راقية",
    category: "أزياء وموضة",
    description: "متجر أزياء فاخر مع نظام تجربة افتراضية للملابس",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
  {
    id: 5,
    name: "متجر إلكترونيات",
    category: "إلكترونيات وتقنية",
    description: "متجر للأجهزة الإلكترونية الحديثة مع مقارنات تفصيلية",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&q=80",
  },
  {
    id: 6,
    name: "متجر مجوهرات",
    category: "مجوهرات وإكسسوارات",
    description: "متجر مجوهرات فاخر مع عرض 360 درجة للقطع النادرة",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
  },
];

export default function FeaturedStores() {
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
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative overflow-hidden"
      data-testid="section-featured-stores"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary gold-text-glow">متاجر جاهزة</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            نماذج من المتاجر الفاخرة التي نقدمها لعملائنا
          </p>
        </div>

        {/* Stores Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredStores.map((store, index) => (
            <div
              key={store.id}
              className={`group relative rounded-2xl overflow-hidden bg-background border-2 border-primary/20 transition-all duration-500 hover:border-primary/50 card-3d ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`featured-store-${store.id}`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Category badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-3">
                  <Store className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium text-primary">{store.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {store.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {store.description}
                </p>

                {/* Link */}
                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span>عرض المتجر</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/30 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
