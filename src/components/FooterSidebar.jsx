import styles from './FooterSidebar.module.css';
function FooterSidebar() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by TripTrack Inc.
      </p>
    </footer>
  );
}

export default FooterSidebar;
