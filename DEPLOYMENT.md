# Deployment Guide - Ictus Flow Website

This guide covers production deployment to Vercel (recommended) and other platforms.

---

## Prerequisites

- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel account (free tier available)
- Email service account (for contact form)

---

## 1. Vercel Deployment (Recommended)

### Why Vercel?
- Built by Next.js creators
- Zero-config Next.js deployment
- Automatic HTTPS and global CDN
- Free tier includes:
  - Unlimited bandwidth
  - 100GB storage
  - Automatic deployments

### Steps:

#### A. Prepare Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Production-ready Ictus Flow website"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/ictus-flow-website.git
git push -u origin main
```

#### B. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

5. Add environment variables (see section below)
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

#### C. Configure Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain (e.g., `ictusflow.com`)
3. Update DNS records as instructed
4. Vercel automatically handles HTTPS

---

## 2. Environment Variables

### Required for Production:

Add these in Vercel Dashboard → Settings → Environment Variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Ictus Flow

# Email Service (choose one)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@ictusflow.com
RESEND_TO_EMAIL=contact@ictusflow.com
```

### Setting Up Email Service:

#### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use `onboarding@resend.dev` for testing
3. Create API key
4. Add to environment variables

**Install Resend:**
```bash
npm install resend
```

**Update `/src/app/api/contact/route.ts`:**
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: process.env.RESEND_FROM_EMAIL!,
  to: process.env.RESEND_TO_EMAIL!,
  subject: `New ${body.inquiry} Inquiry`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Inquiry Type:</strong> ${body.inquiry}</p>
    <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
  `
});
```

---

## 3. Post-Deployment Checklist

### SEO & Analytics

- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags are correct
- [ ] Test social media preview cards (Twitter, LinkedIn)

### Performance

- [ ] Run Lighthouse audit (should score 90+ on all metrics)
- [ ] Test on mobile devices
- [ ] Verify images are optimized
- [ ] Check page load times

### Functionality

- [ ] Test contact form submission
- [ ] Verify email delivery
- [ ] Test all navigation links
- [ ] Verify smooth scroll works
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

### Security

- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Environment variables secured
- [ ] No API keys in client-side code
- [ ] Rate limiting enabled on contact form

---

## 4. Continuous Deployment

Vercel automatically deploys when you push to your main branch:

```bash
# Make changes locally
git add .
git commit -m "Update: Description of changes"
git push origin main

# Vercel automatically builds and deploys
# Preview at: https://your-project.vercel.app
```

### Branch Previews

- Vercel creates preview deployments for every branch
- Test changes before merging to main
- Share preview URLs with team

---

## 5. Monitoring & Maintenance

### Performance Monitoring

- Use Vercel Analytics (free tier available)
- Monitor Core Web Vitals
- Track page load times

### Error Tracking

Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Vercel logs for API route debugging

### Regular Updates

```bash
# Update dependencies
npm outdated
npm update

# Check for security vulnerabilities
npm audit
npm audit fix
```

---

## 6. Alternative Deployment Platforms

### Netlify

Similar to Vercel, also free tier:

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables
5. Deploy

### Self-Hosted (VPS/Docker)

For complete control:

```bash
# Build for production
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "ictus-flow" -- start
```

---

## 7. Troubleshooting

### Build Failures

```bash
# Test build locally first
npm run build

# Check for TypeScript errors
npm run lint
```

### Contact Form Not Working

- Verify environment variables are set
- Check email service API key is valid
- Review API route logs in Vercel dashboard
- Test with curl/Postman

### Styling Issues

- Clear browser cache
- Verify Tailwind CSS is building correctly
- Check for CSP (Content Security Policy) issues

---

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Open an issue in this repository

---

**Production-First Reminder:**
Always test changes locally with `npm run build` before deploying to production.
Never commit `.env.local` to version control.
