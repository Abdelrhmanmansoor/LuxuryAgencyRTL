import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import founderImage from "@assets/Group-1000004454-1_1764570612464.png";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-cta">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-right">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              جاهز للتواصل معنا؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-0">
              نحن هنا لمساعدتك في تحقيق أهدافك الرقمية. تواصل معنا اليوم وابدأ رحلة النمو
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-black font-bold px-8 h-14 text-lg btn-glow"
                  data-testid="button-cta-contact"
                >
                  تواصل معنا
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <a href="https://wa.me/201007835547" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-green-500 text-green-600 hover:bg-green-50 h-14 text-lg"
                  data-testid="button-cta-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  واتساب
                </Button>
              </a>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative flex justify-center lg:justify-start order-first lg:order-last">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
              </div>
              
              {/* Founder Image */}
              <img
                src={founderImage}
                alt="فريق سُليمان"
                className="relative z-10 w-full max-w-[300px] md:max-w-[400px] h-auto object-contain"
                data-testid="img-cta-founder"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
