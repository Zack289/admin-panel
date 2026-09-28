# Admin Panel Dashboard

A modern admin dashboard built with React, TypeScript, Vite, SCSS, and charting components. The app includes a responsive side menu, analytics cards, tables, chart widgets, and detail pages for users and products.

## Features

- Dashboard overview with summary cards and charts
- User management list and detail pages
- Product management list and detail pages
- Responsive sidebar navigation and top navbar
- Reusable data table UI
- Login page layout
- Styled with SCSS and component-based structure

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- Recharts
- Material UI
- SCSS

## Project Structure

```bash
src/
├── App.tsx
├── data.ts
├── main.tsx
├── components/
│   ├── add/
│   ├── barChartBox/
│   ├── bigChartBox/
│   ├── chartBox/
│   ├── dataTable/
│   ├── footer/
│   ├── menu/
│   ├── navbar/
│   ├── pieChartBox/
│   ├── single/
│   └── topBox/
├── pages/
│   ├── home/
│   ├── login/
│   ├── product/
│   ├── products/
│   ├── user/
│   └── users/
├── styles/
│   ├── global.scss
│   ├── responsive.scss
│   └── variables.scss
└── vite-env.d.ts
```

## Available Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

### Scripts explained

- `npm run dev` — starts the Vite development server
- `npm run build` — compiles TypeScript and builds the production bundle
- `npm run preview` — previews the production build locally

## Getting Started

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## App Overview

The dashboard is organized around a layout with:

- a top navigation bar
- a left-side menu for main sections
- a content panel containing the selected page
- chart cards and tables for analytics
- user and product detail routes via `/users/:id` and `/products/:id`

## Notes

This project is a front-end admin dashboard demo with sample data. It is designed for UI/UX prototyping and dashboard presentation rather than connecting to a live backend service.

## License

This project is for educational/demo purposes.
