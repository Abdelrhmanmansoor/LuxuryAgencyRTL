import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUp,
  Sparkles
} from "lucide-react";
import { SiTiktok, SiSnapchat } from "react-icons/si";
import logoImage from "@assets/لوجو_1764568508735.png";

const quickLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/#services", label: "خدماتنا" },
  { href: "/#portfolio", label: "أعمالنا" },
  { href: "/store", label: "المتجر" },
  { href: "/contact", label: "تواصل معنا" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: SiTiktok, href: "#", label: "TikTok" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: SiSnapchat, href: "#", label: "Snapchat" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative bg-card pt-20 md:pt-28 pb-8"
      data-testid="footer"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* About Column */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-block mb-6 group">
              <img
                src={logoImage}
                alt="Logo"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-muted-foreground leading-relaxed mb-6">
              وكالة إبداع رقمية متخصصة في تصميم الهويات البصرية، برمجة المواقع والمتاجر، 
              وإدارة السوشيال ميديا بأعلى معايير الجودة والاحترافية.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary group"
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">المملكة العربية السعودية</p>
                  <p className="text-sm text-muted-foreground">الرياض</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:+966100078355" className="text-muted-foreground hover:text-primary transition-colors">
                  01007835547
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:info@sulaiman.sa" className="text-muted-foreground hover:text-primary transition-colors">
                  info@sulaiman.sa
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">النشرة البريدية</h3>
            <p className="text-muted-foreground text-sm mb-4">
              اشترك لتصلك آخر أخبارنا وعروضنا الحصرية
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted border-primary/20 text-foreground placeholder:text-muted-foreground focus:border-primary"
                data-testid="input-newsletter-email"
              />
              <Button className="w-full btn-glow" data-testid="button-newsletter-submit">
                <Send className="w-4 h-4 ml-2" />
                اشترك الآن
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} جميع الحقوق محفوظة.
          </p>

          {/* Back to top button */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="border-primary/20 text-primary hover:border-primary hover:bg-primary/10"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
