# تطبيق التلخيص الذكي - Smart Summarization App

## Overview
This is a React + Vite landing page for an Arabic AI-powered educational tool that helps students summarize lectures and study materials efficiently. The app features a modern, responsive design built with Tailwind CSS and shadcn/ui components.

## Project Architecture
- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom theming
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

## Current State
- ✅ Frontend application configured and running on port 5000
- ✅ Vite dev server configured for Replit environment
- ✅ Deployment configuration set up for autoscale
- ✅ All dependencies installed and working

## Recent Changes (2024-09-24)
- Configured Vite server to use port 5000 and host 0.0.0.0 for Replit compatibility
- Set up HMR with clientPort 443 for proper hot reloading
- Configured deployment target as autoscale with build and preview commands
- Set up workflow for development server

## Key Features
- Multi-section landing page (Hero, Features, Pricing, CTA)
- Arabic RTL support
- Modern UI components from shadcn/ui
- Responsive design with Tailwind CSS
- SEO optimized with proper meta tags

## Development
- Dev server runs on port 5000 via `npm run dev`
- Build with `npm run build`
- Preview production build with `npm run preview`