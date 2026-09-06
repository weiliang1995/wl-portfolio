# wl-portfolio — Scaffold plan

Steps run in order. Each lists the files it produces.

## 1. Create the Next.js app

`pnpm create next-app@latest . --ts --eslint --app --src-dir --import-alias "@/*" --no-tailwind`

Produces: `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`,
`src/app/layout.tsx`, `src/app/page.tsx`, `public/`.

Then confirm `"strict": true` in `tsconfig.json`.

## 2. Add Less and Ant Design

`pnpm add antd less` (plus `@ant-design/nextjs-registry` for SSR style
extraction).

Produces: updated `package.json`, `pnpm-lock.yaml`.

## 3. Directory layout and global styles

Produces:
- `src/styles/variables.less` — colour, spacing, breakpoint variables
- `src/styles/mixins.less` — shared mixins
- `src/styles/globals.less` — reset and theme, imports the two above
- empty-but-present `src/hooks/`, `src/utils/`
- `src/app/layout.tsx` rewritten to load `globals.less` and the antd registry

Delete the generated `src/app/globals.css` and `src/app/page.module.css`.

## 4. Types and services

Produces:
- `src/types/project.ts` — `Project` interface
- `src/services/projects.ts` — typed static project array plus `getProjects()`
- `src/services/profile.ts` — author name, bio, skills, contact links

## 5. UI wrappers (`src/components/ui/`)

The only place `antd` may be imported. Produces one file per component the
routes need:
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Tag.tsx`
- `src/components/ui/Typography.tsx` (Title / Text / Paragraph)
- `src/components/ui/Space.tsx`
- `src/components/ui/Divider.tsx`
- `src/components/ui/index.ts` — barrel re-export

## 6. Shared presentational components

Produces:
- `src/components/SiteHeader.tsx` + `SiteHeader.module.less` — nav across routes
- `src/components/SiteFooter.tsx` + `SiteFooter.module.less`
- `src/components/ProjectCard.tsx` + `ProjectCard.module.less`
- `src/components/PageSection.tsx` + `PageSection.module.less`

## 7. Route: `/`

Produces: `src/app/page.tsx`, `src/app/page.module.less`.

## 8. Route: `/about`

Produces: `src/app/about/page.tsx`, `src/app/about/page.module.less`.

## 9. Route: `/projects`

Produces: `src/app/projects/page.tsx`, `src/app/projects/page.module.less`.

## 10. Route: `/contact`

Produces: `src/app/contact/page.tsx`, `src/app/contact/page.module.less`.

## 11. Verify

`pnpm exec tsc --noEmit`, then `pnpm build` to confirm every route renders.
