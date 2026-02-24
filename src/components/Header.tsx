import { useI18n } from "../hooks/useI18n";
import { useActiveSectionHash } from "../hooks/useActiveSectionHash";
import { ESectionId, toSectionHash } from "../utils/sections";

import { ETranslationKey } from "../i18n/types";
import { LanguageDropdown } from "./LanguageDropdown";

import logoUrl from "../assets/images/logo.webp";

export function Header() {
  const i18n = useI18n();
  const { activeHash } = useActiveSectionHash(toSectionHash(ESectionId.About));

  const navItems = [
    {
      href: toSectionHash(ESectionId.About),
      label: i18n.t(ETranslationKey.NavAbout),
    },
    {
      href: toSectionHash(ESectionId.Expirience),
      label: i18n.t(ETranslationKey.NavExpirience),
    },
    {
      href: toSectionHash(ESectionId.Education),
      label: i18n.t(ETranslationKey.NavEducation),
    },
    {
      href: toSectionHash(ESectionId.Projects),
      label: i18n.t(ETranslationKey.NavProjects),
    },
  ];

  return (
    <header className="flex h-24 w-full items-center justify-between">
      <img src={logoUrl} alt="Logo" className="h-12 w-auto" />

      <div className="flex items-center gap-1 whitespace-nowrap">
        <nav className="flex items-center gap-1 text-[16px] uppercase">
          {navItems.map(({ href, label }) => {
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
