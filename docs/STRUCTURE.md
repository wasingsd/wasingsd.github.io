# Project Structure

This document outlines the directory structure and key files in the Next.js Dashboard project.

## Root Directory

- `src/`: Source code for the application.
- `public/`: Static assets (images, fonts, etc.) served directly.
- `next.config.ts`: Configuration for Next.js.
- `tsconfig.json`: TypeScript configuration.
- `tailwind.config.ts`: Tailwind CSS configuration (if present in root, else in src).
- `package.json`: Project dependencies and scripts.

## `src/` Directory

### `src/app/`
Contains the application's routes and pages (App Router).

- `page.tsx`: The home page of the application.
- `layout.tsx`: Root layout component wrapping all pages.
- `globals.css`: Global styles, including Tailwind directives.

### Key Concepts

- **App Router**: Uses file-system based routing. Folders inside `app/` define routes.
- **Server Components**: Pages are Server Components by default for better performance.
- **Client Components**: Use `'use client'` directive for interactive components.
