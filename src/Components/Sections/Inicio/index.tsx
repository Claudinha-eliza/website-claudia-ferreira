import Image from 'next/image'
import styles from "./page.module.css";
import { AuthorData } from './AuthorData';
import { Quote } from "./Quote";

export function Inicio() {
  return (
    <section className={styles.section} id={'inicio'}>
      <div className={styles.content}>
        <AuthorData />
        <Quote />
      </div>
      <Image
        src="/decoration2.png"
        width={479}
        height={456}
        alt="decoração de fundo 2"
        className={styles.decoration2}
      />
      <Image
        src="/decoration3.png"
        width={270}
        height={323}
        alt="decoração de fundo 3"
        className={styles.decoration3}
      />
      <Image
        src="/decoration4.png"
        width={265}
        height={456}
        alt="decoração de fundo 4"
        className={styles.decoration4}
      />
      <Image
        src="/decoration5.png"
        width={456}
        height={86}
        alt="decoração de fundo 5"
        className={styles.decoration5}
      />
    </section>
  )
}
