import Image from 'next/image'
import styles from "./page.module.css";

export function AuthorData() {
  return (
    <div className={styles.authorData}>
      <Image
        src="/logo1.png"
        width={741}
        height={236}
        alt="Picture of author's name"
        className={styles.logo}
      />
      <h2>psicóloga I psicanalista</h2>
      <h3>CRP 04/42649</h3>
      <Image
        src="/decoration1.png"
        width={425}
        height={65}
        alt="background decoration"
        className={styles.decoration1}
      />
    </div>
  )
}