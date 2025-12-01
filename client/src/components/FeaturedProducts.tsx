import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Sparkles, Check, Star, Zap } from "lucide-react";
import type { Product } from "@shared/schema";

export default function FeaturedProducts() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

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

  const featuredProducts = products?.filter((p) => p.isFeatured) || [];

  if (isLoading) {
    return (
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <Skeleton className="aspect-[4/3] rounded-2xl bg-card" />
            <Skeleton className="aspect-[4/3] rounded-2xl bg-card" />
          </div>
        </div>
      </section>
    );
  }

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
      data-testid="section-featured-products"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            الأكثر طلباً
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            منتجات مميزة
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من أفضل باقاتنا وابدأ رحلة نجاحك الرقمي
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative rounded-2xl bg-card border border-primary/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover-elevate ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`featured-product-${product.id}`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent md:bg-gradient-to-l" />
                  
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-bold shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    مميز
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col">
                  <Badge 
                    variant="secondary" 
                    className="w-fit mb-3 bg-primary/10 text-primary border-0"
                  >
                    {product.category}
                  </Badge>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground mb-5 flex-1 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features preview */}
                  {product.features && product.features.length > 0 && (
                    <ul className="mb-5 space-y-2">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <div>
                      <span className="text-sm text-muted-foreground">يبدأ من</span>
                      <div className="text-2xl font-bold text-primary">
                        {product.price} <span className="text-sm">{product.currency}</span>
                      </div>
                    </div>
                    <Link href={`/product/${product.id}`}>
                      <Button className="btn-glow">
                        اطلب الآن
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          <Link href="/store">
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              تصفح جميع المنتجات
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
