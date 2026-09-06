import type { Profile } from "@/types";

const profile: Profile = {
  name: "Wei Liang",
  tagline: "Frontend engineer building tools that make the work quieter.",
  intro:
    "I build web applications and the developer tooling around them — mostly TypeScript, mostly on the frontend, with a bias toward small interfaces that hide a lot of machinery.",
  bio: [
    "I work primarily on frontend systems: React and Next.js applications, design-system layers, and the build tooling that keeps them consistent as they grow.",
    "Recently most of my attention has gone to developer tooling — code intelligence, workflow harnesses, and the kind of automation that removes a decision rather than adding a setting.",
    "I care about interfaces that stay simple while the implementation underneath gets deeper, and about codebases a new reader can navigate without a tour.",
  ],
  skills: [
    {
      id: "languages",
      title: "Languages",
      items: ["TypeScript", "JavaScript", "Node.js", "SQL"],
    },
    {
      id: "frontend",
      title: "Frontend",
      items: ["React", "Next.js", "Less / CSS Modules", "Ant Design"],
    },
    {
      id: "tooling",
      title: "Tooling",
      items: ["pnpm", "Turbopack", "ESLint", "Git"],
    },
  ],
  contacts: [
    {
      id: "email",
      label: "Email",
      href: "mailto:wlkuik@gmail.com",
      value: "wlkuik@gmail.com",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/weiliang1995",
      value: "@weiliang1995",
    },
  ],
};

export function getProfile(): Profile {
  return profile;
}
