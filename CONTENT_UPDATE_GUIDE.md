# Content Update Guide - Replace Dummy Data with Real Art Scope Information

## 🎯 Quick Summary
The website currently uses realistic sample data that represents typical business content. This guide shows exactly what needs to be replaced with your real company information.

## 📊 **Data Files to Update (in order of priority):**

### 1. **OPERATIONS PAGE** - `/src/app/operations/page.js`
**Current Sample Subsidiaries:** (Lines 4-49)
```javascript
// REPLACE THESE with your actual subsidiaries:
{
  name: "Art Scope Consulting",        // ✅ Keep if real
  title: "Art Scope Consulting",       // ✅ Keep if real  
  description: "Strategic business consulting...", // UPDATE with real services
  features: ["Business Strategy", "Market Analysis"...], // UPDATE with real services
},
{
  name: "Art Scope Technology",        // UPDATE with actual subsidiary
  // ... etc
}
```

### 2. **EVENTS & NEWS PAGE** - `/src/app/events/page.js`
**Current Sample Events:** (Lines 4-30)
```javascript
// REPLACE with your real events:
{
  title: "Annual Investment Summit 2024",     // UPDATE with real events
  date: "March 15, 2024",                    // UPDATE with real dates
  location: "Lagos, Nigeria"                 // UPDATE to Kitwe, Zambia
}
```

**Current Sample News:** (Lines 32-60)
```javascript
// REPLACE with your real news/announcements:
{
  title: "Art Scope Expands Operations to East Africa", // UPDATE with real news
  date: "February 10, 2024",                           // UPDATE with real dates
  excerpt: "New offices opened in Kenya..."             // UPDATE with real content
}
```

### 3. **SUBSIDIARY DETAIL PAGE** - `/src/app/subsidiary/[slug]/page.js`
**Current Sample Data:** (Lines 2-60)
```javascript
// This is detailed sample data for "Art Scope Technology"
// UPDATE with real subsidiary information:
const subsidiary = {
  name: "Art Scope Technology",              // UPDATE if needed
  tagline: "Driving Digital Transformation", // UPDATE with real tagline
  description: "Art Scope Technology is...", // UPDATE with real description
  services: [...],                           // UPDATE with real services
  projects: [...],                          // UPDATE with real projects
  leadership: [...]                         // UPDATE with real team members
}
```

### 4. **MEDIA PAGE** - `/src/app/media/page.js`
**Current Sample Content:** (Lines 2-50)
```javascript
// REPLACE with your real media:
const mediaItems = [
  {
    title: "Art Scope: Transforming Africa's Business Landscape", // UPDATE
    description: "Our CEO discusses...",                          // UPDATE
    date: "February 2024"                                        // UPDATE
  }
];

const pressReleases = [
  {
    title: "Art Scope Announces ZMW 20M Investment...", // UPDATE with real press releases
    date: "March 1, 2024",                              // UPDATE with real dates
    excerpt: "Major investment initiative..."            // UPDATE with real content
  }
];
```

### 5. **PARTNERS PAGE** - `/src/app/partners/page.js`
**Current Sample Partners:** (Lines 2-40)
```javascript
// REPLACE with your real partners:
const strategicPartners = [
  {
    name: "African Development Bank",     // UPDATE with real partners
    description: "Strategic financial...", // UPDATE with real partnerships
    partnership: "Financial Services"     // UPDATE with real relationship types
  }
];

const keyInvestors = [
  {
    name: "Global Infrastructure Fund",   // UPDATE with real investors (if applicable)
    investment: "ZMW 3M",                 // UPDATE with real amounts (if public)
    focus: "Infrastructure & Energy"      // UPDATE with real focus areas
  }
];
```

## 🔧 **Statistics to Update:**

### Operations Page (Lines 89-105):
```javascript
// UPDATE these numbers with real company stats:
<div className="text-4xl font-bold text-navy mb-2">10</div>         // Real business units (subsidiaries)
<div className="text-4xl font-bold text-navy mb-2">50+</div>        // Real projects completed
<div className="text-4xl font-bold text-navy mb-2">1</div>          // Real countries/regions served (Zambia)
<div className="text-4xl font-bold text-navy mb-2">1</div>          // Real years in business (since Aug 2024)
```

### Partners Page (Lines 230-250):
```javascript
// UPDATE with real investment/performance data:
<div className="text-4xl font-bold text-navy mb-2">ZMW 10M+</div>   // Real investment target
<div className="text-4xl font-bold text-navy mb-2">25%</div>        // Real returns (if applicable)
<div className="text-4xl font-bold text-navy mb-2">6</div>          // Real number of partner categories
<div className="text-4xl font-bold text-navy mb-2">1</div>          // Real years track record (since 2024)
```

## 📍 **Location References to Update:**

1. **Media Page Gallery** - Change references from "Lagos, Nigeria" to "Kitwe, Zambia"
2. **Event Locations** - Update all event locations to relevant Zambian cities
3. **Project References** - Update "West Africa", "Ghana", etc. to relevant regions for your business

## ✅ **What's Already Correct:**

- ✅ Contact information (Jambo Drive Riverside, Kitwe)
- ✅ Phone number (+260 97 3577060) 
- ✅ Email domain (.co.zm)
- ✅ Company name (Art Scope Enterprises Limited)
- ✅ Brand colors and styling

## 🎯 **Recommendation:**

**Replace the sample data step by step:**

1. **Start with Operations page** - Update your real subsidiaries/services
2. **Update statistics** - Use your real business numbers  
3. **Add real events/news** - Replace with actual company announcements
4. **Update team information** - Add real leadership team members
5. **Add real media content** - Replace with actual press releases

This approach gives you a professional, fast-loading website with your real business content without the complexity and cost of a database.

**Would you like me to help you update any specific section with your real company information?**
