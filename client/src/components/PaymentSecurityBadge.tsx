import { CreditCard, Shield } from "lucide-react";

export default function PaymentSecurityBadge() {
  return (
    <div className="mt-8 space-y-4">
      {/* Security Notification */}
      <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 flex items-start gap-3">
        <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-accent text-sm mb-1">الدفع آمن وموثوق</h3>
          <p className="text-xs text-foreground/80">
            تتم جميع المعاملات عبر PayPal بتشفير من الدرجة العسكرية
          </p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-primary/20">
        <span className="text-sm font-medium text-foreground">طرق الدفع المقبولة:</span>
        <div className="flex gap-2 flex-wrap">
          {/* Visa */}
          <div className="w-10 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            Visa
          </div>
          {/* Mastercard */}
          <div className="w-10 h-6 rounded bg-red-600 flex items-center justify-center text-white text-xs font-bold">
            MC
          </div>
          {/* Mada */}
          <div className="w-10 h-6 rounded bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white text-xs font-bold">
            مدى
          </div>
          {/* PayPal */}
          <div className="w-10 h-6 rounded bg-gray-700 flex items-center justify-center text-white text-xs font-bold">
            PP
          </div>
        </div>
      </div>
    </div>
  );
}
