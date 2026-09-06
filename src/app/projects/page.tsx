import type { Metadata } from "next";
import { PageSection } from "@/components/PageSection";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/services/projects";
import styles from "./page.module.less";

export const metadata: Metadata = {
  title: "Projects — Wei Liang",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <PageSection
      title="Projects"
      description="Things I have built, most recent first."
    >
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageSection>
  );
}
