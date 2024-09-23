import { Navbar } from "@/Components/Navbar";
import { Sections } from '@/Components/Sections';
import styles from "./page.module.css";
import { WhatsAppMobileButton } from "@/Components/WhatsAppMobileButton";

export default function Home() {
  return (<>
    <Navbar />
    <WhatsAppMobileButton />
    <main className={styles.main}>
      <Sections.Inicio />
      <Sections.UmPouquinhoSobreMim />
      <Sections.AreasEmQuePossoAjudar />
      <Sections.ComoSeraANossaJornada />
      <Sections.VamosConversar />
    </main>
  </>);
}
