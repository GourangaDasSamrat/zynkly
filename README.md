# Zynkly ⚡

> A modern, fast, themeable link-in-bio site — all your links in one place.

[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![React 19.x](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square)](https://react.dev)
[![Tailwind CSS 4.x](https://img.shields.io/badge/Tailwind%20CSS-4.x-38B2AC?style=flat-square)](https://tailwindcss.com)
[![Vite 6.x](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square)](https://vitejs.dev)

## Demo

![Zynkly screenshot](https://i.postimg.cc/Kvctm2BY/Screenshot-2026-04-15-at-10-31-27-Zynkly-Gouranga-Das-Samrat.png)

**Live Demo:** [bio.gouranga.eu.org](https://bio.gouranga.eu.org)

## Features

- ✨ **Multiple Categories** — Filter links with category pills and item counts
- 📄 **Pagination** — Ready for scaling with configurable items per page
- 🔍 **Fuzzy Search** — Instant search across all links
- 🎨 **Theme Support** — Light / Dark / System mode with localStorage persistence
- 📝 **Typography** — JetBrains Mono throughout for a modern look
- 🎯 **Color Palette** — Carefully curated colors: `#ffcdb2` `#ffb4a2` `#e5989b` `#b5838d` `#6d6875`
- ⚡ **Zero Backend** — Pure static site, deploy anywhere (Vercel, Netlify, GitHub Pages)

## Tech Stack

| Technology   | Version |
| ------------ | ------- |
| React        | 19.x    |
| TypeScript   | 5.x     |
| Tailwind CSS | 4.x     |
| Zustand      | 5.x     |
| Lucide React | latest  |
| Vite         | 6.x     |

## Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm**, **yarn**, or **pnpm** (package manager)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GourangaDasSamrat/zynkly.git
   cd zynkly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173`

## Usage

### Development

```bash
npm run dev      # Start dev server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready for deployment on any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Project Structure

```
src/
├── data/
│   └── links.ts              # Link data, categories, site config
├── store/
│   └── appStore.ts           # Zustand store (theme, search, pagination)
├── hooks/
│   └── useFilteredLinks.ts    # Custom hook for filtering links
├── components/
│   ├── ProfileHeader.tsx      # Header with profile info
│   ├── ThemeToggle.tsx        # Light/Dark/System theme switcher
│   ├── SearchBar.tsx          # Link search bar
│   ├── CategoryFilter.tsx     # Category filtering pills
│   ├── LinkCard.tsx           # Individual link card component
│   ├── Pagination.tsx         # Pagination controls
│   ├── DynamicIcon.tsx        # Dynamic Lucide icon renderer
│   └── Footer.tsx             # Footer component
├── App.tsx                    # Main app component
├── main.tsx                   # React entry point
└── index.css                  # Tailwind CSS + custom properties
```

## Configuration

### Environment Variables

This is a static site, so environment variables are optional. The `.env` file is only needed for optional customizations.

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_SITE_TITLE` | No | Override site title |
| `VITE_DEFAULT_THEME` | No | Default theme: `light`, `dark`, or `system` |
| `VITE_ANALYTICS_ID` | No | Analytics provider ID |
| `VITE_BASE_URL` | No | Base URL for link previews/sharing |
| `NODE_ENV` | No | Environment flag (automatically set) |

## Adding Links

Edit `src/data/links.ts` and add a new link object:

```typescript
{
  id: "my-link",
  label: "My Link",
  url: "https://example.com",
  description: "Short description",
  category: "social",         // must match a category ID
  icon: "Globe",              // any Lucide icon name
  featured: true,             // optional — displays a badge
}
```

For available icons, visit the [Lucide documentation](https://lucide.dev).

## License

MIT © [GourangaDasSamrat](https://gouranga.eu.org)
