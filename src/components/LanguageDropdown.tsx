import { useMemo } from "react";
import type { MouseEventHandler } from "react";

import { useI18n } from "../hooks/useI18n";
import { useDropdownMenu } from "../hooks/useDropdownMenu";

import { ELocale, ETranslationKey } from "../i18n/types";

const LOCALE_LABEL_KEYS: Record<ELocale, ETranslationKey> = {
  [ELocale.En]: ETranslationKey.LocaleEn,
  [ELocale.Ru]: ETranslationKey.LocaleRu,
  [ELocale.Sp]: ETranslationKey.LocaleSp,
  [ELocale.De]: ETranslationKey.LocaleDe,
};

export function LanguageDropdown() {
  const i18n = useI18n();
  const languageMenu = useDropdownMenu();

  const currentLocaleLabel = useMemo(
    function () {
      return i18n.t(LOCALE_LABEL_KEYS[i18n.locale as ELocale]);
    },
    [i18n.locale],
  );

  function handleSelectLocale(nextLocale: ELocale) {
    i18n.setLocale(nextLocale);
    languageMenu.close();
  }

  const handleLanguageMenuToggle: MouseEventHandler<HTMLButtonElement> =
    function (event) {
      event.preventDefault();
      languageMenu.toggle();
    };

  const handleLocaleOptionClick: MouseEventHandler<HTMLButtonElement> =
    function (event) {
      event.preventDefault();

      const nextLocale = event.currentTarget.dataset.locale as
        | ELocale
        | undefined;

      if (!nextLocale) {
        return;
      }

      handleSelectLocale(nextLocale);
    };

  let languageDropdown = null;

  if (languageMenu.isOpen) {
    languageDropdown = (
      <div
        className="absolute right-0 top-[calc(100%-1.33px)] z-20 w-10"
        role="listbox"
        aria-label="Language"
      >
        <span className="pointer-events-none absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-x-[7.5px] border-x-transparent border-b-[9px] border-b-[color:var(--color-accent)]" />

        <div className="mt-[8px] overflow-hidden rounded-md border border-[color:var(--color-accent)] bg-[color:var(--color-bg)]">
          {i18n.languageOptions.map((nextLocale) => {
            const isActive = nextLocale === i18n.locale;

            return (
              <button
                key={nextLocale}
                type="button"
                role="option"
                aria-selected={isActive}
                data-locale={nextLocale}
                className={
                  isActive
                    ? "flex h-10 w-full cursor-pointer items-center justify-center bg-white/12 text-center text-[14px] text-white"
                    : "flex h-10 w-full cursor-pointer items-center justify-center text-center text-[14px] text-white/80 transition-colors duration-200 ease-out hover:bg-white/8 hover:text-white focus-visible:bg-white/8 focus-visible:text-white"
                }
                onClick={handleLocaleOptionClick}
              >
                <span>{i18n.t(LOCALE_LABEL_KEYS[nextLocale as ELocale])}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative border-b-[1.33px] border-transparent py-3"
      ref={languageMenu.containerRef}
    >
      <button
        type="button"
        className={
          languageMenu.isOpen
            ? "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[color:var(--color-accent)] bg-white/8 text-[14px] text-white outline-none transition-colors duration-200 ease-out"
            : "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/4 bg-white/2 text-[14px] text-white outline-none transition-colors duration-200 ease-out hover:border-[color:var(--color-accent)] hover:bg-white/8 focus-visible:border-[color:var(--color-accent)] focus-visible:bg-white/8"
        }
        onClick={handleLanguageMenuToggle}
        aria-haspopup="listbox"
        aria-expanded={languageMenu.isOpen}
      >
        <span className="text-center">{currentLocaleLabel}</span>
      </button>

      {languageDropdown}
    </div>
  );
}
