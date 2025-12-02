# Ictus Flow Website

Production-ready website for Ictus Flow AI Consultancy, specializing in AI solutions for SME construction firms.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ (currently using v22.17.0)
- npm 10+ (currently using v10.9.2)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
ictus-flow-website/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── api/          # API routes
│   ├── components/       # React components
│   │   ├── layout/       # Navigation, Footer
│   │   ├── sections/     # Page sections
│   │   └── ui/           # Reusable UI components
│   ├── lib/              # Utilities and hooks
│   │   └── hooks/        # Custom React hooks
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
├── .claude/              # Claude Code skills and standards
│   ├── CLAUDE.md         # Development standards (auto-loaded)
│   └── skills/           # Reusable development skills
└── [config files]        # tsconfig, tailwind, etc.
```

## Development Standards

This project follows **production-first development** principles:

- ✅ No workarounds or temporary fixes
- ✅ Everything must work correctly first time
- ✅ Proper error handling from the start
- ✅ TypeScript strict mode
- ✅ No placeholder/mock data in production
- ✅ Security and performance by design

See `.claude/CLAUDE.md` for complete development standards.

## Features

- 🎨 Modern glassmorphism UI with gradient effects
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🔍 SEO-ready with proper meta tags
- 🎭 Smooth scroll animations
- 📧 Working contact form with API integration
- 🔒 Security-first architecture

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy

Vercel automatically detects Next.js and configures everything.

### Environment Variables

Create `.env.local` for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## License

Private - Ictus Flow Consultancy

---

Built with production-first principles. No workarounds. No compromises.
