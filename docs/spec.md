# wl-portfolio — Spec

## Purpose

A personal portfolio site presenting who the author is, what they have built,
and how to reach them.

## Routes

- `/` — Landing page: name, one-line positioning, a short intro, and links into
  the other three routes.
- `/about` — Longer biography, skills, and background.
- `/projects` — List of projects, each with title, summary, tech tags, and an
  optional external link. Data comes from a local static module, not a network
  call.
- `/contact` — Ways to reach the author (email and profile links). No form
  submission backend.

## Constraints

- Frontend only. No database, no auth, no server-side data source.
- Project data is a typed static array in the services layer.
- Ant Design is used only through wrappers in `src/components/ui/`; no route or
  business component imports `antd` directly.
- Component styles are `*.module.less`; global Less holds variables, reset, and
  theme only.

## Acceptance criteria

- `pnpm exec tsc --noEmit` passes with `strict: true`.
- Every route above renders without runtime errors.
- No `import ... from 'antd'` occurs outside `src/components/ui/`.
