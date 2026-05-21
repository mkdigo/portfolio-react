import { QRCodeSVG } from 'qrcode.react';
import { useAppContext } from '../../hooks/useAppContext';

import styles from './styles.module.scss';

type Props = {
  size?: number;
  className?: string;
};

export function QRCode({ size = 100, className = '' }: Props) {
  const { resumeData } = useAppContext();

  if (!resumeData) return null;

  const content: string[] = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:Mukudai;Rodrigo;;;`,
    `FN:Rodrigo Mukudai`,
    // 'ORG:Nome da Empresa',
    // 'TITLE:Cargo ou Profissão',
    `TEL;TYPE=CELL:${resumeData.cellphone}`,
    // 'TEL;TYPE=WORK:551133333333',
    `EMAIL:${resumeData.email}`,
    `URL:${resumeData.projects_links[0]}`,
    // 'ADR;TYPE=WORK:;;Rua Exemplo, 123;São Paulo;SP;01000-000;Brasil',
    'END:VCARD',
  ];
  return (
    <div className={[styles.container, className].join(' ')}>
      <QRCodeSVG
        value={content.filter(Boolean).join('\n')}
        size={size}
        bgColor={'#ffffff'}
        fgColor={'#000000'}
        level={'M'}
      />
    </div>
  );
}
