# Zynkly ⚡

> A modern, fast, themeable link-in-bio site — all your links in one place.

**Live:** [bio.gouranga.eu.org](https://bio.gouranga.eu.org)

## ✨ Features

- **Multiple categories** with category filter pills & item counts
- **Pagination** — ready for future scaling (configurable per-page)
- **Search** — instant fuzzy search across all links
- **Theme** — Light / Dark / System (persisted via localStorage)
- **JetBrains Mono** typography throughout
- **Color palette:** `#ffcdb2` `#ffb4a2` `#e5989b` `#b5838d` `#6d6875`
- Zero backend — pure static site, deploys anywhere

## 🛠 Tech Stack

| Tool         | Version |
| ------------ | ------- |
| React        | 19.x    |
| TypeScript   | 5.x     |
| Tailwind CSS | 4.x     |
| Zustand      | 5.x     |
| Lucide React | latest  |
| Vite         | 6.x     |

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/GourangaDasSamrat/zynkly.git
cd zynkly

# 2. Install
npm install

# 3. Copy env
cp .env.example .env

# 4. Start dev server
npm run dev
```

## 📁 Project Structure

```
src/
├── data/
│   └── links.ts          # All link data + categories + site config
├── store/
│   └── appStore.ts       # Zustand store (theme, search, pagination)
├── hooks/
│   └── useFilteredLinks.ts
├── components/
│   ├── ProfileHeader.tsx
│   ├── ThemeToggle.tsx
│   ├── SearchBar.tsx
│   ├── CategoryFilter.tsx
│   ├── LinkCard.tsx
│   ├── Pagination.tsx
│   ├── DynamicIcon.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css             # Tailwind v4 + CSS custom properties
```

## ✏️ Adding Links

Edit `src/data/links.ts`:

```ts
{
  id: "my-link",
  label: "My Link",
  url: "https://example.com",
  description: "Short description",
  category: "social",       // must match a category id
  icon: "Globe",            // any Lucide icon name
  featured: true,           // optional — shows a badge
}
```

## 📄 License

MIT © [GourangaDasSamrat](https://gouranga.eu.org)
