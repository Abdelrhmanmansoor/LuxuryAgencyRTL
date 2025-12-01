import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "201007835547";
const WHATSAPP_MESSAGE = "السلام عليكم، أود الاستفسار عن خدماتكم";

export default function WhatsAppWidget() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="button-whatsapp"
      className="fixed right-6 bottom-6 z-50 group"
      aria-label="تواصل معنا عبر الواتساب"
    >
      {/* Glow background */}
      <div className="absolute inset-0 rounded-full bg-accent/20 blur-lg group-hover:bg-accent/40 transition-all duration-300" />
      
      {/* Main button */}
      <div className="relative w-14 h-14 md:w-16 md:h-16 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl group-hover:scale-110 transition-all duration-300 cursor-pointer">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-black" fill="currentColor" />
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-accent opacity-0 animate-pulse" style={{ animationDuration: "2s" }} />
    </a>
  );
}
