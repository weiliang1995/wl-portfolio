import type { ReactNode } from "react";
import styles from "./PageSection.module.less";

interface PageSectionProps {
  title?: string;
  /** Short line under the section title. */
  description?: string;
  children: ReactNode;
}

export function PageSection({ title, description, children }: PageSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        {description ? <p className={styles.description}>{description}</p> : null}
        {children}
      </div>
    </section>
  );
}
