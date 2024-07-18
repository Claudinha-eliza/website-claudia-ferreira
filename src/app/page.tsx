import { Navbar } from "@/Components/Navbar";
import { Sections } from '@/Components/Sections';
import styles from "./page.module.css";

export default function Home() {
  return (<>
    <Navbar />
    <main className={styles.main}>
      <Sections.Inicio />
      <Sections.UmPouquinhoSobreMim />
      <Sections.AreasEmQuePossoAjudar />
    </main>
  </>);
}
