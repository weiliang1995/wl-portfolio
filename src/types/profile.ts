export interface ContactLink {
  id: string;
  label: string;
  /** Full href, including the `mailto:` or `https://` scheme. */
  href: string;
  /** Displayed next to the label, e.g. the address or handle. */
  value: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface Profile {
  name: string;
  /** One-line positioning shown under the name on the landing page. */
  tagline: string;
  /** Short intro for the landing page. */
  intro: string;
  /** Longer biography paragraphs for the about page. */
  bio: string[];
  skills: SkillGroup[];
  contacts: ContactLink[];
}
