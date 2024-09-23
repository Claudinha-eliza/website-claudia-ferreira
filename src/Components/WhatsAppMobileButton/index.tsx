'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export function WhatsAppMobileButton() {

  const [isAtEndPage, setIsAtEndPage] = useState(false);
  const bottomThreshold = 320

  useEffect(() => {
    const scrollListener = () => {
      const scrollableHeight = document.documentElement.scrollHeight;
      const currentHeight = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      setIsAtEndPage(currentHeight + viewportHeight >= scrollableHeight - bottomThreshold);
    }
    window.addEventListener('scroll', scrollListener)
  }, [])

  return (
    <a className={`${styles.whatsappButton} ${isAtEndPage && styles.whatsappButtonAtEndPage}`} 
      href='https://wa.me/5531988187830'
      target='_blank'
      id='whatsapp-button-mobile'
    >
      <i className='bx bxl-whatsapp'></i>
      <span className={styles.text}>Agendar agora!</span>
    </a>
  )
}