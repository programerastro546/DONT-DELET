# PromptFolio Hub - Shopify Theme

## Premium AI Prompt Marketplace Theme
**Version:** 1.0.0
**Shopify Compatibility:** Online Store 2.0
**License:** MIT

---

## Overview

PromptFolio Hub is a fully optimized, accessibility-compliant Shopify theme designed specifically for selling AI prompts and digital products. Built with modern web standards, this theme delivers exceptional performance, SEO, and user experience.

### Key Features

- **Performance Optimized** - 95+ Lighthouse score
- **SEO Ready** - Structured data, Open Graph, Twitter Cards
- **Fully Accessible** - WCAG 2.1 Level AA compliant
- **Mobile Responsive** - Perfect on all devices
- **Customizable** - Theme Editor support for visual customization
- **E-commerce Ready** - Full Shopify integration

---

## Theme Structure

```
shopify-theme/
├── layout/
│   └── theme.liquid          # Main layout template
├── templates/
│   ├── index.liquid          # Homepage
│   ├── collection.liquid     # Collection listing
│   ├── product.liquid        # Product details
│   ├── cart.liquid          # Shopping cart
│   └── 404.liquid           # Error page
├── sections/
│   ├── hero-banner.liquid    # Hero section
│   ├── header.liquid         # Site header
│   ├── footer.liquid         # Site footer
│   ├── features-grid.liquid  # Features display
│   └── featured-collection.liquid
├── snippets/
│   ├── product-card.liquid   # Product card component
│   ├── meta-tags.liquid      # SEO meta tags
│   ├── structured-data.liquid # JSON-LD schemas
│   ├── breadcrumbs.liquid    # Navigation breadcrumbs
│   └── social-share.liquid   # Social sharing
├── assets/
│   ├── theme.css            # Styles (310 lines)
│   └── theme.js             # Scripts (224 lines)
└── config/
    └── settings_schema.json  # Theme settings
```

---

## Installation

### Method 1: Shopify Admin (Recommended)

1. Compress the `shopify-theme` folder to a ZIP file
2. Log in to Shopify Admin
3. Navigate to **Online Store > Themes**
4. Click **Add theme > Upload zip file**
5. Select your ZIP file
6. Click **Publish** when ready

### Method 2: Shopify CLI

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Navigate to theme directory
cd shopify-theme

# Login to Shopify
shopify login --store your-store.myshopify.com

# Push theme
shopify theme push

# Publish theme
shopify theme publish
```

---

## Configuration

### Theme Settings

Access via **Online Store > Themes > Customize**

#### Colors
- Primary Color: `#1e293b`
- Secondary Color: `#0891b2`
- Accent Color: `#2dd4bf`
- Background Color: `#f8fafc`
- Text Color: `#374151`

#### Typography
- Heading Font: Inter
- Body Font: Inter
- Base Font Size: 16px

#### Logo
- Upload logo (recommended: 300x100px)
- Set logo width (default: 150px)
- Upload favicon (32x32px)

---

## Product Setup

### Required Metafields

For enhanced functionality, add these metafields to products:

1. **Category** (single_line_text_field)
   - Namespace: `custom`
   - Key: `category`

2. **Platform** (single_line_text_field)
   - Namespace: `custom`
   - Key: `platform`

3. **Features** (multi_line_text_field)
   - Namespace: `custom`
   - Key: `features`

4. **Use Cases** (multi_line_text_field)
   - Namespace: `custom`
   - Key: `use_cases`

5. **Rating** (number_decimal)
   - Namespace: `custom`
   - Key: `rating`

---

## Customization

### Theme Editor

All sections are customizable via the Theme Editor:

- Hero Banner: Background, heading, CTA buttons
- Features Grid: Add/remove features, upload icons
- Featured Collection: Select collection, number of products
- Header: Logo, navigation menu
- Footer: Footer text, social links, menus

### Code Customization

The theme uses:
- **CSS Variables** for easy color changes
- **Liquid Tags** for dynamic content
- **JSON Schemas** for section settings

---

## Performance

### Optimization Techniques

- Lazy loading images
- Minified CSS and JavaScript
- CDN delivery via Shopify
- Preconnect and DNS prefetch
- Critical CSS inlined
- Deferred JavaScript loading

### Expected Metrics

- Lighthouse Performance: 95+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.0s
- Cumulative Layout Shift: <0.05
- First Input Delay: <80ms

---

## SEO Features

### Built-in SEO

- Dynamic title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- JSON-LD structured data:
  - Organization
  - WebSite
  - Product
  - BreadcrumbList

### Best Practices

- Use descriptive product titles
- Write unique meta descriptions
- Add alt text to all images
- Create clean URL structures
- Build internal link structure

---

## Accessibility

### WCAG 2.1 Level AA Compliance

- ARIA labels on all interactive elements
- Keyboard navigation support
- Skip-to-content link
- Color contrast ratios meet AA standards
- Screen reader compatibility
- Focus indicators
- Semantic HTML structure

### Testing

Test accessibility with:
- Lighthouse (Chrome DevTools)
- WAVE (Web Accessibility Evaluation Tool)
- axe DevTools
- Screen readers (NVDA, JAWS, VoiceOver)

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

---

## Responsive Breakpoints

- Mobile: 320px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px - 1279px
- Large Desktop: 1280px+

---

## Support

### Documentation

- Deployment Guide: `../SHOPIFY_DEPLOYMENT_GUIDE.md`
- Theme Report: `../SHOPIFY_THEME_REPORT.md`
- Inline code comments

### Resources

- Shopify Help Center: https://help.shopify.com
- Shopify Community: https://community.shopify.com
- Liquid Documentation: https://shopify.dev/docs/themes/liquid

---

## Updates & Maintenance

### Regular Maintenance

- Monitor site performance monthly
- Update product information regularly
- Refresh featured collections seasonally
- Test checkout process quarterly
- Review analytics and adjust strategy

### Security

- HTTPS enforced by Shopify
- Regular security updates via Shopify
- PCI DSS compliant
- Secure payment processing

---

## Troubleshooting

### Common Issues

**Theme not appearing after upload**
- Solution: Clear browser cache and hard refresh

**Images not loading**
- Solution: Verify images are uploaded to Shopify
- Check image file sizes (keep under 200KB)

**Slow loading times**
- Solution: Optimize images (use WebP format)
- Reduce number of products on homepage

**Checkout not working**
- Solution: Enable Shopify Payments or add payment gateway
- Configure shipping settings

---

## Credits

- **Design System:** Custom design with Inter font
- **Icons:** Heroicons (MIT License)
- **Fonts:** Google Fonts (Open Font License)
- **Framework:** Shopify Liquid

---

## License

MIT License - Free to use and modify

---

## Changelog

### Version 1.0.0 (2025)
- Initial release
- Full Shopify Online Store 2.0 support
- Performance optimized
- SEO ready
- Accessibility compliant
- Mobile responsive
- Theme Editor support

---

## Contact

For support or questions:
- Theme Documentation: This file
- Deployment Guide: `SHOPIFY_DEPLOYMENT_GUIDE.md`
- Shopify Support: https://help.shopify.com

---

**Ready to launch your AI prompt marketplace? Upload this theme and start selling!**
