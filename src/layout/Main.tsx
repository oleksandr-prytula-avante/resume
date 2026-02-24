import { Header } from "../components/Header";
import { LinesBackground } from "../components/LinesBackground/LinesBackground";
import { Links } from "../components/Links";
import { SectionCarousel } from "../components/SectionCarousel";
import { SectionDots } from "../components/SectionDots";
import { SECTION_NAV_ITEMS } from "../constants/sectionNavigation";
// import avatarUrl from "../assets/images/avatar.webp";
import { ExperienceIcon } from "../components/icons/ExperienceIcon";
import { LocationIcon } from "../components/icons/LocationIcon";
import { PdfIcon } from "../components/icons/PdfIcon";
import { useI18n } from "../hooks/useI18n";
import { ETranslationKey } from "../i18n/types";

export const ATS_CV_PATH = "/assets/pdf/ats-cv.pdf";

export function Main() {
  const i18n = useI18n();

  return (
    <div className="relative flex h-full flex-col overflow-hidden px-16 pb-8 text-white">
      <LinesBackground />
      <div className="relative z-10 flex h-full flex-col">
        <Header />
        <main className="w-full flex-1 overflow-hidden">
          <div className="grid h-full grid-cols-[5%_35%_60%]">
            <section className="relative">
              <Links />
            </section>

            <section className="relative">
              <div className="flex h-full flex-col px-14 pt-[10%]">
                <div className="mb-2 flex items-center">
                  <span className="text-xl font-bold uppercase text-white">
                    {i18n.t(ETranslationKey.HeroHiIm)}
                  </span>
                  <span className="ml-6 inline-block h-[4px] flex-1 bg-[color:var(--color-accent)]" />
                </div>

                <h1 className="text-6xl font-bold uppercase leading-none text-white">
                  PRYTULA OLEKSANDR
                </h1>

                <p className="mt-4 text-lg uppercase text-[color:var(--color-accent)]">
                  {i18n.t(ETranslationKey.HeroRole)}
                </p>

                <div className="flex flex-col gap-3 pt-4 text-white">
                  <div className="flex items-center gap-3 py-1 text-xs text-white">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                      <ExperienceIcon className="h-[18px] w-[18px]" />
                    </span>
                    <p className="font-medium uppercase tracking-wide">
                      {i18n.t(ETranslationKey.HeroExperience)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 py-1 text-xs">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                      <LocationIcon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="uppercase">{i18n.t(ETranslationKey.HeroLocation)}</span>
                  </div>

                  <a
                    className="flex cursor-pointer items-center gap-3 py-1 text-xs uppercase text-white transition-colors duration-200 ease-out hover:text-white/80"
                    href={ATS_CV_PATH}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                      <PdfIcon className="h-[18px] w-[18px]" />
                    </span>
                    <span>{i18n.t(ETranslationKey.HeroCvDownload)}</span>
                  </a>
                </div>
              </div>

              {/* <img
                src={avatarUrl}
                alt="Avatar"
                className="pointer-events-none absolute bottom-0 right-0 h-auto w-56 opacity-80"
              /> */}
            </section>

            <section className="relative">
              <SectionCarousel>
                {SECTION_NAV_ITEMS.map(function ({ href, labelKey }) {
                  return (
                    <p key={href} className="text-white">
                      {i18n.t(labelKey)}
                    </p>
                  );
                })}
              </SectionCarousel>
              <SectionDots />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
