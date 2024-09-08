import Image from 'next/image'
import styles from "./page.module.css";

export function AboutMe() {
  return (
    <div>
      <div className={styles.title}>
        <Decorations />
        <h1 className={styles.titleText}>Um pouquinho sobre mim</h1>
      </div>
      <div className={styles.text}>
        <p>
          Olá! Meu nome é Claudia Eliza Ferreira dos Santos, sou graduada em Psicologia pela UFMG (CRP 04/42649), com ênfase em processos clínicos; pós-graduada em Psicanálise com crianças e adolescentes pela PUC Minas e intitulada Especialista em Psicologia Social pelo Conselho Federal de Psicologia.
        </p>
        <p>
          Sempre fui uma pessoa inquieta, sensível, questionadora, sonhadora e criativa. Quase cursei Ciências Econômicas, por aquela vontade de transformar o mundo; mas o fascínio pelo universo humano, pelo psiquismo, as diferenças individuais e pela possibilidade de mudar o mundo auxiliando aqueles que desejassem mudar a si mesmos, falou mais alto, escolhi a Psicologia como ofício.
        </p>
        <p>
          O compromisso social é parte importante da minha trajetória, por isso desde a minha graduação, em 2014, concilio o trabalho de psicóloga clínica/psicanalista em consultório particular com o trabalho de psicóloga nas políticas públicas. É dessa forma que mantenho aceso aquele desejo de transformação social, e que as conversas nas sessões dentro do consultório conectam o sofrimento individual com os sentimentos e sofrimentos do mundo. Atendo na minha clínica crianças, adolescentes e adultos, nas modalidades presencial e/ou online.
        </p>
      </div>
    </div>
  )
}

function Decorations() {
  return (<>
    <Image
      src="/decoration6.png"
      width={456}
      height={101}
      alt="decoração de fundo 6"
      className={styles.decoration6}
    />
  </>)
}