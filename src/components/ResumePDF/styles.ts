import { StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: '/fonts/roboto/static/Roboto-Regular.ttf' },
    { src: '/fonts/roboto/static/Roboto-Italic.ttf', fontStyle: 'italic' },
    { src: '/fonts/roboto/static/Roboto-Bold.ttf' },
    {
      src: '/fonts/roboto/static/Roboto-BoldItalic.ttf',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const defaultValues = {
  fontSize: '11px',
  gap: '22px',
};

export const styles = StyleSheet.create({
  page: {
    padding: '20mm 15mm 20mm 15mm',
    fontFamily: 'Roboto',
    lineHeight: '16px',
    fontSize: defaultValues.fontSize,
    gap: '15mm',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '9px',
    width: '100%',
    maxWidth: '100%',
  },
  headerTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: '48px',
  },
  address: {
    marginTop: '3mm',
    lineHeight: '12px',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentLeft: {
    gap: defaultValues.gap,
    width: '115mm',
  },
  contentRight: {
    gap: defaultValues.gap,
    width: '55mm',
    lineHeight: '20px',
  },
  container: {
    gap: defaultValues.fontSize,
  },
  title: {
    fontWeight: 'bold',
    color: '#2079c7',
    marginBottom: '6px',
  },
  period: {
    fontSize: '8px',
    color: '#666',
    lineHeight: '12px',
  },
});
