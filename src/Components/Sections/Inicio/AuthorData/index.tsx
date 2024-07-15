import Image from 'next/image'
import styles from "./page.module.css";

export function AuthorData() {
  return (
    <div className={styles.authorData}>
      <Image
        src="/logo1.png"
        width={741}
        height={218}
        alt="Imagem contendo o nome Claudia, sua profissão e o número do CRP"
        className={styles.logo}
      />
      <div className={styles.authorCareer}>
        <h1>psicóloga I psicanalista</h1>
        <h2>CRP 04/42649</h2>
        <Image
          src="/decoration1.png"
          width={425}
          height={65}
          alt="decoração de fundo 1"
          className={styles.decoration1}
        />
      </div>
    </div>
  )
}