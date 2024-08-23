import Image from 'next/image'
import styles from "./page.module.css";

export function Contato() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contactTitle}>Vamos conversar?</h1>
      <div className={styles.contactInfo}>
        <i className='bx bxl-whatsapp'></i>
        <span className={styles.contactNumber}>31 98400 - 3796</span>
      </div>
      <Image
        src="/logo2.png"
        width={129}
        height={136}
        alt='Imagem contendo logo e nome "Claudia Ferreira"'
        className={styles.logo}
      />
    </div>
  )
}