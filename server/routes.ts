import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { createPaypalOrder, capturePaypalOrder, loadPaypalDefault } from "./paypal";

// Products data with enhanced fields
const products = [
  {
    id: 1,
    name: "تصميم متجر على سلة",
    nameEn: "Salla Store Design",
    description: "تصميم متجر إلكتروني متكامل على منصة سلة مع هوية بصرية مميزة",
    fullDescription: "نقدم لك تصميم متجر إلكتروني احترافي على منصة سلة يتضمن تصميم واجهة مستخدم مميزة، تخصيص القالب بالكامل، إضافة المنتجات الأولية، ربط وسائل الدفع، وتدريب على إدارة المتجر.",
    features: [
      "تصميم واجهة مستخدم احترافية",
      "تخصيص القالب بالكامل",
      "إضافة المنتجات الأولية",
      "ربط بوابات الدفع",
      "تدريب على إدارة المتجر"
    ],
    price: 2875,
    originalPrice: 3450,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    category: "تصميم متاجر",
    purchaseCount: 67,
    isFeatured: true,
    packages: [
      { name: "باقة الأفراد", price: 2875, description: "مناسبة للمتاجر الصغيرة" },
      { name: "باقة الشركات", price: 8625, description: "تصميم احترافي للشركات" }
    ]
  },
  {
    id: 2,
    name: "هوية بصرية كاملة",
    nameEn: "Full Brand Identity",
    description: "تصميم هوية بصرية متكاملة تشمل الشعار والألوان والخطوط",
    fullDescription: "نصمم لك هوية بصرية متكاملة تعكس قيم علامتك التجارية وتميزك عن المنافسين. تشمل الباقة تصميم الشعار، دليل الهوية البصرية، الألوان والخطوط، والتطبيقات الأساسية.",
    features: [
      "تصميم شعار احترافي",
      "دليل الهوية البصرية",
      "نظام الألوان والخطوط",
      "تطبيقات الهوية (كروت، ورق رسمي)",
      "ملفات مصدرية قابلة للتعديل"
    ],
    price: 1499,
    originalPrice: 1999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    category: "هوية بصرية",
    purchaseCount: 43,
    isFeatured: false,
  },
  {
    id: 3,
    name: "صفحة هبوط احترافية",
    nameEn: "Professional Landing Page",
    description: "تصميم صفحة هبوط عالية التحويل مع تحسين للسيو",
    fullDescription: "صفحة هبوط مصممة خصيصاً لتحويل الزوار إلى عملاء. تصميم جذاب، سرعة تحميل عالية، وتوافق تام مع جميع الأجهزة.",
    features: [
      "تصميم عصري وجذاب",
      "تحسين محركات البحث SEO",
      "توافق مع الجوال والتابلت",
      "سرعة تحميل عالية",
      "نماذج تواصل متقدمة"
    ],
    price: 599,
    originalPrice: 799,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "صفحات هبوط",
    purchaseCount: 89,
    isFeatured: false,
  },
  {
    id: 4,
    name: "إدارة سوشيال ميديا",
    nameEn: "Social Media Management",
    description: "إدارة احترافية لحساباتك مع محتوى إبداعي شهرياً",
    fullDescription: "ندير حساباتك على منصات التواصل الاجتماعي بشكل احترافي مع محتوى إبداعي، جدولة منشورات، والتفاعل مع المتابعين.",
    features: [
      "30 منشور شهرياً",
      "تصميمات احترافية",
      "جدولة ونشر المحتوى",
      "تقارير أداء شهرية",
      "إدارة التفاعلات والردود"
    ],
    price: 1299,
    originalPrice: 1699,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    category: "سوشيال ميديا",
    purchaseCount: 34,
    isFeatured: true,
  },
  {
    id: 5,
    name: "تصوير منتجات احترافي",
    nameEn: "Professional Product Photography",
    description: "تصوير احترافي لـ 15 منتج مع تعديلات عالية الجودة",
    fullDescription: "تصوير منتجاتك بجودة عالية في استوديو احترافي مع إضاءة مثالية وتعديلات لونية تبرز جمال منتجاتك.",
    features: [
      "تصوير 15 منتج",
      "خلفيات متعددة",
      "تعديل الصور وتحسينها",
      "صور بدقة عالية",
      "تسليم خلال 5 أيام"
    ],
    price: 449,
    originalPrice: 599,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "تصوير منتجات",
    purchaseCount: 56,
    isFeatured: false,
  },
  {
    id: 6,
    name: "باقة تصاميم سوشيال",
    nameEn: "Social Media Design Package",
    description: "25 تصميم سوشيال ميديا احترافي بجودة عالية",
    fullDescription: "نصمم لك 25 تصميم احترافي لمنصات التواصل الاجتماعي بما يتناسب مع هويتك البصرية ويجذب جمهورك المستهدف.",
    features: [
      "25 تصميم احترافي",
      "متوافق مع جميع المنصات",
      "تعديلات غير محدودة",
      "ملفات مصدرية",
      "تسليم خلال 7 أيام"
    ],
    price: 349,
    originalPrice: 449,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    category: "تصميم",
    purchaseCount: 72,
    isFeatured: false,
  },
  {
    id: 7,
    name: "تطوير موقع مخصص",
    nameEn: "Custom Website Development",
    description: "تطوير موقع احترافي بالكامل UI/UX + Frontend + Backend",
    fullDescription: "نطور لك موقع ويب مخصص بالكامل يلبي احتياجات عملك مع واجهة مستخدم سلسة ولوحة تحكم متقدمة.",
    features: [
      "تصميم UI/UX احترافي",
      "تطوير Frontend حديث",
      "تطوير Backend متقدم",
      "لوحة تحكم كاملة",
      "استضافة لمدة سنة"
    ],
    price: 4999,
    originalPrice: 6499,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    category: "برمجة مواقع",
    purchaseCount: 28,
    isFeatured: false,
  },
  {
    id: 8,
    name: "حملة إعلانية متكاملة",
    nameEn: "Complete Ad Campaign",
    description: "إدارة حملات إعلانية على Google و Meta لمدة شهر",
    fullDescription: "ندير حملاتك الإعلانية باحترافية على منصات Google و Meta مع تحسين مستمر لتحقيق أفضل عائد استثماري.",
    features: [
      "إعداد الحملات الإعلانية",
      "استهداف الجمهور المناسب",
      "تحسين مستمر للأداء",
      "تقارير أسبوعية",
      "إدارة الميزانية"
    ],
    price: 999,
    originalPrice: 1299,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    category: "حملات إعلانية",
    purchaseCount: 41,
    isFeatured: false,
  },
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Get all products
  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  // Get single product
  app.get("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          error: "Invalid form data", 
          details: result.error.flatten() 
        });
      }

      const { name, email, message } = result.data;
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage({
        name,
        email,
        message,
      });

      console.log("New contact message received:", contactMessage);

      res.json({ 
        success: true, 
        message: "تم استلام رسالتك بنجاح",
        id: contactMessage.id
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });

  // PayPal routes
  app.get("/api/paypal/setup", async (req, res) => {
    try {
      await loadPaypalDefault(req, res);
    } catch (error) {
      console.error("PayPal setup error:", error);
      res.status(500).json({ error: "PayPal initialization failed" });
    }
  });

  app.post("/api/paypal/order", async (req, res) => {
    try {
      await createPaypalOrder(req, res);
    } catch (error) {
      console.error("PayPal order creation error:", error);
      res.status(500).json({ error: "Failed to create PayPal order" });
    }
  });

  app.post("/api/paypal/order/:orderID/capture", async (req, res) => {
    try {
      await capturePaypalOrder(req, res);
    } catch (error) {
      console.error("PayPal capture error:", error);
      res.status(500).json({ error: "Failed to capture PayPal order" });
    }
  });

  return httpServer;
}
