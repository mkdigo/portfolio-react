import { useEffect, useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { ResumePDF } from '../../components/ResumePDF';
import { TResumeData } from '../../types';
import styles from './styles.module.scss';

export function Resume() {
  const [data, setData] = useState<TResumeData>();
  const userAgent = navigator.userAgent || navigator.vendor;
  const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

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

  if (isMobile)
    return (
      <PDFDownloadLink
        document={<ResumePDF data={data} />}
        fileName='Resume'
        id='link'
      >
        {({ url, loading }) => {
          if (!loading && url) window.location.href = url;

          return 'Abrir Currículo';
        }}
      </PDFDownloadLink>
    );

  return (
    <PDFViewer showToolbar className={styles.container}>
      <ResumePDF data={data} />
    </PDFViewer>
  );
}
