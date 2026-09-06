import type { Project } from "@/types";
import { Card, Tag } from "@/components/ui";
import styles from "./ProjectCard.module.less";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const title = project.url ? (
    <a href={project.url} target="_blank" rel="noreferrer">
      {project.title}
    </a>
  ) : (
    project.title
  );

  return (
    <Card
      className={styles.card}
      title={title}
      extra={<span className={styles.year}>{project.year}</span>}
    >
      <p className={styles.summary}>{project.summary}</p>
      <div className={styles.tags}>
        {project.tech.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </Card>
  );
}
