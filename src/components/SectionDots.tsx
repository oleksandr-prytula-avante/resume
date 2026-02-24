import { SECTION_NAV_ITEMS } from "../constants/sectionNavigation";
import { useActiveSectionHash } from "../hooks/useActiveSectionHash";
import { useI18n } from "../hooks/useI18n";
import { ESectionId, toSectionHash } from "../utils/sections";

export function SectionDots() {
  const i18n = useI18n();
  const { activeHash } = useActiveSectionHash(toSectionHash(ESectionId.About));

  return (
    <nav
      className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3"
      aria-label="Section navigation"
    >
      {SECTION_NAV_ITEMS.map(({ href, labelKey }) => {
        const label = i18n.t(labelKey);
        const isActive = href === activeHash;

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
