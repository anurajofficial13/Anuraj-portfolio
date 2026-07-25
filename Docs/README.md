# Anuraj P | Scalable React Portfolio

A modern, highly optimized portfolio application built with React, Vite, Tailwind CSS, and Lucide React. Re-architected for component modularity, responsiveness, and dark mode theme switching.

## Folder Directory Structure

```text
├── public/                # Static assets (Favicons, PDF resume)
│   ├── favicon.ico
│   ├── resume.pdf
│   └── images/
│
├── src/
│   ├── assets/            # Local media resources
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── layout/        # App layout elements (Header, Footer, Custom Cursor)
│   │   ├── sections/      # Single-page sections (Hero, About, Projects, Experience, Contact)
│   │   └── ui/            # Reusable core design components (Button, Card, Badge, Title)
│   │
│   ├── data/              # Dynamic local state lists (Projects, Skills, Social Links)
│   ├── hooks/             # Custom React Hooks (useTheme, useCursor, useScrollReveal)
│   ├── styles/            # Structured, split CSS files (globals, animations, utilities)
│   ├── utils/             # Helper tools and constants (constants)
│   │
│   ├── App.jsx            # Layout assembly module
│   ├── main.jsx           # React DOM renderer
│   └── index.css          # Main stylesheet loading Tailwind & modular stylesheets
│
├── index.html             # Vite entry wrapper template
├── tailwind.config.js     # Tailwind CSS styles and extensions configuration
└── vite.config.js         # Vite compile configuration
```

## Local Development Setup

To run this application locally, use the following commands in your shell:

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Local Dev Server
```bash
npm run dev
```

### 3. Build Production-ready bundle
```bash
npm run build
```
The compiled, ready-to-deploy static assets will compile under the `dist/` directory.
