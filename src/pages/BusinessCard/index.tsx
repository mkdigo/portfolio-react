import { Link } from 'react-router-dom';

import qr from '../../assets/images/contact-qrcode.png';

import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { TResumeData } from '../../types';

export function BusinessCard() {
  const [data, setData] = useState<TResumeData>();

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) return;
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) return null;

  return (
    <main className={styles.container}>
      <div className={`neumorphism1 ${styles.card}`}>
        <div className={styles.title}>
          <h1>Rodrigo Yukio Mukudai</h1>
          <h2>Desenvolvedor Full Stack</h2>
        </div>
        <div>
          <Link to='/'>https://rodrigomukudai.com</Link>
          <small>{data.email}</small>
          <small>{data.cellphone}</small>
        </div>
        <img src={qr} className={styles.qr} alt='QR Code' />
      </div>
    </main>
  );
}
