import Image from 'next/image'
import styles from "./page.module.css";

export function Contato() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contactTitle}>Vamos conversar?</h1>
      <div className={styles.contactInfoContainer}>
        <a className={styles.contactInfo} 
          href='https://wa.me/5531988187830'
          target='_blank'
          id='whatsapp-button-footer'
        >
          <i className='bx bxl-whatsapp'></i>
          <span className={styles.contactNumber}>Agendar agora!</span>
        </a>
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