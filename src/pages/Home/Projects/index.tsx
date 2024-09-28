import meuSalarioJpScreen from '../../../assets/images/meu-salaraio-jp.png';
import pokemonScreen from '../../../assets/images/pokemon.png';
import exchangeRateScreen from '../../../assets/images/exchange_rate.png';
import lyricsScreen from '../../../assets/images/lyrics.png';
import megasenaScreen from '../../../assets/images/megasena.jpg';

import styles from './styles.module.scss';

export function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.title}>
        <h2>Projetos</h2>
        <p>
          Abaixo você poderá ver alguns projetos que demonstra um pouquinho do
          meu conhecimento.
        </p>
      </div>

      <div className={styles.container}>
        <article>
          <div className={styles.img}>
            <a
              href='https://meu-salario-jp.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={meuSalarioJpScreen} alt='Meu Salário JP Page' />
            </a>
          </div>
          <div className={styles.txt}>
            <h3>Meu Salário JP</h3>

            <p>
              App desenvolvido para ajudar a comunidade brasileira no Japão.
              Nele você é capaz de fazer o controler de suas horas extras,
              folgas remuneradas e ainda consegue saber em tempo real o salário
              ganho até o momento. O App é capaz de fazer também o cálculo dos
              descontos do seguro desemprego, imposto de renda entre outros.
            </p>
            <p>Está disponível de forma gratuita para toda a comunidade.</p>
            <p>
              <a
                href='https://meu-salario-jp.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://meu-salario-jp.com
              </a>
            </p>
          </div>
        </article>

        <article>
          <div className={styles.txt}>
            <h3>Infinite scroll</h3>

            <p>
              O objetivo desse projeto é demonstrar a técnica do scroll
              infinito, assim como o feed do facebook. Foi usado a API
              https://www.pokeapi.co para fazer uma listagem dos pokemons, no
              qual a cada requisição parte dessa lista é carregada. Com a função
              Javascript IntersectionObserver, assim que o ultimo elemento
              aparece em tela é feito uma nova requisição para buscar a próxima
              página e acrescentar na tela. Projeto feito em React.
            </p>
            <p>
              <a
                href='https://projects.rodrigomukudai.com/pokemon'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://projects.rodrigomukudai.com/pokemon
              </a>
              <a
                href='https://github.com/mkdigo/infinite-scroll'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://github.com/mkdigo/infinite-scroll
              </a>
            </p>
          </div>
          <div className={styles.img}>
            <a
              href='https://projects.rodrigomukudai.com/pokemon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={pokemonScreen} alt='Pokemon Page' />
            </a>
          </div>
        </article>

        <article>
          <div className={styles.img}>
            <a
              href='https://projects.rodrigomukudai.com/exchangerate'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={exchangeRateScreen} alt='Exchange Rate Page' />
            </a>
          </div>
          <div className={styles.txt}>
            <h3>Conversor de Moedas</h3>

            <p>
              Feito em React e utilizando a API https://exchangerate.host, você
              consegue visualizar através de um gráfico a cotação entre duas
              moedas da sua escolha, além de poder fazer a conversão de valores.
              Para construção do gráfico foi usado a biblioteca chart.js e
              react-chartjs-2.
            </p>
            <p>
              <a
                href='https://projects.rodrigomukudai.com/exchangerate'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://projects.rodrigomukudai.com/exchangerate
              </a>
              <a
                href='https://github.com/mkdigo/exchangerate'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://github.com/mkdigo/exchangerate
              </a>
            </p>
          </div>
        </article>

        <article>
          <div className={styles.txt}>
            <h3>Letras de músicas</h3>

            <p>
              Outro projeto feito em React no qual foi usado a API
              https://www.vagalume.com.br. Nele você é capaz de buscar a letra e
              a tradução (caso seja internacional) da sua música favorita, basta
              digitar o nome artista e nome da música.
            </p>
            <p>
              <a
                href='https://projects.rodrigomukudai.com/lyrics'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://projects.rodrigomukudai.com/lyrics
              </a>
              <a
                href='https://github.com/mkdigo/find-lyrics'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://github.com/mkdigo/find-lyrics
              </a>
            </p>
          </div>
          <div className={styles.img}>
            <a
              href='https://projects.rodrigomukudai.com/lyrics'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={lyricsScreen} alt='Music Page' />
            </a>
          </div>
        </article>

        <article>
          <div className={styles.img}>
            <a
              href='https://projects.rodrigomukudai.com/megasena'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={megasenaScreen} alt='Mega Sena Page' />
            </a>
          </div>
          <div className={styles.txt}>
            <h3>Show da Mega Sena</h3>

            <p>
              Mais um projeto em React, dessa vez com typescript. Foi usado a
              biblioteca framer-motion para as animações.
            </p>
            <p>
              <a
                href='https://projects.rodrigomukudai.com/megasena'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://projects.rodrigomukudai.com/megasena
              </a>
              <a
                href='https://github.com/mkdigo/mega-sena'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://github.com/mkdigo/mega-sena
              </a>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
