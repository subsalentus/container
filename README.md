# White-Label 3D Maritime Container Home Configurator

A premium B2B SaaS demo application for modular shipping container home builders. Built with **Next.js (App Router)**, **React 19**, **Three.js** via **React Three Fiber (R3F)**, **Zustand**, and **Framer Motion**.

## Project Architecture & Tech Stack

- **Framework**: [Next.js v16](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Modern utility-first styling with blur effects and custom themes)
- **3D Graphics**: [Three.js](https://threejs.org), [@react-three/fiber v9](https://github.com/pmndrs/react-three-fiber) (React 19 compatible renderer), and [@react-three/drei v10](https://github.com/pmndrs/drei)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev)

---

## Phase 1 Implementation Details

We have scaffolded the core structure and built the first release containing:

1. **Modern B2B Landing Page (`/`)**:
   - Sleek header with navigation and call-to-actions.
   - High-fidelity Hero section with glowing dark aesthetics, custom typography, animations via Framer Motion, and a preview card showing an Unsplash container home model.
   - "How it Works" digital manufacturing workflow section (Design, Customize, Build).
   - Core trust metrics and SaaS integration lists.

2. **3D Configurator Router (`/configurator`)**:
   - High-fidelity full-screen application.
   - Left-hand control sidebar featuring categories (Layout, Materials, Openings, Utilities).
   - Real-time cost updates calculated automatically based on options selected.
   - Fully interactive WebGL Canvas with a blueprint grid helper, soft contact shadows, ambient/directional lights, orbit controls (rotate, zoom, pan), and a 3D box model representing a standard 20ft container (`6.06m` × `2.59m` × `2.44m`) outlined with edges.
   - Dynamic importing with server-side rendering (SSR) disabled for the 3D scene to prevent hydration mismatches.

---

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### File Structure

- [`src/app/page.tsx`](file:///c:/Users/marce/Documents/containers/src/app/page.tsx): Main landing page.
- [`src/app/configurator/page.tsx`](file:///c:/Users/marce/Documents/containers/src/app/configurator/page.tsx): Entrypoint to the configurator.
- [`src/components/configurator/ConfiguratorSkeleton.tsx`](file:///c:/Users/marce/Documents/containers/src/components/configurator/ConfiguratorSkeleton.tsx): Layout for the configurator page (sidebar panels, interactive states, dynamic scene loader).
- [`src/components/configurator/Scene.tsx`](file:///c:/Users/marce/Documents/containers/src/components/configurator/Scene.tsx): Interactive WebGL Canvas rendering the 20ft container box, lighting, and grid.
- [`next.config.ts`](file:///c:/Users/marce/Documents/containers/next.config.ts): Configurations containing Three.js package transpilation rule.
