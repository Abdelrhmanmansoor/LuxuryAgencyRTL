import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Asset 1@3x_1764556634238.png";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/#services", label: "خدماتنا" },
  { href: "/#portfolio", label: "أعمالنا" },
  { href: "/store", label: "المتجر" },
  { href: "/#clients", label: "عملاؤنا" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-primary/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img
                src={logoImage}
                alt="سليمان"
                className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl md:text-2xl font-bold text-primary gold-text-glow">
                سليمان
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  data-testid={`link-nav-${link.label}`}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover-elevate ${
                    location === link.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                data-testid="button-cta-header"
                className="mr-4 gold-glow-sm"
              >
                ابدأ مشروعك
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 md:top-20 bg-background/95 backdrop-blur-xl transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link key={link.href} href={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  data-testid={`link-mobile-nav-${link.label}`}
                  className={`w-full text-right px-4 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover-elevate ${
                    location === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                className="w-full mt-4 h-14 text-lg gold-glow"
                data-testid="button-mobile-cta"
              >
                ابدأ مشروعك
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
