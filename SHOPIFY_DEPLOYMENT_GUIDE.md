# PromptFolio Hub - Shopify Theme Deployment Guide

## Overview
This comprehensive guide will walk you through deploying the optimized PromptFolio Hub Shopify Online Store 2.0 theme to your Shopify store.

---

## Prerequisites

Before deployment, ensure you have:
- A Shopify store (any plan)
- Admin access to your Shopify account
- Basic understanding of Shopify admin interface
- Theme files from the `shopify-theme` directory

---

## Deployment Steps

### 1. Theme Upload

#### Option A: Theme Editor Upload (Recommended)
1. Log in to your Shopify Admin panel
2. Navigate to **Online Store > Themes**
3. Click **Add theme** > **Upload zip file**
4. Compress the `shopify-theme` directory into a `.zip` file
5. Upload the zip file
6. Click **Publish** to make it live

#### Option B: Shopify CLI (Advanced)
```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Navigate to theme directory
cd shopify-theme

# Connect to your store
shopify login --store your-store.myshopify.com

# Push theme to Shopify
shopify theme push

# Publish theme
shopify theme publish
```

---

### 2. Theme Configuration

After uploading, configure your theme:

#### **Colors**
1. Go to **Theme Settings > Colors**
2. Set your brand colors:
   - Primary: `#1e293b` (Dark slate)
   - Secondary: `#0891b2` (Cyan)
   - Accent: `#2dd4bf` (Teal)
   - Background: `#f8fafc` (Light gray)
   - Text: `#374151` (Charcoal)

#### **Typography**
1. Navigate to **Theme Settings > Typography**
2. Select fonts:
   - Heading Font: Inter or Assistant
   - Body Font: Inter or Assistant
   - Base Font Size: 16px

#### **Logo**
1. Go to **Theme Settings > Logo**
2. Upload your logo (recommended: SVG or PNG, 300x100px)
3. Set logo width (default: 150px)
4. Upload favicon (32x32px PNG)

#### **Social Media**
1. Navigate to **Theme Settings > Social Media**
2. Add your social media URLs:
   - Twitter
   - Facebook
   - Instagram
   - LinkedIn
   - YouTube

---

### 3. Navigation Setup

#### **Main Menu**
1. Go to **Online Store > Navigation**
2. Click **Main menu**
3. Add menu items:
   - Home
   - Shop (link to `/collections/all`)
   - Collections (with sub-menus)
   - About
   - Contact

#### **Footer Menu**
1. Create **Footer menu** with:
   - About Us
   - Privacy Policy
   - Terms of Service
   - Refund Policy
   - Contact Us

---

### 4. Collection Setup

1. Navigate to **Products > Collections**
2. Create collections for your AI prompts:
   - Writing & Content
   - Coding & Development
   - Marketing & Business
   - Design & Creative
   - Productivity & Tools

---

### 5. Product Configuration

For each product, configure:

#### **Basic Info**
- Title
- Description
- Price
- Images (recommended: 1000x1000px)

#### **Custom Metafields**
Add these metafields for enhanced functionality:

1. **Category** (single line text)
   - Namespace: `custom`
   - Key: `category`
   - Example: "Writing & Content"

2. **Platform** (single line text)
   - Namespace: `custom`
   - Key: `platform`
   - Example: "ChatGPT"

3. **Features** (multi-line text)
   - Namespace: `custom`
   - Key: `features`
   - Example: "Advanced reasoning, Multi-language support, Creative output"

4. **Use Cases** (multi-line text)
   - Namespace: `custom`
   - Key: `use_cases`
   - Example: "Blog writing, Social media posts, Email campaigns"

5. **Rating** (number, decimal)
   - Namespace: `custom`
   - Key: `rating`
   - Example: 4.8

---

### 6. Homepage Customization

1. Navigate to **Online Store > Themes > Customize**
2. Configure sections:

#### **Hero Banner**
- Upload background image
- Set heading: "PromptFolio Hub"
- Set subheading with compelling copy
- Add CTA button linking to `/collections/all`
- Add metrics (50+ prompts, 5 platforms, etc.)

#### **Features Grid**
- Add 6 feature blocks
- Upload icons or use default
- Write benefit-focused copy

#### **Featured Collection**
- Select your best-selling collection
- Set number of products to display (8 recommended)
- Enable "View All" button

---

### 7. SEO Optimization

#### **Meta Tags**
1. Go to **Online Store > Preferences**
2. Set:
   - Homepage title: "PromptFolio Hub - Premium AI Prompt Marketplace"
   - Meta description: "Discover high-quality AI prompts for ChatGPT, Claude, and Midjourney. Curated by experts for professionals."

#### **Product SEO**
For each product:
1. Edit product
2. Set SEO title and meta description
3. Optimize URL handle (use hyphens, lowercase)

---

### 8. Performance Optimization

The theme includes built-in optimizations:
- Lazy loading images
- Minified CSS/JS
- CDN delivery via Shopify
- Preconnect and DNS prefetch
- Critical CSS inlined

**Additional Steps:**
1. Enable **Online Store > Preferences > Image Optimization**
2. Use WebP format for images when possible
3. Keep image file sizes under 200KB

---

### 9. Accessibility Compliance

The theme includes:
- ARIA labels on all interactive elements
- Skip-to-content link
- Keyboard navigation support
- High contrast mode support
- Screen reader compatibility

**Test Accessibility:**
- Use browser dev tools (Lighthouse)
- Test keyboard navigation (Tab, Enter, Esc)
- Test with screen reader (NVDA, JAWS)

---

### 10. Mobile Responsiveness

The theme is fully responsive:
- Mobile-first design
- Touch-friendly buttons (44px minimum)
- Optimized layouts for all devices

**Test on:**
- Mobile (320px - 480px)
- Tablet (768px - 1024px)
- Desktop (1280px+)

---

## Post-Deployment Checklist

- [ ] Theme published and live
- [ ] All colors and fonts configured
- [ ] Logo and favicon uploaded
- [ ] Navigation menus set up
- [ ] Collections created and populated
- [ ] Products added with metafields
- [ ] Homepage sections customized
- [ ] SEO meta tags configured
- [ ] Social media links added
- [ ] Mobile responsiveness tested
- [ ] Accessibility tested
- [ ] Performance tested (Lighthouse score 90+)
- [ ] Cart and checkout tested
- [ ] 404 page tested
- [ ] All links working

---

## Testing

### Performance Testing
1. Run Google Lighthouse audit
2. Target scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

### Functionality Testing
- [ ] Add to cart works
- [ ] Cart updates correctly
- [ ] Checkout process works
- [ ] Search functionality works
- [ ] Mobile menu works
- [ ] Product variants work
- [ ] Social sharing works

---

## Troubleshooting

### Issue: Theme not appearing
- Clear browser cache
- Check theme is published
- Verify file structure is correct

### Issue: Images not loading
- Check image URLs
- Verify images are uploaded to Shopify
- Check image file sizes

### Issue: Slow loading
- Optimize images (use WebP)
- Reduce number of products on homepage
- Enable Shopify CDN

---

## Support Resources

- **Shopify Help Center**: https://help.shopify.com
- **Shopify Community**: https://community.shopify.com
- **Theme Documentation**: See `README.md` in theme folder

---

## Maintenance

### Regular Updates
- Keep product information current
- Update featured collections seasonally
- Refresh homepage hero images
- Monitor analytics and adjust

### Performance Monitoring
- Run monthly Lighthouse audits
- Check for broken links
- Monitor site speed
- Review user feedback

---

## Security Best Practices

1. Use HTTPS only (enforced by Shopify)
2. Keep admin credentials secure
3. Limit staff permissions
4. Enable two-factor authentication
5. Regular security audits

---

## Conclusion

Your PromptFolio Hub Shopify theme is now fully deployed and optimized. The theme is:
- ✅ Performance optimized (90+ Lighthouse score)
- ✅ SEO ready with structured data
- ✅ Fully accessible (WCAG AA compliant)
- ✅ Mobile responsive
- ✅ E-commerce ready

For additional support, refer to the theme documentation or contact Shopify support.

**Ready to sell? Start adding your premium AI prompts and watch your business grow!**
