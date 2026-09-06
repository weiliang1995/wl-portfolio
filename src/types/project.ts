export interface Project {
  /** Stable identifier, used as the React list key. */
  id: string;
  title: string;
  /** One or two sentences describing what the project is. */
  summary: string;
  /** Technology tags rendered as chips on the project card. */
  tech: string[];
  /** Year the project shipped, or the year work started. */
  year: number;
  /** Optional outbound link; omitted when the project is not public. */
  url?: string;
}
