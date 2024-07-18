import Image from 'next/image'
import { Cards } from "./Cards";
import styles from "./page.module.css";
import { Title } from "./Title";

export function AreasEmQuePossoAjudar() {
  return (
    <section className={styles.section} id={'areas-em-que-posso-ajudar'}>
      <div className={styles.content}>
        <Title />
        <Cards />
      </div>
      <Image
        src="/decoration8.png"
        width={386}
        height={400}
        alt="decoração de fundo 8"
        className={styles.decoration8}
      />
      <Image
        src="/decoration9.png"
        width={890}
        height={1178}
        alt="decoração de fundo 9"
        className={styles.decoration9}
      />
    </section>
  )
}
