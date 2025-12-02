# Ictus Flow Website - Development Standards

## 🚨 MANDATORY: Production-First Development

**This applies to EVERY change, EVERY file, EVERY commit.**

### Core Principle
**NO WORKAROUNDS. NO TEMPORARY FIXES. EVERYTHING MUST WORK FIRST TIME.**

---

## Required Process for ALL Changes

### BEFORE Writing Any Code:

1. **PLAN the change completely**
   - What exactly needs to be done?
   - Which files/components are affected?
   - What are the dependencies?
   - What could go wrong?

2. **DESIGN for production**
   - No placeholders or "TODO" items that will ship
   - No mock data in production code
   - No hardcoded values that should be configurable
   - Proper error handling from the start

3. **ASSESS the risks**
   - Security implications?
   - Performance impact?
   - Breaking changes?
   - Edge cases covered?

4. **PRESENT the plan**
   - Explain the approach before implementing
   - Get confirmation on architectural decisions
   - Highlight any trade-offs or concerns

### DURING Implementation:

- ✅ Write production-ready code immediately
- ✅ Handle all error cases gracefully
- ✅ Use proper TypeScript types (no `any`)
- ✅ Validate all inputs and sanitize outputs
- ✅ Consider mobile/responsive design
- ✅ Follow accessibility standards
- ✅ Write clear, self-documenting code

### FORBIDDEN Practices:

- ❌ setTimeout/setInterval to "fix" timing issues (fix the root cause)
- ❌ Empty catch blocks
- ❌ Hardcoded credentials or secrets
- ❌ Disabled linting rules without justification
- ❌ console.log in production builds
- ❌ Commented-out code
- ❌ Copy-paste without understanding
- ❌ "Works on my machine" solutions
- ❌ Placeholder text/images in production
- ❌ Incomplete features

### VERIFICATION Before Completion:

- [ ] Works as intended in all scenarios
- [ ] Handles errors gracefully
- [ ] No console errors or warnings
- [ ] TypeScript compiles without errors
- [ ] No security vulnerabilities introduced
- [ ] Performance is acceptable
- [ ] Responsive design works
- [ ] Code is clean and documented where needed

---

## Project-Specific Standards

### React Components
- Use functional components with hooks
- Proper prop typing with TypeScript
- Extract reusable logic into custom hooks
- Keep components focused and single-purpose

### State Management
- Use appropriate state level (local, context, global)
- Avoid prop drilling with context when needed
- Keep state minimal and derived data computed

### Styling
- Use Tailwind CSS consistently
- Follow the existing design system
- Ensure responsive breakpoints work
- Test on mobile and desktop

### API Integration
- Never hardcode API endpoints
- Use environment variables properly
- Handle loading, error, and success states
- Implement proper error messages for users

### Performance
- Lazy load components where appropriate
- Optimize images and assets
- Minimize bundle size
- Monitor and optimize re-renders

---

## Decision Framework

When unsure, ask:
1. **Is this production-ready?** → If no, it's not done
2. **Will this scale?** → If no, redesign it
3. **Is this secure?** → If unsure, research it
4. **Will this fail gracefully?** → If no, add error handling
5. **Would I trust this with real customer data?** → If no, keep working

---

## Remember

**Quality > Speed. Working correctly once > Patching five times.**

**Measure twice, cut once. Plan thoroughly, implement confidently, deploy without fear.**

---

## Pre-Deployment Checklist

Complete these tasks before deploying to production:

### Critical (Must Fix)
- [ ] Integrate email service (Resend/SendGrid) for contact form - submissions currently go nowhere
- [ ] Fix Tailwind dynamic class generation - delay classes like `delay-[${index * 100}ms]` won't work in production

### High Priority
- [ ] Remove console.log statements from `src/app/api/contact/route.ts` (lines 66 & 83)
- [ ] Verify all images exist in `/public/images/` (glass-building.png, steel-structure.png, etc.)

### Medium Priority
- [ ] Implement rate limiting on contact API (env vars defined but not enforced)

### Low Priority
- [ ] Update footer social links with real URLs (currently all `#`)
- [ ] Consider disabling parallax/magnetic effects on touch devices

---

_This file is automatically loaded by Claude Code for every interaction. All guidelines here are mandatory and apply to every change made to this project._
