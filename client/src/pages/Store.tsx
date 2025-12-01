import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Users, Sparkles, ShoppingBag } from "lucide-react";
import type { Product } from "@shared/schema";

export default function Store() {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  if (error) {
    return (
      <div className="min-h-screen bg-background" data-testid="page-store">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-destructive">حدث خطأ في تحميل المنتجات</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" data-testid="page-store">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0 px-4 py-1.5">
              <ShoppingBag className="w-4 h-4 ml-1" />
              المتجر
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              باقات الخدمات
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              اختر الباقة المناسبة لمشروعك وابدأ الآن
            </p>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {[...Array(8)].map((_, i) => (
                <Card key={i} className="bg-card border-primary/20 overflow-hidden">
                  <Skeleton className="aspect-[4/3]" />
                  <div className="p-5">
                    <Skeleton className="h-5 w-24 mb-3" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <Skeleton className="h-8 w-1/3 mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {products?.map((product, index) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <Card
                    className="group bg-card border-primary/20 card-hover cursor-pointer overflow-hidden h-full hover-elevate"
                    style={{ animationDelay: `${index * 0.05}s` }}
                    data-testid={`product-card-${product.id}`}
                  >
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Product Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Category badge */}
                        <Badge 
                          variant="secondary" 
                          className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm text-foreground border-primary/30 shadow-sm"
                        >
                          {product.category}
                        </Badge>

                        {/* Featured badge */}
                        {product.isFeatured && (
                          <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-white text-xs font-medium shadow-sm">
                            <Sparkles className="w-3 h-3" />
                            مميز
                          </div>
                        )}

                        {/* Purchase counter */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground border border-primary/20 shadow-sm">
                          <Users className="w-3.5 h-3.5 text-primary" />
                          <span>تم شراؤه {product.purchaseCount} مرة</span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                          {product.description}
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-2xl font-bold text-primary">
                            {product.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {product.currency}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        {/* CTA Button */}
                        <Button className="w-full group/btn" data-testid={`button-view-${product.id}`}>
                          عرض التفاصيل
                          <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
