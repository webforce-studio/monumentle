# 🏛️ Monumentle - Daily Monument Guessing Game

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/webforce-studio/monumentle)

**Monumentle** is a daily monument guessing game where players identify famous world landmarks from progressively revealed images. Test your cultural knowledge with iconic sites like the Eiffel Tower, Pyramids of Giza, and Taj Mahal!

## ✨ Features

- 🎮 **Daily Challenge**: New monument every day
- 🌍 **47+ World Landmarks**: Famous monuments from all continents
- 📸 **Progressive Reveal**: Images become clearer with each guess
- 📍 **Distance Hints**: Learn geography with proximity indicators
- 🏆 **Achievement System**: Streak tracking and milestones
- 📊 **Admin Dashboard**: Manage monuments and view statistics
- 🍪 **Privacy Compliant**: GDPR/CCPA cookie consent with Google Analytics
- 🌙 **Dark/Light Theme**: Responsive design for all devices
- 🚀 **SEO Optimized**: Structured data and meta tags

## 🎯 How to Play

1. **Guess the Monument**: You have 6 attempts to identify the mystery landmark
2. **Progressive Hints**: Each wrong guess reveals more of the image
3. **Distance Clues**: Get proximity hints to learn global geography
4. **Build Streaks**: Maintain winning streaks for achievements
5. **Share Results**: Share your daily results on social media

## 🏗️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Radix UI
- **Database**: File-based persistence (PostgreSQL ready)
- **Analytics**: Google Analytics 4 with Consent Mode v2
- **Deployment**: Vercel (auto-deploy enabled)
- **Package Manager**: pnpm

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/webforce-studio/monumentle.git
cd monumentle

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your Google Analytics ID: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app in action!

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/webforce-studio/monumentle)

1. **Connect GitHub**: Link your GitHub repository to Vercel
2. **Add Environment Variables**:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics measurement ID
3. **Deploy**: Vercel will automatically build and deploy your app
4. **Auto-Deploy**: Future pushes to `main` will automatically trigger deployments

### Environment Variables

```bash
# Required for Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🎮 Monument Collection

Our curated collection includes:

**Europe**: Eiffel Tower, Big Ben, Colosseum, Neuschwanstein Castle, Sagrada Familia
**Asia**: Taj Mahal, Great Wall of China, Angkor Wat, Mount Fuji, Petra
**Americas**: Statue of Liberty, Machu Picchu, Christ the Redeemer, Chichen Itza
**Africa**: Pyramids of Giza, Sphinx, Victoria Falls
**Oceania**: Sydney Opera House, Uluru
**And many more...**

## 🛠️ Development

### Project Structure

```
monumentle/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── lib/                # Utilities and data management
├── public/             # Static assets
├── styles/             # Global styles
└── data/               # Monument data and CSV files
```

### Key Files

- `lib/monument-database.ts`: Monument data and interfaces
- `app/page.tsx`: Main game component
- `app/admin/`: Admin dashboard for monument management
- `components/cookie-consent.tsx`: GDPR-compliant cookie banner
- `components/google-analytics.tsx`: GA4 integration

### Adding New Monuments

1. **Edit Monument Database**: Add new entries to `lib/monument-database.ts`
2. **Image Requirements**: High-quality images with proper attribution
3. **Data Fields**: Name, location, coordinates, description, year built
4. **Admin Interface**: Use `/admin/dashboard` to manage monuments

## 📊 Analytics & Privacy

- **Google Analytics 4**: Comprehensive game analytics
- **Custom Events**: Monument guesses, completions, streaks
- **Cookie Consent**: Granular privacy controls
- **GDPR Compliant**: Explicit consent required
- **Privacy First**: No tracking without user permission

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] **Multiplayer Mode**: Compete with friends
- [ ] **Weekly Challenges**: Special themed weeks
- [ ] **Achievement Badges**: Visual progress indicators
- [ ] **Monument Stories**: Rich historical content
- [ ] **User Accounts**: Personal statistics and history
- [ ] **Mobile App**: Native iOS/Android versions

## 🙋‍♂️ Support

- **Issues**: [GitHub Issues](https://github.com/webforce-studio/monumentle/issues)
- **Discussions**: [GitHub Discussions](https://github.com/webforce-studio/monumentle/discussions)
- **Email**: contact@monumentle.fun

## 🌟 Acknowledgments

- **Monument Images**: Sourced from Unsplash with proper attribution
- **Geographic Data**: Various open-source geographic databases
- **Inspiration**: The original Wordle game by Josh Wardle
- **UI Components**: Radix UI and Tailwind CSS communities

---

**Made with ❤️ for geography enthusiasts and cultural explorers worldwide**

[🌐 Play Monumentle](https://monumentle.fun) | [📱 Share on Twitter](https://twitter.com/intent/tweet?text=I%20just%20played%20Monumentle%2C%20the%20daily%20monument%20guessing%20game!%20%F0%9F%8F%9B%EF%B8%8F%20Test%20your%20knowledge%20of%20world%20landmarks%3A%20https%3A//monumentle.fun) | [⭐ Star on GitHub](https://github.com/webforce-studio/monumentle) 