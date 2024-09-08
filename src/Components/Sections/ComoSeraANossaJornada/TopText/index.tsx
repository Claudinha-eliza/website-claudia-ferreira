import styles from "./page.module.css";

export function TopText() {
  return (
    <div>
      <h1 className={styles.title}>Como será a nossa jornada</h1>
      <p className={styles.text1}>A psicanálise, desenvolvida por Sigmund Freud no início do século XX, que evolui desde então com as contribuições de muitos outros teóricos, é um campo de estudo que busca compreender o funcionamento da subjetividade humana; especialmente os pensamentos, sentimentos e comportamentos que podem não ser completamente conscientes, porque são influenciados por impulsos inconscientes, desejos, fantasias e experiências reprimidas.</p>
      <p className={styles.text2}>Essencialmente, a psicanálise ajuda os pacientes a explorar as camadas mais profundas da mente através da fala, visando promover autoconhecimento, crescimento pessoal e alívio de sintomas psicológicos.</p>
      <p className={styles.text3}>Com crianças e adolescentes adapta-se às necessidades específicas desses indivíduos, levando em consideração o momento de desenvolvimento em que estão. Assim, alguns aspectos ganham relevância:</p>
    </div>
  )
}
