# 🚀 Complete Setup & Deployment Guide

## Dr. Maya Reynolds Therapy Website

---

## 📦 What You've Received

This is a **complete, production-ready Next.js website** that replicates the Lilac Squarespace template, redesigned for Dr. Maya Reynolds' therapy practice.

### ✅ What's Complete:
- [x] Full Next.js 14 setup with TypeScript
- [x] Tailwind CSS with custom color palette
- [x] All 10 sections (including new "Our Office" section)
- [x] Fully responsive design
- [x] Custom fonts (Cormorant Garamond + Lato)
- [x] Collapsible FAQ and Credentials sections
- [x] Professional footer
- [x] SEO-optimized structure

### ⚠️ What You Need to Do:
- [ ] Install dependencies (`npm install`)
- [ ] Access Dr. Maya Reynolds' profile
- [ ] Replace ALL placeholder content
- [ ] Add real images
- [ ] Update contact information
- [ ] Test and deploy

---

## 🛠️ Initial Setup (5 minutes)

### Step 1: Install Dependencies

```bash
cd therapist-website
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS 3.4
- TypeScript
- All necessary dependencies

### Step 2: Start Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

You should see the website with placeholder content!

---

## 📝 Content Replacement (Most Important!)

### CRITICAL: You MUST replace placeholder content

The website currently shows generic content. Here's your workflow:

### 1. Open Dr. Maya Reynolds' Profile
Access: https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit

### 2. Use the Content Guide
Open `CONTENT_GUIDE.md` - it tells you EXACTLY what to extract and where to put it.

### 3. Replace Content Section by Section

Work through each component file:

```
components/
├── Hero.tsx           ← Update headline, location, CTA
├── Intro.tsx          ← Update philosophy, approach
├── Services.tsx       ← Add 3 services from profile
├── CallToAction.tsx   ← Update symptoms list
├── About.tsx          ← Replace entire bio
├── OurOffice.tsx      ← Add office details
├── FAQ.tsx            ← Update all Q&As
├── Credentials.tsx    ← Add education, licenses
├── Contact.tsx        ← Update email, phone
└── Footer.tsx         ← Update address, hours
```

### 4. Priority Order

**Do This First:**
1. Contact info (Footer.tsx, Contact.tsx)
2. Hero headline (Hero.tsx)
3. About bio (About.tsx)
4. Services (Services.tsx)

**Then Do:**
5. FAQ answers (FAQ.tsx)
6. Credentials (Credentials.tsx)
7. Office details (OurOffice.tsx)

**Finally:**
8. SEO metadata (app/layout.tsx)
9. All images

---

## 🖼️ Adding Images

### Current State:
All images are placeholders with colored backgrounds and text.

### How to Add Real Images:

#### Option 1: Using Local Images

1. Save images to `public/images/`
2. Update component with Next.js Image:

```tsx
import Image from 'next/image';

// Find the placeholder div and replace with:
<Image
  src="/images/hero-main.jpg"
  alt="Dr. Maya Reynolds, Licensed Psychologist"
  fill
  className="object-cover"
  priority
/>
```

#### Option 2: Using External URLs (Unsplash, etc.)

1. Update `next.config.js` to allow the domain
2. Use full URL in src:

```tsx
<Image
  src="https://images.unsplash.com/photo-xyz"
  alt="Description"
  fill
  className="object-cover"
/>
```

### Images You Need:
See `public/images/README.md` for complete list and specifications.

**Minimum Required:**
- 1 hero photo (Dr. Reynolds)
- 1 about photo (Dr. Reynolds)
- 3 service images
- 2 office photos

---

## 🎨 Customizing Colors (Already Done!)

The color palette has been updated from lilac to warm, earthy tones:

- **Primary**: Sage green (#4a7d76)
- **Secondary**: Warm beige (#b89b7d)
- **Accent**: Soft coral (#ffa764)

If you want to change colors, edit `tailwind.config.ts`.

---

## 📱 Testing Responsiveness

### Test on Multiple Devices:

1. **Desktop**: Full-width layout
2. **Tablet** (768px): Two-column grids collapse
3. **Mobile** (<768px): Single column, hamburger menu

### Using Browser DevTools:
1. Right-click → Inspect
2. Click device toggle icon
3. Test: iPhone, iPad, Desktop

---

## 🔍 SEO Optimization

### Update Meta Tags

File: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | [Specialty] in [City], [State]',
  description: 'Licensed psychologist specializing in [specialty 1], [specialty 2]...',
}
```

### SEO Keywords to Include:
- Therapist name
- Location (Portland, OR)
- Main specialties (trauma, anxiety, EMDR)
- Treatment modalities
- "licensed psychologist"

### In Headings:
Make sure H1 includes: Specialty + Location
Example: "EMDR Therapy for Trauma Recovery in Portland, OR"

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free)

1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy automatically

### Option 2: Netlify

1. Push code to GitHub
2. Go to netlify.com
3. Connect repository
4. Deploy

### Option 3: Traditional Hosting

```bash
npm run build
```

Upload the `.next` folder and `public` folder to your server.

---

## ✅ Pre-Deployment Checklist

### Content:
- [ ] All placeholder text replaced
- [ ] Contact info updated (email, phone, address)
- [ ] Services match profile
- [ ] About bio is accurate
- [ ] FAQ has real answers
- [ ] Credentials are correct

### Images:
- [ ] Hero image added
- [ ] About image added
- [ ] All service images added
- [ ] Office photos added
- [ ] All images optimized

### Technical:
- [ ] All links work
- [ ] Mobile responsive
- [ ] Desktop responsive
- [ ] Forms work (if any)
- [ ] No console errors

### SEO:
- [ ] Meta title updated
- [ ] Meta description updated
- [ ] H1 has location keyword
- [ ] Alt text on all images

### Legal:
- [ ] Privacy policy page
- [ ] Good faith estimate
- [ ] Terms & conditions
- [ ] Disclaimer

---

## 🔧 Common Issues & Solutions

### Issue: "npm install" fails
**Solution**: Make sure Node.js 18+ is installed
```bash
node --version  # Should be 18.0.0 or higher
```

### Issue: Port 3000 already in use
**Solution**: Use a different port
```bash
npm run dev -- -p 3001
```

### Issue: Images not loading
**Solution**: 
1. Check file path is correct
2. Check file is in `public/images/`
3. Check image format (jpg, png, webp)

### Issue: Styles not applying
**Solution**: Restart dev server
```bash
# Press Ctrl+C to stop
npm run dev
```

---

## 📚 Additional Resources

### Documentation:
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

### Free Images:
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com

### Tools:
- Image Optimization: https://tinypng.com
- Color Palette: https://coolors.co
- Fonts: https://fonts.google.com

---

## 🎯 Your Assignment Deliverables

To complete this assignment, you must:

### Part 1: Clone ✅ DONE
- Layout matches original template
- Fully responsive
- All sections present

### Part 2: Redesign (YOUR WORK)
- [ ] Extract content from Dr. Maya Reynolds' profile
- [ ] Replace all copy based on profile
- [ ] Update color theme (✅ Already done)
- [ ] Change fonts (✅ Already done)
- [ ] Add relevant images
- [ ] SEO optimize with location keywords

### Part 3: Custom Section ✅ DONE
- "Our Office" section created
- [ ] Add actual office photos
- [ ] Update with real office details

---

## 💡 Pro Tips

1. **Work in Order**: Do high-priority items first (contact info, hero, about)
2. **Save Often**: Use Git to commit changes regularly
3. **Test Frequently**: Check on mobile after each major change
4. **Ask for Feedback**: Have someone else review before deploying
5. **Keep it Simple**: Don't over-complicate; the design is already strong

---

## 🆘 Need Help?

### If You Get Stuck:

1. **Check the CONTENT_GUIDE.md**: Detailed extraction instructions
2. **Check README.md**: Overview and checklist
3. **Check Component Files**: Lots of comments explaining what to change
4. **Google Error Messages**: Most Next.js errors are well-documented
5. **Ask for Help**: Share specific error messages or issues

---

## 🎊 You're Ready!

Everything is set up and ready to go. The hard part (coding the entire website) is done. Now you just need to:

1. Run `npm install`
2. Run `npm run dev`
3. Replace placeholder content with Dr. Reynolds' info
4. Add images
5. Deploy

**You've got this!** 🚀

Good luck with your assignment! The foundation is solid - now make it uniquely Dr. Reynolds' website.

---

## 📞 Quick Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

**Local Development URL**: http://localhost:3000

**Checklist Files**:
- README.md (Overview)
- CONTENT_GUIDE.md (What to extract from profile)
- public/images/README.md (Image specifications)
- This file (SETUP_GUIDE.md) - Complete walkthrough
