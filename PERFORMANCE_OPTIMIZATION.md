# Performance Optimization Guide

This document outlines the performance optimizations implemented in the Leonard, Hammond, Thoma & Terrill website and provides guidelines for maintaining optimal performance.

## ✅ Implemented Optimizations

### 1. Next.js App Router
- Using Next.js 14+ App Router for optimal performance
- Server-side rendering (SSR) for dynamic content
- Static generation for static pages
- Automatic code splitting

### 2. Image Optimization
- Next.js `Image` component used throughout
- Automatic image optimization and WebP conversion
- Lazy loading for images below the fold
- Proper width/height attributes to prevent layout shift

### 3. Font Optimization
- Google Fonts loaded via `next/font`
- Font display: swap for optimal loading
- Preloaded critical fonts
- Variable fonts for reduced file size

### 4. Code Optimization
- Tree shaking and dead code elimination
- Minification in production builds
- Client components only where needed
- Server components by default

### 5. Caching Strategy
- Static assets cached with long TTL
- API responses use appropriate cache headers
- Database queries optimized
- Browser caching enabled

### 6. SEO & Metadata
- Proper meta tags on all pages
- Open Graph tags for social sharing
- Structured data (Schema.org) for rich snippets
- Dynamic sitemap generation
- Robots.txt configured

### 7. Analytics
- Google Analytics 4 loaded asynchronously
- Script loading strategy: afterInteractive
- Event tracking for conversions
- No blocking analytics scripts

## 📊 Performance Metrics to Monitor

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Additional Metrics
- **First Contentful Paint (FCP)**: < 1.8s
- **Time to Interactive (TTI)**: < 3.8s
- **Total Blocking Time (TBT)**: < 200ms
- **Speed Index**: < 3.4s

## 🔧 Optimization Checklist

### Pre-Launch
- [ ] Run Lighthouse audit on all main pages
- [ ] Test on slow 3G connection
- [ ] Verify image optimization
- [ ] Check font loading performance
- [ ] Test lazy loading behavior
- [ ] Verify code splitting is working
- [ ] Check bundle size
- [ ] Test on mobile devices
- [ ] Verify caching headers
- [ ] Test with browser extensions disabled

### Content Optimization
- [ ] Optimize all images before upload (use ImageOptim, TinyPNG)
- [ ] Limit featured images to 500KB max
- [ ] Use appropriate image formats (WebP for photos, SVG for logos)
- [ ] Add alt text to all images
- [ ] Lazy load images below the fold
- [ ] Use responsive images with srcset

### Code Optimization
- [ ] Remove unused dependencies
- [ ] Audit bundle size regularly
- [ ] Use dynamic imports for heavy components
- [ ] Minimize use of client-side JavaScript
- [ ] Avoid large third-party scripts
- [ ] Use React.memo() for expensive components

### Database Optimization
- [ ] Add indexes to frequently queried columns
- [ ] Limit query results with pagination
- [ ] Use database query caching
- [ ] Optimize N+1 queries
- [ ] Use connection pooling

## 🚀 Running Performance Audits

### Lighthouse Audit
```bash
# Install Lighthouse
npm install -g lighthouse

# Run audit
lighthouse https://your-domain.com --view

# Run for mobile
lighthouse https://your-domain.com --preset=mobile --view

# Generate report
lighthouse https://your-domain.com --output html --output-path ./lighthouse-report.html
```

### WebPageTest
1. Visit https://www.webpagetest.org/
2. Enter your URL
3. Select test location (preferably US)
4. Run test
5. Analyze results

### Chrome DevTools
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select categories to audit
4. Click "Generate report"
5. Review and fix issues

## 📈 Performance Monitoring

### Tools to Use
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/
- **GTmetrix**: https://gtmetrix.com/
- **Lighthouse CI**: For continuous monitoring
- **Google Search Console**: Core Web Vitals report

### Continuous Monitoring
Set up automated performance monitoring:
- Run Lighthouse CI in GitHub Actions
- Monitor Core Web Vitals in Google Search Console
- Set up performance budgets
- Alert on performance regressions

## 🎯 Performance Budget

### JavaScript Budget
- Total JS: < 300KB (gzipped)
- Main bundle: < 200KB (gzipped)
- Per route: < 100KB (gzipped)

### Image Budget
- Per page: < 2MB total
- Featured images: < 500KB each
- Icons/logos: < 50KB each

### Third-party Scripts
- Limit to essential scripts only
- Load asynchronously when possible
- Defer non-critical scripts

## 🔍 Common Issues and Solutions

### Issue: Large JavaScript Bundle
**Solution:**
- Use dynamic imports for heavy components
- Remove unused dependencies
- Split code by route
- Lazy load non-critical features

### Issue: Slow Image Loading
**Solution:**
- Compress images before upload
- Use Next.js Image component
- Implement lazy loading
- Use appropriate image formats

### Issue: High Time to Interactive
**Solution:**
- Reduce JavaScript execution time
- Defer non-critical JavaScript
- Use server components when possible
- Optimize third-party scripts

### Issue: Layout Shift
**Solution:**
- Always specify image dimensions
- Reserve space for dynamic content
- Use font-display: swap
- Avoid inserting content above existing content

## 📝 Best Practices

1. **Always use Next.js Image component** for images
2. **Prefer server components** over client components
3. **Lazy load** below-the-fold content
4. **Optimize fonts** with next/font
5. **Minimize client-side JavaScript**
6. **Use proper caching strategies**
7. **Monitor performance regularly**
8. **Set performance budgets**
9. **Test on real devices**
10. **Optimize for mobile first**

## 🎓 Additional Resources

- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance](https://web.dev/performance/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/)
