import styles from "./SiteFooter.module.less";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {new Date().getFullYear()} Wei Liang</span>
        <span className={styles.built}>Built with Next.js</span>
      </div>
    </footer>
  );
}
