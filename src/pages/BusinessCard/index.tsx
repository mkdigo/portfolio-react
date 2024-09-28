import { Link } from 'react-router-dom';

import qr from '../../assets/images/contact-qrcode.png';

import styles from './styles.module.scss';

export function BusinessCard() {
  return (
    <main className={styles.container}>
      <div className={`neumorphism1 ${styles.card}`}>
        <div className={styles.title}>
          <h1>Rodrigo Yukio Mukudai</h1>
          <h2>Desenvolvedor Full Stack</h2>
        </div>
        <div>
          <Link to='/'>https://rodrigomukudai.com</Link>
          <small>mkdigo@gmail.com</small>
          <small>090-9441-9358</small>
        </div>
        <img src={qr} className={styles.qr} alt='QR Code' />
      </div>
    </main>
  );
}
