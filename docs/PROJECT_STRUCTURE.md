# Project Structure

This document outlines the organization of the Morningwood Construction website.

## Directory Structure

```
morningwood-construction/
├── docs/                    # Project documentation
├── public/                  # Static assets
├── src/                     # Source code
│   ├── app/                 # Next.js app directory
│   │   ├── about/           # About page
│   │   ├── bathroom/        # Bathroom services page
│   │   ├── bedroom/         # Bedroom services page
│   │   ├── contact/         # Contact form page
│   │   ├── kitchen/         # Kitchen services page
│   │   ├── living-room/     # Living room services page
│   │   ├── outdoor/         # Outdoor services page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Homepage
│   └── components/          # Reusable React components
│       ├── AboutPage.tsx    # About page component
│       ├── AreaPage.tsx     # Service area template
│       ├── ContactPage.tsx  # Contact form component
│       └── Navbar.tsx       # Navigation component
├── .gitignore              # Git ignore rules
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── README.md               # Project overview
└── tsconfig.json           # TypeScript configuration
```

## Component Architecture

### Layout Components
- `layout.tsx` - Root layout with navigation
- `Navbar.tsx` - Main navigation component

### Page Components  
- `page.tsx` - Homepage with hero, services, and call-to-action
- `AboutPage.tsx` - Company information and team details
- `ContactPage.tsx` - Contact form with service selection
- `AreaPage.tsx` - Template for service area pages

### Styling
- Tailwind CSS for utility-first styling
- Custom CSS animations in globals.css
- Responsive design with mobile-first approach

## Development Notes

- Built with Next.js 15.5.2 and Turbopack
- Uses TypeScript for type safety
- Styled with Tailwind CSS
- Optimized fonts with next/font (Geist family)
- Modern CSS features including gradients and backdrop-filter