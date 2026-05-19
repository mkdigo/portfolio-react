import { Page, Text, View, Document } from '@react-pdf/renderer';
import { DateTime } from '@mkdigo/datetime';
import { TResumeData } from '../../types';
import { styles } from './styles';

type Props = {
  data: TResumeData;
};

export function ResumePDF({ data }: Props) {
  return (
    <Document title='Curriculum'>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>{data.name}</Text>
            <Text>Desenvolvedor Web Full-Stack</Text>
            <Text>
              Brasileiro, casado, {DateTime.getAge(data.birthdate)} anos
            </Text>
          </View>
          <View style={styles.address}>
            <Text>{data.address.street}</Text>
            <Text>{data.address.complement}</Text>
            <Text>{data.address.neighborhood}</Text>
            <Text>
              {data.address.city} - {data.address.state}
            </Text>
            <Text style={{ fontWeight: 'bold' }}>{data.cellphone}</Text>
            <Text style={{ fontWeight: 'bold' }}>{data.email}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentLeft}>
            <View>
              <Text style={styles.title}>FORMAÇÃO</Text>
              <View style={styles.container}>
                {data.graduations.map((graduation) => (
                  <View key={`graduation-${graduation.id}`}>
                    <Text>{graduation.institute}</Text>
                    <Text>{graduation.local}</Text>
                    <Text>{graduation.name}</Text>
                    <Text style={styles.period}>{graduation.period}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View>
              <Text style={styles.title}>EXPERIÊNCIAS PROFISSIONAIS</Text>
              <View style={styles.container}>
                {data.professional_experiences.map(
                  (professional_experience) => (
                    <View
                      key={`professional_experience-${professional_experience.id}`}
                      wrap={false}
                    >
                      <Text>
                        <Text style={{ fontWeight: 'bold' }}>
                          {professional_experience.company}
                        </Text>{' '}
                        ({professional_experience.local})
                      </Text>
                      <Text style={{ fontSize: '9px' }}>
                        {professional_experience.position}
                      </Text>
                      <Text style={styles.period}>
                        {professional_experience.period}
                      </Text>
                      <Text style={{ fontSize: '9px' }}>
                        {professional_experience.description}
                      </Text>
                    </View>
                  ),
                )}
              </View>
            </View>
          </View>

          <View style={styles.contentRight}>
            <View>
              <Text style={styles.title}>SKILLS</Text>
              {data.skills.map((skill, i) => (
                <Text key={`skill-${i}`}>{skill}</Text>
              ))}
            </View>
            <View>
              <Text style={styles.title}>LINGUAS</Text>
              {data.languages.map((language, i) => (
                <Text key={`language-${i}`}>{language}</Text>
              ))}
            </View>
          </View>
        </View>

        <View style={{ lineHeight: '20px' }}>
          <Text style={styles.title}>RESUMO</Text>
          {data.description.map((line, i) => (
            <Text key={`description-${i}`}>{line}</Text>
          ))}
        </View>

        <View style={{ lineHeight: '20px' }}>
          <Text style={styles.title}>PROJETOS</Text>
          {data.projects_links.map((link, i) => (
            <Text key={`project-link-${i}`}>{link}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}
