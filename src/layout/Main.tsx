import { useState } from "react";

import { Header } from "../components/Header";
import { LinesBackground } from "../components/LinesBackground/LinesBackground";
import { Links } from "../components/Links";
import { SectionCarousel } from "../components/SectionCarousel";
import { SectionDots } from "../components/SectionDots";
import { Tags } from "../components/Tags";
import { SECTION_NAV_ITEMS } from "../constants/sectionNavigation";
import { ESectionId, toSectionHash } from "../utils/sections";
// import avatarUrl from "../assets/images/avatar.webp";
import { useI18n } from "../hooks/useI18n";
import { ETranslationKey } from "../i18n/types";
import { About } from "./About";
import { Education } from "./Education";
import { Experience } from "./Experience";

export const ATS_CV_PATH = "/assets/pdf/ats-cv.pdf";

export function Main() {
  const i18n = useI18n();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="relative flex h-full flex-col overflow-hidden px-16 pb-8 text-white">
      <LinesBackground />
      <div className="relative z-10 flex h-full flex-col">
        <Header />
        <main className="w-full flex-1 overflow-hidden">
          <div className="grid h-full grid-cols-[6%_34%_55%]">
            <section className="relative">
              <Links />
            </section>

            <section className="relative">
              <div className="flex h-full flex-col px-14 pt-8">
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

                <Tags
                  hoveredSkill={hoveredSkill}
                  onSkillEnter={setHoveredSkill}
                  onSkillLeave={function () {
                    setHoveredSkill(null);
                  }}
                />

                <div className="mt-4 flex items-center gap-2">
                  <p className="text-sm lowercase text-white">
                    {i18n.t(ETranslationKey.HeroNeedMoreDetails)}
                  </p>
                  <a
                    className="inline-flex cursor-pointer items-center py-1 text-[14px] uppercase text-[color:var(--color-accent)] transition-colors duration-200 ease-out hover:text-white"
                    href={ATS_CV_PATH}
                    target="_blank"
                    rel="noreferrer"
                  >
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
                {SECTION_NAV_ITEMS.map(function ({ href }) {
                  if (href === toSectionHash(ESectionId.About)) {
                    return (
                      <About
                        key={href}
                        hoveredSkill={hoveredSkill}
                        onSkillEnter={setHoveredSkill}
                        onSkillLeave={function () {
                          setHoveredSkill(null);
                        }}
                      />
                    );
                  }

                  if (href === toSectionHash(ESectionId.Expirience)) {
                    return <Experience key={href} />;
                  }

                  if (href === toSectionHash(ESectionId.Education)) {
                    return <Education key={href} />;
                  }

                  return null;
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
