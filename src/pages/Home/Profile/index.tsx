import gitHubLogo from '../../../assets/svgs/github.svg';
import facebookLogo from '../../../assets/svgs/facebook.svg';
import linkedinLogo from '../../../assets/svgs/linkedin.svg';

import styles from './styles.module.scss';
import { DateTime } from '@mkdigo/datetime';

export function Profile() {
  return (
    <section className={styles.profile}>
      <div className={`neumorphism ${styles.container}`}>
        <h2>Perfil</h2>
        <ul>
          <li>
            <strong>Nome:</strong>
            <span>Rodrigo Yukio Mukudai</span>
          </li>
          <li>
            <strong>Idade:</strong>
            <span>{DateTime.getAge('1985-06-20')}</span>
          </li>
          <li>
            <strong>Nacionalidade:</strong>
            <span>Brasileira</span>
          </li>
          <li>
            <strong>Residência:</strong>
            <span>Aichi-ken / Japão</span>
          </li>
          <li>
            <strong>Escolaridade:</strong>
            <span>Superior</span>
          </li>
          <li>
            <strong>Curso Superior:</strong>
            <span>Ciências Contábeis</span>
          </li>
          <li>
            <strong>Outros cursos:</strong>
            <span>
              Montagem e manutenção de computadores, Desenvolvimento Web, Word,
              Excel, Photoshop, Corel Draw
            </span>
          </li>
          <li>
            <strong>Resumo:</strong>
            <span>
              Sou uma pessoa dedicada e com sede de conhecimento, onde os
              estudos fazem parte da minha rotina. Busco sempre fazer as coisas
              da melhor forma possível. Meu ponto forte é a capacidade de
              resolver problemas e foi por isso que me identifiquei com o mundo
              da programação, onde as linhas de códigos são apenas uma
              ferramenta para isso. Tenho grande facilidade em trabalhar em
              equipe, buscando sempre o bom convívio e incentivando as pessoas a
              ajudarem umas às outras.
            </span>
          </li>
          <li className={styles.socialMedia}>
            <strong>Mídias Sociais:</strong>
            <span>
              <a
                href='https://github.com/mkdigo'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={gitHubLogo} alt='Logo do Github' />
              </a>
              <a
                href='https://www.facebook.com/mkdigo'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={facebookLogo} alt='Logo do Facebook' />
              </a>
              <a
                href='https://www.linkedin.com/in/rodrigomukudai'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={linkedinLogo} alt='Logo do Linkedin' />
              </a>
            </span>
          </li>
          <li>
            <strong>Email:</strong>
            <span>mkdigo@gmail.com</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
