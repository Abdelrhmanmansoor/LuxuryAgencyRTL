import { useEffect, useRef, useState } from "react";
import { Building2, Users } from "lucide-react";

const clients = [
  { id: 1, name: "شركة النخبة" },
  { id: 2, name: "مجموعة الريادة" },
  { id: 3, name: "شركة الإبداع" },
  { id: 4, name: "مؤسسة التميز" },
  { id: 5, name: "شركة الرؤية" },
  { id: 6, name: "مجموعة النجاح" },
  { id: 7, name: "شركة الطموح" },
  { id: 8, name: "مؤسسة الإنجاز" },
  { id: 9, name: "شركة المستقبل" },
  { id: 10, name: "مجموعة الابتكار" },
  { id: 11, name: "شركة القمة" },
  { id: 12, name: "مؤسسة ريادة" },
  { id: 13, name: "شركة الأمل" },
  { id: 14, name: "مجموعة السعادة" },
  { id: 15, name: "شركة الوفاء" },
  { id: 16, name: "مؤسسة الجودة" },
];

export default function ClientMarquee() {
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
      id="clients"
      ref={sectionRef}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
      data-testid="section-clients"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      {/* Section Header */}
      <div className={`text-center mb-12 px-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          <Users className="w-4 h-4" />
          شركاؤنا في النجاح
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          نفخر بثقة العملاء
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          أكثر من 500 علامة تجارية خليجية رائدة تثق بخدماتنا
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex-shrink-0 mx-3 md:mx-4"
                data-testid={`client-logo-${client.id}`}
              >
                <div className="px-6 py-4 flex items-center gap-3 rounded-xl bg-card border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover-elevate">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client) => (
              <div
                key={`dup-${client.id}`}
                className="flex-shrink-0 mx-3 md:mx-4"
              >
                <div className="px-6 py-4 flex items-center gap-3 rounded-xl bg-card border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover-elevate">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
