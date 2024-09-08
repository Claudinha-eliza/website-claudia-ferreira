'use client'

import React, { useCallback } from "react";
import styles from "./page.module.css";

export function Navbar() {

  const [active, setActive] = React.useState(false);

  const onClick = useCallback(() => {
    setActive(prev => !prev)
  }, []);

  return (<>
    <nav className={`${styles.navbar} ${active && styles.navbarActive}`}>
      <h3><a onClick={() => onClick()} href="#inicio">Início</a></h3>
      <h3><a onClick={() => onClick()} href="#um-pouquinho-sobre-mim">Um pouquinho sobre mim</a></h3>
      <h3><a onClick={() => onClick()} href="#areas-em-que-posso-ajudar">Áreas em que posso ajudar</a></h3>
      <h3><a onClick={() => onClick()} href="#como-sera-a-nossa-jornada">Como será a nossa jornada</a></h3>
      <h3><a onClick={() => onClick()} href="#vamos-conversar">Vamos conversar?</a></h3>
    </nav>
    <button
      className={`${styles.navbarButton} ${active && styles.navbarButtonActive}`}
      onClick={() => onClick()}
    >
      {active ? (
        <i className='bx bx-x'></i>
      ) : (
        <i className='bx bx-menu'></i>
      )}
    </button>
  </>);
}
