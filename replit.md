# Overview

This is an ultra-premium Arabic (RTL) luxury agency website called "سليمان" designed with a BLACK × GOLD theme (#0A0A0A, #111 backgrounds with #F2C400 gold accents). The application is a full-stack web platform showcasing services, portfolio, client testimonials, and an e-commerce store for digital products. It features a mobile-first responsive design with smooth animations, elegant hover effects, and premium styling.

# Recent Changes (December 2024)

- **Logo sizing**: Enlarged to h-12 mobile / h-14 desktop in Header and Footer for better visibility
- **Hero Section**: Removed min-h-screen (causing empty gaps), using py-24/32/40 padding, reduced background orbs from 600px/500px to 300px/250px
- **ClientMarquee**: Redesigned with premium client cards (icons, names, categories, star ratings), stats section (+500 clients, +200 stores, 300% growth, +50 awards), and trust badges
- **Products**: Created comprehensive 30-product catalog in `server/products-data.ts` covering:
  - متاجر سلة (Salla stores): 3 products
  - متاجر زد (Zid stores): 3 products
  - متاجر شوبيفاي (Shopify stores): 3 products
  - موشن جرافيك (Motion graphics): 8 products
  - مواقع المحامين (Lawyer websites): 6 products
  - خدمات أخرى (Additional services): 7 products
- **WhatsApp Widget**: Integrated with phone number +201007835547

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build Tools**
- React 18+ with TypeScript for type safety and component-based architecture
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing instead of React Router
- Mobile-first responsive design philosophy throughout

**UI Component System**
- Radix UI primitives for accessible, unstyled components (dialogs, dropdowns, tooltips, etc.)
- shadcn/ui component library with "new-york" style variant
- Tailwind CSS for utility-first styling with extensive custom theme configuration
- Custom CSS variables for clean white/light theme with gold (#F2C400) accents
- Subtle shadows, elegant hover effects, and smooth transitions

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management, caching, and data fetching
- React Hook Form with Zod validation for form handling
- No global client state management - relies on server state and local component state

**Design System**
- RTL (Right-to-Left) layout for Arabic language support
- Arabic fonts: Tajawal and Cairo from Google Fonts
- Consistent spacing system: 8px, 16px, 24px
- Clean white backgrounds with subtle gray tones and gold accents
- Smooth scroll-triggered animations and hover effects
- Dark footer with white logo for contrast

## Backend Architecture

**Server Framework**
- Express.js with TypeScript for the REST API
- HTTP server created with Node's native `http` module
- Development mode uses Vite middleware for SSR-like serving of the React app
- Production mode serves pre-built static files from `dist/public`

**API Design**
- RESTful endpoints under `/api` prefix
- Routes for products, contact form submission, PayPal payment integration
- In-memory storage implementation (MemStorage) for contact messages
- Prepared for database integration with Drizzle ORM configuration present

**Session & Request Handling**
- Express middleware for JSON parsing with raw body preservation (for webhook verification)
- Request logging middleware tracking response times and status codes
- CORS handling implied for API requests

## Data Storage

**Current Implementation**
- In-memory storage (`MemStorage` class) for contact form submissions
- Products, portfolio items, clients, and testimonials defined as static data arrays in `server/routes.ts`

**Database Preparation**
- Drizzle ORM configured for PostgreSQL via `drizzle.config.ts`
- Neon serverless database driver ready for integration (`@neondatabase/serverless`)
- Schema definitions in `shared/schema.ts` using Zod for runtime validation
- Migration folder configured at `./migrations`
- Database connection expects `DATABASE_URL` environment variable

**Data Models (Zod Schemas)**
- Product: id, name, nameEn, description, price, currency, image, category
- Portfolio: id, title, titleEn, category, description, image, tools, screenshots
- Client: id, name, logo
- Testimonial: id, name, role, content, rating, avatar
- ContactForm: name, email, message

## External Dependencies

**Payment Processing**
- PayPal Server SDK (`@paypal/paypal-server-sdk`) for payment integration
- Environment-based configuration (Sandbox for development, Production for live)
- OAuth authorization controller and orders controller for payment flow
- Critical implementation note: PayPal integration code must not be modified

**Email & Communication**
- Contact form endpoint (`POST /api/contact`) for message submissions
- No email service currently integrated (prepared for nodemailer based on dependencies)

**Development Tools**
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- ESBuild for server bundling with selective dependency externalization
- TypeScript with strict mode and ESNext module resolution

**Styling & UI Libraries**
- 35+ Radix UI component packages for accessible primitives
- Tailwind CSS with PostCSS and Autoprefixer
- class-variance-authority for component variant management
- Lucide React for icon system
- React Icons (specifically react-icons/si for social media brands)

**Validation & Type Safety**
- Zod for runtime schema validation across client and server
- drizzle-zod for database schema to Zod schema transformation
- Shared type definitions in `shared/schema.ts` consumed by both frontend and backend

**Build & Deployment**
- Custom build script (`script/build.ts`) that bundles server and client separately
- Allowlist of dependencies to bundle for reduced cold start times
- Production build outputs to `dist/` directory
- Static file serving in production with SPA fallback routing