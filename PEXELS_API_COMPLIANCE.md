# Pexels API Compliance Guide

## Overview
This document outlines the requirements and best practices for using the Pexels API in the Monumentle project. Compliance with these guidelines is essential to maintain proper attribution and respect Pexels' terms of service.

## API Key and Authorization
- All requests to the Pexels API require an API key in the Authorization header
- The API key should be stored securely as an environment variable
- Default rate limits: 200 requests per hour and 20,000 requests per month

## Attribution Requirements

### Required Attribution
When displaying Pexels images, you MUST include:
- Text attribution: "Photo by [Photographer Name] on Pexels"
- The photographer's name must link to their Pexels profile
- The word "Pexels" must link to pexels.com

### Example Attribution
\`\`\`html
This <a href="https://www.pexels.com/photo/photo-id">Photo</a> was taken by <a href="https://www.pexels.com/@photographer-username">Photographer Name</a> on Pexels.
\`\`\`

### Linking Back to Pexels
In addition to individual photo attribution, you should include a general attribution:

\`\`\`html
<a href="https://www.pexels.com">Photos provided by Pexels</a>
\`\`\`

Or use one of the Pexels logos:

\`\`\`html
<a href="https://www.pexels.com">
  <img src="https://images.pexels.com/lib/api/pexels.png" />
</a>
\`\`\`

## Prohibited Uses
- Do not copy or replicate core Pexels functionality
- Do not create wallpaper apps using Pexels content
- Do not abuse the API or attempt to work around rate limits

## Image Sizes and Formats
Pexels provides multiple image sizes through the `src` object:
- `original`: Original image size
- `large2x`: Large image with 2x DPR (typically ~2500px)
- `large`: Large image (typically ~940px wide)
- `medium`: Medium image (typically ~350px high)
- `small`: Small image (typically ~130px high)
- `portrait`: 800x1200 cropped image
- `landscape`: 1200x627 cropped image
- `tiny`: 280x200 cropped image

## Implementation in Monumentle
In our Monumentle project:
1. We store the photographer name, URL, and image source in our monument database
2. We display proper attribution on the monument overview page
3. We include a link to Pexels in our footer
4. We respect rate limits by processing images in batches

## API Response Structure
The Pexels API returns photo data in this format:
\`\`\`json
{
  "id": 2014422,
  "width": 3024,
  "height": 3024,
  "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
  "photographer": "Joey Farina",
  "photographer_url": "https://www.pexels.com/@joey",
  "photographer_id": 680589,
  "avg_color": "#978E82",
  "src": {
    "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
    "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
    "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
    "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
  },
  "alt": "Brown Rocks During Golden Hour"
}
\`\`\`

## Extracting Photo IDs
Our multi-platform processor extracts Pexels photo IDs from URLs using this pattern:
\`\`\`
https://www.pexels.com/photo/photo-name-12345/
\`\`\`
Where `12345` is the photo ID needed for API requests.

## Additional Resources
- [Pexels API Documentation](https://www.pexels.com/api/documentation/)
- [Pexels Terms of Service](https://www.pexels.com/terms-of-service/)
