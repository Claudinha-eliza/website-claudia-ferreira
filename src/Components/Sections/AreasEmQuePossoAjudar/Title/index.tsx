import Image from 'next/image'
import styles from "./page.module.css";

export function Title() {
  return (<>
    <h1 className={styles.title}>Áreas em que posso ajudar</h1>
    <Image
      src="/decoration7.png"
      width={309}
      height={87}
      alt="decoração de fundo 7"
      className={styles.decoration7}
    />
  </>)
}
