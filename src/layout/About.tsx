import type { ReactNode } from "react";

import { SKILL_TAGS } from "../constants/skillTags";
import { useI18n } from "../hooks/useI18n";
import { ETranslationKey } from "../i18n/types";

type AboutProps = {
  hoveredSkill: string | null;
  onSkillEnter: (skill: string) => void;
  onSkillLeave: () => void;
};

const SKILL_HIGHLIGHT_TERMS = Array.from(
  new Set([
    ...SKILL_TAGS.map(function ({ label }) {
      return label;
    }),
  ]),
);

const TERM_TO_TAG_MAP = new Map(
  SKILL_HIGHLIGHT_TERMS.map(function (term) {
    return [term.toLowerCase(), term];
  }),
);

const SKILL_REGEX = new RegExp(
  `(?<![\\p{L}\\p{N}])(${SKILL_HIGHLIGHT_TERMS.map(function (term) {
    return term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  })
    .sort(function (left, right) {
      return right.length - left.length;
    })
    .join("|")})(?![\\p{L}\\p{N}])`,
  "giu",
);

function renderWithSkillHighlights(
  value: string,
  hoveredSkill: string | null,
  onSkillEnter: (skill: string) => void,
  onSkillLeave: () => void,
): ReactNode {
  const parts = value.split(SKILL_REGEX);

  return parts.map(function (part, index) {
    const tag = TERM_TO_TAG_MAP.get(part.toLowerCase());

    if (!tag) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    const isActive = hoveredSkill === tag;

    return (
      <span
        key={`${part}-${index}`}
        className={
          isActive
            ? "text-[color:var(--color-accent)]"
            : "transition-colors duration-200 ease-out hover:text-[color:var(--color-accent)]"
        }
        onMouseEnter={function () {
          onSkillEnter(tag);
        }}
        onMouseLeave={onSkillLeave}
      >
        {part}
      </span>
    );
  });
}

export function About({ hoveredSkill, onSkillEnter, onSkillLeave }: AboutProps) {
  const i18n = useI18n();

  const paragraphs = [
    ETranslationKey.AboutParagraph1,
    ETranslationKey.AboutParagraph2,
    ETranslationKey.AboutParagraph3,
    ETranslationKey.AboutParagraph4,
    ETranslationKey.AboutParagraph5,
  ];

  return (
    <article className="h-full overflow-y-auto pr-2 text-sm leading-relaxed text-white">
      <div className="space-y-4">
        {paragraphs.map(function (translationKey) {
          return (
            <p key={translationKey} className="indent-6">
              {renderWithSkillHighlights(
                i18n.t(translationKey),
                hoveredSkill,
                onSkillEnter,
                onSkillLeave,
              )}
            </p>
          );
        })}
      </div>
    </article>
  );
}