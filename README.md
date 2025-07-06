# Art Scope Enterprises Limited - Website

A modern, responsive website for Art Scope Enterprises Limited built with Next.js 13+ App Router, JavaScript, and Tailwind CSS.

## 🎨 About Art Scope Enterprises

**Tagline:** "Empowering Artists and Creatives"

**Vision:** Leading African hub for creative innovation, youth empowerment, and sustainable entrepreneurship.

**Mission:** Unleashing creative potential for sustainable development by promoting the integration of arts, culture, technology, and business through inclusive platforms, strategic partnerships, and innovative enterprise.

## 🚀 Features

- **Modern Design:** Clean, professional design with Art Scope's brand colors (Dark Navy Blue #000f3d and Yellow #FFD700)
- **Fully Responsive:** Optimized for all device sizes from mobile to desktop
- **Next.js 13+ App Router:** Using the latest Next.js features with JavaScript (JSX)
- **Tailwind CSS:** Custom color palette and utility-first styling
- **SEO Optimized:** Proper metadata and semantic HTML structure
- **Reusable Components:** Header, Footer, HeroSection, SubsidiaryCard, EventCard, ContactForm

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── events/            # Events & News page
│   ├── media/             # Media center page
│   ├── operations/        # Operations overview page
│   ├── partners/          # Partners & Investors page
│   ├── subsidiary/        # Dynamic subsidiary detail pages
│   │   └── [slug]/        # Individual subsidiary pages
│   ├── layout.js          # Root layout component
│   ├── page.js            # Homepage
│   └── globals.css        # Global styles with custom Tailwind theme
├── components/            # Reusable React components
│   ├── Header.js          # Navigation header
│   ├── Footer.js          # Site footer
│   ├── HeroSection.js     # Homepage hero section
│   ├── SubsidiaryCard.js  # Business unit cards
│   ├── EventCard.js       # Event/news cards
│   └── ContactForm.js     # Contact form
└── ...
```

## 🎨 Brand Guidelines

### Colors
- **Dark Navy Blue:** `#000f3d` (backgrounds)
- **Yellow:** `#FFD700` (accents, buttons, CTAs)
- **White:** `#ffffff` (text on dark backgrounds)
- **Light Gray:** `#cccccc` (secondary text)

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** Bold, Navy Blue
- **Body Text:** Regular, Dark Gray on light backgrounds, Light Gray on dark backgrounds

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone or download the project**
```bash
# If using git
git clone [repository-url]
cd art-scope-website

# Or download and extract the project folder
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 📱 Pages Overview

1. **Homepage (`/`)** - Hero section, operations overview, recent events, call-to-action
2. **About (`/about`)** - Company story, mission, vision, values, and leadership team
3. **Operations (`/operations`)** - Overview of all subsidiaries and business units
4. **Events & News (`/events`)** - Latest events, announcements, and company news
5. **Media (`/media`)** - Media center with videos, photos, press releases, and downloads
6. **Partners & Investors (`/partners`)** - Strategic partnerships and investment information
7. **Contact (`/contact`)** - Contact form, office information, business hours
8. **Subsidiary Detail (`/subsidiary/[slug]`)** - Dynamic pages for individual subsidiary details

## 🎯 Business Units

The website showcases Art Scope's four main business units:

1. **Creative Studio** - Graphic design, branding, digital marketing, content creation
2. **Youth Empowerment Programs** - Training, mentorship, entrepreneurship bootcamps
3. **Technology Innovation Hub** - Software development, digital transformation, tech training
4. **Business Consulting** - Strategic planning, market research, financial consulting

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if using Git)
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Deploy with default settings

3. **Manual Deploy:**
```bash
npm run build
# Upload the .next folder and other necessary files to your hosting provider
```

### Deploy to Other Platforms

The project can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- DigitalOcean App Platform
- Railway
- Render

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.js` file with your React component
3. Update navigation in `src/components/Header.js`

### Updating Brand Colors
Modify the CSS variables in `src/app/globals.css`:
```css
:root {
  --navy: #000f3d;
  --yellow: #FFD700;
  /* Add your custom colors */
}
```

### Adding Components
Create new components in `src/components/` and import them where needed.

## 📞 Support

For questions or support regarding this website, please contact:
- **Email:** info@artscope.co.zm
- **Phone:** +255 123 456 789

---

**Art Scope Enterprises Limited** - Empowering Artists and Creatives

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
