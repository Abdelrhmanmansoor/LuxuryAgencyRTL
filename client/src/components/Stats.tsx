import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "عميل سعيد" },
  { value: 150, suffix: "+", label: "متجر تم تصميمه" },
  { value: 300, suffix: "%", label: "نسبة النمو" },
  { value: 50, suffix: "+", label: "جائزة ومعيار" },
];

function AnimatedNumber({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span>{count}{suffix}</span>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
      data-testid="section-stats"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(242, 196, 0, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Yellow Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            عملاء حققوا النمو معنا
          </h2>
          <p className="text-lg text-white/70">
            أرقام تتحدث عن نجاحاتنا مع عملائنا
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-item-${index}`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="text-lg md:text-xl text-primary font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
