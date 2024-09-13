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
          Com mais de 10 anos de experiência, atendo na minha clínica crianças, adolescentes e também adultos, na modalidade online para todo o Brasil e presencial em Contagem-MG. Além disso, concilio o trabalho de psicóloga clínica/psicanalista em consultório particular com o trabalho de psicóloga nas políticas públicas, onde atuei por 8 anos com mediação de conflitos e atualmente faço parte do quadro de psicólogos analistas da Secretaria Municipal de Assistência Social, Segurança Alimentar e Cidadania de Belo Horizonte. Essas experiências me possibilitam compreensão ampliada sobre diversos contextos familiares e sociais.
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