# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ictus Flow is a Next.js 14 website for an AI consultancy targeting SME construction firms. Single-page marketing site with glassmorphism UI, scroll animations, and a contact form integrated with Google Sheets.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build (run this before deploying)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage (client component)
│   ├── api/contact/        # Contact form API route
│   └── [other pages]/      # Privacy policy, case studies
├── components/
│   ├── layout/             # Navigation, Footer
│   ├── sections/           # Page sections (Hero, Services, Contact, etc.)
│   └── ui/                 # Reusable components (RevealOnScroll, MagneticButton)
├── lib/hooks/              # Custom hooks (useTypewriter, useCounter)
├── types/index.ts          # Shared TypeScript interfaces
└── middleware.ts           # API rate limiting
```

### Key Patterns

**Path Alias**: Use `@/*` for imports from `src/` (e.g., `@/components/ui/Button`)

**Section Components**: Homepage sections are composed in `src/app/page.tsx`. Each section is self-contained in `src/components/sections/`.

**Scroll Animations**: Wrap content with `RevealOnScroll` component for fade-in on viewport entry. Uses Intersection Observer.

**Contact Form Flow**:
1. Client-side validation in `Contact.tsx`
2. POST to `/api/contact`
3. Rate limited via `middleware.ts` (5 requests/hour per IP)
4. Saved to Google Sheets via Apps Script

**Type Definitions**: All shared types live in `src/types/index.ts` (ContactFormData, ServiceOffering, etc.)

## Production-First Development

**Core Principle**: No workarounds or temporary fixes. Everything must work correctly first time.

### Before Writing Code
1. Plan the change completely - files affected, dependencies, edge cases
2. Design for production - no placeholders, proper error handling
3. Assess risks - security, performance, breaking changes

### Forbidden Practices
- setTimeout/setInterval to "fix" timing issues
- Empty catch blocks
- `any` types
- console.log in production code
- Dynamic Tailwind classes like `delay-[${index * 100}ms]` (won't work in production)

### Verification Checklist
- TypeScript compiles without errors
- Works on mobile and desktop
- Handles errors gracefully
- No console errors or warnings

## Pre-Deployment Issues

**Critical**:
- Contact form currently sends to Google Sheets (working) but no email notification

**Known Issues**:
- Footer social links use placeholder `#` URLs
