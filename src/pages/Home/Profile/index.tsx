import { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { DateTime } from '@mkdigo/datetime';

import gitHubLogo from '../../../assets/svgs/github.svg';
import facebookLogo from '../../../assets/svgs/facebook.svg';
import linkedinLogo from '../../../assets/svgs/linkedin.svg';

import { ResumePDF } from '../../../components/ResumePDF';
import { TResumeData } from '../../../types';

import styles from './styles.module.scss';

export function Profile() {
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
    <section className={styles.profile}>
      <div className={`neumorphism ${styles.container}`}>
        <h2>Perfil</h2>
        <ul>
          <li>
            <strong>Curriculum:</strong>
            <span>
              <a href='/resume' target='_blank' rel='noopener noreferrer'>
                Visualizar
              </a>
              {'       '}
              <PDFDownloadLink
                document={<ResumePDF data={data} />}
                fileName='Resume'
              >
                Download
              </PDFDownloadLink>
            </span>
          </li>
          <li>
            <strong>Nome:</strong>
            <span>{data.name}</span>
          </li>
          <li>
            <strong>Idade:</strong>
            <span>{DateTime.getAge(data.birthdate)}</span>
          </li>
          <li>
            <strong>Nacionalidade:</strong>
            <span>Brasileira</span>
          </li>
          <li>
            <strong>Residência:</strong>
            <span>
              {data.address.city} - {data.address.state}
            </span>
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
              Excel, Photoshop
            </span>
          </li>
          <li>
            <strong>Resumo:</strong>
            <span>{data.description.join('\n\n')}</span>
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
