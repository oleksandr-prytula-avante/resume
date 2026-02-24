import { useActiveSectionHash } from "../hooks/useActiveSectionHash";
import { useI18n } from "../hooks/useI18n";
import { ETranslationKey } from "../i18n/types";
import { ESectionId, toSectionHash } from "../utils/sections";

const ITEMS = [
  {
    href: toSectionHash(ESectionId.About),
    labelKey: ETranslationKey.NavAbout,
    disabled: false,
  },
  {
    href: toSectionHash(ESectionId.Expirience),
    labelKey: ETranslationKey.NavExpirience,
    disabled: false,
  },
  {
    href: toSectionHash(ESectionId.Education),
    labelKey: ETranslationKey.NavEducation,
    disabled: false,
  },
  {
    href: toSectionHash(ESectionId.Projects),
    labelKey: ETranslationKey.NavProjects,
    disabled: false,
  },
];

export function SectionDots() {
  const i18n = useI18n();
  const { activeHash } = useActiveSectionHash(toSectionHash(ESectionId.About));

  return (
    <nav
      className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3"
      aria-label="Section navigation"
    >
      {ITEMS.map(({ href, labelKey, disabled }) => {
        const label = i18n.t(labelKey);
        const isActive = href === activeHash;

        if (disabled) {
          return (
            <span
              key={href}
              aria-disabled="true"
              className="h-[15px] w-[15px] cursor-not-allowed rounded-full border border-white/20 bg-transparent opacity-40"
              title={label}
            />
          );
        }

        return (
          <a
            key={href}
            href={href}
            aria-label={label}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "h-[15px] w-[15px] cursor-pointer rounded-full border-2 border-white bg-[color:var(--color-accent)]"
                : "h-[15px] w-[15px] cursor-pointer rounded-full border border-white bg-transparent transition-colors duration-200 ease-out hover:border-[color:rgb(var(--color-accent-rgb)/0.85)] focus-visible:border-[color:rgb(var(--color-accent-rgb)/0.85)]"
            }
          />
        );
      })}
    </nav>
  );
}
