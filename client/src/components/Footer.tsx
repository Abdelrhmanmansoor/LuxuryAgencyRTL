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
  ArrowUp
} from "lucide-react";
import { SiTiktok, SiSnapchat } from "react-icons/si";
import logoImage from "@assets/Asset 1@3x_1764559327898.png";

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
      className="relative bg-foreground text-white pt-16 md:pt-24 pb-8"
      data-testid="footer"
    >
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About Column */}
          <div>
            {/* Logo on dark background - white logo shows well */}
            <Link href="/" className="inline-block mb-6 group">
              <img
                src={logoImage}
                alt="Logo"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-white/70 leading-relaxed mb-6">
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
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary group"
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/70">المملكة العربية السعودية</p>
                  <p className="text-sm text-white/70">الرياض</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:+966500000000" className="text-white/70 hover:text-primary transition-colors">
                  +966 50 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:info@sulaiman.sa" className="text-white/70 hover:text-primary transition-colors">
                  info@sulaiman.sa
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">النشرة البريدية</h3>
            <p className="text-white/70 text-sm mb-4">
              اشترك لتصلك آخر أخبارنا وعروضنا الحصرية
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                data-testid="input-newsletter-email"
              />
              <Button className="w-full" data-testid="button-newsletter-submit">
                <Send className="w-4 h-4 ml-2" />
                اشترك الآن
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50 text-center md:text-right">
            © {new Date().getFullYear()} جميع الحقوق محفوظة.
          </p>

          {/* Back to top button */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="border-white/20 text-white hover:border-primary hover:bg-primary/20"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
