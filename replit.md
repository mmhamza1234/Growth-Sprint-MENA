# Wakel.io - Growth Operations Sprint

## Overview

Wakel.io is a landing page and lead generation platform for a B2B consulting firm specializing in "Growth Operations Sprints" - structured 8-week engagements that deliver executable strategy and operational workflows for growing companies in Egypt and MENA markets.

The application is a full-stack TypeScript project with a React frontend and Express backend. It serves as a marketing site with a lead capture form that submits assessments to Google Sheets via webhook integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS v4 with custom dark theme and CSS variables
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for section animations
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Validation**: Zod schemas shared between client and server
- **Build**: esbuild for production bundling with selective dependency bundling

### Data Storage
- **Primary Storage**: Google Sheets via webhook integration (no database required for current functionality)
- **Database Ready**: Drizzle ORM configured with PostgreSQL dialect for future expansion
- **Schema Location**: `shared/schema.ts` contains Zod validation schemas

### Key Design Decisions

**Shared Schema Validation**
- Zod schemas defined in `shared/schema.ts` are used by both frontend and backend
- Ensures type safety and validation consistency across the stack

**Monorepo Structure**
- `client/` - React frontend application
- `server/` - Express backend
- `shared/` - Common code (schemas, types)
- Path aliases: `@/` for client, `@shared/` for shared code

**Single Page Application**
- Landing page with multiple sections (Hero, ValueProp, Services, Methodology, etc.)
- Smooth scroll navigation between sections
- Modal-based lead capture form

**Production Build Strategy**
- Frontend built with Vite to `dist/public`
- Backend bundled with esbuild to `dist/index.cjs`
- Selective bundling of server dependencies to optimize cold start times

## External Dependencies

### Third-Party Services
- **Google Sheets**: Lead capture data storage via `GOOGLE_SHEETS_WEBHOOK_URL` environment variable
- **Chatbase**: Chat widget integration (client-side initialization)

### Key NPM Packages
- **UI**: Radix UI primitives, Lucide icons, class-variance-authority
- **Backend**: Express, Drizzle ORM, connect-pg-simple (session store ready)
- **Validation**: Zod, drizzle-zod, @hookform/resolvers

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (required for Drizzle, future use)
- `GOOGLE_SHEETS_WEBHOOK_URL` - Webhook endpoint for lead submissions

### Database Configuration
- Drizzle ORM configured for PostgreSQL
- Migrations output to `./migrations` directory
- Schema defined in `shared/schema.ts`
- Push command: `npm run db:push`