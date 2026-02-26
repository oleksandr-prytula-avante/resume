import { useMemo } from "react";

import { SkillHighlights } from "../components/SkillHighlights";
import { useI18n } from "../hooks/useI18n";
import { ETranslationKey } from "../i18n/types";

type AboutProps = {
  hoveredSkill: string | null;
  onSkillEnter: (skill: string) => void;
  onSkillLeave: () => void;
};

export function About({
  hoveredSkill,
  onSkillEnter,
  onSkillLeave,
}: AboutProps) {
  const i18n = useI18n();

  const paragraphs = [
    ETranslationKey.AboutParagraph1,
    ETranslationKey.AboutParagraph2,
    ETranslationKey.AboutParagraph3,
    ETranslationKey.AboutParagraph4,
    ETranslationKey.AboutParagraph5,
  ];

  const paragraphValues = useMemo(
    function () {
      return paragraphs.map(function (translationKey) {
        return i18n.t(translationKey);
      });
    },
    [i18n, paragraphs],
  );

  return (
    <article className="h-full overflow-y-auto pr-2 text-[0.9625rem] leading-relaxed text-white">
      <div className="space-y-4">
        {paragraphValues.map(function (paragraphText, index) {
          return (
            <p key={paragraphs[index]} className="indent-6">
              <SkillHighlights
                value={paragraphText}
                hoveredSkill={hoveredSkill}
                onSkillEnter={onSkillEnter}
                onSkillLeave={onSkillLeave}
              />
            </p>
          );
        })}
      </div>
    </article>
  );
}
