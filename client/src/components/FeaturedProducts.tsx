import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Users, Sparkles, Check, Star } from "lucide-react";
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
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <Skeleton className="flex-1 aspect-video rounded-2xl" />
            <Skeleton className="flex-1 aspect-video rounded-2xl" />
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
      className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
      data-testid="section-featured-products"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0 px-4 py-1.5">
            <Sparkles className="w-4 h-4 ml-1" />
            الأكثر طلباً
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            منتجات مميزة
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من أفضل باقاتنا وابدأ رحلة نجاحك الرقمي
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <Card
              key={product.id}
              className={`group relative bg-white border-border overflow-hidden card-hover ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`featured-product-${product.id}`}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Featured badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-white text-sm font-medium shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      مميز
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col">
                    <Badge 
                      variant="secondary" 
                      className="w-fit mb-3 bg-primary/5 text-primary border-0"
                    >
                      {product.category}
                    </Badge>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-muted-foreground mb-4 flex-1">
                      {product.description}
                    </p>

                    {/* Features preview */}
                    {product.features && product.features.length > 0 && (
                      <ul className="mb-5 space-y-2">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Price and CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary">
                          {product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground">{product.currency}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{product.purchaseCount}+ طلب</span>
                        </div>
                      </div>
                    </div>

                    <Link href={`/product/${product.id}`} className="mt-5">
                      <Button className="w-full group/btn" size="lg">
                        اطلب الآن
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          <Link href="/store">
            <Button variant="outline" size="lg" className="gap-2">
              عرض جميع الباقات
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
