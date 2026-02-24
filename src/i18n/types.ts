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

  NavProjects = "nav.projects",
  NavGithub = "nav.github",
  NavLinkedIn = "nav.linkedin",
  NavLeetCode = "nav.leetcode",
  NavEmail = "nav.email",

  HeroHiIm = "hero.hiIm",
  HeroRole = "hero.role",
  HeroExperience = "hero.experience",
  HeroLocation = "hero.location",
  HeroCvDownload = "hero.cvDownload",
}

export type Translations = Record<ETranslationKey, string>;
