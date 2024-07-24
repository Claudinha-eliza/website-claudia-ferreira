import styles from "./page.module.css";

export function Card(props: { title: string, text: string, className: string }) {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <h2 className={styles.cardTitle}>{props.title}</h2>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}