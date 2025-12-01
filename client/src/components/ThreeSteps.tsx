import { MessageSquare, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "تواصل معنا",
    description: "تواصل معنا عبر الواتساب أو نموذج التواصل وأخبرنا عن مشروعك ومتطلباتك",
  },
  {
    number: 2,
    icon: Settings,
    title: "نبدأ العمل",
    description: "فريقنا المتخصص يبدأ العمل على مشروعك وفق أعلى معايير الجودة والاحترافية",
  },
  {
    number: 3,
    icon: Rocket,
    title: "نطلق مشروعك",
    description: "نسلمك مشروعك جاهزاً للإطلاق مع دعم فني متواصل لضمان نجاحك",
  },
];

export default function ThreeSteps() {
  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-three-steps">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            منظومة التكامل لتحقيق نمو متجرك الإلكتروني
          </h2>
          <p className="text-lg text-primary font-semibold">
            في 3 خطوات واضحة
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              data-testid={`step-card-${step.number}`}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 right-6 w-10 h-10 rounded-full bg-primary text-black font-bold text-lg flex items-center justify-center shadow-md">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-2 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-l from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
