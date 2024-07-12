import styles from "./page.module.css";

export default function Home() {
  return (<>
    <Navbar />
    <main className={styles.main}>
    </main>
  </>);
}

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h3><a href="/">Home</a></h3>
      <h3><a href="#um-pouquinho-sobre-mim">Um pouquinho sobre mim</a></h3>
      <h3><a href="#areas-em-que-posso-ajudar">Áreas em que posso ajudar</a></h3>
      <h3><a href="#como-sera-a-nossa-jornada">Como será a nossa jornada</a></h3>
      <h3><a href="#vamos-conversar">Vamos conversar?</a></h3>
    </nav>
  );
}