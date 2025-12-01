import { useEffect, useRef, useState } from "react";

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
      className="py-16 md:py-24 bg-card/30 border-y border-primary/10 relative overflow-hidden"
      data-testid="section-clients"
    >
      {/* Section Header */}
      <div className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          شركاؤنا
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          نفخر بثقة العملاء
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          أكثر من 500 علامة تجارية خليجية رائدة تثق بخدماتنا
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-card/30 to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-card/30 to-transparent z-10" />

        {/* Marquee track */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex-shrink-0 mx-4 md:mx-6 group animate-pulse"
                style={{ animationDelay: `${client.id * 0.1}s` }}
                data-testid={`client-logo-${client.id}`}
              >
                <div className="px-6 py-3 flex items-center justify-center rounded-xl bg-card border border-primary/20 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md hover:bg-primary/10">
                  <span className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client) => (
              <div
                key={`dup-${client.id}`}
                className="flex-shrink-0 mx-4 md:mx-6 group animate-pulse"
                style={{ animationDelay: `${client.id * 0.1}s` }}
              >
                <div className="px-6 py-3 flex items-center justify-center rounded-xl bg-card border border-primary/20 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md hover:bg-primary/10">
                  <span className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
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
