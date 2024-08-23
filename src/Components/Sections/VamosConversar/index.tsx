import Image from 'next/image'
import styles from "./page.module.css";
import { Contato } from './Contato';

export function VamosConversar() {
  return (
    <section className={styles.section} id={'vamos-conversar'}>
      <Decorations />
      <Contato />
      <Image
        src="/decoration15.png"
        width={394}
        height={490}
        alt="decoração de fundo 15"
        className={styles.decoration15}
      />
    </section>
  )
}


function Decorations() {
  return (<>
    <Image
      src="/decoration5.png"
      width={312}
      height={59}
      alt="decoração de fundo 5"
      className={styles.decoration5}
    />
    <Image
      src="/decoration16.png"
      width={456}
      height={150}
      alt="decoração de fundo 16"
      className={styles.decoration16}
    />
    <Image
      src="/decoration17.png"
      width={257}
      height={256}
      alt="decoração de fundo 17"
      className={styles.decoration17}
    />
    <Image
      src="/decoration18.png"
      width={456}
      height={162}
      alt="decoração de fundo 18"
      className={styles.decoration18}
    />
    <Image
      src="/decoration19.png"
      width={359}
      height={511}
      alt="decoração de fundo 19"
      className={styles.decoration19}
    />
  </>)
}