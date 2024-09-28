import handCodingSvg from '../../../assets/svgs/hand-coding.svg';
import qrcode from '../../../assets/images/contact-qrcode.png';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.data}>
        <div>
          <h1>Rodrigo Yukio Mukudai</h1>
          <h2>Desenvolvedor Full Stack</h2>
        </div>
        <div className={styles.socialMedia}>
          <a
            href='https://github.com/mkdigo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='./src/assets/svgs/github.svg' alt='Logo do Github' />
          </a>
          <a
            href='https://www.facebook.com/mkdigo'
            target='_blank'
            rel='noopener noreferrer'
            style={{ ['--delay' as any]: '1s' }}
          >
            <img src='./src/assets/svgs/facebook.svg' alt='Logo do Facebook' />
          </a>
          <a
            href='https://www.linkedin.com/in/rodrigomukudai'
            target='_blank'
            rel='noopener noreferrer'
            style={{ ['--delay' as any]: '2s' }}
          >
            <img src='./src/assets/svgs/linkedin.svg' alt='Logo do Linkedin' />
          </a>
        </div>
        <div>
          <small>mkdigo@gmail.com</small>
          {/* <br /> */}
          <small>090-9441-9358</small>
        </div>
        <img src={qrcode} alt='QR Code' />
      </div>
      <div className={styles.img}>
        <img src={handCodingSvg} />
      </div>
    </header>
  );
}
