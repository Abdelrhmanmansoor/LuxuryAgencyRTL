import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Video, 
  TrendingUp, 
  Code, 
  Scale,
  ArrowLeft,
  Check
} from "lucide-react";

import sallaLogo from "@assets/2_1764571046473.png";
import shopifyLogo from "@assets/3_1764571046473.png";
import zidLogo from "@assets/8_1764571046473.png";

const services = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "تصميم المتاجر الإلكترونية",
    description: "نصمم متاجر احترافية على سلة وزد وشوبيفاي تحقق لك المبيعات",
    features: ["تصميم عصري", "سريع التحميل", "متوافق مع الجوال", "سهل الإدارة"],
    iconColor: "#3b82f6",
    bgColor: "bg-blue-50",
    logos: [sallaLogo, zidLogo, shopifyLogo],
  },
  {
    id: "motion",
    icon: Video,
    title: "الموشن جرافيك",
    description: "فيديوهات موشن جرافيك إبداعية تروي قصة علامتك التجارية",
    features: ["سيناريو احترافي", "رسوم متحركة", "تعليق صوتي", "موسيقى مميزة"],
    iconColor: "#a855f7",
    bgColor: "bg-purple-50",
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "التسويق الرقمي",
    description: "استراتيجيات تسويقية مدروسة لزيادة مبيعاتك وانتشار علامتك",
    features: ["إعلانات سناب", "إعلانات تيك توك", "إعلانات جوجل", "إدارة المحتوى"],
    iconColor: "#22c55e",
    bgColor: "bg-green-50",
  },
  {
    id: "programming",
    icon: Code,
    title: "البرمجة المخصصة",
    description: "حلول برمجية مخصصة تناسب احتياجات عملك الفريدة",
    features: ["مواقع ويب", "تطبيقات جوال", "أنظمة إدارة", "APIs"],
    iconColor: "#f97316",
    bgColor: "bg-orange-50",
  },
  {
    id: "lawyers",
    icon: Scale,
    title: "منصات المحامين",
    description: "منصات رقمية متخصصة للمحامين ومكاتب المحاماة",
    features: ["حجز استشارات", "إدارة القضايا", "بوابة دفع", "ملفات العملاء"],
    iconColor: "#475569",
    bgColor: "bg-slate-50",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-muted/30"
      data-testid="section-services"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            كل احتياجاتك التسويقية في مكان واحد
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الرقمية لمساعدتك على النمو والنجاح
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl group"
              data-testid={`service-card-${service.id}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" style={{ color: service.iconColor }} />
              </div>
              
              {/* Title & Description */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Platform Logos (for ecommerce) */}
              {service.logos && (
                <div className="flex items-center gap-4 mb-6 pt-4 border-t border-border">
                  {service.logos.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo}
                      alt="Platform"
                      className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              )}
              
              {/* CTA Button */}
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full border-primary/20 hover:bg-primary hover:text-black hover:border-primary transition-all"
                  data-testid={`button-service-${service.id}`}
                >
                  اطلب الخدمة
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
