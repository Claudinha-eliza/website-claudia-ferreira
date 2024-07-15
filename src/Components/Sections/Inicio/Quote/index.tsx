import styles from "./page.module.css";

export function Quote() {
  return (
    <div>
      <p className={styles.quoteText}>“Quem olha para fora sonha, quem olha para dentro desperta.”</p>
      <p className={styles.quoteAuthor}>Carl Jung</p>
    </div>
  )
}