import { useGame } from './useGame';

import styles from './styles.module.scss';

export function Game() {
  const {
    canvasRef,
    leftButtonRef,
    rightButtonRef,
    jumpButtonRef,
    attackButtonRef,
  } = useGame();

  return (
    <section className={styles.game}>
      <div className={styles.instructions}>
        <div className='neumorphism'>
          <h3>
            Confira as minhas skills de desenvolvedor de um modo divertido
            através do game logo abaixo.
          </h3>
        </div>
        <div className='neumorphism'>
          <strong>Enfrente os desafios em busca de mais conhecimento.</strong>
          <p>
            Use as teclas <strong>A</strong> e <strong>D</strong> para
            movimentar o herói, <strong>J</strong> para pular e{' '}
            <strong>K</strong> para atacar. Colete todos os emblemas para
            descobrir do que sou capaz.
          </p>
        </div>
      </div>

      <div className={styles.console}>
        <div className={styles.screen}>
          <canvas ref={canvasRef}></canvas>
          <span></span>
        </div>
        <div className={styles.directionalButtons}>
          <button className={styles.vertical}></button>
          <div>
            <button ref={leftButtonRef}>A</button>
            <button ref={rightButtonRef}>D</button>
          </div>
          <button className={styles.vertical}></button>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.jump} ref={jumpButtonRef}>
            J
          </button>
          <button className={styles.attack} ref={attackButtonRef}>
            K
          </button>
        </div>
        <div className={`${styles.speaker} ${styles.left}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${styles.speaker} ${styles.right}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <strong className={styles.devBy}>
          Desenvolvido por <span>Rodrigo Mukudai.</span>
        </strong>
      </div>

      <div className={styles.about}>
        <div className={styles.neumorphism}>
          <strong>Sobre o game</strong>
          <p>
            Jogo do estilo plataforma feito em javascript, utilizando o HTML
            canvas. O objetivo da criação desse game foi demonstrar de uma forma
            divertida todas as tecnologias que já estudei até o momento. Cada
            emblema recolhido no game corresponde a uma das tecnologias que
            utilizo nos meus projetos.
          </p>
          <p>
            As artes usadas nesse jogo foram retiradas do site{' '}
            <a href='https://itch.io' target='_blank' rel='noopener noreferrer'>
              https://itch.io
            </a>
          </p>
        </div>
        <div className={styles.neumorphism}>
          <strong>Veja como foi feito</strong>
          <p>
            Você pode ter acesso ao código fonte desse game através do meu
            github em duas formas:
          </p>
          <ul>
            <li>
              Pelo repositório desse portifólio no qual utilizei typescript:{' '}
              <a
                href='https://github.com/mkdigo/portfolio-react'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://github.com/mkdigo/portfolio-react
              </a>
            </li>
            <li>
              Pelo repositório do game que foi feito em javascript puro:{' '}
              <a
                href='https://github.com/mkdigo/platform-game'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://github.com/mkdigo/platform-game
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
