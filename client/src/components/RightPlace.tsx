import { Check, TrendingUp, Users, Target, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "نهتم لأمر متجرك صراحة النمو",
    description: "نركز على تحقيق نمو حقيقي ومستدام لمتجرك الإلكتروني"
  },
  {
    icon: Users,
    title: "تبحث عن شركة حقيقية",
    description: "فريق متكامل من المتخصصين في كل المجالات الرقمية"
  },
  {
    icon: Target,
    title: "تريد نتائج مضمونة",
    description: "نعمل بمنهجية واضحة لتحقيق أهدافك المحددة"
  },
  {
    icon: Award,
    title: "تبحث عن جودة واحترافية",
    description: "خبرة سنوات في تقديم خدمات عالية الجودة"
  }
];

export default function RightPlace() {
  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-right-place">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            أنت في المكان الصحيح
          </h2>
          <p className="text-lg text-primary font-semibold">
            إذا كنت واحد من مؤلاء
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-white rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              data-testid={`benefit-card-${index}`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
