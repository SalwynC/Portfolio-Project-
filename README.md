<div align="center">

# Salwyn Christopher — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-555)](#)

</div>

> A polished, accessible, and fast personal portfolio showcasing projects, experience, skills, and certifications with a beautiful dark mode and smooth animations.

---

##  Features

- Dark mode with accessible contrast and smooth theme transitions
- Animated hero, typing roles, and interactive gradient background
- Projects with modals, tech badges, and rich previews
- Certifications, experience, education, skills, and contact sections
- Reusable UI system (buttons, inputs, cards, select, badges)
- Strong focus states and keyboard navigation (a11y)
- Modern color system using OKLCH variables

##  Tech Stack

- Framework: Next.js 16, React 19, TypeScript
- Styling: Tailwind CSS 4, CSS variables, utility classes
- Animations: Framer Motion
- Theming: next-themes
- Icons: Lucide

##  Getting Started

Prerequisites: Node 20+ and pnpm

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

For a production build:

```bash
pnpm build
pnpm start
```

##  Project Structure

```
app/            # Next.js app router pages and global styles
components/     # UI primitives and sections
hooks/          # Custom hooks
lib/            # Data and utilities
public/         # Static assets
```

##  Configuration

- Theme Provider and CSS variables live in app/globals.css and components/theme-provider.tsx.
- Section components are in components/sections/*.
- Common UI is under components/ui/*.

##  Deployment

This project is deployment-ready on Vercel or any Node host.

```bash
# Example: build output
pnpm build
# Run production server
pnpm start
```

##  License

MIT — feel free to use and adapt. Attribution is appreciated.
