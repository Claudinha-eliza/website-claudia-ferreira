import styles from "./page.module.css";
import { AuthorData } from './AuthorData';
import { Quote } from "./Quote";

export function Inicio() {
  return (
    <section className={styles.section} id={'#inicio'}>
      <AuthorData />
      <Quote />
    </section>
  )
}
