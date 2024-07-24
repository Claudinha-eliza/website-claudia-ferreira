
import { Card } from "../Card";
import { cardData } from "./cardData";
import styles from "./page.module.css";

export function Cards() {

  const allCards = cardData.map((card, index) => (
    <Card
      key={index}
      className={styles[`card${index + 1}`]}
      title={card.title}
      text={card.text}
    />
  ))

  return (
    <div className={styles.cards}>
      {allCards}
    </div>
  )
}