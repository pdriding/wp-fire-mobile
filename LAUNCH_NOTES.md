# 🚀 WP Fire Website - Launch Notes

## ⚠️ CRITICAL: Replace These Placeholders Before Launch

### 📞 Contact Information
**Current Placeholders → Replace With Actual Business Info**

- **Phone Numbers**: 
  - Header: `0333 880 2993` → `[ACTUAL_PHONE_NUMBER]`
  - Footer: `0333 880 2993` → `[ACTUAL_PHONE_NUMBER]`
  - Contact Form: `0333 880 2993` → `[ACTUAL_PHONE_NUMBER]`

- **Email Addresses**:
  - Contact: `info@wpfire.co.uk` → `[ACTUAL_EMAIL]`
  - SendGrid FROM: `noreply@wpfire.co.uk` → `[ACTUAL_FROM_EMAIL]`
  - SendGrid TO: `info@wpfire.co.uk` → `[ACTUAL_TO_EMAIL]`

- **Business Address**:
  - Current: `8 The Lindens, Stock, Ingatestone, CM4 9NH`
  - Replace with: `[ACTUAL_BUSINESS_ADDRESS]`

### 🏢 Business Information
**Files to Update**: `app/layout.js` (JSON-LD schema)

- **Business Name**: `WP Fire` → `[ACTUAL_BUSINESS_NAME]`
- **Description**: Update service descriptions
- **Opening Hours**: `Mo-Fr 08:00-18:00` → `[ACTUAL_HOURS]`
- **Service Area**: Update geographic coordinates
- **Founding Date**: `2022` → `[ACTUAL_FOUNDING_DATE]`

### 🖼️ Images Required
**Create and Replace These Images**:

1. **OG Images** (1200x630px):
   - `public/images/og-image.jpg` - Main homepage image
   - `public/images/og-services.jpg` - Services page image
   - Include business logo, professional imagery, contact info

2. **Logo Updates**:
   - `public/images/wp-fire-logo-removebg.png` - Main logo
   - `public/images/fire-accreditation.png` - Accreditation logo
   - Ensure high resolution and proper transparency

3. **Service Images**:
   - Update alt text for all images in `public/images/`
   - Ensure images are optimized (WebP/AVIF format recommended)

### 📝 Content Updates
**Replace Placeholder Content**:

1. **Testimonials** (`components/ContactForm.js`):
   ```javascript
   // Replace these placeholder testimonials
   "WP Fire installed our fire alarm system quickly and professionally..."
   "Excellent service from start to finish..."
   ```

2. **Certifications** (`components/AboutSection.js`):
   - Update certification list
   - Add actual license numbers
   - Include real accreditation logos

3. **Service Descriptions** (`app/services/page.js`):
   - Update service lists
   - Add specific service details
   - Include pricing information (if applicable)

### 🔗 Social Media Links
**Update Footer Social Links** (`components/Footer.js`):

- Instagram: `https://www.instagram.com/wpfire` → `[ACTUAL_INSTAGRAM_URL]`
- Facebook: `https://www.facebook.com/wpfire` → `[ACTUAL_FACEBOOK_URL]`
- Twitter: `https://twitter.com/wpfire` → `[ACTUAL_TWITTER_URL]`

### 🌐 Domain & URLs
**Update Throughout Codebase**:

- **Domain**: `wpfire.co.uk` → `[ACTUAL_DOMAIN]`
- **Site URL**: `https://wpfire.co.uk` → `https://[ACTUAL_DOMAIN]`
- **Sitemap**: Update `public/sitemap.xml`
- **Robots.txt**: Update `public/robots.txt`

### 🔧 Technical Configuration

#### Environment Variables (`.env.local`):
```env
# REQUIRED - Get from SendGrid
SENDGRID_API_KEY=[ACTUAL_SENDGRID_API_KEY]
FROM_EMAIL=[ACTUAL_FROM_EMAIL]
TO_EMAIL=[ACTUAL_TO_EMAIL]

# OPTIONAL
SEND_AUTO_REPLY=true
GOOGLE_VERIFICATION_CODE=[ACTUAL_GOOGLE_CODE]
PLAUSIBLE_SITE_ID=[ACTUAL_DOMAIN]
```

#### Google Services:
- **Google Search Console**: Add verification code
- **Google Analytics**: Add tracking ID (optional)
- **Google Maps**: Add API key for contact page map

### 📊 SEO & Analytics Setup

1. **Google Search Console**:
   - Add property for your domain
   - Submit sitemap: `https://[YOUR_DOMAIN]/sitemap.xml`
   - Add verification code to layout.js

2. **Google Analytics** (Optional):
   - Create GA4 property
   - Add tracking code to layout.js
   - Set up conversion tracking for contact form

3. **Social Media Verification**:
   - Verify domain with Facebook/Meta
   - Set up Twitter Card validation
   - Test Open Graph images

### 🧪 Pre-Launch Testing

#### Contact Form Testing:
```bash
# Test locally
curl -X POST http://localhost:3000/api/send-contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "01234567890", 
    "message": "Test message",
    "service": "fire-alarm-installation"
  }'
```

#### Accessibility Testing:
- Run Lighthouse accessibility audit
- Test with screen reader
- Verify keyboard navigation
- Check color contrast ratios

#### Performance Testing:
- Run Lighthouse performance audit
- Test on mobile devices
- Check Core Web Vitals
- Verify image optimization

### 🚀 Deployment Checklist

#### Netlify Deployment:
- [ ] Connect Git repository
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `.next`
- [ ] Add all environment variables
- [ ] Configure custom domain
- [ ] Enable HTTPS
- [ ] Test contact form in production

#### Final Verification:
- [ ] All placeholder content replaced
- [ ] Contact form working in production
- [ ] All links functional
- [ ] Images loading correctly
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags correct
- [ ] Analytics tracking (if implemented)

### 📞 Support & Maintenance

#### Post-Launch Monitoring:
- Monitor contact form submissions
- Check for broken links
- Review analytics data
- Monitor Core Web Vitals
- Check for security updates

#### Regular Updates:
- Update testimonials quarterly
- Refresh service images annually
- Update certifications as needed
- Monitor and update dependencies

---

## 🎯 Success Metrics

### Launch Goals:
- **Contact Form**: 100% functional with <2 second response time
- **Performance**: Lighthouse scores 90+ across all categories
- **Accessibility**: WCAG AA compliance verified
- **SEO**: All meta tags and structured data implemented
- **Mobile**: Perfect mobile experience across all devices

### Post-Launch KPIs:
- Contact form conversion rate
- Page load speeds
- Mobile usability scores
- Search engine rankings
- User engagement metrics

---

**⚠️ IMPORTANT**: Do not launch until ALL placeholders are replaced with actual business information. This ensures professional presentation and proper functionality.

**📅 Launch Date**: [TO_BE_DETERMINED]  
**👤 Responsible**: [DEVELOPMENT_TEAM]  
**✅ Status**: Ready for content updates



