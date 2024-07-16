import Image from 'next/image'
import styles from "./page.module.css";
import { AboutMe } from './AboutMe';

export function UmPouquinhoSobreMim() {
  return (
    <section className={styles.section} id={'um-pouquinho-sobre-mim'}>
      <AboutMe />
      <Image
        src="/claudia.png"
        width={720}
        height={881}
        alt="foto da Claudia"
        className={styles.authorPhoto}
      />
      <Image
        src="/decoration6.png"
        width={456}
        height={101}
        alt="decoração de fundo 6"
        className={styles.decoration6}
      />
    </section>
  )
}
