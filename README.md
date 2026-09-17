# Rave Builders - Digital Showroom & Real Estate Platform

A high-converting, modern, visual digital showroom and plot marketplace built specifically for **Rave Builders** (Chennai).

---

## 📁 Project Directory Structure

```text
C:\Vishok\Business\Real Estate
├── public/                     # Static assets (icons, images, logos)
├── src/
│   ├── app/                    # Next.js App Router Pages & Routes
│   │   ├── admin/              # Admin CRM Dashboard (/admin)
│   │   ├── book-visit/         # Site Visit Booking Wizard (/book-visit)
│   │   ├── compare/            # Side-by-Side Property Comparison (/compare)
│   │   ├── contact/            # Contact & Support Page (/contact)
│   │   ├── plots/              # Specialized Plot & Land Marketplace (/plots)
│   │   ├── projects/           # Builder Projects Portfolio (/projects)
│   │   ├── properties/         # Property Catalog & Details
│   │   │   ├── [slug]/         # Interactive Digital Sales Brochure Page
│   │   │   └── page.tsx        # Filterable Property Listing Page
│   │   ├── saved/              # Bookmarked/Saved Properties (/saved)
│   │   ├── favicon.ico         # App Favicon
│   │   ├── globals.css         # Custom Design System, Utility Classes & Theme Variables
│   │   ├── layout.tsx          # Root Layout (Header, Footer, Metadata)
│   │   └── page.tsx            # Digital Showroom Homepage
│   ├── components/             # Reusable UI Components
│   │   ├── Footer.tsx          # Site Footer with Links & Contact Info
│   │   ├── Navbar.tsx          # Sticky Navigation Bar & Mobile Drawer
│   │   └── PropertyCard.tsx    # Property Grid Card with Quick Actions
│   └── lib/                    # Data Models & Business Logic
│       ├── data.ts             # Sample Datasets (Plots, Apartments, Villas, Projects)
│       └── types.ts            # TypeScript Interfaces & Definitions
├── eslint.config.mjs           # ESLint Configuration
├── next.config.ts              # Next.js Configuration
├── package.json                # Project Dependencies & Scripts
├── postcss.config.mjs          # PostCSS Configuration
├── tsconfig.json               # TypeScript Configuration
└── README.md                   # Project Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.x or higher)
- npm or yarn

### Installation & Local Development

1. Open a terminal in this folder:
   ```bash
   cd "C:\Vishok\Business\Real Estate"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✨ Key Features & Routes

- **Homepage (`/`)**: Hero banner, quick search bar, category filters, featured listings, plot highlights, video tours, testimonials.
- **Plot Marketplace (`/plots`)**: Specialized interactive layout for residential & commercial plots, CMDA/DTCP approvals, price/sqft breakdowns, layout diagrams, and site visit scheduling.
- **Property Catalog (`/properties`)**: Instant search and multi-facet filtering (Location, Type, BHK, Price, Status).
- **Digital Brochure (`/properties/[slug]`)**: Interactive gallery, video tour, floor plans, interactive EMI calculator, nearby landmarks, Google Maps integration, sticky lead capture, site visit booking.
- **Projects Showcase (`/projects`)**: Gated communities, township projects, and villa developments.
- **Property Comparison (`/compare`)**: Side-by-side spec comparison table for up to 3 properties.
- **Site Visit Booking (`/book-visit`)**: 3-step interactive booking wizard.
- **Admin Dashboard (`/admin`)**: Lead management CRM, site visit schedules, property listing manager.

