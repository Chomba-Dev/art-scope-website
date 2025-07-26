# 📸 Website Image Placement Guide

## 🎯 Overview
You have **108 photos** in `/public/images/photos/` that need to be strategically placed throughout the website. Here's exactly where each image should go:

---

## 🏠 **HOMEPAGE** (`src/app/page.js`)

### 1. **Operations Overview Image** (Line 141)
**Location**: Operations section header
**Current**: `<div className="image-placeholder h-64 rounded-2xl shadow-2xl">`
**Suggested Photo**: `IMG-20250714-WA0129.jpg` (Group photo or company overview)
**Purpose**: Show Art Scope team/operations overview

### 2. **Call-to-Action Success Stories** (Line 240)
**Location**: Bottom section before final buttons
**Current**: `<div className="image-placeholder h-48 rounded-2xl bg-white/10">`
**Suggested Photo**: `IMG-20250714-WA0145.jpg` (Success story or achievement)
**Purpose**: Showcase success and inspire action

---

## 🎨 **OPERATIONS PAGE** (`src/app/operations/page.js`)

### 3. **Operations Hero Image** (Line 106)
**Location**: Top of operations page
**Current**: `<div className="image-placeholder w-32 h-32 mx-auto mb-8 rounded-full">`
**Suggested Photo**: `IMG-20250714-WA0135.jpg` (Business/operations related)
**Purpose**: Operations page header visual

### 4. **Team/Leadership Image** (Line 186)
**Location**: Bottom section
**Current**: `<div className="image-placeholder w-24 h-24 mx-auto mb-8 rounded-full">`
**Suggested Photo**: `IMG-20250714-WA0140.jpg` (Leadership or team photo)
**Purpose**: Show leadership and team

---

## 🤝 **PARTNERS PAGE** (`src/app/partners/page.js`)

### 5. **Partnership Hero Image** (Line 136)
**Location**: Top of partners page
**Current**: `<div className="image-placeholder w-32 h-32 mx-auto mb-8 rounded-full">`
**Suggested Photo**: `IMG-20250714-WA0150.jpg` (Partnership or collaboration)
**Purpose**: Partnership page header

### 6. **Partnership Success Image** (Line 276)
**Location**: Call-to-action section
**Current**: `<div className="image-placeholder w-24 h-24 mx-auto mb-8 rounded-full">`
**Suggested Photo**: `IMG-20250714-WA0155.jpg` (Success or handshake)
**Purpose**: Partnership success stories

---

## 🎭 **EVENTS PAGE** (`src/app/events/page.js`)

### 7. **Events Hero Image** (Line 119)
**Location**: Top of events page
**Current**: `<div className="image-placeholder w-32 h-32 mx-auto mb-8 rounded-full">`
**Suggested Photo**: `IMG-20250714-WA0160.jpg` (Event or gathering)
**Purpose**: Events page header

### 8. **Events Success Image** (Line 228)
**Location**: Call-to-action section
**Current**: `<div className="image-placeholder w-24 h-24 mx-auto mb-8 rounded-full">`
**Suggested Photo**: `IMG-20250714-WA0165.jpg` (Event success or crowd)
**Purpose**: Event success and engagement

---

## 📞 **CONTACT PAGE** (`src/app/contact/page.js`)

### 9. **Contact Hero Image** (Line 23)
**Location**: Top of contact page
**Current**: `<div className="image-placeholder w-32 h-32 mx-auto mb-8 rounded-full">`
**Suggested Photo**: `IMG-20250714-WA0170.jpg` (Professional or welcoming)
**Purpose**: Contact page header

### 10. **Office/Location Image** (Line 227)
**Location**: Contact information section
**Current**: `<div className="image-placeholder h-96 rounded-2xl shadow-2xl">`
**Suggested Photo**: `IMG-20250714-WA0175.jpg` (Office, location, or facility)
**Purpose**: Show physical location or office

---

## 📱 **MEDIA PAGE** (`src/app/media/page.js`)

### 11. **Media Hero Image** (Line 90)
**Location**: Top of media page
**Current**: `<div className="image-placeholder w-32 h-32 mx-auto mb-8 rounded-full">`
**Suggested Photo**: `IMG-20250714-WA0180.jpg` (Media or press related)
**Purpose**: Media page header

### 12. **Featured Media Content** (Line 147)
**Location**: Featured media section
**Current**: `<div className="image-placeholder h-64">`
**Suggested Photo**: `IMG-20250714-WA0185.jpg` (Featured content)
**Purpose**: Highlight featured media

### 13. **Press Release Image** (Line 187)
**Location**: Press releases section
**Current**: `<div className="image-placeholder h-40">`
**Suggested Photo**: `IMG-20250714-WA0190.jpg` (Press or announcement)
**Purpose**: Press releases visual

### 14. **Media Gallery Image** (Line 230)
**Location**: Media gallery section
**Current**: `<div className="image-placeholder h-48">`
**Suggested Photo**: `IMG-20250714-WA0195.jpg` (Gallery content)
**Purpose**: Media gallery showcase

### 15. **Media Success Image** (Line 306)
**Location**: Call-to-action section
**Current**: `<div className="image-placeholder w-24 h-24 mx-auto mb-8 rounded-full">`
**Suggested Photo**: `IMG-20250714-WA0200.jpg` (Media success)
**Purpose**: Media achievements

---

## 🏢 **SUBSIDIARY PAGES** (`src/app/subsidiary/[slug]/page.js`)

### 16. **Subsidiary Overview** (Line 215)
**Location**: Subsidiary details section
**Current**: `<div className="image-placeholder h-64 rounded-xl">`
**Suggested Photos**: 
- Art Scope Arts: `IMG-20250714-WA0205.jpg` (Arts/creative activities)
- Art Scope Farms: `IMG-20250714-WA0210.jpg` (Agriculture/farming)
- Art Scope Tech: `IMG-20250714-WA0215.jpg` (Technology/innovation)
- Art Scope Schools: `IMG-20250714-WA0220.jpg` (Education/training)
- Art Scope Supplies: `IMG-20250714-WA0225.jpg` (Products/supplies)
- Art Scope Tourism: `IMG-20250714-WA0230.jpg` (Tourism/travel)

### 17. **Subsidiary Team** (Line 245)
**Location**: Team/people section
**Current**: `<div className="image-placeholder w-32 h-32 mx-auto mb-6 rounded-full">`
**Suggested Photos**: Use team photos for each subsidiary (WA0235, WA0236, etc.)

### 18. **Subsidiary Success** (Line 269)
**Location**: Success stories section
**Current**: `<div className="image-placeholder w-24 h-24 mx-auto mb-8 rounded-full">`
**Suggested Photos**: Use achievement photos for each subsidiary

---

## 📝 **EVENT CARDS** (`src/components/EventCard.js`)

### 19. **Event Thumbnails** (Line 55)
**Location**: Individual event cards
**Current**: `<div className="image-placeholder h-full">`
**Suggested Photos**: Use various event photos (WA0130-WA0160)
**Purpose**: Event thumbnails and previews

---

## 🎯 **IMPLEMENTATION PRIORITY**

### **Phase 1: High Impact Images**
1. **Homepage Operations** - Most visible
2. **Contact Office Image** - Professional credibility
3. **Operations Hero** - Business overview

### **Phase 2: Page Headers**
4. **All page hero images** - Consistent branding
5. **Subsidiary overviews** - Core business showcase

### **Phase 3: Content Enhancement**
6. **Event cards** - Dynamic content
7. **Media gallery** - Rich content experience
8. **Success story images** - Social proof

---

## 📋 **NEXT STEPS**

1. **Review your photos** - Look through WA0129-WA0238
2. **Choose best images** for each category
3. **Rename photos** to descriptive names (optional)
4. **Start with Phase 1** implementations
5. **Test mobile responsiveness** after each addition

Would you like me to start implementing the images, beginning with the highest priority ones?
