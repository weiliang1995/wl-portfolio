import type { Metadata } from "next";
import { PageSection } from "@/components/PageSection";
import { Divider, Tag } from "@/components/ui";
import { getProfile } from "@/services/profile";
import styles from "./page.module.less";

export const metadata: Metadata = {
  title: "About — Wei Liang",
};

export default function AboutPage() {
  const profile = getProfile();

  return (
    <PageSection title="About" description={profile.tagline}>
      <div className={styles.bio}>
        {profile.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <Divider />

      <div className={styles.skills}>
        {profile.skills.map((group) => (
          <div key={group.id} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <div className={styles.items}>
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
