# Murrieta General Construction Website Specification

**Version:** 1.1
**Last Updated:** February 2026
**Status:** Ready for Development

---

## 1. Project Overview

### Business Profile
- **Company:** Murrieta General Construction
- **Type:** Full-service general contractor
- **Location Focus:** Long Beach and surrounding areas of Los Angeles County, CA
- **Audience:** Homeowners (35-65) planning renovations, additions, or new builds; property investors; small commercial clients

### Goals
| Priority | Goal | Metric |
|----------|------|--------|
| Primary | Generate phone calls | Click-to-call events |
| Primary | Capture quote requests | Form submissions |
| Secondary | Build credibility | Time on site, pages per session |

### Primary CTA
**"Get Your Free Estimate"** — drives to phone call or contact form

### Secondary CTA
**"Call Now: (562) 786-0682"** — persistent in header and mobile bar

### Success Criteria (Definition of Done)
- [ ] All 5 pages deployed and functional
- [ ] Contact form submits to email/CRM
- [ ] Click-to-call works on mobile
- [ ] Page load under 3s on mobile
- [ ] All meta tags populated
- [ ] Google Analytics/Tag Manager installed
- [ ] Mobile-responsive at all breakpoints

---

## 2. Brand & Tone

### Brand Adjectives
1. **Dependable** — We show up and follow through
2. **Experienced** — Decades of local expertise
3. **Straightforward** — No runaround, clear communication
4. **Quality-Focused** — Craftsmanship that lasts
5. **Local** — Your neighbors, invested in this community

### Voice Guidelines

**Sound Like:**
- A trusted neighbor who happens to be a master builder
- Confident but not boastful
- Clear and direct — respect the reader's time
- Warm but professional
- Specific, not generic — use real numbers, real places, real details

**Avoid:**
- Corporate jargon ("synergy," "solutions-oriented")
- Pushy sales language ("Act now!", "Limited time!")
- Vague claims without substance ("trusted," "quality" without proof)
- Overly casual or slangy tone
- Clichés ("Our work speaks for itself," "Built on trust")

### Trust Positioning
- Lead with **licensed, bonded, insured** credentials
- Emphasize **local presence** (Long Beach-based, not a franchise)
- Highlight **longevity** (years in business, projects completed)
- Show **real work** (local project photos, not stock images)
- Feature **verified reviews** (Google, Yelp ratings) with link to source
- Include **owner photo** — put a face to the company
- Mention **written warranty** prominently

---

## 3. Site Architecture

| Route | Purpose | Primary CTA |
|-------|---------|-------------|
| `/` (Home) | First impression, trust, lead capture | Get Your Free Estimate |
| `/services` | Detail service offerings, qualify leads | Get Your Free Estimate |
| `/about` | Build trust through story and credentials | Call or Request Callback |
| `/projects` | Showcase quality through visual proof | Have Questions About This? |
| `/contact` | Convert ready visitors | Submit form / Call |

### Navigation Order
`Home` · `Services` · `Projects` · `About` · `Contact`

---

## 4. Page-by-Page Content

---

### HOME PAGE (`/`)

#### Section 1: Hero
**Headline:**
> Long Beach Remodeling & Builds, Done Right.

**Subheadline:**
> From kitchen remodels to custom builds — licensed, insured, and on your schedule. Not ours.

**CTA Button:** Get Your Free Estimate
**Secondary CTA:** Call (562) 786-0682

**Visual:** Photo of owner/team on job site or completed local project (not stock)

---

#### Section 2: Trust Bar
**Items (inline):**
- Licensed & Insured (Lic. #XXXXXX)
- 25+ Years in Long Beach
- 500+ Projects Completed
- 4.9★ — Read Our 127 Google Reviews → *(link to Google)*
- Workmanship Guaranteed

---

#### Section 3: Featured Projects
**Headline:**
> Recent Builds in Long Beach & Nearby Cities

**Subheadline:**
> Real projects. Real neighbors. See what we've done down the street.

**Display:** ProjectGrid component (3 projects with location badges)

**CTA:** See More Projects →

---

#### Section 4: Why Choose Us
**Headline:**
> Why Long Beach Homeowners Call Us Back

**Bullets:**
- **No Surprise Invoices** — Your final bill matches your estimate, or we eat the difference
- **One Point of Contact** — Your project manager answers the phone. Always.
- **We Clean Up Daily** — Your home stays livable, even mid-renovation
- **Licensed Crews Only** — No random subcontractors. Same team, start to finish.
- **Written Warranty** — We stand behind our work, in writing

---

#### Section 5: Process Steps
**Headline:**
> Here's How It Works

**Steps:**
0. **Quick Phone Call** — Tell us about your project in 5 minutes. We'll let you know if we're the right fit.
1. **Free On-Site Visit** — We walk your property, discuss your vision, and assess the scope.
2. **Detailed Written Proposal** — You get a clear estimate with timeline, materials, and costs. No surprises.
3. **Expert Construction** — Our licensed crew builds to code with quality materials. Same team, every day.
4. **Final Walkthrough** — We review every detail together. You don't pay the final invoice until you're satisfied.

**CTA:** Schedule Your Free Walkthrough

---

#### Section 6: Services Overview
**Headline:**
> What We Build

**Subheadline:**
> One contractor. Every trade. From cabinets to concrete.

**Display:** ServiceCards component (4 residential services featured, link to full list)

**CTA:** View All Services →

---

#### Section 7: Testimonials
**Headline:**
> From Our Neighbors

**Display:** TestimonialStrip component (3 testimonials, including one with minor resolved issue)

---

#### Section 8: FAQ Preview
**Headline:**
> Questions? We Get These a Lot.

**Display:** 4 most common FAQs in accordion format:
- Are you licensed and insured?
- Do you handle permits?
- How long will my project take?
- What if I'm not satisfied with the work?

**CTA:** See All FAQs →

---

#### Section 9: CTA Section
**Headline:**
> Not Sure Where to Start?

**Subheadline:**
> That's fine. Most people aren't. Tell us what you're thinking and we'll help you figure out the next step — no pressure, no obligation.

**CTA Button:** Get Your Free Estimate
**Secondary:** Or call (562) 786-0682 — we answer.
**Tertiary link:** Just have a quick question? →

---

### SERVICES PAGE (`/services`)

#### Section 1: Hero
**Headline:**
> Kitchen, Bathroom & Home Addition Experts

**Subheadline:**
> One contractor. Every trade. We handle plumbing, electrical, framing, and finishes — so you don't have to juggle five different guys.

---

#### Section 2: Residential Services
**Section Label:** For Homeowners

**Display:** Full ServiceCards grid with expanded descriptions and testimonial snippets

**For each service, include:**
- Service name
- 2-3 sentence description
- Bullet list of what's included
- Testimonial snippet (one line + attribution)
- "Get a Quote for [Service]" CTA

---

#### Section 3: Service Detail Content

**Kitchen Remodeling**
> Transform your kitchen into the space you actually want to cook in. We handle everything from cabinet installation to complete gut renovations — plumbing, electrical, and all.
- Custom cabinetry and countertops
- Flooring and backsplash
- Plumbing and electrical updates
- Appliance installation

**Testimonial:**
> "They transformed our outdated kitchen into exactly what we envisioned." — Sarah M., Long Beach

---

**Bathroom Remodeling**
> Whether it's a spa-like primary bath or a kid-proof family bathroom, we manage every trade for a seamless renovation you'll actually enjoy using.
- Tile, shower, and tub installation
- Vanity and fixture upgrades
- Accessibility modifications (grab bars, walk-in showers)
- Complete plumbing overhauls

**Testimonial:**
> "Fair pricing, quality work, and they actually call you back." — Robert T., South Bay

---

**Room Additions**
> Need more space without moving? We design and build additions that look like they were always part of your home — permitted, inspected, and built to last.
- Bedroom and bathroom additions
- In-law suites and ADUs
- Sunrooms and enclosed patios
- Second-story additions

**Testimonial:**
> "Our room addition looks like it was always part of the house." — David K., Lakewood

---

**Custom Home Building**
> Your forever home, built from the ground up. We coordinate every phase from foundation to finish — and keep you informed the entire way.
- New construction management
- Foundation to finish coordination
- Permit acquisition and inspections
- Design-build partnerships

**Testimonial:**
> "They helped us build our forever home. Couldn't be happier." — Michael S., San Pedro

---

**General Repairs & Renovations**
> From drywall patches to structural repairs, we handle the projects that keep your home safe and functional — big or small.
- Drywall and painting
- Flooring installation
- Door and window replacement
- Structural repairs

**Testimonial:**
> "No surprises, no excuses — just quality work." — Jennifer H., Long Beach

---

#### Section 4: Commercial Services
**Section Label:** We Also Serve Businesses

**Design Note:** Visually separated from residential (different background, smaller cards, or collapsed accordion)

**Commercial Tenant Improvements**
> Office buildouts, retail prep, and restaurant construction. We work with landlords and tenants to deliver on-time, on-budget commercial spaces.
- Office buildouts
- Retail space preparation
- Restaurant and food service construction
- ADA compliance upgrades

**CTA:** Contact Us for Commercial Projects

---

#### Section 5: Pricing Context
**Headline:**
> What to Expect on Cost

**Copy:**
> Every project is different, but here's a general sense:
> - **Bathroom remodels** typically range from $15,000–$40,000
> - **Kitchen remodels** typically range from $30,000–$80,000+
> - **Room additions** start around $50,000 depending on size and scope
>
> We work with a range of budgets. During your free consultation, we'll discuss what's realistic for your goals and give you a detailed written estimate — no obligation.

---

#### Section 6: CTA Section
**Headline:**
> Not Sure What You Need?

**Subheadline:**
> Tell us what you're dealing with. We'll help you figure out the right approach — even if it turns out we're not the right fit.

**CTA Button:** Request a Free Consultation

---

### ABOUT PAGE (`/about`)

#### Section 1: Hero
**Headline:**
> Long Beach-Based. Family-Owned. Here to Stay.

**Subheadline:**
> 25 years, 500+ projects, and still working within 15 miles of where we started.

**Visual:** Photo of owner (required), ideally on a job site or with team

---

#### Section 2: Our Story
**Headline:**
> How We Got Here

**Copy:**
> In 1999, [Owner Name] took on his first solo project — a kitchen remodel for a neighbor on Washington Avenue. No crew, no office, just a truck and a reputation to build.

> Word spread. One neighbor told another. Twenty-five years and 500+ projects later, we're still doing the same thing: quality work for people who live down the street.

> We're not a franchise. We're not a lead-generation company that farms out your project to whoever's available. We're a family-owned business, and [Owner Name] still walks every job site.

> When you call us, you're not getting a sales rep. You're getting a neighbor who takes pride in this community — and in building something that lasts.

---

#### Section 3: Owner Profile
**Headline:**
> Meet [Owner Name]

**Photo:** Professional headshot or candid on-site photo (required)

**Copy:**
> [Owner Name] grew up in the trades, learning from his father that quality work and honest communication go hand in hand. He founded Murrieta General Construction in 1999 and still personally oversees every major project.

> When he's not on a job site, you'll find him [brief personal detail — coaching little league, at the Long Beach farmers market, etc.].

---

#### Section 4: Credentials
**Headline:**
> Licensed. Bonded. Insured. Verified.

**Items:**
- California Contractor's License #XXXXXX
- Fully Bonded and Insured
- OSHA Safety Certified
- Member, Long Beach Chamber of Commerce
- BBB Accredited Business — A+ Rating
- 4.9★ on Google (127 reviews)

**CTA:** Verify Our License → *(link to CSLB lookup)*

---

#### Section 5: Our Guarantee
**Headline:**
> Our Promise to You

**Copy:**
> We stand behind every project with a written workmanship warranty. If something's not right, we come back and fix it — no arguments, no runaround.

> Your satisfaction isn't just a goal. It's how we've stayed in business for 25 years.

---

#### Section 6: CTA Section
**Headline:**
> Let's Talk About Your Project

**Subheadline:**
> Call us directly or request a callback at a time that works for you.

**CTA Button:** Call (562) 786-0682
**Secondary Button:** Request a Callback

---

### PROJECTS PAGE (`/projects`)

#### Section 1: Hero
**Headline:**
> Recent Builds in Long Beach & Nearby Cities

**Subheadline:**
> Real projects for real neighbors. Browse by type or location.

---

#### Section 2: Project Grid
**Display:** ProjectGrid component (all projects, filterable by type)

**Filter Options:**
- All
- Kitchens
- Bathrooms
- Additions
- Custom Homes
- Commercial

**Each project card shows:**
- Image thumbnail
- Project title
- Location (city)
- Project type badge
- Brief scope (e.g., "Complete gut renovation")

**On click/expand:**
- Additional photos (if available)
- Project description
- Scope of work
- Duration (e.g., "6 weeks")
- Optional: budget tier (e.g., "$30K–$50K range")

---

#### Section 3: CTA Section
**Headline:**
> Have Questions About a Project Like This?

**Subheadline:**
> Wondering if we can do something similar for your home? Let's talk through it.

**CTA Button:** Ask Us a Question
**Secondary:** Or call (562) 786-0682

---

### CONTACT PAGE (`/contact`)

#### Section 1: Hero
**Headline:**
> Let's Talk About Your Project

**Subheadline:**
> Whether you're ready to start or just exploring options, we're here to help.

---

#### Section 2: Contact Options
**Layout:** Two-column (form left, info right)

**Right Column Content:**

**Call Us**
(562) 786-0682
Monday–Friday: 7am–5pm
Saturday: 8am–12pm

*We answer our phones. If we miss you, we'll call back the same day.*

**Email Us**
info@murrietagc.com

**Visit Us**
[Street Address]
Long Beach, CA 90807

**Service Area:**
Long Beach · South Bay · Los Angeles County · Orange County (select areas)

---

#### Section 3: Contact Form
**Form Fields:**
- Name (required)
- Phone (required)
- Email (required)
- Project Type (dropdown: Kitchen, Bathroom, Addition, Custom Home, Repair/Other)
- Budget Range (optional dropdown: Under $25K, $25K–$50K, $50K–$100K, $100K+, Not sure yet)
- Project Description (textarea)
- How did you hear about us? (optional dropdown)

**Submit Button:** Send My Request

**Form Success Message:**
> Got it. You'll hear from [Owner Name] or our project manager within one business day — usually sooner. Keep an eye on your phone.

---

#### Section 4: Map
**Display:** Embedded Google Map centered on Long Beach, showing service area

---

#### Section 5: FAQ
**Headline:**
> Frequently Asked Questions

**Display:** FAQ component (full list)

---

## 5. Reusable Data Arrays

### services[]
```json
[
  {
    "name": "Kitchen Remodeling",
    "slug": "kitchen-remodeling",
    "shortDescription": "Complete kitchen transformations — cabinets, countertops, plumbing, electrical, and finishes.",
    "testimonial": {
      "quote": "They transformed our outdated kitchen into exactly what we envisioned.",
      "name": "Sarah M.",
      "location": "Long Beach"
    },
    "category": "residential"
  },
  {
    "name": "Bathroom Remodeling",
    "slug": "bathroom-remodeling",
    "shortDescription": "Modern bathrooms with quality tile, fixtures, and finishes. We handle every trade.",
    "testimonial": {
      "quote": "Fair pricing, quality work, and they actually call you back.",
      "name": "Robert T.",
      "location": "South Bay"
    },
    "category": "residential"
  },
  {
    "name": "Room Additions",
    "slug": "room-additions",
    "shortDescription": "Expand your living space with permitted, inspected additions that blend seamlessly.",
    "testimonial": {
      "quote": "Our room addition looks like it was always part of the house.",
      "name": "David K.",
      "location": "Lakewood"
    },
    "category": "residential"
  },
  {
    "name": "Custom Home Building",
    "slug": "custom-home-building",
    "shortDescription": "Ground-up construction of your forever home. Foundation to finish, fully managed.",
    "testimonial": {
      "quote": "They helped us build our forever home. Couldn't be happier.",
      "name": "Michael S.",
      "location": "San Pedro"
    },
    "category": "residential"
  },
  {
    "name": "General Repairs & Renovations",
    "slug": "repairs-renovations",
    "shortDescription": "Drywall, flooring, doors, windows, and structural repairs — big or small.",
    "testimonial": {
      "quote": "No surprises, no excuses — just quality work.",
      "name": "Jennifer H.",
      "location": "Long Beach"
    },
    "category": "residential"
  },
  {
    "name": "Commercial Tenant Improvements",
    "slug": "commercial-ti",
    "shortDescription": "Office, retail, and restaurant buildouts. On-time, on-budget commercial construction.",
    "testimonial": null,
    "category": "commercial"
  }
]
```

### projects[]
```json
[
  {
    "title": "Modern Farmhouse Kitchen",
    "description": "Complete gut renovation with custom shaker cabinets, quartz countertops, and hardwood flooring.",
    "type": "kitchen",
    "location": "Lakewood",
    "duration": "8 weeks",
    "budgetTier": "$50K–$70K",
    "image": "/projects/kitchen-farmhouse.jpg"
  },
  {
    "title": "Primary Suite Addition",
    "description": "400 sq ft addition with walk-in closet and spa bathroom, designed to match existing architecture.",
    "type": "addition",
    "location": "Lakewood",
    "duration": "12 weeks",
    "budgetTier": "$80K–$100K",
    "image": "/projects/suite-addition.jpg"
  },
  {
    "title": "Contemporary Bathroom Remodel",
    "description": "Frameless glass shower, floating vanity, and heated tile floors in a 1990s-era home.",
    "type": "bathroom",
    "location": "Signal Hill",
    "duration": "4 weeks",
    "budgetTier": "$25K–$35K",
    "image": "/projects/bathroom-contemporary.jpg"
  },
  {
    "title": "Custom Craftsman Home",
    "description": "3,200 sq ft new construction with covered patio and three-car garage on a half-acre lot.",
    "type": "custom-home",
    "location": "San Pedro",
    "duration": "9 months",
    "budgetTier": "$450K+",
    "image": "/projects/craftsman-home.jpg"
  },
  {
    "title": "Dental Office Buildout",
    "description": "Complete tenant improvement with four treatment rooms, reception area, and ADA-compliant restrooms.",
    "type": "commercial",
    "location": "Carson",
    "duration": "10 weeks",
    "budgetTier": "Commercial",
    "image": "/projects/dental-office.jpg"
  },
  {
    "title": "Open Concept Kitchen",
    "description": "Load-bearing wall removal, island addition, and complete kitchen modernization in a 1998 home.",
    "type": "kitchen",
    "location": "Seal Beach",
    "duration": "6 weeks",
    "budgetTier": "$40K–$55K",
    "image": "/projects/kitchen-open.jpg"
  }
]
```

### testimonials[]
```json
[
  {
    "name": "Sarah M.",
    "location": "Long Beach",
    "quote": "They transformed our outdated kitchen into exactly what we envisioned. Communication was excellent throughout, and they finished on schedule. Highly recommend!",
    "rating": 5,
    "projectType": "Kitchen Remodel"
  },
  {
    "name": "Robert & Linda T.",
    "location": "South Bay",
    "quote": "We've used three contractors over the years and Murrieta General is by far the best. Fair pricing, quality work, and they actually call you back.",
    "rating": 5,
    "projectType": "Bathroom Remodel"
  },
  {
    "name": "David K.",
    "location": "Lakewood",
    "quote": "Our room addition looks like it was always part of the house. The crew was respectful, cleaned up daily, and the project manager kept us informed every step of the way.",
    "rating": 5,
    "projectType": "Room Addition"
  },
  {
    "name": "Jennifer H.",
    "location": "Long Beach",
    "quote": "From the first estimate to the final walkthrough, everything was professional. No surprises, no excuses — just quality work.",
    "rating": 5,
    "projectType": "General Renovation"
  },
  {
    "name": "Michael S.",
    "location": "San Pedro",
    "quote": "They helped us build our forever home. Couldn't be happier with the craftsmanship and attention to detail.",
    "rating": 5,
    "projectType": "Custom Home"
  },
  {
    "name": "Karen W.",
    "location": "Long Beach",
    "quote": "There was a short delay waiting on cabinets — supply chain stuff — but they kept us informed the whole time and made up for it on the back end. Final result was worth the wait. Would hire again.",
    "rating": 4,
    "projectType": "Kitchen Remodel"
  }
]
```

### faqs[]
```json
[
  {
    "question": "How do I get a quote for my project?",
    "answer": "Call us at (562) 786-0682 or fill out our contact form. We'll schedule a free on-site consultation to discuss your project and provide a detailed written estimate — no obligation."
  },
  {
    "question": "Are you licensed and insured?",
    "answer": "Yes. We hold California Contractor's License #XXXXXX, carry full liability insurance, and are bonded for your protection. You can verify our license on the CSLB website."
  },
  {
    "question": "What areas do you serve?",
    "answer": "We serve Long Beach, South Bay, and select areas of Los Angeles County and Orange County. If you're nearby, ask — there's a good chance we can help."
  },
  {
    "question": "How long will my project take?",
    "answer": "It depends on scope. A bathroom remodel might take 3-4 weeks; a kitchen 6-10 weeks; an addition 10-14 weeks. During your consultation, we'll give you a realistic timeline and keep you updated throughout."
  },
  {
    "question": "Do you handle permits?",
    "answer": "Yes. We manage the full permit process with the City of Long Beach and Los Angeles County, including applications, inspections, and final sign-off. It's all included."
  },
  {
    "question": "Can I stay in my home during a remodel?",
    "answer": "In most cases, yes. We contain work areas, clean up daily, and maintain safe access. For major projects like full kitchen remodels, we'll discuss logistics so you know what to expect."
  },
  {
    "question": "What is your payment structure?",
    "answer": "Typically 10-20% deposit to start, with progress payments tied to project milestones. Final payment is due upon completion and your walkthrough approval. Everything is spelled out in the contract."
  },
  {
    "question": "Do you offer warranties?",
    "answer": "Yes. We provide a written workmanship warranty on all labor. If something's not right, we come back and fix it. Material warranties vary by manufacturer and are passed on to you."
  },
  {
    "question": "What if I'm not satisfied with the work?",
    "answer": "We do a final walkthrough together before you sign off. If anything isn't right, we fix it before the project is considered complete. Our reputation depends on happy clients."
  },
  {
    "question": "Do you use subcontractors?",
    "answer": "For specialty work like HVAC or certain electrical, we use trusted subs we've worked with for years. But our core crew handles framing, drywall, tile, and finish work — you'll see the same faces throughout your project."
  }
]
```

---

## 6. Components List

### Header
- Logo (left)
- Navigation links (center or right)
- Phone number with click-to-call (right): "(562) 786-0682"
- "Get Estimate" button (right, accent color)
- Mobile: hamburger menu + persistent call button

### Footer
- Logo
- Contact info (phone, email, address)
- Navigation links
- Service area list
- License number (linked to CSLB verification)
- Google review rating + link
- Social links (if applicable)
- Copyright

### CTASection
- Headline
- Subheadline
- Primary button
- Optional secondary button (for callback/question option)
- Optional tertiary text link
- Background: brand color or subtle gradient

### ServiceCards
- Icon or image
- Service name
- Short description
- Testimonial snippet (one line)
- "Get a Quote" link
- Hover state
- Category badge (residential/commercial)

### ProcessSteps
- Step number (0-4)
- Step title
- Step description
- Visual connector between steps
- Horizontal on desktop, vertical on mobile
- Step 0 styled slightly differently (entry point)

### ProjectGrid
- Image thumbnail (lazy loaded)
- Project title overlay
- Location badge
- Project type badge
- Click to expand/modal with details:
  - Additional images
  - Full description
  - Duration
  - Budget tier (optional)
- Filter controls (on Projects page)

### TestimonialStrip
- Quote text
- Client name and location
- Star rating (show actual rating, including 4-star)
- Project type
- Auto-rotate or manual navigation

### FAQ
- Accordion style
- Question as trigger
- Answer expands on click
- Plus/minus or chevron icon
- Schema markup for SEO

### ContactForm
- Field labels above inputs
- Inline validation
- Budget range dropdown (optional field)
- Loading state on submit
- Personalized success message
- Error messaging
- Spam protection (honeypot or reCAPTCHA)

### MobileCallBar
- Fixed to bottom of screen on mobile only
- Phone icon + "Call (562) 786-0682" text
- Click-to-call functionality
- High-contrast, thumb-friendly size (min 48px tap target)
- Remains visible on scroll

### OwnerProfile
- Headshot photo (required)
- Name and title
- Brief bio
- Optional: personal detail

### CredentialsBadges
- License number (linked to CSLB)
- BBB badge
- Google rating + review count (linked)
- Insurance/bonding indicator

---

## 7. SEO & Local Trust

### Meta Data by Page

| Page | Title | Description |
|------|-------|-------------|
| Home | Long Beach General Contractor \| 500+ Projects, 25 Years \| Kitchen & Bath Remodels | Licensed general contractor in Long Beach, CA. Kitchen remodels, bathroom renovations, room additions, and custom homes. 500+ local projects. Free estimates. (562) 786-0682 |
| Services | Kitchen, Bathroom & Home Addition Services \| Murrieta General Construction | Full-service residential construction in Long Beach and South Bay. Kitchen and bathroom remodeling, room additions, custom homes. One contractor, every trade. |
| About | About Us \| Murrieta General Construction \| Family-Owned Since 1999 | Family-owned contractor serving Los Angeles County for 25+ years. Meet [Owner Name] and learn why 500+ Long Beach homeowners trust us. |
| Projects | Our Work \| Kitchen Remodels, Additions & Custom Homes in Long Beach | Browse completed projects in Long Beach and nearby cities. Kitchen remodels, bathroom renovations, room additions, and custom homes. |
| Contact | Contact Us \| Free Estimate \| Murrieta General Construction | Get a free estimate from Long Beach's trusted contractor. Call (562) 786-0682 or request a quote online. Same-day response. |

### Local Keyword Guidance
**Primary Keywords:**
- General contractor Long Beach
- Long Beach construction company
- Kitchen remodel Long Beach CA
- Bathroom remodel South Bay
- Room addition contractor Long Beach

**Secondary Keywords:**
- Home renovation Long Beach
- Custom home builder South Bay
- ADU contractor Long Beach
- Licensed contractor Los Angeles County
- Long Beach home remodeling

**Usage:**
- Include primary keyword in H1 on each page
- Use location + service combinations naturally in copy
- Add city names in testimonials and project descriptions
- Include full NAP (Name, Address, Phone) in footer and Contact page

### Trust Signals to Emphasize
- California Contractor's License number (linked to CSLB verification)
- "Licensed, Bonded, and Insured" with explanation of why it matters
- Google Review rating with actual review count and link
- BBB Accreditation badge with rating
- Years in business (specific: "Since 1999")
- Number of projects completed (specific: "500+")
- Owner photo and name
- Real project photos with locations
- Written warranty mentioned
- Local city names throughout

### Schema Markup (for developer)
- LocalBusiness schema on all pages
- FAQPage schema on Contact page and Homepage FAQ section
- Review/AggregateRating schema for testimonials
- Service schema for services
- Person schema for owner profile

---

## 8. Launch Acceptance Checklist

### Mobile UX
- [ ] All pages responsive at 320px, 375px, 768px, 1024px, 1440px
- [ ] Touch targets minimum 48px
- [ ] Mobile call bar visible and functional
- [ ] Hamburger menu works smoothly
- [ ] Forms usable on mobile keyboard
- [ ] Images optimized for mobile bandwidth
- [ ] Phone numbers are tap-to-call everywhere

### Forms
- [ ] Contact form submits successfully
- [ ] Confirmation email sent to business
- [ ] Personalized success message displays
- [ ] Validation errors display correctly (inline)
- [ ] Spam protection active
- [ ] Budget range field works (optional)

### Click-to-Call
- [ ] All phone numbers are `tel:` links
- [ ] Click-to-call works on iOS and Android
- [ ] Phone number displays correctly
- [ ] Mobile call bar functional

### SEO & Metadata
- [ ] Unique title tag on each page (under 60 chars)
- [ ] Unique meta description on each page (under 160 chars)
- [ ] Open Graph tags for social sharing
- [ ] Favicon and touch icons
- [ ] robots.txt allows indexing
- [ ] XML sitemap generated
- [ ] LocalBusiness schema implemented
- [ ] FAQ schema on applicable pages

### Performance
- [ ] Lighthouse performance score > 80
- [ ] Images lazy loaded and optimized (WebP)
- [ ] Fonts optimized (swap display)
- [ ] No layout shift issues (CLS < 0.1)
- [ ] Page load under 3s on 4G mobile

### Analytics & Tracking
- [ ] Google Analytics 4 installed
- [ ] Click-to-call event tracking configured
- [ ] Form submission event tracking configured
- [ ] Google Search Console connected
- [ ] Google Business Profile linked

### Trust Elements
- [ ] Owner photo displayed on About page
- [ ] License number displayed and linked to CSLB
- [ ] Google Reviews linked (not just rating displayed)
- [ ] Written warranty mentioned on homepage and about page

### Legal & Compliance
- [ ] Privacy policy page or link
- [ ] License number displayed in footer
- [ ] Copyright year correct (dynamic)
- [ ] Accessibility basics (alt text, focus states, color contrast 4.5:1)

---

## Appendix: Design Notes for Developer

### Color Suggestions (adjust to brand)
- **Primary:** Deep blue (#1e3a5f) or forest green (#2d5a3d) — trustworthy, professional
- **Accent:** Warm orange (#d97706) or gold (#b8860b) — action, energy, for CTAs
- **Neutral:** Warm gray (#f5f5f4) and white
- **Text:** Near-black (#1a1a1a)
- **Success:** Green (#059669)
- **Error:** Red (#dc2626)

### Typography Suggestions
- **Headlines:** Strong, readable sans-serif (Inter, Work Sans, or similar)
- **Body:** Clean, legible at 16px minimum (Inter, Source Sans Pro)
- **Line height:** 1.5 for body text, 1.2 for headlines

### Image Requirements
- **Hero:** Owner on job site OR completed local project (not stock)
- **About page:** Owner headshot (required), team photo (optional)
- **Services:** Interior detail shots of actual work
- **Projects:** Before/after when available, location identified
- **Avoid:** Stock photos of generic construction workers, hardhats, handshakes

### Interaction Notes
- Buttons: Clear hover/active states
- Forms: Inline validation, not just on submit
- FAQ: Smooth accordion animation
- Testimonials: Subtle auto-rotate (10s) with pause on hover
- Project grid: Quick filter transitions

---

*End of Specification*
