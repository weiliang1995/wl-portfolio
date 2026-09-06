import Link from "next/link";
import { PageSection } from "@/components/PageSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Button, Space } from "@/components/ui";
import { getFeaturedProjects } from "@/services/projects";
import { getProfile } from "@/services/profile";
import styles from "./page.module.less";

export default function HomePage() {
  const profile = getProfile();
  const featured = getFeaturedProjects();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.intro}>{profile.intro}</p>
          <Space>
            <Link href="/projects">
              <Button type="primary">See projects</Button>
            </Link>
            <Link href="/contact">
              <Button>Get in touch</Button>
            </Link>
          </Space>
        </div>
      </section>

      <PageSection
        title="Selected work"
        description="A couple of things worth opening first."
      >
        <div className={styles.grid}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <p className={styles.more}>
          <Link href="/projects">All projects →</Link>
        </p>
      </PageSection>
    </>
  );
}
