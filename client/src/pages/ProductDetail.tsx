import { useState } from "react";
import { useRoute, Link } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  Check,
  ShoppingCart,
  Users,
  ArrowRight,
  MessageCircle,
  Star,
  Sparkles,
} from "lucide-react";
import type { Product } from "@shared/schema";
import { z } from "zod";
import PayPalButton from "@/components/PayPalButton";

const orderFormSchema = z.object({
  whatsapp: z.string().min(10, "رقم الواتساب مطلوب"),
  hasStore: z.enum(["yes", "no"], { required_error: "يرجى اختيار إجابة" }),
  hasCommercialRegister: z.enum(["yes", "no"]).optional(),
  notes: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderFormSchema>;

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id;
  const { toast } = useToast();
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [showPayment, setShowPayment] = useState(false);

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["/api/products", productId],
    enabled: !!productId,
  });

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      whatsapp: "",
      hasStore: undefined,
      hasCommercialRegister: undefined,
      notes: "",
    },
  });

  const hasStore = form.watch("hasStore");

  const onSubmit = (data: OrderFormData) => {
    console.log("Order submitted:", { ...data, productId, selectedPackage });
    setShowPayment(true);
    toast({
      title: "تم استلام طلبك",
      description: "سنتواصل معك قريباً عبر الواتساب",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background" data-testid="page-product-loading">
        <Header />
        <main className="pt-24 md:pt-28 pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <Skeleton className="aspect-video rounded-2xl" />
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-12 w-1/3" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background" data-testid="page-product-error">
        <Header />
        <main className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">لم يتم العثور على المنتج</p>
            <Link href="/store">
              <Button variant="outline">
                <ArrowRight className="w-4 h-4 ml-2" />
                العودة للمتجر
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentPrice = selectedPackage
    ? product.packages?.find((p) => p.name === selectedPackage)?.price || product.price
    : product.price;

  return (
    <div className="min-h-screen bg-background" data-testid="page-product-detail">
      <Header />

      <main className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/store" className="hover:text-primary transition-colors">
              المتجر
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image & Info */}
            <div className="space-y-6">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden bg-muted/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-video object-cover"
                />
                {/* Purchase counter badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    تم شراؤه {product.purchaseCount} مرة
                  </span>
                </div>
                {product.isFeatured && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-white shadow-sm">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">مميز</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-0">
                  {product.category}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.fullDescription || product.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    {currentPrice.toLocaleString()}
                  </span>
                  <span className="text-lg text-muted-foreground">
                    {product.currency}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div className="space-y-3 p-4 rounded-xl bg-muted/30 border border-border">
                    <h3 className="font-semibold text-foreground">ماذا تشمل الباقة:</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Order Form */}
            <div>
              <Card className="bg-white border-border sticky top-28">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">اطلب الآن</h2>
                      <p className="text-sm text-muted-foreground">املأ البيانات للتواصل معك</p>
                    </div>
                  </div>

                  {/* Packages Selection */}
                  {product.packages && product.packages.length > 0 && (
                    <div className="mb-6">
                      <Label className="text-base font-semibold mb-3 block">
                        اختر الباقة المناسبة *
                      </Label>
                      <RadioGroup
                        value={selectedPackage}
                        onValueChange={setSelectedPackage}
                        className="space-y-3"
                      >
                        {product.packages.map((pkg) => (
                          <div
                            key={pkg.name}
                            className={`relative flex items-start gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                              selectedPackage === pkg.name
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/30"
                            }`}
                            onClick={() => setSelectedPackage(pkg.name)}
                          >
                            <RadioGroupItem value={pkg.name} id={pkg.name} className="mt-1" />
                            <div className="flex-1">
                              <Label htmlFor={pkg.name} className="text-base font-semibold cursor-pointer">
                                {pkg.name}
                              </Label>
                              <p className="text-sm text-muted-foreground mt-1">
                                {pkg.description}
                              </p>
                              <p className="text-lg font-bold text-primary mt-2">
                                {pkg.price.toLocaleString()} {product.currency}
                              </p>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      {/* WhatsApp */}
                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>رقم الواتساب *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="05xxxxxxxx"
                                className="bg-muted/30 border-border h-12"
                                data-testid="input-whatsapp"
                                {...field}
                              />
                            </FormControl>
                            <p className="text-xs text-muted-foreground">
                              رقم الواتساب للتواصل معك
                            </p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Has Store */}
                      <FormField
                        control={form.control}
                        name="hasStore"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>هل لديك متجر على سلة؟ *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="flex gap-4"
                              >
                                <div className="flex items-center gap-2">
                                  <RadioGroupItem value="yes" id="hasStore-yes" />
                                  <Label htmlFor="hasStore-yes">نعم</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <RadioGroupItem value="no" id="hasStore-no" />
                                  <Label htmlFor="hasStore-no">لا</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Commercial Register (conditional) */}
                      {hasStore === "no" && (
                        <FormField
                          control={form.control}
                          name="hasCommercialRegister"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>هل لديك سجل تجاري أو وثيقة عمل حر؟ *</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  value={field.value}
                                  className="flex gap-4"
                                >
                                  <div className="flex items-center gap-2">
                                    <RadioGroupItem value="yes" id="hasRegister-yes" />
                                    <Label htmlFor="hasRegister-yes">موجود</Label>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <RadioGroupItem value="no" id="hasRegister-no" />
                                    <Label htmlFor="hasRegister-no">غير موجود</Label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <p className="text-xs text-muted-foreground">
                                يلزم وجود سجل تجاري أو وثيقة عمل حر لإنشاء متجر على سلة
                              </p>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      {/* Notes */}
                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ملاحظات إضافية</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="أي ملاحظات أو متطلبات خاصة..."
                                className="bg-muted/30 border-border min-h-[100px] resize-none"
                                data-testid="input-notes"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 text-lg font-semibold"
                        data-testid="button-submit-order"
                      >
                        <MessageCircle className="w-5 h-5 ml-2" />
                        أرسل الطلب
                      </Button>

                      {showPayment && (
                        <div className="mt-4 p-4 rounded-xl bg-muted/30 border border-border">
                          <p className="text-sm text-muted-foreground text-center mb-4">
                            أو ادفع الآن عبر PayPal
                          </p>
                          <PayPalButton
                            amount={String(currentPrice)}
                            currency={product.currency}
                            intent="CAPTURE"
                          />
                        </div>
                      )}
                    </form>
                  </Form>

                  {/* Trust indicators */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span>4.9 تقييم</span>
                      </div>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span>+500 عميل</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
