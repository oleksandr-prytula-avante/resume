import { ETranslationKey } from "../i18n/types";
import { ESectionId, toSectionHash } from "../utils/sections";

export const SECTION_NAV_ITEMS = [
  {
    href: toSectionHash(ESectionId.About),
    labelKey: ETranslationKey.NavAbout,
  },
  {
    href: toSectionHash(ESectionId.Expirience),
    labelKey: ETranslationKey.NavExpirience,
  },
  {
    href: toSectionHash(ESectionId.Education),
    labelKey: ETranslationKey.NavEducation,
  },
];
