import fs from "fs"

// Read the planning document
console.log("📄 Reading MONUMENT_IMAGE_PLANNING.md...")

try {
  const content = fs.readFileSync("MONUMENT_IMAGE_PLANNING.md", "utf-8")

  // Look for the Colosseum entry (ID 5)
  const lines = content.split("\n")

  console.log("🔍 Looking for Colosseum (ID 5)...")

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Look for lines that start with "| 5" (Colosseum)
    if (line.startsWith("| 5 |")) {
      console.log("✅ Found Colosseum entry:")
      console.log(line)

      // Split by | to get columns
      const columns = line.split("|").map((col) => col.trim())
      console.log("\n📊 Columns:")
      columns.forEach((col, index) => {
        if (col) console.log(`  ${index}: ${col}`)
      })

      // Look for image URLs
      const imageUrls = columns.filter((col) => col.includes("unsplash.com") || col.includes("pexels.com"))

      console.log("\n🖼️ Image URLs found:")
      imageUrls.forEach((url, index) => {
        console.log(`  ${index + 1}: ${url}`)
      })

      break
    }
  }

  // Also show the table header to understand the structure
  console.log("\n📋 Looking for table headers...")
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.includes("| ID |") || line.includes("|ID|")) {
      console.log("📋 Table header:")
      console.log(line)
      if (lines[i + 1]) {
        console.log(lines[i + 1]) // separator line
      }
      break
    }
  }
} catch (error) {
  console.error("❌ Error reading file:", error.message)
}
