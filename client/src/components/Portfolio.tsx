import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import type { Portfolio } from "@shared/schema";

const portfolioItems: Portfolio[] = [
  {
    id: 1,
    title: "متجر عطور فاخر",
    titleEn: "Luxury Perfume Store",
    category: "متجر إلكتروني",
    categoryEn: "E-commerce",
    description: "تصميم وتطوير متجر عطور فاخر مع تجربة مستخدم استثنائية وتكامل كامل مع بوابات الدفع",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    tools: ["React", "Node.js", "Stripe", "Figma"],
  },
  {
    id: 2,
    title: "هوية مقهى مختص",
    titleEn: "Specialty Coffee Identity",
    category: "هوية بصرية",
    categoryEn: "Brand Identity",
    description: "هوية بصرية كاملة لمقهى قهوة مختصة تعكس الأصالة والجودة العالية",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
    tools: ["Illustrator", "Photoshop", "After Effects"],
  },
  {
    id: 3,
    title: "تطبيق توصيل طعام",
    titleEn: "Food Delivery App",
    category: "تطبيق موبايل",
    categoryEn: "Mobile App",
    description: "تصميم واجهة مستخدم لتطبيق توصيل طعام مع تجربة سلسة وسريعة",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    tools: ["Figma", "React Native", "Firebase"],
  },
  {
    id: 4,
    title: "موقع شركة عقارات",
    titleEn: "Real Estate Website",
    category: "موقع إلكتروني",
    categoryEn: "Website",
    description: "موقع احترافي لشركة عقارات مع نظام بحث متقدم وعرض ثلاثي الأبعاد للعقارات",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tools: ["Next.js", "Three.js", "PostgreSQL"],
  },
  {
    id: 5,
    title: "متجر أزياء راقية",
    titleEn: "Fashion Store",
    category: "متجر إلكتروني",
    categoryEn: "E-commerce",
    description: "متجر أزياء فاخر مع تجربة تسوق استثنائية وتكامل مع شركات الشحن",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tools: ["Shopify", "Liquid", "JavaScript"],
  },
  {
    id: 6,
    title: "هوية مطعم فاخر",
    titleEn: "Restaurant Branding",
    category: "هوية بصرية",
    categoryEn: "Brand Identity",
    description: "هوية بصرية متكاملة لمطعم فاخر تجمع بين الأصالة والحداثة",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    tools: ["Illustrator", "Photoshop", "InDesign"],
  },
  {
    id: 7,
    title: "منصة تعليمية",
    titleEn: "Educational Platform",
    category: "منصة رقمية",
    categoryEn: "Digital Platform",
    description: "منصة تعليمية متكاملة مع نظام إدارة محتوى وبث مباشر",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    tools: ["Vue.js", "Laravel", "WebRTC"],
  },
  {
    id: 8,
    title: "تطبيق صحي",
    titleEn: "Health App",
    category: "تطبيق موبايل",
    categoryEn: "Mobile App",
    description: "تطبيق لمتابعة الصحة واللياقة مع تكامل مع الأجهزة الذكية",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    tools: ["Flutter", "HealthKit", "Firebase"],
  },
];

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Portfolio | null>(null);
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
      id="portfolio"
      ref={sectionRef}
      className="py-20 md:py-28 bg-background border-y border-primary/10 relative overflow-hidden"
      data-testid="section-portfolio"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0 px-4 py-1.5">
            أعمالنا
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            مشاريع نفخر بها
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            نماذج من أعمالنا تعكس جودة واحترافية فريقنا
          </p>
        </div>

        {/* Portfolio Grid - Clean and Light */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {portfolioItems.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-xl overflow-hidden cursor-pointer bg-card border border-primary/20 shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover-elevate ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.04}s` }}
              onClick={() => setSelectedProject(project)}
              data-testid={`portfolio-item-${project.id}`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content - Minimal and Clean */}
              <div className="p-4">
                <span className="text-xs font-medium text-primary mb-1.5 block">
                  {project.category}
                </span>
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-card border-primary/30 p-0 overflow-hidden">
          {selectedProject && (
            <>
              {/* Image */}
              <div className="aspect-video relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <DialogHeader>
                  <span className="text-sm font-medium text-primary mb-2 block">
                    {selectedProject.category}
                  </span>
                  <DialogTitle className="text-xl md:text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    تفاصيل المشروع {selectedProject.title}
                  </DialogDescription>
                </DialogHeader>

                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tools */}
                <div className="mt-5">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">الأدوات المستخدمة</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-muted text-foreground border-0">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <button className="mt-5 inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  <span>عرض المشروع</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
