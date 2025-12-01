import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink } from "lucide-react";
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
  {
    id: 9,
    title: "متجر مجوهرات",
    titleEn: "Jewelry Store",
    category: "متجر إلكتروني",
    categoryEn: "E-commerce",
    description: "متجر مجوهرات فاخر مع عرض 360 درجة للمنتجات وتجربة AR",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    tools: ["React", "WebGL", "AR.js"],
  },
  {
    id: 10,
    title: "هوية شركة تقنية",
    titleEn: "Tech Company Branding",
    category: "هوية بصرية",
    categoryEn: "Brand Identity",
    description: "هوية بصرية حديثة لشركة تقنية ناشئة تعكس الابتكار والتطور",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tools: ["Figma", "Illustrator", "Lottie"],
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
      className="py-20 md:py-32 bg-card relative overflow-hidden"
      data-testid="section-portfolio"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary gold-text-glow">أعمالنا</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            مشاريع نفخر بها تعكس جودة عملنا والتزامنا بالتميز
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {portfolioItems.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedProject(project)}
              data-testid={`portfolio-item-${project.id}`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <Badge variant="secondary" className="w-fit mb-2 bg-primary/20 text-primary border-primary/30">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-bold text-foreground mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-card border-primary/20 p-0 overflow-hidden">
          {selectedProject && (
            <>
              {/* Image */}
              <div className="aspect-video relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-3 bg-primary/20 text-primary border-primary/30">
                        {selectedProject.category}
                      </Badge>
                      <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
                        {selectedProject.title}
                      </DialogTitle>
                    </div>
                  </div>
                </DialogHeader>

                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tools */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">الأدوات المستخدمة</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="border-primary/30 text-foreground">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <button className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:underline">
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
