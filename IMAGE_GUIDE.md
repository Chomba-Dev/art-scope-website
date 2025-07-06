# Image Assets Guide for Art Scope Enterprises Website

## 📁 Image Directory Structure

```
public/images/
├── hero/                    # Hero section background images
├── subsidiaries/           # Images for each subsidiary/operation
├── gallery/               # Media page gallery images
├── events/                # Events and news images
├── leadership/            # Team member photos
└── logos/                 # Partner and client logos
```

## 🎨 Image Requirements for Different Sections

### 1. Hero Section Images
**Location:** `public/images/hero/`
**Recommended sizes:** 1920x1080px (landscape)
**Format:** JPG or WebP for best performance

You can add a background image to the hero section by updating the HeroSection component.

### 2. Subsidiary/Operations Images
**Location:** `public/images/subsidiaries/`
**Recommended sizes:** 400x300px
**Format:** JPG or WebP

Required images for each subsidiary:
- `consulting.jpg` - Art Scope Consulting (business meetings, strategy sessions)
- `technology.jpg` - Art Scope Technology (computers, coding, tech workspace)
- `logistics.jpg` - Art Scope Logistics (warehouses, transport, supply chain)
- `energy.jpg` - Art Scope Energy (solar panels, renewable energy)
- `real-estate.jpg` - Art Scope Real Estate (buildings, construction, property)
- `finance.jpg` - Art Scope Finance (financial charts, banking, investments)

### 3. Gallery Images (Media Page)
**Location:** `public/images/gallery/`
**Recommended sizes:** 600x400px
**Format:** JPG or WebP

Suggested gallery images:
- Office locations in Kitwe, Zambia
- Team meetings and events
- Project sites and completed work
- Award ceremonies
- Partnership signings

### 4. Leadership Team Photos
**Location:** `public/images/leadership/`
**Recommended sizes:** 400x400px (square format)
**Format:** JPG or WebP

Professional headshots of team members.

### 5. Events & News Images
**Location:** `public/images/events/`
**Recommended sizes:** 600x400px
**Format:** JPG or WebP

Images for news articles and events.

## 🚀 How to Add Images

1. **Place your images** in the appropriate folders under `public/images/`
2. **Use the exact filenames** mentioned above for automatic integration
3. **Optimize images** before uploading (compress for web)
4. **Use WebP format** when possible for better performance

## 📝 Example Usage

Once you add the images, they will be automatically displayed:

```javascript
// This will show your image at public/images/subsidiaries/consulting.jpg
<img src="/images/subsidiaries/consulting.jpg" alt="Art Scope Consulting" />
```

## 🔧 Optional: Adding Hero Background Image

To add a background image to the hero section, you can:

1. Add your hero image to `public/images/hero/background.jpg`
2. Update the HeroSection component to include the background image
3. The image should show your team or office in Kitwe, Zambia

## 📞 Need Help?

If you need help implementing any specific image features, just let me know!
