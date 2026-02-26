export const enum ELocale {
  Ru = "ru",
  En = "en",
  Sp = "sp",
  De = "de",
}

export const enum ETranslationKey {
  LocaleEn = "locale.en",
  LocaleRu = "locale.ru",
  LocaleSp = "locale.sp",
  LocaleDe = "locale.de",

  NavAbout = "nav.about",
  NavExpirience = "nav.expirience",
  NavEducation = "nav.education",
  NavGithub = "nav.github",
  NavLinkedIn = "nav.linkedin",
  NavLeetCode = "nav.leetcode",
  NavEmail = "nav.email",

  HeroHiIm = "hero.hiIm",
  HeroName = "hero.name",
  HeroSurname = "hero.surname",
  HeroRole = "hero.role",
  HeroNeedMoreDetails = "hero.needMoreDetails",
  HeroCvDownload = "hero.cvDownload",

  AboutParagraph1 = "about.paragraph1",
  AboutParagraph2 = "about.paragraph2",
  AboutParagraph3 = "about.paragraph3",
  AboutParagraph4 = "about.paragraph4",
  AboutParagraph5 = "about.paragraph5",

  ExperiencePresent = "experience.present",
  ExperienceExpandDetails = "experience.expandDetails",
  ExperienceHideDetails = "experience.hideDetails",

  ExperienceOmnoraCompanyName = "experience.omnora.companyName",
  ExperienceOmnoraJobTitle = "experience.omnora.jobTitle",
  ExperienceOmnoraLocation = "experience.omnora.location",
  ExperienceOmnoraDescription = "experience.omnora.description",

  ExperienceDigitalsuitsCompanyName = "experience.digitalsuits.companyName",
  ExperienceDigitalsuitsJobTitle = "experience.digitalsuits.jobTitle",
  ExperienceDigitalsuitsLocation = "experience.digitalsuits.location",
  ExperienceDigitalsuitsDescription = "experience.digitalsuits.description",

  ExperienceCodeAndCareCompanyName = "experience.codeAndCare.companyName",
  ExperienceCodeAndCareJobTitle = "experience.codeAndCare.jobTitle",
  ExperienceCodeAndCareLocation = "experience.codeAndCare.location",
  ExperienceCodeAndCareDescription = "experience.codeAndCare.description",

  ExperienceLanarsCompanyName = "experience.lanars.companyName",
  ExperienceLanarsJobTitle = "experience.lanars.jobTitle",
  ExperienceLanarsLocation = "experience.lanars.location",
  ExperienceLanarsDescription = "experience.lanars.description",
}

export type Translations = Record<ETranslationKey, string>;
