import { z } from "zod";

// Product schema for the store
export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  nameEn: z.string(),
  description: z.string(),
  price: z.number(),
  currency: z.string().default("SAR"),
  image: z.string(),
  category: z.string(),
});

export type Product = z.infer<typeof productSchema>;

// Portfolio project schema
export const portfolioSchema = z.object({
  id: z.number(),
  title: z.string(),
  titleEn: z.string(),
  category: z.string(),
  categoryEn: z.string(),
  description: z.string(),
  image: z.string(),
  tools: z.array(z.string()),
  screenshots: z.array(z.string()).optional(),
});

export type Portfolio = z.infer<typeof portfolioSchema>;

// Client logo schema
export const clientSchema = z.object({
  id: z.number(),
  name: z.string(),
  logo: z.string(),
});

export type Client = z.infer<typeof clientSchema>;

// Testimonial schema
export const testimonialSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  content: z.string(),
  rating: z.number().min(1).max(5),
  avatar: z.string().optional(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;

// Featured store schema
export const featuredStoreSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  description: z.string(),
  image: z.string(),
});

export type FeaturedStore = z.infer<typeof featuredStoreSchema>;

// Service schema
export const serviceSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

export type Service = z.infer<typeof serviceSchema>;

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  message: z.string().min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// Stats schema
export const statSchema = z.object({
  id: z.number(),
  value: z.string(),
  label: z.string(),
  icon: z.string(),
});

export type Stat = z.infer<typeof statSchema>;
