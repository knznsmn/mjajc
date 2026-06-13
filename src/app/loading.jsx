import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <span className={styles.spinner} />
        <p className={styles.label}>Loading...</p>
      </div>
    </div>
  );
}
