import { Link } from 'react-router-dom';

import { useAppContext } from '../../hooks/useAppContext';
import { QRCode } from '../../components/QRCode';

import styles from './styles.module.scss';

export function BusinessCard() {
  const { resumeData } = useAppContext();

  if (!resumeData) return null;

  return (
    <main className={styles.container}>
      <div className={`neumorphism1 ${styles.card}`}>
        <div className={styles.title}>
          <h1>Rodrigo Yukio Mukudai</h1>
          <h2>Desenvolvedor Full Stack</h2>
        </div>
        <div>
          {resumeData.portfolio_links.map((link) => (
            <Link to={link} key={link}>
              {link}
            </Link>
          ))}
          <small>{resumeData.email}</small>
          <small>{resumeData.cellphone}</small>
        </div>
        {/* <img src={qr} className={styles.qr} alt='QR Code' /> */}
        <QRCode className={styles.qr} />
      </div>
    </main>
  );
}
