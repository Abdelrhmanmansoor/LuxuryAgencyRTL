import { Shield, X, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

interface SecurityNotificationProps {
  showOnPayment?: boolean;
}

export default function SecurityNotification({ showOnPayment = false }: SecurityNotificationProps) {
  const [isVisible, setIsVisible] = useState(showOnPayment);

  useEffect(() => {
    if (showOnPayment) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [showOnPayment]);

  if (!isVisible) return null;

  return (
    <div
      data-testid="security-notification"
      className="fixed top-20 right-4 left-4 md:right-8 md:left-auto md:max-w-sm z-40 animate-fade-down"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/40 backdrop-blur-sm shadow-lg shadow-accent/20 p-4 md:p-5">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-accent/5 blur-xl" />
        
        <div className="relative flex items-start gap-3">
          <div className="flex-shrink-0">
            <Shield className="w-5 h-5 md:w-6 md:h-6 text-accent mt-0.5" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-accent mb-1 text-sm md:text-base">
              الدفع آمن وموثوق
            </h3>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
              تتم جميع المعاملات المالية عبر PayPal بمستويات أمان عالية جداً وتشفير من الدرجة العسكرية
            </p>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-foreground/60 hover:text-foreground transition-colors p-1"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
