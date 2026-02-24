import { SECTION_NAV_ITEMS } from "../constants/sectionNavigation";
import { useI18n } from "../hooks/useI18n";
import { useActiveSectionHash } from "../hooks/useActiveSectionHash";
import { ESectionId, toSectionHash } from "../utils/sections";

import { LanguageDropdown } from "./LanguageDropdown";

import logoUrl from "../assets/images/logo.webp";

export function Header() {
  const i18n = useI18n();
  const { activeHash } = useActiveSectionHash(toSectionHash(ESectionId.About));

  return (
    <header className="flex h-24 w-full items-center justify-between">
      <img src={logoUrl} alt="Logo" className="h-12 w-auto" />

      <div className="flex items-center gap-1 whitespace-nowrap">
        <nav className="flex items-center gap-1 text-[16px] uppercase">
          {SECTION_NAV_ITEMS.map(({ href, labelKey }) => {
            const label = i18n.t(labelKey);
            const isActive = href === activeHash;

            return (
              <a
                key={href}
                className={
                  isActive
                    ? "inline-flex w-[9rem] cursor-pointer justify-center no-underline"
                    : "group inline-flex w-[9rem] cursor-pointer justify-center no-underline transition-colors duration-200 ease-out hover:text-white/80 focus-visible:text-white/80"
                }
                href={href}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={
                    isActive
                      ? "inline-flex border-b-[1.33px] border-[color:var(--color-accent)] py-3"
                      : "inline-flex border-b-[1.33px] border-transparent py-3 transition-colors duration-200 ease-out group-hover:border-[color:rgb(var(--color-accent-rgb)/0.8)] group-focus-visible:border-[color:rgb(var(--color-accent-rgb)/0.8)]"
                  }
                >
                  {label}
                </span>
              </a>
            );
          })}
        </nav>

        <LanguageDropdown />
      </div>
    </header>
  );
}
