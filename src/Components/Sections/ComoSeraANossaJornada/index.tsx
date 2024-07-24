import Image from 'next/image'
import styles from "./page.module.css";
import { TopText } from "./TopText";
import { Cards } from './Cards';
import { BottomText } from './BottomText';

export function ComoSeraANossaJornada() {
  return (
    <section className={styles.section} id={'como-sera-a-nossa-jornada'}>
      <Decorations />
      <TopText />
      <Cards />
      <BottomText />
    </section>
  )
}

function Decorations() {
  return (<>
    <Image
      src="/decoration10.png"
      width={452}
      height={59}
      alt="decoração de fundo 10"
      className={styles.decoration10}
    />
    <Image
      src="/decoration11.png"
      width={341}
      height={474}
      alt="decoração de fundo 11"
      className={styles.decoration11}
    />
    <Image
      src="/decoration12.png"
      width={264}
      height={224}
      alt="decoração de fundo 12"
      className={styles.decoration12}
    />
    <Image
      src="/decoration13.png"
      width={344}
      height={488}
      alt="decoração de fundo 13"
      className={styles.decoration13}
    />
    <Image
      src="/decoration14.png"
      width={456}
      height={84}
      alt="decoração de fundo 14"
      className={styles.decoration14}
    />
  </>)
}