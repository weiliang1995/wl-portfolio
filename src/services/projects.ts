import type { Project } from "@/types";

// Static data source. There is no backend in this project; when one appears,
// only this module changes and callers keep the same signature.
const projects: Project[] = [
  {
    id: "wl-harness",
    title: "wl-harness",
    summary:
      "A Claude Code plugin that walks a project from intake to handoff through fixed workflow stages, keeping stack decisions out of every individual run.",
    tech: ["Node.js", "Claude Code", "Plugin API"],
    year: 2026,
  },
  {
    id: "codegraph",
    title: "CodeGraph",
    summary:
      "A SQLite knowledge graph over a codebase's symbols and call edges, answering code questions in one round-trip instead of a grep-and-read loop.",
    tech: ["TypeScript", "SQLite", "Tree-sitter"],
    year: 2025,
  },
  {
    id: "wl-portfolio",
    title: "wl-portfolio",
    summary:
      "This site. Next.js App Router with Less modules and an Ant Design layer that business code never imports directly.",
    tech: ["Next.js", "TypeScript", "Less", "Ant Design"],
    year: 2026,
  },
];

export function getProjects(): Project[] {
  return [...projects].sort((a, b) => b.year - a.year);
}

export function getFeaturedProjects(limit = 2): Project[] {
  return getProjects().slice(0, limit);
}
