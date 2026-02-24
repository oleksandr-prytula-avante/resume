import { useMemo } from "react";

import { useActiveSectionHash } from "../hooks/useActiveSectionHash";
import { useI18n } from "../hooks/useI18n";
import { ETranslationKey } from "../i18n/types";
import { ESectionId, toSectionHash } from "../utils/sections";

const SLIDES = [
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
  {
    href: toSectionHash(ESectionId.Projects),
    labelKey: ETranslationKey.NavProjects,
  },
] as const;

export function SectionCarousel() {
  const i18n = useI18n();
  const { activeHash } = useActiveSectionHash(toSectionHash(ESectionId.About));

  const activeIndex = useMemo(
    function () {
      const index = SLIDES.findIndex(function ({ href }) {
        return href === activeHash;
      });

      return index === -1 ? 0 : index;
    },
    [activeHash],
  );

  return (
    <div className="flex h-full flex-col px-10 pr-20">
      <div className="relative h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {SLIDES.map(function ({ href, labelKey }) {
            return (
              <section key={href} className="h-full w-full shrink-0 p-8">
                <p className="text-3xl font-bold uppercase text-white">
                  {i18n.t(labelKey)}
                </p>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}