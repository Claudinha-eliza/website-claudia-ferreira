
import { Card } from "../Card";
import styles from "./page.module.css";

export function Cards() {
  return (
    <div className={styles.cards}>
      <Card title="Psicologia Clínica"    className={styles.card1} />
      <Card title="Psicanálise"           className={styles.card2} />
      <Card title="Psicologia Social"     className={styles.card3} />
      <Card title="Mediação de Conflitos" className={styles.card4} />
    </div>
  )
}
