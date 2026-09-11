# 🛒 Carttivo

A modern e-commerce storefront frontend built with React 19, Vite, and Tailwind CSS 4 — focused on clean architecture, shared state done right, and a smooth shopping experience.

## Live features

- **Product catalog** with category, brand, price range, and stock filters — all synced through a single shared filter context, so the sidebar, accordion, and grid always stay in sync
- **Cart & wishlist** powered by React Context, with overlay panels for quick access
- **Responsive product grid** with skeleton loading states instead of plain "Loading..." text, so the page never jumps once data arrives
- **Smooth client-side routing** via React Router, with automatic scroll-to-top on every page change
- **Home page** with hero banner, featured products, shop-by-category, seasonal sale section, testimonials, and blog preview — most built on Swiper carousels
- **Static pages** — About, FAQ (accordion-based), Contact, Blog, Terms & Privacy

## Tech stack

| Layer | Choice |
|---|---|
| UI | React 19 |
| Build tool | Vite |
| Styling | Tailwind CSS 4 |
| Routing | React Router 8 |
| Carousels | Swiper |
| State | React Context API (Cart, Wishlist, Product Filters) |
| Linting | oxlint |

## Project structure

```
src/
  assets/            product, hero, and gallery images
  components/
    layout/          app chrome — Navbar, Footer, overlays, page layouts
    ui/               reusable pieces — ProductCard, Button, SectionTitle
    products/         product-page-specific — Sidebar, Accordion
    home/             home-page sections — Hero, FeaturedProducts, Testimonials
    utils/            non-visual side-effect components — ScrollToTop
  context/            CartContext, WishlistContext, ProductFilterContext
  hooks/              useProducts and other reusable logic
  pages/              route-level page components
  services/           API layer (currently mocked data)
```

## Getting started

```bash
git clone https://github.com/Muhammad-Ali-16/carttivo.git
cd carttivo
npm install
npm run dev
```

The app runs locally via Vite's dev server (check the terminal output for the local URL).

Other scripts:

```bash
npm run build      # production build
npm run preview    # preview the production build locally
npm run lint        # run oxlint
```

## Architecture notes

A few deliberate decisions worth calling out for anyone reading the code:

- **Context over hooks for shared state.** A custom hook like `useProductFilters` creates a fresh, isolated copy of state every time it's called — it does not share state across components. Filter state needed to be shared between the sidebar, the accordion, and the product grid, so it lives in `ProductFilterContext` instead, following the same pattern already established by `CartContext` and `WishlistContext`.
- **Folder structure splits by role, not just by feature.** `layout/` holds page chrome, `ui/` holds generic reusable pieces, and page-specific components (like the product filter sidebar) get their own folder rather than living loosely under `layout/`.
- **Skeleton loading over spinner text.** Loading states mirror the shape of the real content (image, title, price) to avoid layout shift and to feel faster than a blank "Loading..." message.

## Status

Actively developed as a learning and portfolio project — architecture and folder structure are being refined incrementally as new features are added.
