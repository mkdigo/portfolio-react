type TProfessionalExperiences = {
  id: number;
  company: string;
  local: string;
  position: string;
  period: string;
  description: string;
};

export type TResumeData = {
  name: string;
  birthdate: string;
  marital_status: string;
  cellphone: string;
  email: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  title: string;
  description: string[];
  projects: {
    title: string;
    description: string;
    technologies: string;
    link: string;
  }[];
  skills: {
    backend: string[];
    frontend: string[];
    others: string[];
  };
  languages: string[];
  graduations: {
    id: number;
    institute: string;
    local: string;
    name: string;
    period: string;
  }[];
  professional_experiences: {
    it: TProfessionalExperiences[];
    others: TProfessionalExperiences[];
  };
  portfolio_links: string[];
};
