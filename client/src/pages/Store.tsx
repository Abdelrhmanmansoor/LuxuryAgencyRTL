import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Minus, ShoppingCart, CreditCard } from "lucide-react";
import type { Product } from "@shared/schema";
import PayPalButton from "@/components/PayPalButton";

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [showPayPal, setShowPayPal] = useState<{ product: Product; quantity: number } | null>(null);

  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const updateQuantity = (productId: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta),
    }));
  };

  const getQuantity = (productId: number) => quantities[productId] || 1;

  const handleBuyNow = (product: Product) => {
    const quantity = getQuantity(product.id);
    setShowPayPal({ product, quantity });
  };

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
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              المتجر
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              باقات الخدمات
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              اختر الباقة المناسبة لمشروعك وابدأ الآن
            </p>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {[...Array(8)].map((_, i) => (
                <Card key={i} className="bg-white border-border">
                  <CardContent className="p-4">
                    <Skeleton className="aspect-video rounded-xl mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {products?.map((product, index) => (
                <Card
                  key={product.id}
                  className="group bg-white border-border hover:shadow-xl transition-all duration-300 animate-fade-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  data-testid={`product-card-${product.id}`}
                >
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div 
                      className="aspect-video bg-gradient-to-br from-primary/10 via-primary/5 to-muted relative overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <ShoppingCart className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      
                      {/* Category badge */}
                      <Badge 
                        variant="secondary" 
                        className="absolute top-3 right-3 bg-primary/10 text-primary border-0"
                      >
                        {product.category}
                      </Badge>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 md:p-5">
                      <h3 
                        className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors cursor-pointer"
                        onClick={() => setSelectedProduct(product)}
                      >
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {product.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-primary">
                          {product.price}
                          <span className="text-sm font-normal text-muted-foreground mr-1">
                            {product.currency}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm text-muted-foreground">الكمية:</span>
                        <div className="flex items-center gap-2 bg-muted/50 rounded-lg border border-border p-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(product.id, -1)}
                            data-testid={`button-decrease-${product.id}`}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-medium" data-testid={`quantity-${product.id}`}>
                            {getQuantity(product.id)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(product.id, 1)}
                            data-testid={`button-increase-${product.id}`}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Buy Button */}
                      <Button
                        className="w-full"
                        onClick={() => handleBuyNow(product)}
                        data-testid={`button-buy-${product.id}`}
                      >
                        <CreditCard className="w-4 h-4 ml-2" />
                        اشترِ الآن
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl bg-white border-border">
          {selectedProduct && (
            <>
              <DialogHeader>
                <Badge variant="secondary" className="w-fit mb-2 bg-primary/10 text-primary border-0">
                  {selectedProduct.category}
                </Badge>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  تفاصيل المنتج {selectedProduct.name}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">
                    {selectedProduct.price}
                  </span>
                  <span className="text-lg text-muted-foreground">
                    {selectedProduct.currency}
                  </span>
                </div>

                {/* Quantity and Buy */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-muted/50 rounded-lg border border-border p-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10"
                      onClick={() => updateQuantity(selectedProduct.id, -1)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-10 text-center font-medium text-lg">
                      {getQuantity(selectedProduct.id)}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10"
                      onClick={() => updateQuantity(selectedProduct.id, 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  <Button
                    size="lg"
                    className="flex-1"
                    onClick={() => {
                      handleBuyNow(selectedProduct);
                      setSelectedProduct(null);
                    }}
                  >
                    <CreditCard className="w-5 h-5 ml-2" />
                    اشترِ الآن - {selectedProduct.price * getQuantity(selectedProduct.id)} {selectedProduct.currency}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* PayPal Checkout Modal */}
      <Dialog open={!!showPayPal} onOpenChange={() => setShowPayPal(null)}>
        <DialogContent className="max-w-md bg-white border-border">
          {showPayPal && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-foreground">
                  إتمام عملية الشراء
                </DialogTitle>
                <DialogDescription className="sr-only">
                  نموذج الدفع عبر PayPal
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Order Summary */}
                <div className="p-4 rounded-xl bg-muted/30 border border-border">
                  <h4 className="font-medium text-foreground mb-3">ملخص الطلب</h4>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">{showPayPal.product.name}</span>
                    <span className="text-foreground">x{showPayPal.quantity}</span>
                  </div>
                  <div className="border-t border-border pt-2 mt-2 flex justify-between">
                    <span className="font-medium">الإجمالي</span>
                    <span className="font-bold text-primary">
                      {showPayPal.product.price * showPayPal.quantity} {showPayPal.product.currency}
                    </span>
                  </div>
                </div>

                {/* PayPal Button */}
                <div className="flex flex-col items-center gap-4">
                  <p className="text-sm text-muted-foreground text-center">
                    اضغط على الزر أدناه للدفع عبر PayPal
                  </p>
                  <PayPalButton
                    amount={String(showPayPal.product.price * showPayPal.quantity)}
                    currency={showPayPal.product.currency}
                    intent="CAPTURE"
                  />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
