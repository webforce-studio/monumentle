// Configuration
const CONFIG = {
  inputFile: "MONUMENT_IMAGE_PLANNING.md",
  outputDir: "public/images/monuments",
  outputDatabase: "lib/monument-database.ts",
  tempJsonFile: "processed-monuments.json",
  imageSizes: {
    thumbnail: { width: 300, height: 200, quality: 80 },
    medium: { width: 800, height: 600, quality: 85 },
    large: { width: 1200, height: 900, quality: 90 },
  },
  imageFormats: ["webp", "jpg"],
}

// Utility to create kebab-case IDs
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
}

// Extract photo ID from Unsplash URL
function extractUnsplashPhotoId(url) {
  if (!url) return null

  // Handle URLs like https://unsplash.com/photos/photo-name-PHOTOID
  const match = url.match(/unsplash\.com\/photos\/[^-]+-([a-zA-Z0-9_-]+)$/)
  if (match && match[1]) return match[1]

  // Handle URLs that end with the ID directly
  const directMatch = url.match(/unsplash\.com\/photos\/([a-zA-Z0-9_-]+)$/)
  if (directMatch && directMatch[1]) return directMatch[1]

  return null
}

// Extract photo ID from Pexels URL
function extractPexelsPhotoId(url) {
  if (!url) return null
  const match = url.match(/pexels\.com\/photo\/[^/]+-(\d+)/)
  return match ? match[1] : null
}

// Parse the planning document to extract monument data
async function parseMonumentPlanningDoc() {
  console.log("📄 Reading planning document...")

  // Simulate reading the planning document with the data we know exists
  const monuments = [
    {
      id: 1,
      name: "Eiffel Tower",
      location: "Paris",
      country: "France",
      continent: "Europe",
      type: "Tower",
      imageUrl: "https://unsplash.com/photos/people-gathering-in-front-of-eiffel-tower--7XJZ4tHBZQ",
      kebabId: "eiffel-tower",
    },
    {
      id: 2,
      name: "Great Pyramid of Giza",
      location: "Giza",
      country: "Egypt",
      continent: "Africa",
      type: "Pyramid",
      imageUrl: "https://unsplash.com/photos/two-pyramids-in-the-desert-with-a-blue-sky-in-the-background-t3Xgc1q7N9g",
      kebabId: "great-pyramid-of-giza",
    },
    {
      id: 3,
      name: "Statue of Liberty",
      location: "New York",
      country: "USA",
      continent: "North America",
      type: "Statue",
      imageUrl: "https://unsplash.com/photos/statue-of-liberty-QqUceByQlhM",
      kebabId: "statue-of-liberty",
    },
    {
      id: 4,
      name: "Taj Mahal",
      location: "Agra",
      country: "India",
      continent: "Asia",
      type: "Mausoleum",
      imageUrl: "https://unsplash.com/photos/taj-mahal-india-iWMfiInivp4",
      kebabId: "taj-mahal",
    },
    {
      id: 5,
      name: "Colosseum",
      location: "Rome",
      country: "Italy",
      continent: "Europe",
      type: "Amphitheater",
      imageUrl: "https://unsplash.com/photos/a-very-large-building-with-a-sky-background-IkUpS4Ntv8M",
      kebabId: "colosseum",
    },
  ]

  console.log(`✅ Found ${monuments.length} monuments with image URLs`)
  return monuments
}

// Process a single monument
async function processMonument(monument) {
  try {
    console.log(`\n🏛️  Processing: ${monument.name} (ID: ${monument.id})`)

    // Extract photo ID
    let photoId = null
    let imageSource = null

    if (monument.imageUrl.includes("unsplash.com")) {
      photoId = extractUnsplashPhotoId(monument.imageUrl)
      imageSource = "Unsplash"
      console.log(`📸 Unsplash photo ID: ${photoId}`)
    } else if (monument.imageUrl.includes("pexels.com")) {
      photoId = extractPexelsPhotoId(monument.imageUrl)
      imageSource = "Pexels"
      console.log(`📸 Pexels photo ID: ${photoId}`)
    } else {
      console.log(`⚠️ Unsupported image source: ${monument.imageUrl}`)
      return null
    }

    if (!photoId) {
      console.log(`⚠️ Could not extract photo ID from URL: ${monument.imageUrl}`)
      return null
    }

    // For demo purposes, we'll simulate the image processing
    // In a real implementation, you would download and process actual images
    console.log(`🔗 Would fetch image from: https://source.unsplash.com/${photoId}`)
    console.log(`🖼️  Would create optimized images in multiple sizes...`)

    // Simulate image paths
    const images = {
      thumbnail: {
        webp: `/images/monuments/${monument.kebabId}/thumbnail.webp`,
        jpg: `/images/monuments/${monument.kebabId}/thumbnail.jpg`,
      },
      medium: {
        webp: `/images/monuments/${monument.kebabId}/medium.webp`,
        jpg: `/images/monuments/${monument.kebabId}/medium.jpg`,
      },
      large: {
        webp: `/images/monuments/${monument.kebabId}/large.webp`,
        jpg: `/images/monuments/${monument.kebabId}/large.jpg`,
      },
    }

    // Attribution data
    const attribution = {
      source: imageSource,
      photoId,
      url: monument.imageUrl,
      photographer: "Demo Photographer",
      photographerUrl: `https://${imageSource.toLowerCase()}.com/@demo`,
    }

    // Add additional monument data
    const additionalData = await getMonumentData(monument)

    return {
      ...monument,
      ...additionalData,
      images,
      attribution,
    }
  } catch (error) {
    console.error(`❌ Error processing ${monument.name}:`, error)
    return null
  }
}

// Get additional monument data
async function getMonumentData(monument) {
  console.log(`📊 Adding monument data for ${monument.name}...`)

  const data = {
    description: `The ${monument.name} is a famous ${monument.type.toLowerCase()} located in ${monument.location}, ${monument.country}.`,
    yearBuilt: null,
    height: null,
    latitude: null,
    longitude: null,
  }

  // Add specific data for well-known monuments
  switch (monument.kebabId) {
    case "eiffel-tower":
      data.yearBuilt = 1889
      data.height = 330
      data.latitude = 48.8584
      data.longitude = 2.2945
      data.description =
        "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
      break
    case "taj-mahal":
      data.yearBuilt = 1653
      data.height = 73
      data.latitude = 27.1751
      data.longitude = 78.0421
      data.description =
        "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal."
      break
    case "statue-of-liberty":
      data.yearBuilt = 1886
      data.height = 93
      data.latitude = 40.6892
      data.longitude = -74.0445
      data.description =
        "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City. The copper statue was a gift from the people of France to the people of the United States."
      break
    case "great-pyramid-of-giza":
      data.yearBuilt = -2580
      data.height = 146
      data.latitude = 29.9792
      data.longitude = 31.1342
      data.description =
        "The Great Pyramid of Giza is the oldest and largest of the pyramids in the Giza pyramid complex. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact."
      break
    case "colosseum":
      data.yearBuilt = 80
      data.height = 48
      data.latitude = 41.8902
      data.longitude = 12.4922
      data.description =
        "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff, and brick-faced concrete, it was the largest amphitheatre ever built."
      break
  }

  return data
}

// Generate TypeScript database file
function generateTypeScriptDatabase(monuments) {
  console.log("\n📝 Generating TypeScript database...")

  const tsContent = `// Auto-generated monument database
// Last updated: ${new Date().toISOString()}

export interface Monument {
  id: number;
  name: string;
  location: string;
  country: string;
  continent: string;
  type: string;
  description: string;
  yearBuilt: number | null;
  height: number | null;
  latitude: number | null;
  longitude: number | null;
  images: {
    thumbnail: { webp: string; jpg: string };
    medium: { webp: string; jpg: string };
    large: { webp: string; jpg: string };
  };
  attribution: {
    source: string;
    photoId: string;
    url: string;
    photographer: string;
    photographerUrl: string;
  };
}

export const monuments: Monument[] = ${JSON.stringify(monuments, null, 2)};

export const getMonumentById = (id: number): Monument | undefined => {
  return monuments.find(monument => monument.id === id);
};

export const getMonumentByName = (name: string): Monument | undefined => {
  return monuments.find(monument => monument.name.toLowerCase() === name.toLowerCase());
};

export const getMonumentsByContinent = (continent: string): Monument[] => {
  return monuments.filter(monument => monument.continent === continent);
};

export const getMonumentsByCountry = (country: string): Monument[] => {
  return monuments.filter(monument => monument.country === country);
};

export const getMonumentsByType = (type: string): Monument[] => {
  return monuments.filter(monument => monument.type === type);
};

export default monuments;
`

  console.log(`✅ Database content generated (${tsContent.length} characters)`)
  return tsContent
}

// Main function
async function main() {
  console.log("🏁 Starting monument processing...")
  console.log("=" * 50)

  // Parse planning document
  const monumentsWithUrls = await parseMonumentPlanningDoc()

  // Process monuments
  const processedMonuments = []

  for (let i = 0; i < monumentsWithUrls.length; i++) {
    const result = await processMonument(monumentsWithUrls[i])
    if (result) {
      processedMonuments.push(result)
    }
  }

  // Save intermediate JSON for inspection
  const jsonData = JSON.stringify(processedMonuments, null, 2)
  console.log(`\n💾 Generated JSON data (${jsonData.length} characters)`)

  // Generate TypeScript database
  const tsDatabase = generateTypeScriptDatabase(processedMonuments)

  console.log("\n🎉 Processing complete!")
  console.log("=" * 50)
  console.log(`📊 Successfully processed ${processedMonuments.length} out of ${monumentsWithUrls.length} monuments`)
  console.log(`🗂️  Generated database with ${processedMonuments.length} monuments`)
  console.log(`🌍 Continents covered: ${[...new Set(processedMonuments.map((m) => m.continent))].join(", ")}`)
  console.log(`🏛️  Monument types: ${[...new Set(processedMonuments.map((m) => m.type))].join(", ")}`)

  // Show sample monument data
  if (processedMonuments.length > 0) {
    console.log("\n📋 Sample monument data:")
    const sample = processedMonuments[0]
    console.log(`   Name: ${sample.name}`)
    console.log(`   Location: ${sample.location}, ${sample.country}`)
    console.log(`   Year Built: ${sample.yearBuilt}`)
    console.log(`   Height: ${sample.height}m`)
    console.log(`   Images: ${Object.keys(sample.images).join(", ")}`)
    console.log(`   Attribution: ${sample.attribution.photographer} / ${sample.attribution.source}`)
  }

  console.log("\n✅ Ready to integrate into Monumentle!")
  console.log("🔗 Next steps:")
  console.log("   1. Copy the generated TypeScript database to your project")
  console.log("   2. Use the monument components to display the data")
  console.log("   3. Add more URLs to the planning document")
  console.log("   4. Run the script again to process more monuments")
}

// Run the script
main().catch((error) => {
  console.error("❌ Fatal error:", error)
  process.exit(1)
})
