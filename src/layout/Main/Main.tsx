import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { LinesBackground } from "../../components/LinesBackground/LinesBackground";
import { Links } from "../../components/Links";
import { SectionCarousel } from "../../components/SectionCarousel";
import { SectionDots } from "../../components/SectionDots";
import {
  TAG_REVEAL_DURATION_MS,
  TAG_REVEAL_STAGGER_MS,
  Tags,
} from "../../components/Tags/Tags";
import { SKILL_TAGS } from "../../constants/skillTags";
import { SECTION_NAV_ITEMS } from "../../constants/sectionNavigation";
import { ATS_CV_PATH } from "../../constants/paths";
import { useI18n } from "../../hooks/useI18n";
import { ETranslationKey } from "../../i18n/types";
import { ESectionId, toSectionHash } from "../../utils/sections";
import { About } from "../About";
import { Education } from "../Education";
import { Experience } from "../Experience";

import "./Main.css";

const ORANGE_LINE_REVEAL_DURATION_MS = 500;
const NAME_TYPING_START_EXTRA_DELAY_MS = 20;
const HI_TYPING_INTERVAL_MS = 70;
const ROLE_TYPING_INTERVAL_MS = 70;
const NAME_TYPING_INTERVAL_MS = 75;
const NEED_MORE_DETAILS_TYPING_INTERVAL_MS = 45;
const CV_DOWNLOAD_TYPING_INTERVAL_MS = 38;
const NAME_TYPING_START_DELAY_MS =
  ORANGE_LINE_REVEAL_DURATION_MS + NAME_TYPING_START_EXTRA_DELAY_MS;
const NEED_MORE_DETAILS_START_DELAY_MS =
  (SKILL_TAGS.length - 1) * TAG_REVEAL_STAGGER_MS + TAG_REVEAL_DURATION_MS;

export function Main() {
  const i18n = useI18n();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [visibleHiChars, setVisibleHiChars] = useState(0);
  const [isLineVisible, setIsLineVisible] = useState(false);
  const [visibleNameChars, setVisibleNameChars] = useState(0);
  const [isNameTypingStarted, setIsNameTypingStarted] = useState(false);
  const [visibleRoleChars, setVisibleRoleChars] = useState(0);
  const [showSecondaryContent, setShowSecondaryContent] = useState(false);
  const [visibleNeedMoreDetailsChars, setVisibleNeedMoreDetailsChars] =
    useState(0);
  const [isNeedMoreDetailsTypingStarted, setIsNeedMoreDetailsTypingStarted] =
    useState(false);
  const [visibleCvDownloadChars, setVisibleCvDownloadChars] = useState(0);
  const [isCvDownloadTypingStarted, setIsCvDownloadTypingStarted] =
    useState(false);
  const [shouldPlayHeroAnimation, setShouldPlayHeroAnimation] = useState(true);

  const hiText = i18n.t(ETranslationKey.HeroHiIm);
  const nameText = i18n.t(ETranslationKey.HeroName);
  const surnameText = i18n.t(ETranslationKey.HeroSurname);
  const fullNameLength = nameText.length + surnameText.length;
  const visibleName = nameText.slice(
    0,
    Math.min(visibleNameChars, nameText.length),
  );
  const visibleSurname = surnameText.slice(
    0,
    Math.max(visibleNameChars - nameText.length, 0),
  );
  const roleText = i18n.t(ETranslationKey.HeroRole);
  const needMoreDetailsText = i18n.t(ETranslationKey.HeroNeedMoreDetails);
  const cvDownloadText = i18n.t(ETranslationKey.HeroCvDownload);
  const isHiTyping = visibleHiChars < hiText.length;
  const isNameTyping = isNameTypingStarted && visibleNameChars < fullNameLength;
  const isTypingNameRow = visibleNameChars < nameText.length;
  const isRoleTyping =
    !isHiTyping &&
    visibleNameChars >= fullNameLength &&
    visibleRoleChars < roleText.length;
  const isNeedMoreDetailsPrinted =
    visibleNeedMoreDetailsChars >= needMoreDetailsText.length;
  const isCvDownloadPrinted = visibleCvDownloadChars >= cvDownloadText.length;
  const isHeroPrintingInProgress =
    !showSecondaryContent || !isNeedMoreDetailsPrinted || !isCvDownloadPrinted;

  useEffect(
    function () {
      if (!shouldPlayHeroAnimation) {
        setVisibleHiChars(hiText.length);
        setIsLineVisible(true);
        setVisibleNameChars(fullNameLength);
        setIsNameTypingStarted(true);
        setVisibleRoleChars(roleText.length);
        setShowSecondaryContent(true);
        setVisibleNeedMoreDetailsChars(needMoreDetailsText.length);
        setIsNeedMoreDetailsTypingStarted(true);
        setVisibleCvDownloadChars(cvDownloadText.length);
        setIsCvDownloadTypingStarted(true);

        return;
      }

      setVisibleHiChars(0);
      setIsLineVisible(false);
      setVisibleNameChars(0);
      setIsNameTypingStarted(false);
      setVisibleRoleChars(0);
      setShowSecondaryContent(false);
      setVisibleNeedMoreDetailsChars(0);
      setIsNeedMoreDetailsTypingStarted(false);
      setVisibleCvDownloadChars(0);
      setIsCvDownloadTypingStarted(false);

      const timeoutIds: number[] = [];
      const intervalIds: number[] = [];

      function typeRole() {
        const roleIntervalId = window.setInterval(function () {
          setVisibleRoleChars(function (currentValue) {
            const nextValue = Math.min(currentValue + 1, roleText.length);

            if (nextValue >= roleText.length) {
              window.clearInterval(roleIntervalId);
              setShowSecondaryContent(true);
            }

            return nextValue;
          });
        }, ROLE_TYPING_INTERVAL_MS);

        intervalIds.push(roleIntervalId);
      }

      function typeName() {
        const nameIntervalId = window.setInterval(function () {
          setVisibleNameChars(function (currentValue) {
            const nextValue = Math.min(currentValue + 1, fullNameLength);

            if (nextValue >= fullNameLength) {
              window.clearInterval(nameIntervalId);
              typeRole();
            }

            return nextValue;
          });
        }, NAME_TYPING_INTERVAL_MS);

        intervalIds.push(nameIntervalId);
      }

      const hiIntervalId = window.setInterval(function () {
        setVisibleHiChars(function (currentValue) {
          const nextValue = Math.min(currentValue + 2, hiText.length);

          if (nextValue >= hiText.length) {
            window.clearInterval(hiIntervalId);
            setIsLineVisible(true);

            const timeoutId = window.setTimeout(function () {
              setIsNameTypingStarted(true);
              typeName();
            }, NAME_TYPING_START_DELAY_MS);

            timeoutIds.push(timeoutId);
          }

          return nextValue;
        });
      }, HI_TYPING_INTERVAL_MS);

      intervalIds.push(hiIntervalId);

      return function () {
        intervalIds.forEach(function (intervalId) {
          window.clearInterval(intervalId);
        });

        timeoutIds.forEach(function (timeoutId) {
          window.clearTimeout(timeoutId);
        });
      };
    },
    [
      cvDownloadText.length,
      fullNameLength,
      hiText,
      needMoreDetailsText.length,
      roleText,
      shouldPlayHeroAnimation,
    ],
  );

  useEffect(
    function () {
      if (!shouldPlayHeroAnimation) {
        return;
      }

      if (!showSecondaryContent) {
        setVisibleNeedMoreDetailsChars(0);
        setIsNeedMoreDetailsTypingStarted(false);
        setVisibleCvDownloadChars(0);
        setIsCvDownloadTypingStarted(false);
        return;
      }

      setVisibleNeedMoreDetailsChars(0);
      setIsNeedMoreDetailsTypingStarted(false);

      let typingIntervalId: number | undefined;

      const typingStartTimeoutId = window.setTimeout(function () {
        setIsNeedMoreDetailsTypingStarted(true);

        typingIntervalId = window.setInterval(function () {
          setVisibleNeedMoreDetailsChars(function (currentValue) {
            const nextValue = Math.min(
              currentValue + 1,
              needMoreDetailsText.length,
            );

            if (
              nextValue >= needMoreDetailsText.length &&
              typingIntervalId !== undefined
            ) {
              window.clearInterval(typingIntervalId);
            }

            return nextValue;
          });
        }, NEED_MORE_DETAILS_TYPING_INTERVAL_MS);
      }, NEED_MORE_DETAILS_START_DELAY_MS);

      return function () {
        window.clearTimeout(typingStartTimeoutId);

        if (typingIntervalId !== undefined) {
          window.clearInterval(typingIntervalId);
        }
      };
    },
    [needMoreDetailsText, shouldPlayHeroAnimation, showSecondaryContent],
  );

  useEffect(
    function () {
      if (!shouldPlayHeroAnimation) {
        return;
      }

      if (!showSecondaryContent || !isNeedMoreDetailsPrinted) {
        setVisibleCvDownloadChars(0);
        setIsCvDownloadTypingStarted(false);
        return;
      }

      setVisibleCvDownloadChars(0);
      setIsCvDownloadTypingStarted(true);

      const intervalId = window.setInterval(function () {
        setVisibleCvDownloadChars(function (currentValue) {
          const nextValue = Math.min(currentValue + 1, cvDownloadText.length);

          if (nextValue >= cvDownloadText.length) {
            window.clearInterval(intervalId);
            setShouldPlayHeroAnimation(false);
          }

          return nextValue;
        });
      }, CV_DOWNLOAD_TYPING_INTERVAL_MS);

      return function () {
        window.clearInterval(intervalId);
      };
    },
    [
      cvDownloadText,
      isNeedMoreDetailsPrinted,
      shouldPlayHeroAnimation,
      showSecondaryContent,
    ],
  );

  let hiTypingCursor = null;

  if (isHiTyping) {
    hiTypingCursor = <span className="typing-cursor ml-1" aria-hidden="true">|</span>;
  }

  let nameTypingCursor = null;

  if (isNameTyping && isTypingNameRow) {
    nameTypingCursor = <span className="typing-cursor ml-1" aria-hidden="true">|</span>;
  }

  let surnameTypingCursor = null;

  if (isNameTyping && !isTypingNameRow) {
    surnameTypingCursor = <span className="typing-cursor ml-1" aria-hidden="true">|</span>;
  }

  let roleTypingCursor = null;

  if (isRoleTyping) {
    roleTypingCursor = (
      <span
        className="typing-cursor ml-1"
        style={{ color: "var(--color-accent)" }}
        aria-hidden="true"
      >
        |
      </span>
    );
  }

  let needMoreDetailsTypingCursor = null;

  if (
    isNeedMoreDetailsTypingStarted &&
    visibleNeedMoreDetailsChars < needMoreDetailsText.length
  ) {
    needMoreDetailsTypingCursor = (
      <span className="typing-cursor ml-1" aria-hidden="true">
        |
      </span>
    );
  }

  let cvDownloadTypingCursor = null;

  if (isCvDownloadTypingStarted && visibleCvDownloadChars < cvDownloadText.length) {
    cvDownloadTypingCursor = (
      <span
        className="typing-cursor ml-1"
        style={{ color: "var(--color-accent)" }}
        aria-hidden="true"
      >
        |
      </span>
    );
  }

  let secondaryContent = null;

  if (showSecondaryContent) {
    secondaryContent = (
      <>
        <Tags
          hoveredSkill={hoveredSkill}
          onSkillEnter={setHoveredSkill}
          onSkillLeave={function () {
            setHoveredSkill(null);
          }}
        />

        <div className="mt-8 flex items-center gap-2">
          <p className="text-[17.5px] uppercase text-white">
            {needMoreDetailsText.slice(0, visibleNeedMoreDetailsChars)}
            {needMoreDetailsTypingCursor}
          </p>
          <a
            className="inline-flex cursor-pointer items-center py-1 text-[17.5px] uppercase text-[color:var(--color-accent)] transition-colors duration-200 ease-out hover:text-white"
            href={ATS_CV_PATH}
            target="_blank"
            rel="noreferrer"
            aria-hidden={!isCvDownloadTypingStarted}
            tabIndex={isCvDownloadTypingStarted ? 0 : -1}
          >
            <span className="relative inline-block">
              <span className="invisible">{cvDownloadText}</span>
              <span className="absolute left-0 top-0 whitespace-nowrap">
                {cvDownloadText.slice(0, visibleCvDownloadChars)}
                {cvDownloadTypingCursor}
              </span>
            </span>
          </a>
        </div>
      </>
    );
  }

  return (
    <div className="relative flex h-full flex-col overflow-hidden px-24 pb-16 text-white">
      <LinesBackground />
      <div className="relative z-10 flex h-full min-h-screen flex-col">
        <Header isLanguageDisabled={isHeroPrintingInProgress} />
        <main className="w-full flex-1 overflow-hidden">
          <div className="grid h-full grid-cols-[7%_38%_55%]">
            <section className="relative">
              <Links />
            </section>

            <section className="relative">
              <div className="flex h-full flex-col px-16 pt-8">
                <div className="mb-2 flex items-center">
                  <span className="text-xl font-bold uppercase text-white">
                    {hiText.slice(0, visibleHiChars)}
                    {hiTypingCursor}
                  </span>
                  <span
                    className="ml-6 inline-block h-[4px] flex-1 origin-left bg-[color:var(--color-accent)] transition-transform duration-500 ease-out"
                    style={{
                      transform: isLineVisible ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </div>

                <h1 className="text-6xl font-bold uppercase leading-none text-white">
                  <span className="block">
                    {visibleName}
                    {nameTypingCursor}
                  </span>
                  <span className="mt-1 block">
                    {visibleSurname}
                    {surnameTypingCursor}
                  </span>
                </h1>

                <p className="mt-4 text-[17.5px] uppercase text-[color:var(--color-accent)]">
                  {roleText.slice(0, visibleRoleChars)}
                  {roleTypingCursor}
                </p>

                {secondaryContent}
              </div>
            </section>

            <section className="relative">
              <div
                className={`h-full transition-all duration-500 ease-out ${showSecondaryContent ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
              >
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
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
