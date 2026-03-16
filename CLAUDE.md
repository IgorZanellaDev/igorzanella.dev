# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server with Turbopack
yarn build        # Production build
yarn lint         # ESLint
yarn prettier:check  # Check formatting
yarn prettier:write  # Auto-fix formatting
```

No test suite is configured in this project.

## Architecture

Personal portfolio site for Igor Zanella built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** components. Deployed on Vercel.

### Data model

All content is **static — no database, no API routes**. Data lives in `src/constants/`:

- `projects.tsx` — array of `Project` objects; each includes inline JSX as `content` (rendered in the dynamic route), a list of `TechnologyId` references, and a `ProjectStatus` enum value
- `technologies.ts` — master list of `Technology` objects keyed by `TechnologyId`; derived lookup maps `TECHNOLOGIES_BY_ID` and `TECHNOLOGIES_BY_TYPE` are exported from this file
- `courses.ts` — course data
- `menu.ts` — navigation links
- `seo.ts` — shared metadata constants (title, GTM ID, base URL)

### Adding a new project

1. Add technology entries to `src/constants/technologies.ts` (if needed) and extend `TechnologyId` / `TechnologyType` enums in `src/types/technology.ts`
2. Add a `Project` entry to the `PROJECTS` array in `src/constants/projects.tsx`
3. Place images at `public/images/projects/<id>/main.jpg` (and any additional referenced images in the same folder)

The dynamic route `src/app/projects/[project]/page.tsx` resolves projects by matching `params.project` against `Project.id`.

### Layout

The root layout (`src/app/layout.tsx`) uses a two-column flex layout on desktop: `<Menu>` (sidebar) on the left, `<main>` + `<Footer>` on the right. Analytics integrations (Google Tag Manager, Umami) and legal scripts (Iubenda) are injected here.

### Theme

`next-themes` with `attribute="class"`. Technology icons that need to change on theme switch are flagged with `themeChange: true` on the `Technology` type.

### UI components

- shadcn/ui primitives live in `src/components/ui/`
- `src/components/magicui/` holds animated components (Marquee)
- Feature components (header, menu, technologies matrix, GitHub calendar, testimonial) are in `src/components/`

### Path alias

`@/` maps to `src/` (configured in `tsconfig.json`).
