import { Navbar } from "@/Components/Navbar";
import styles from "./page.module.css";
import { Sections } from '@/Components/Sections';

export default function Home() {
  return (<>
    <Navbar />
    <main className={styles.main}>
      <Sections.Inicio />
    </main>
  </>);
}
