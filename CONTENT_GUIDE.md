# Content Extraction Guide for Dr. Maya Reynolds Profile

## 📋 How to Use This Guide

1. Open Dr. Maya Reynolds' profile document
2. Extract information for each section below
3. Update the corresponding component file
4. Follow SEO best practices (include location + specialty keywords)

---

## 1. HERO SECTION
**File**: `components/Hero.tsx`

### What to Extract:
- [ ] Main specialty/focus area
- [ ] Location (city, state)
- [ ] Primary client population

### SEO Keywords to Include:
- Specialty + Location (e.g., "Trauma Therapy Portland")
- Type of therapy (e.g., "EMDR", "Anxiety Treatment")

### Current Placeholder:
```
Healing from trauma, one step at a time
EMDR & trauma-focused therapy for adults in Portland, OR
```

### Update With:
- H1: [Main specialty] + [Main approach] for [client population] in [Location]
- Subheading: [Brief description of services]

---

## 2. INTRO SECTION
**File**: `components/Intro.tsx`

### What to Extract:
- [ ] Main challenges clients face
- [ ] Therapist's core message/philosophy
- [ ] How therapy can help

### Current Placeholder:
```
You deserve to feel whole again.
[Description of how trauma/anxiety affects people]
```

### Update With:
- Headline reflecting empathy and understanding
- 2-3 paragraphs describing client struggles and how you help
- Based on "Statement" or "About Me" section in profile

---

## 3. SERVICES SECTION
**File**: `components/Services.tsx`

### What to Extract from Profile:
- [ ] List ALL treatment modalities mentioned
- [ ] List ALL specialties
- [ ] Select TOP 3 most important services

### Services to Choose From Profile:
Look for sections like:
- Treatment Approach
- Modalities
- Specialties
- Issues Treated

### For Each Service, Write:
- **Title**: Name of service/modality
- **Description**: (2-3 sentences)
  - What it is
  - Who it helps
  - What outcomes to expect

### SEO Tips:
- Use full names first time (e.g., "Eye Movement Desensitization and Reprocessing (EMDR)")
- Include keywords like "therapy," "treatment," "counseling"

---

## 4. CALL TO ACTION SECTION
**File**: `components/CallToAction.tsx`

### What to Extract:
- [ ] Common symptoms/issues clients present with
- [ ] Issues treated (from profile)

### Update the symptoms list with 5-7 items from profile:
Current placeholder includes:
- Persistent feelings of fear or panic
- Intrusive thoughts or flashbacks
- etc.

Replace with actual issues from "Issues" or "Specialties" section

---

## 5. ABOUT SECTION
**File**: `components/About.tsx`

### What to Extract:
- [ ] Years of experience
- [ ] Educational background (degrees, institutions)
- [ ] Training and specializations
- [ ] Therapeutic approach/philosophy
- [ ] Personal touch (hobbies, interests, values)

### Structure:
**Paragraph 1**: Who you are, credentials, years of experience
**Paragraph 2**: Education and specialized training
**Paragraph 3**: Therapeutic philosophy and approach
**Paragraph 4**: Personal touch (optional but recommended)

### Profile Sections to Check:
- About Me / Statement
- Education
- Licenses & Certifications
- Professional Background

---

## 6. OUR OFFICE SECTION
**File**: `components/OurOffice.tsx`

### What to Extract:
- [ ] Office location (neighborhood, city)
- [ ] Office photos (if available in profile)
- [ ] Parking/accessibility information
- [ ] In-person vs telehealth availability
- [ ] Office hours

### Update:
- Office location description
- 2-3 office photos
- Practical details (parking, public transit)
- Session format options

---

## 7. FAQ SECTION
**File**: `components/FAQ.tsx`

### Questions to Update Based on Profile:

#### Insurance:
- [ ] Does profile mention insurance accepted?
- [ ] Out-of-network provider?
- [ ] Superbill information

#### Rates:
- [ ] Individual session rate
- [ ] Initial consultation rate
- [ ] Sliding scale availability

#### Session Format:
- [ ] In-person availability
- [ ] Telehealth availability
- [ ] States licensed in

#### Other FAQs:
- [ ] Treatment length/duration
- [ ] First session expectations
- [ ] Current availability

---

## 8. CREDENTIALS SECTION
**File**: `components/Credentials.tsx`

### Education:
- [ ] Doctoral degree (PsyD, PhD, etc.) - Institution, Year
- [ ] Master's degree - Institution, Year
- [ ] Bachelor's degree - Institution, Year

### Licensure:
- [ ] License type (e.g., Licensed Clinical Psychologist)
- [ ] License number
- [ ] State(s) licensed in
- [ ] Year first licensed

### Certifications:
- [ ] EMDR training/certification
- [ ] Other specialized certifications
- [ ] Additional training programs
- [ ] Professional memberships

### Profile Sections to Check:
- Education
- Licenses
- Certifications
- Training Programs

---

## 9. CONTACT SECTION
**File**: `components/Contact.tsx`

### What to Extract:
- [ ] Preferred contact method
- [ ] Email address
- [ ] Phone number
- [ ] Response time expectation

### Update:
```tsx
<a href="mailto:[ACTUAL EMAIL]">
<a href="tel:[ACTUAL PHONE]">
```

---

## 10. FOOTER
**File**: `components/Footer.tsx`

### What to Extract:
- [ ] Office address (full)
- [ ] Suite/building number
- [ ] City, State, ZIP
- [ ] Email
- [ ] Phone
- [ ] Office hours
- [ ] Days available

---

## 11. SEO METADATA
**File**: `app/layout.tsx`

### Current Meta Tags:
```tsx
title: 'Dr. Maya Reynolds, PsyD | Trauma & Anxiety Therapy in Portland, OR'
description: 'Licensed psychologist specializing in trauma, anxiety, and EMDR therapy...'
```

### Update With:
- **Title**: [Name], [Credentials] | [Main Specialty] in [City], [State]
- **Description**: [Credentials] specializing in [specialty 1], [specialty 2], and [specialty 3]. [Approach] treatment for [client population] in [City], [State].

### SEO Keywords to Include:
- Therapist name
- Location (city + state)
- Main specialties (2-3)
- Treatment modalities
- Client population

---

## 📸 IMAGE REQUIREMENTS

### Images Needed:
1. **Hero Image**: Professional headshot or portrait (3:4 aspect ratio)
2. **Intro Section**: Lifestyle/wellness image
3. **Services (3 images)**: One for each service
4. **Call to Action**: Calm, contemplative image
5. **About Section**: 
   - Main professional photo
   - Decorative second image
6. **Our Office (2-3 images)**:
   - Therapy room
   - Waiting area
   - Office exterior (optional)
7. **FAQ Section**: Calming nature or abstract image

### Image Sources:
- Check Dr. Reynolds' profile for actual office photos
- Use high-quality, professional therapy/wellness stock images
- Ensure all images match the warm, earthy color palette
- All images should convey safety, calm, and professionalism

---

## ✅ FINAL CHECKLIST

Before considering the project complete:

- [ ] All placeholder text replaced with profile content
- [ ] All images replaced with appropriate photos
- [ ] Contact information updated (email, phone, address)
- [ ] SEO optimized (location + specialty keywords in headings)
- [ ] Services section reflects actual modalities from profile
- [ ] About section uses actual bio information
- [ ] FAQ section has accurate information
- [ ] Credentials section lists actual education/licenses
- [ ] Office section has real office details
- [ ] All links work correctly
- [ ] Mobile responsive on all screens
- [ ] Tested on multiple browsers

---

## 🎯 Priority Order

1. **HIGH PRIORITY**:
   - Contact information (email, phone)
   - Services descriptions
   - About bio
   - Hero headline

2. **MEDIUM PRIORITY**:
   - FAQ content
   - Credentials
   - Office details
   - SEO metadata

3. **LOWER PRIORITY**:
   - Images (can use placeholders temporarily)
   - Secondary page content
   - Legal pages

---

## Need Help?

If any information is missing from the profile:
1. Use your best judgment to write appropriate content
2. Keep tone warm, professional, and empathetic
3. Focus on client needs and benefits
4. Maintain consistency with overall messaging
5. Add [PLACEHOLDER - VERIFY] notes for items to confirm later
