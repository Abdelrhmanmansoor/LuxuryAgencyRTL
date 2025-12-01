# Overview

This is an Arabic (RTL) luxury agency website called "سُليمان" designed to match the Makaseb.sa website style with a CREAM/YELLOW/BLACK color scheme. The website features a cream/off-white background (#FDFBF7) with yellow (#F2C400) and black accents matching the logo colors. It includes a dark header to display the white logo, 8-section landing page structure, PayPal integration, WhatsApp widget, and showcases 5 service categories.

# Recent Changes (December 2024)

- **Complete Design Overhaul**: Transformed from BLACK × GOLD dark luxury theme to CREAM/YELLOW/BLACK light Makaseb-inspired design
- **Color System**: Updated CSS variables - background: #FDFBF7 (cream), primary: #F2C400 (yellow), foreground: #1A1A1A (black)
- **Dark Header**: Changed to #1A1A1A dark background to accommodate white logo with sticky navigation
- **Hero Section**: Redesigned with founder image, stat badges (150+ متجر, 500+ عميل), and 7 platform logos
- **Three Steps Section**: New component showcasing 3-step integration process for client growth
- **Services Section**: 5 categories aligned with user requirements (E-commerce, Motion Graphics, Marketing, Programming, Lawyer Platforms)
- **Right Place Section**: 4 benefit cards for different target audiences
- **Stats Section**: Animated counters with dark gradient background
- **CTA Section**: Contact call-to-action with phone and WhatsApp buttons
- **Footer**: Dark styling with correct phone number (+201007835547) and social links
- **WhatsApp Widget**: Green floating button with phone number +201007835547

# Contact Information

- **Phone/WhatsApp**: +201007835547
- **Company Name**: سُليمان

# User Preferences

Preferred communication style: Simple, everyday language.

# Landing Page Sections

1. **Header** - Dark sticky header with white logo and navigation links
2. **Hero** - Founder image with statistics and platform logos
3. **Three Steps** - Integration process overview
4. **Services** - 5 service category cards
5. **Right Place** - 4 target audience benefit cards
6. **Stats** - Animated statistics counters
7. **CTA** - Contact call-to-action
8. **Footer** - Company info, social links, contact details

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
- Custom CSS variables for cream/white theme with yellow (#F2C400) accents
- Subtle shadows, elegant hover effects, and smooth transitions

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management, caching, and data fetching
- React Hook Form with Zod validation for form handling
- No global client state management - relies on server state and local component state

**Design System**
- RTL (Right-to-Left) layout for Arabic language support
- Arabic fonts: Tajawal and Cairo from Google Fonts
- Consistent spacing system: 8px, 16px, 24px
- Cream/off-white backgrounds (#FDFBF7) with yellow and black accents
- Smooth scroll-triggered animations and hover effects
- Dark header (#1A1A1A) and footer (black) with white logo for contrast

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
