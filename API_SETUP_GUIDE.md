# API Setup Guide for Multi-Platform Image Processing

## Required API Keys

### Unsplash API
- **Current Status**: ✅ Already configured
- **API Key**: Already set in scripts
- **Usage**: Automatically handles attribution and download tracking

### Pexels API
- **Status**: 🔧 Needs setup
- **How to get API key**:
  1. Go to [https://www.pexels.com/api/](https://www.pexels.com/api/)
  2. Sign up for a free account
  3. Create a new application
  4. Copy your API key
  5. Add it to the `PEXELS_API_KEY` variable in the processing scripts

## Attribution Requirements

### Unsplash
- **Required**: "Photo by [Photographer Name] on Unsplash"
- **Link**: Must link to photographer's Unsplash profile
- **Download tracking**: Automatically handled by our scripts

### Pexels
- **Required**: "Photo by [Photographer Name] on Pexels"
- **Link**: Must link to photographer's Pexels profile
- **No download tracking required**

## Supported URL Formats

### Unsplash
\`\`\`
https://unsplash.com/photos/photo-description-PHOTO_ID
\`\`\`
Example: `https://unsplash.com/photos/eiffel-tower-paris--7XJZ4tHBZQ`

### Pexels
\`\`\`
https://www.pexels.com/photo/photo-description-PHOTO_ID/
\`\`\`
Example: `https://www.pexels.com/photo/saint-basil-cathedral-8285167/`

## Usage in Monument Planning

You can now use either platform in your `MONUMENT_IMAGE_PLANNING.md` file:

\`\`\`markdown
| Monument | Image URL |
|----------|-----------|
| Eiffel Tower | https://unsplash.com/photos/eiffel-tower--7XJZ4tHBZQ |
| St. Basil's | https://www.pexels.com/photo/saint-basil-cathedral-8285167/ |
\`\`\`

## Next Steps

1. Get your Pexels API key
2. Update the `PEXELS_API_KEY` in the processing scripts
3. Add both Unsplash and Pexels URLs to your monument planning document
4. Run the multi-platform processor to handle both types of URLs
