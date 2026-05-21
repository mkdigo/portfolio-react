import handCodingSvg from '../../../assets/svgs/hand-coding.svg';
import gitHubLogo from '../../../assets/svgs/github.svg';
import facebookLogo from '../../../assets/svgs/facebook.svg';
import linkedinLogo from '../../../assets/svgs/linkedin.svg';
import { QRCode } from '../../../components/QRCode';

import styles from './styles.module.scss';
import { useAppContext } from '../../../hooks/useAppContext';

export function Header() {
  const { resumeData } = useAppContext();

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
            <img src={gitHubLogo} alt='Logo do Github' />
          </a>
          <a
            href='https://www.facebook.com/mkdigo'
            target='_blank'
            rel='noopener noreferrer'
            style={{ ['--delay' as any]: '1s' }}
          >
            <img src={facebookLogo} alt='Logo do Facebook' />
          </a>
          <a
            href='https://www.linkedin.com/in/rodrigomukudai'
            target='_blank'
            rel='noopener noreferrer'
            style={{ ['--delay' as any]: '2s' }}
          >
            <img src={linkedinLogo} alt='Logo do Linkedin' />
          </a>
        </div>
        <div>
          <small>{resumeData?.email}</small>
          <small>{resumeData?.cellphone}</small>
        </div>
        <QRCode />
      </div>
      <div className={styles.img}>
        <img src={handCodingSvg} />
      </div>
    </header>
  );
}
