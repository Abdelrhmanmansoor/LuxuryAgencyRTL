import { Link } from "wouter";
import { 
  Phone, 
  Mail, 
  ArrowUp
} from "lucide-react";
import { SiInstagram, SiX, SiTiktok, SiSnapchat } from "react-icons/si";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/لوجو_1764568508735.png";

const quickLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/#services", label: "خدماتنا" },
  { href: "/#portfolio", label: "أعمالنا" },
  { href: "/store", label: "المتجر" },
  { href: "/contact", label: "تواصل معنا" },
];

const serviceLinks = [
  { href: "/#services", label: "تصميم المتاجر" },
  { href: "/#services", label: "الموشن جرافيك" },
  { href: "/#services", label: "التسويق الرقمي" },
  { href: "/#services", label: "البرمجة المخصصة" },
  { href: "/#services", label: "منصات المحامين" },
];

const socialLinks = [
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiX, href: "#", label: "X" },
  { icon: SiTiktok, href: "#", label: "TikTok" },
  { icon: SiSnapchat, href: "#", label: "Snapchat" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-black text-white pt-16 md:pt-20 pb-8"
      data-testid="footer"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* About Column */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-block mb-6 group">
              <img
                src={logoImage}
                alt="سُليمان"
                className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-white/70 leading-relaxed mb-6">
              وكالة رقمية متخصصة في تصميم المتاجر الإلكترونية، الموشن جرافيك، التسويق الرقمي، والبرمجة المخصصة.
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
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-black group"
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
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

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
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
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a 
                  href="tel:+201007835547" 
                  className="text-white/70 hover:text-primary transition-colors"
                  dir="ltr"
                >
                  +20 100 783 5547
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:info@sulaiman.sa" className="text-white/70 hover:text-primary transition-colors">
                  info@sulaiman.sa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50 text-center md:text-right">
            © {new Date().getFullYear()} سُليمان. جميع الحقوق محفوظة.
          </p>

          {/* Back to top button */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="border-white/20 text-white hover:border-primary hover:bg-primary hover:text-black"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
