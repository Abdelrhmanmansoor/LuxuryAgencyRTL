import { useEffect, useRef, useState } from "react";
import { Store, ExternalLink, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { FeaturedStore } from "@shared/schema";

const featuredStores: FeaturedStore[] = [
  {
    id: 1,
    name: "متجر عطور فاخر",
    category: "عطور ومستحضرات",
    description: "متجر متكامل للعطور الفاخرة مع تجربة تسوق استثنائية",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
  },
  {
    id: 2,
    name: "متجر قهوة مختصة",
    category: "أغذية ومشروبات",
    description: "متجر متخصص في القهوة الفاخرة مع نظام اشتراكات",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  },
  {
    id: 3,
    name: "متجر ديكور منزلي",
    category: "ديكور ومفروشات",
    description: "متجر للديكور الفاخر مع خاصية AR لعرض المنتجات",
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
      className="py-20 md:py-32 bg-card/30 relative overflow-hidden"
      data-testid="section-featured-stores"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
            <ShoppingBag className="w-4 h-4" />
            متاجرنا
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            متاجر جاهزة للإطلاق
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            نماذج من المتاجر الاحترافية التي نقدمها لعملائنا
          </p>
        </div>

        {/* Stores Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredStores.map((store, index) => (
            <div
              key={store.id}
              className={`group relative rounded-2xl overflow-hidden bg-card border border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover-elevate ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`featured-store-${store.id}`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* View button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/30">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category badge */}
                <Badge variant="secondary" className="mb-3 bg-secondary/10 text-secondary border-0">
                  <Store className="w-3 h-3 ml-1" />
                  {store.category}
                </Badge>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {store.name}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {store.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
