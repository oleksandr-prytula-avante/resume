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
  HeroRole = "hero.role",
  HeroNeedMoreDetails = "hero.needMoreDetails",
  HeroCvDownload = "hero.cvDownload",

  AboutParagraph1 = "about.paragraph1",
  AboutParagraph2 = "about.paragraph2",
  AboutParagraph3 = "about.paragraph3",
  AboutParagraph4 = "about.paragraph4",
  AboutParagraph5 = "about.paragraph5",
}

export type Translations = Record<ETranslationKey, string>;
