import { useEffect, useRef, useState } from "react";

const clients = [
  { id: 1, name: "شركة النخبة", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=النخبة" },
  { id: 2, name: "مجموعة الريادة", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=الريادة" },
  { id: 3, name: "شركة الإبداع", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=الإبداع" },
  { id: 4, name: "مؤسسة التميز", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=التميز" },
  { id: 5, name: "شركة الرؤية", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=الرؤية" },
  { id: 6, name: "مجموعة النجاح", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=النجاح" },
  { id: 7, name: "شركة الطموح", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=الطموح" },
  { id: 8, name: "مؤسسة الإنجاز", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=الإنجاز" },
  { id: 9, name: "شركة المستقبل", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=المستقبل" },
  { id: 10, name: "مجموعة الابتكار", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=الابتكار" },
  { id: 11, name: "شركة القمة", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=القمة" },
  { id: 12, name: "مؤسسة الريادة", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=ريادة" },
  { id: 13, name: "شركة الأمل", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=الأمل" },
  { id: 14, name: "مجموعة السعادة", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=السعادة" },
  { id: 15, name: "شركة الوفاء", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=الوفاء" },
  { id: 16, name: "مؤسسة الجودة", logo: "https://via.placeholder.com/120x60/1a1a1a/F2C400?text=الجودة" },
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
      className="py-16 md:py-24 bg-background relative overflow-hidden"
      data-testid="section-clients"
    >
      {/* Section Header */}
      <div className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-primary gold-text-glow">عملاؤنا</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          نفخر بثقة أكثر من 90 علامة تجارية رائدة
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10" />

        {/* Marquee track */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex-shrink-0 mx-6 md:mx-10 group"
                data-testid={`client-logo-${client.id}`}
              >
                <div className="w-28 md:w-36 h-14 md:h-18 flex items-center justify-center rounded-xl bg-card/50 border border-primary/10 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/5">
                  <span className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 grayscale group-hover:grayscale-0">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client) => (
              <div
                key={`dup-${client.id}`}
                className="flex-shrink-0 mx-6 md:mx-10 group"
              >
                <div className="w-28 md:w-36 h-14 md:h-18 flex items-center justify-center rounded-xl bg-card/50 border border-primary/10 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/5">
                  <span className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 grayscale group-hover:grayscale-0">
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
