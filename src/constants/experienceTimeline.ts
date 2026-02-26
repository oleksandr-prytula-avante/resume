import codeAndCareLogo from "../assets/images/companies/code-and-care.webp";
import digitalsuitsLogo from "../assets/images/companies/digitalsuits.webp";
import lanarsLogo from "../assets/images/companies/lanars.webp";
import omnoraLogo from "../assets/images/companies/omnora.webp";

export type ExperienceTimelineItem = {
  id: string;
  companyUrl: string;
  companyLogoSrc: string;
  startDate: string;
  endDate: string | null;
};

export const EXPERIENCE_TIMELINE_ITEMS: ExperienceTimelineItem[] = [
  {
    id: "omnora",
    companyUrl: "https://www.omnora.com/",
    companyLogoSrc: omnoraLogo,
    startDate: "2020-04",
    endDate: null,
  },
  {
    id: "digitalsuits",
    companyUrl: "https://digitalsuits.co/",
    companyLogoSrc: digitalsuitsLogo,
    startDate: "2019-04",
    endDate: "2020-03",
  },
  {
    id: "code-and-care",
    companyUrl: "https://code-care.com/",
    companyLogoSrc: codeAndCareLogo,
    startDate: "2017-10",
    endDate: "2019-03",
  },
  {
    id: "lanars",
    companyUrl: "https://lanars.com/",
    companyLogoSrc: lanarsLogo,
    startDate: "2016-10",
    endDate: "2017-09",
  },
];