import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const contactInfo = [
  {
    icon: MapPin,
    title: "الموقع",
    details: ["المملكة العربية السعودية", "الرياض"],
  },
  {
    icon: Phone,
    title: "الهاتف",
    details: ["+966 50 000 0000"],
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    details: ["info@sulaiman.sa", "support@sulaiman.sa"],
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    details: ["الأحد - الخميس", "9:00 صباحاً - 6:00 مساءً"],
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سنتواصل معك في أقرب وقت",
      });
    },
    onError: () => {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background" data-testid="page-contact">
      <Header />

      <main className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary gold-text-glow">تواصل معنا</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              نسعد بتواصلكم ونحن جاهزون للإجابة على جميع استفساراتكم
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">معلومات التواصل</h2>
                <p className="text-muted-foreground mb-8">
                  يسعدنا تواصلكم معنا عبر أي من القنوات التالية. فريقنا جاهز لمساعدتكم
                  في تحقيق رؤيتكم الرقمية.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className="bg-card border-primary/10 hover:border-primary/30 transition-all duration-500"
                      data-testid={`contact-info-${index}`}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                            {item.details.map((detail, i) => (
                              <p key={i} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div className="aspect-video rounded-2xl bg-card border border-primary/10 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                    <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Card className="bg-card border-primary/10">
                <CardContent className="p-6 md:p-8">
                  {isSuccess ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        شكراً لتواصلك!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        تم استلام رسالتك بنجاح. سنتواصل معك في أقرب وقت ممكن.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSuccess(false)}
                        className="border-primary/30"
                      >
                        إرسال رسالة أخرى
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                          أرسل لنا رسالة
                        </h2>
                        <p className="text-muted-foreground">
                          املأ النموذج التالي وسنرد عليك في أقرب وقت
                        </p>
                      </div>

                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>الاسم</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="أدخل اسمك الكامل"
                                    className="bg-background border-primary/20 focus:border-primary h-12"
                                    data-testid="input-name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>البريد الإلكتروني</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="example@email.com"
                                    className="bg-background border-primary/20 focus:border-primary h-12"
                                    data-testid="input-email"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>الرسالة</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="اكتب رسالتك هنا..."
                                    className="bg-background border-primary/20 focus:border-primary min-h-[150px] resize-none"
                                    data-testid="input-message"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="submit"
                            size="lg"
                            className="w-full h-14 text-lg font-semibold gold-glow"
                            disabled={mutation.isPending}
                            data-testid="button-submit-contact"
                          >
                            {mutation.isPending ? (
                              <span className="flex items-center gap-2">
                                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                جاري الإرسال...
                              </span>
                            ) : (
                              <>
                                <Send className="w-5 h-5 ml-2" />
                                إرسال الرسالة
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </>
                  )}
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
