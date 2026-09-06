import type { Metadata } from "next";
import { PageSection } from "@/components/PageSection";
import { getProfile } from "@/services/profile";
import styles from "./page.module.less";

export const metadata: Metadata = {
  title: "Contact — Wei Liang",
};

export default function ContactPage() {
  const profile = getProfile();

  return (
    <PageSection
      title="Contact"
      description="The two places I actually read."
    >
      <ul className={styles.list}>
        {profile.contacts.map((contact) => (
          <li key={contact.id} className={styles.item}>
            <span className={styles.label}>{contact.label}</span>
            <a href={contact.href} target="_blank" rel="noreferrer">
              {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
