# Monumentle Image & Data Management Workflow

This document explains the complete process for managing monument images and data in the Monumentle project. **Keep this file updated** as the process evolves.

## 📋 Overview

The Monumentle project uses a hybrid approach for image management:
1. **Planning Phase**: Curate image URLs in planning document
2. **Processing Phase**: Download, optimize, and store images locally
3. **Data Completion**: Auto-generate complete monument database
4. **Integration**: Use optimized images in the game

---

## 🎯 Current Workflow

### Step 1: Update Planning Document

**File**: `MONUMENT_IMAGE_PLANNING.md`

1. Find monuments you want to process
2. Add image URLs in the "Image URL" column
3. **Supported formats**:
   - Unsplash: `https://unsplash.com/photos/photo-name-photoId`
   - Pexels: `https://www.pexels.com/photo/photo-name-12345/`

**Example**:
\`\`\`markdown
| ID | Name | Location | Country | Type | Image URL (Unsplash or Pexels) |
|----|------|----------|---------|------|-------------|
| 1 | Eiffel Tower | Paris | France | Tower | https://unsplash.com/photos/people-gathering-in-front-of-eiffel-tower--7XJZ4tHBZQ |
\`\`\`

### Step 2: Run Image Processing Pipeline

**Command**: Run the image download and optimization script

**What it does**:
- Downloads images from URLs in planning document
- Creates multiple optimized sizes (thumbnail, medium, large)
- Generates both WebP and JPG formats
- Organizes files in structured folders
- Extracts attribution data
- Creates processed monument database

**Output Structure**:
\`\`\`
public/
  images/
    monuments/
      eiffel-tower/
        thumbnail.webp (300x200, ~15KB)
        thumbnail.jpg (300x200, ~25KB)
        medium.webp (800x600, ~45KB)
        medium.jpg (800x600, ~75KB)
        large.webp (1200x900, ~85KB)
        large.jpg (1200x900, ~150KB)
\`\`\`

### Step 3: Data Completion

**What gets auto-completed**:
- ✅ Geographic coordinates (latitude/longitude)
- ✅ Historical data (year built, periods)
- ✅ Physical dimensions (height, area)
- ✅ Descriptions and cultural significance
- ✅ Attribution data (photographer, source)
- ✅ Monument categories and types

**Example Output**:
\`\`\`typescript
{
  id: "eiffel-tower",
  name: "Eiffel Tower",
  location: "Paris",
  country: "France",
  continent: "Europe",
  type: "Tower",
  yearBuilt: 1889,
  height: 330,
  latitude: 48.8584,
  longitude: 2.2945,
  description: "Iconic iron lattice tower...",
  images: {
    thumbnail: { webp: "/images/monuments/eiffel-tower/thumbnail.webp", jpg: "..." },
    medium: { webp: "/images/monuments/eiffel-tower/medium.webp", jpg: "..." },
    large: { webp: "/images/monuments/eiffel-tower/large.webp", jpg: "..." }
  },
  attribution: {
    photographer: "John Doe",
    source: "Unsplash",
    url: "https://unsplash.com/@johndoe"
  }
}
\`\`\`

### Step 4: Integration

Use the `ResponsiveMonumentImage` component to display optimized images:

\`\`\`tsx
<ResponsiveMonumentImage 
  monument={monument} 
  size="medium" 
  className="monument-image" 
/>
\`\`\`

---

## 🛠 Technical Implementation

### Image Processing Configuration

\`\`\`javascript
const IMAGE_CONFIG = {
  sizes: {
    thumbnail: { width: 300, height: 200, quality: 80 },
    medium: { width: 800, height: 600, quality: 85 },
    large: { width: 1200, height: 900, quality: 90 }
  },
  formats: ['webp', 'jpg'] // Modern format + fallback
};
\`\`\`

### File Naming Convention

- **Monument IDs**: kebab-case (e.g., `eiffel-tower`, `taj-mahal`)
- **Image Files**: `{size}.{format}` (e.g., `medium.webp`)
- **Folders**: `/public/images/monuments/{monument-id}/`

### Attribution Requirements

**Unsplash**: Must include photographer name and link
**Pexels**: Must include photographer name and Pexels credit

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `MONUMENT_IMAGE_PLANNING.md` | Master planning document with image URLs |
| `MONUMENTLE_IMAGE_WORKFLOW.md` | This workflow documentation |
| `scripts/download-and-optimize-images.js` | Image processing pipeline |
| `components/responsive-monument-image.tsx` | Optimized image component |
| `lib/optimized-monument-database.ts` | Complete monument database |
| `processed-monuments.json` | Intermediate processing results |

---

## 🔄 Batch Processing

### Processing Batches

1. **Small Batch** (5-10 monuments): Test new images
2. **Medium Batch** (20-30 monuments): Regular updates
3. **Large Batch** (50+ monuments): Major additions

### Batch Commands

\`\`\`bash
# Process specific batch
node scripts/process-batch-{number}.js

# Process all pending monuments
node scripts/process-all-pending.js

# Verify processed images
node scripts/verify-image-processing.js
\`\`\`

---

## 🚨 Troubleshooting

### Common Issues

**Image Download Fails**:
- Check URL format
- Verify image is publicly accessible
- Check network connection

**Attribution Missing**:
- Ensure URL includes photo ID
- Verify API access for metadata

**Large File Sizes**:
- Adjust quality settings in IMAGE_CONFIG
- Check if WebP format is being used

**Missing Images in Game**:
- Verify file paths in database
- Check public folder structure
- Ensure responsive component is used

---

## 📊 Progress Tracking

### Current Status
- **Total Monuments Planned**: 250+
- **Images Processed**: [Update this number]
- **Batches Completed**: [Update this number]
- **Remaining**: [Update this number]

### Next Steps
1. [ ] Update planning document with more URLs
2. [ ] Process next batch of monuments
3. [ ] Verify image quality and attribution
4. [ ] Update game database
5. [ ] Test in production

---

## 🔧 Maintenance

### Regular Tasks

**Weekly**:
- Update planning document with new URLs
- Process pending batches
- Verify image loading in game

**Monthly**:
- Review file sizes and optimization
- Update attribution data
- Clean up unused images

**As Needed**:
- Add new monument categories
- Update image processing pipeline
- Optimize for new devices/formats

---

## 📝 Notes for Future Reference

### Important Reminders

1. **Always maintain attribution** - Required for Unsplash/Pexels compliance
2. **Test image loading** - Verify images work in game before deploying
3. **Keep planning document updated** - Single source of truth for image URLs
4. **Document any process changes** - Update this workflow file
5. **Backup processed images** - Store optimized images safely

### Process Improvements

- Consider automated batch processing
- Add image quality validation
- Implement automatic attribution extraction
- Create image preview system
- Add bulk URL validation

---

## 🤝 Collaboration

### For Team Members

1. **Adding Images**: Update `MONUMENT_IMAGE_PLANNING.md`
2. **Processing**: Run the image pipeline scripts
3. **Testing**: Use the monument overview page
4. **Issues**: Check troubleshooting section first

### For Future AI Assistance

This workflow document contains the complete process. When working on Monumentle:

1. **Read this file first** to understand current state
2. **Update planning document** with any new requirements
3. **Follow the established workflow** for consistency
4. **Update this documentation** if process changes

---

*Last Updated: [Current Date]*
*Process Version: 1.0*
