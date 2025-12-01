import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Testimonial } from "@shared/schema";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "أحمد الشمري",
    role: "صاحب متجر عطور",
    content: "تجربة استثنائية مع الفريق. صمموا لي متجر يفوق التوقعات والمبيعات تضاعفت خلال شهرين",
    rating: 5,
  },
  {
    id: 2,
    name: "سارة العتيبي",
    role: "مؤسسة علامة أزياء",
    content: "الهوية البصرية التي صمموها لي عكست رؤيتي بشكل مذهل. فريق محترف ومتعاون جداً",
    rating: 5,
  },
  {
    id: 3,
    name: "محمد القحطاني",
    role: "رائد أعمال",
    content: "أفضل وكالة تعاملت معها. الجودة والسرعة والاحترافية في أعلى المستويات",
    rating: 5,
  },
  {
    id: 4,
    name: "نورة الدوسري",
    role: "صاحبة مقهى",
    content: "متجري الإلكتروني أصبح تحفة فنية. شكراً للفريق على الإبداع",
    rating: 5,
  },
  {
    id: 5,
    name: "خالد المطيري",
    role: "مدير تسويق",
    content: "حملاتهم الإعلانية حققت نتائج مبهرة. عائد استثماري ممتاز",
    rating: 5,
  },
  {
    id: 6,
    name: "هدى السبيعي",
    role: "صاحبة متجر مجوهرات",
    content: "التصوير الاحترافي رفع من قيمة منتجاتي. صور تبيع نفسها",
    rating: 5,
  },
  {
    id: 7,
    name: "فيصل الغامدي",
    role: "مؤسس شركة تقنية",
    content: "موقعنا الجديد يعكس هويتنا بشكل مثالي. تجربة مستخدم سلسة واحترافية",
    rating: 5,
  },
  {
    id: 8,
    name: "ريم الحربي",
    role: "صاحبة براند عناية",
    content: "إعادة بناء علامتي التجارية كانت أفضل قرار. الآن براندي ينافس الماركات العالمية",
    rating: 5,
  },
];

export default function Testimonials() {
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
      className="py-20 md:py-32 bg-muted/30 relative overflow-hidden"
      data-testid="section-testimonials"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            آراء عملائنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            نفخر بثقة عملائنا وشهاداتهم عن تجربتهم معنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative p-6 rounded-2xl bg-white border border-border transition-all duration-300 hover:shadow-lg ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Quote icon */}
              <div className="absolute top-4 left-4 opacity-10">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
