import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { createPaypalOrder, capturePaypalOrder, loadPaypalDefault } from "./paypal";
import { products } from "./products-data";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Get all products (30 professional products from products-data.ts)
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
