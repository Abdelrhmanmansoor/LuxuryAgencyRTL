import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { createPaypalOrder, capturePaypalOrder, loadPaypalDefault } from "./paypal";

// Products data
const products = [
  {
    id: 1,
    name: "باقة تصميم متجر",
    nameEn: "Store Design Package",
    description: "تصميم متجر إلكتروني متكامل على منصة سلة مع هوية بصرية مميزة وتجربة مستخدم احترافية",
    price: 499,
    currency: "SAR",
    image: "/api/placeholder/store",
    category: "تصميم متاجر",
  },
  {
    id: 2,
    name: "هوية بصرية كاملة",
    nameEn: "Full Brand Identity",
    description: "تصميم هوية بصرية متكاملة تشمل الشعار والألوان والخطوط وجميع التطبيقات",
    price: 1499,
    currency: "SAR",
    image: "/api/placeholder/identity",
    category: "هوية بصرية",
  },
  {
    id: 3,
    name: "صفحة هبوط",
    nameEn: "Landing Page",
    description: "تصميم صفحة هبوط احترافية عالية التحويل مع تحسين للسيو",
    price: 299,
    currency: "SAR",
    image: "/api/placeholder/landing",
    category: "صفحات هبوط",
  },
  {
    id: 4,
    name: "إدارة سوشيال شهر",
    nameEn: "Social Media Management (Monthly)",
    description: "إدارة حسابات السوشيال ميديا لمدة شهر مع محتوى إبداعي وجدولة منشورات",
    price: 899,
    currency: "SAR",
    image: "/api/placeholder/social",
    category: "سوشيال ميديا",
  },
  {
    id: 5,
    name: "تصوير 12 منتج",
    nameEn: "12 Products Photography",
    description: "تصوير احترافي لـ 12 منتج مع تعديلات وإخراج عالي الجودة",
    price: 349,
    currency: "SAR",
    image: "/api/placeholder/photo",
    category: "تصوير منتجات",
  },
  {
    id: 6,
    name: "20 بوست تصميم",
    nameEn: "20 Social Media Posts",
    description: "تصميم 20 منشور سوشيال ميديا احترافي بجودة عالية",
    price: 199,
    currency: "SAR",
    image: "/api/placeholder/posts",
    category: "تصميم",
  },
  {
    id: 7,
    name: "تطوير موقع Custom",
    nameEn: "Custom Website Development",
    description: "تطوير موقع مخصص بالكامل UI/UX + Frontend + Backend مع لوحة تحكم",
    price: 2499,
    currency: "SAR",
    image: "/api/placeholder/website",
    category: "برمجة مواقع",
  },
  {
    id: 8,
    name: "باقة Google Ads",
    nameEn: "Google Ads Package",
    description: "إدارة حملات Google Ads لمدة شهر مع تحسين مستمر وتقارير أداء",
    price: 699,
    currency: "SAR",
    image: "/api/placeholder/ads",
    category: "حملات إعلانية",
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
    await loadPaypalDefault(req, res);
  });

  app.post("/api/paypal/order", async (req, res) => {
    await createPaypalOrder(req, res);
  });

  app.post("/api/paypal/order/:orderID/capture", async (req, res) => {
    await capturePaypalOrder(req, res);
  });

  return httpServer;
}
