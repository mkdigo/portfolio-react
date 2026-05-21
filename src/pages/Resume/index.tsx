import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { ResumePDF } from '../../components/ResumePDF';
import { useAppContext } from '../../hooks/useAppContext';
import styles from './styles.module.scss';

export function Resume() {
  const { resumeData } = useAppContext();
  const userAgent = navigator.userAgent || navigator.vendor;
  const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

  if (!resumeData) return null;

  if (isMobile)
    return (
      <PDFDownloadLink
        document={<ResumePDF data={resumeData} />}
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
      <ResumePDF data={resumeData} />
    </PDFViewer>
  );
}
