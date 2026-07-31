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
            <Text>{data.title}</Text>
            <Text>
              Brasileiro, casado, {DateTime.getAge(data.birthdate)} anos
            </Text>
          </View>
          <View style={styles.address}>
            <Text>
              {data.address.city} - {data.address.state}
            </Text>
            <Text>{data.address.country}</Text>
            <Text style={{ fontWeight: 'bold' }}>{data.cellphone}</Text>
            <Text style={{ fontWeight: 'bold' }}>{data.email}</Text>
            {data.portfolio_links.map((link, i) => (
              <Text style={{ fontWeight: 'bold' }} key={`portfolio-link-${i}`}>
                {link}
              </Text>
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.title}>RESUMO</Text>
          {data.description.map((line, i) => (
            <Text key={`description-${i}`}>{line}</Text>
          ))}
        </View>

        <View>
          <Text style={styles.title}>PROJETOS EM DESTAQUE</Text>
          {data.projects.map((project, i) => (
            <View key={`project-${i}`}>
              <Text>
                <Text style={{ fontWeight: 'bold' }}>{project.title}</Text>
                {' - '}
                {project.link}
              </Text>
              <Text>
                {/* <Text style={{ fontWeight: 'bold' }}>Descrição:</Text>{' '} */}
                {project.description}
              </Text>
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Tecnologias:</Text>{' '}
                {project.technologies}
              </Text>
            </View>
          ))}
        </View>

        <View>
          <Text style={styles.title}>SKILLS</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillsLabel}>Back-end:</Text>
            <Text>{data.skills.backend.join(', ')}.</Text>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillsLabel}>Front-end:</Text>
            <Text>{data.skills.frontend.join(', ')}.</Text>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillsLabel}>Outros:</Text>
            <Text>{data.skills.others.join(', ')}.</Text>
          </View>
        </View>

        <View>
          <Text style={styles.title}>EXPERIÊNCIAS EM TECNOLOGIA</Text>
          <View style={styles.professionalExperience}>
            {data.professional_experiences.it.map((professional_experience) => (
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
            ))}
          </View>
        </View>

        <View wrap={false}>
          <Text style={styles.title}>OUTRAS EXPERIÊNCIAS</Text>
          <View style={styles.professionalExperience}>
            {data.professional_experiences.others.map(
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

        <View>
          <Text style={styles.title}>FORMAÇÃO</Text>
          <View style={styles.graduation}>
            {data.graduations.map((graduation) => (
              <View key={`graduation-${graduation.id}`} wrap={false}>
                <Text style={{ fontWeight: 'bold' }}>
                  {graduation.institute}
                </Text>
                <Text>{graduation.local}</Text>
                <Text>{graduation.name}</Text>
                <Text style={styles.period}>{graduation.period}</Text>
              </View>
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.title}>LINGUAS</Text>
          <Text>{data.languages.join(' | ')}</Text>
        </View>
      </Page>
    </Document>
  );
}
