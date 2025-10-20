# Streamlyne Landing Page - TODO

## SEO & Marketing Setup

### High Priority

- [ ] **Create OG Image** (`/public/og-image.png`)
  - Size: 1200x630 pixels (PNG or JPG)
  - Content suggestions:
    - Streamlyne logo prominently displayed
    - Tagline: "Your Creative Hub" or "All-in-One Workspace for Content Creators"
    - Key value proposition: "Stop Juggling Tools"
    - Target audience: "For YouTubers & Bloggers"
    - Feature highlights: "Store Assets • Write Notes • Plan Content"
    - Visual elements: Icons for notes, folders, calendar
    - Background: Use brand colors (purple/blue theme)
  - Tools: Figma, Canva, Photoshop, or online OG image generators
  - Reference: When shared on Twitter/X, Facebook, LinkedIn, Discord, Slack, WhatsApp

- [X] **Set Environment Variable**
  - Add to `.env.local`: `NEXT_PUBLIC_SITE_URL=https://streamlyne.in`
  - This ensures all URLs use the correct domain

- [ ] **Generate Sitemap**
  - Run `pnpm postbuild` after building to generate sitemap
  - Sitemap will be created at `/public/sitemap.xml`

- [ ] **Deployment**
  - Make deployment as part of every branch - preview
  - merge to main branch deploys to production
  - make sure streamlyne.in domain is connected.
  - make sure its ssl enabled - https  

### Post-Launch

- [ ] **Google Search Console**
  - Submit your sitemap: `https://streamlyne.in/sitemap.xml`
  - Verify domain ownership
  - Monitor search performance

- [ ] **Schema Validation**
  - Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
  - Validate structured data (Organization, Website, SoftwareApplication schemas)
  - Fix any validation errors

- [ ] **Social Media Verification**
  - Test OG image on [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - Test on [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - Test on [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Content & Assets

- [ ] **Replace Placeholder Content**
  - Product screenshots (if using Product Preview section)
  - Replace `/public/placeholder-screenshot-*.png` with actual screenshots

- [ ] **Brand Assets**
  - Ensure `/public/assets/brand/logo.png` is optimized for web
  - Consider creating dark mode version if needed (optional)

## Future Enhancements

- [X] **Analytics Setup**
  - Using Vercel Analytics (integrated via Vercel dashboard)

- [ ] **Email Collection** (Optional)
  - Add waitlist/early access form if planning to collect emails before launch
  - Integrate with email service provider (Mailchimp, ConvertKit, etc.)

- [ ] **Blog/Docs Section** (Post-Launch)
  - Create `/app/blog` or `/app/docs` if planning integration guides
  - Set up content management (MDX, Contentlayer, or CMS)

- [ ] **Customer Testimonials** (Post-Launch)
  - Add testimonials section once users start reviewing
  - Include social proof (user avatars, names, roles)

- [ ] **Performance Optimization**
  - Run Lighthouse audit
  - Optimize images (use WebP format)
  - Check Core Web Vitals

## Development Notes

- Domain: `streamlyne.in` (marketing landing page)
- App Domain: `app.streamlyne.in` (will host the actual app)
- Target Audience: YouTubers, bloggers, content creators
- Main Pain Points: Juggling Google Drive, Notion, Obsidian for content workflow
- Brand: Personal brand under Priyak Dey
- Twitter/X: [@DeyPriyak](https://x.com/DeyPriyak)
- GitHub: [priyakdey](https://github.com/priyakdey)

---

## Completed ✓

- [x] Update SEO metadata with correct domain (`streamlyne.in`)
- [x] Add comprehensive keywords for content creators
- [x] Add JSON-LD structured data (Organization, Website, SoftwareApplication)
- [x] Add canonical URLs to all pages
- [x] Create robots.txt file
- [x] Update sitemap configuration
- [x] Configure favicon and web manifest
- [x] Add mobile hamburger menu
- [x] Create Privacy and Terms pages (under construction)
- [x] Create custom 404 page
- [x] Add Inter font from Google Fonts
- [x] Implement smooth scrolling
- [x] Add hover animations to feature cards
- [x] Update footer with correct social links
