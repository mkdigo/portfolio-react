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
  description: string[];
  skills: string[];
  languages: string[];
  graduations: {
    id: number;
    institute: string;
    local: string;
    name: string;
    period: string;
  }[];
  professional_experiences: {
    id: number;
    company: string;
    local: string;
    position: string;
    period: string;
    description: string;
  }[];
  projects_links: string[];
};
