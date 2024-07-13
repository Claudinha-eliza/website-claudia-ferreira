import Image from 'next/image'
import styles from "./page.module.css";

export function Inicio() {
  return (
    <section className={styles.inicio} id={'#inicio'}>
      <div className={styles.logo}>
        <Image
          src="/logo1.png"
          width={741}
          height={236}
          alt="Picture of author's name"
        />
        <div className={styles.dados}>
          <h2>psicóloga I psicanalista</h2>
          <h3>CRP 04/42649</h3>
        </div>
        <div className={styles.logoDecoracao}>
          <Image
            src="/decoracao1.png"
            width={425}
            height={425}
            alt="background decoration"
          />
        </div>
      </div>
      <div className={styles.quote}>
        <p className={styles.quoteText}>“Quem olha para fora sonha, quem olha para dentro desperta.”</p>
        <h3 className={styles.quoteAuthor}>Carl Jung</h3>
      </div>
    </section>
  )
}