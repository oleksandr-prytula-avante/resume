import { Fragment, useState } from "react";

import {
  EXPERIENCE_TIMELINE_ITEMS,
  type ExperienceTimelineItem,
} from "../constants/experienceTimeline";
import { useI18n } from "../hooks/useI18n";
import { ELocale, ETranslationKey } from "../i18n/types";

type RowIconProps = {
  className?: string;
};

type YearMonth = {
  year: number;
  month: number;
};

type ExperienceTextKeys = {
  companyName: ETranslationKey;
  jobTitle: ETranslationKey;
  location: ETranslationKey;
  description: ETranslationKey;
};

function getExperienceTextKeys(itemId: string): ExperienceTextKeys {
  switch (itemId) {
    case "omnora":
      return {
        companyName: ETranslationKey.ExperienceOmnoraCompanyName,
        jobTitle: ETranslationKey.ExperienceOmnoraJobTitle,
        location: ETranslationKey.ExperienceOmnoraLocation,
        description: ETranslationKey.ExperienceOmnoraDescription,
      };
    case "digitalsuits":
      return {
        companyName: ETranslationKey.ExperienceDigitalsuitsCompanyName,
        jobTitle: ETranslationKey.ExperienceDigitalsuitsJobTitle,
        location: ETranslationKey.ExperienceDigitalsuitsLocation,
        description: ETranslationKey.ExperienceDigitalsuitsDescription,
      };
    case "code-and-care":
      return {
        companyName: ETranslationKey.ExperienceCodeAndCareCompanyName,
        jobTitle: ETranslationKey.ExperienceCodeAndCareJobTitle,
        location: ETranslationKey.ExperienceCodeAndCareLocation,
        description: ETranslationKey.ExperienceCodeAndCareDescription,
      };
    case "lanars":
      return {
        companyName: ETranslationKey.ExperienceLanarsCompanyName,
        jobTitle: ETranslationKey.ExperienceLanarsJobTitle,
        location: ETranslationKey.ExperienceLanarsLocation,
        description: ETranslationKey.ExperienceLanarsDescription,
      };
    default:
      return {
        companyName: ETranslationKey.ExperienceOmnoraCompanyName,
        jobTitle: ETranslationKey.ExperienceOmnoraJobTitle,
        location: ETranslationKey.ExperienceOmnoraLocation,
        description: ETranslationKey.ExperienceOmnoraDescription,
      };
  }
}

function getDateLocale(locale: ELocale): string {
  switch (locale) {
    case ELocale.Ru:
      return "ru";
    case ELocale.De:
      return "de";
    case ELocale.Sp:
      return "es";
    default:
      return "en";
  }
}

function parseYearMonth(value: string): YearMonth {
  const [yearPart, monthPart] = value.split("-");
  const year = Number(yearPart);
  const month = Number(monthPart);

  if (!Number.isInteger(year) || !Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error(`Invalid date format: ${value}. Expected YYYY-MM.`);
  }

  return { year, month };
}

function formatMonthYear(value: YearMonth, locale: string): string {
  const date = new Date(value.year, value.month - 1, 1);
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatDuration(totalMonths: number): string {
  if (totalMonths <= 0) {
    return "0 mos";
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  }

  return parts.join(" ");
}

function buildPeriodLabel(
  startDate: string,
  endDate: string | null,
  presentLabel: string,
  locale: string,
): { dateRange: string; duration: string } {
  const parsedStart = parseYearMonth(startDate);

  let parsedEnd: YearMonth;

  if (endDate === null) {
    const now = new Date();
    parsedEnd = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
    };
  } else {
    parsedEnd = parseYearMonth(endDate);
  }

  const monthDiff =
    (parsedEnd.year - parsedStart.year) * 12 +
    (parsedEnd.month - parsedStart.month) +
    1;

  const safeMonthDiff = Math.max(monthDiff, 0);
  const startLabel = formatMonthYear(parsedStart, locale);
  const endLabel = endDate === null ? presentLabel : formatMonthYear(parsedEnd, locale);

  return {
    dateRange: `${startLabel} - ${endLabel}`,
    duration: formatDuration(safeMonthDiff),
  };
}

function PipeSeparatedText({
  value,
  className,
  separatorClassName,
}: {
  value: string;
  className?: string;
  separatorClassName?: string;
}) {
  const parts = value
    .split("|")
    .map(function (part) {
      return part.trim();
    })
    .filter(function (part) {
      return part.length > 0;
    });

  return (
    <span className={className}>
      {parts.map(function (part, index) {
        return (
          <Fragment key={`${part}-${index}`}>
            {index > 0 ? (
              <span className={separatorClassName ?? "text-white/60"}>|</span>
            ) : null}
            <span>{part}</span>
          </Fragment>
        );
      })}
    </span>
  );
}

function CompanyIcon({ className }: RowIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 20h18M5 20V9l7-4 7 4v11M9 20v-5h6v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function JobTitleIcon({ className }: RowIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect
        x="3"
        y="6"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 6V4h6v2M3 12h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon({ className }: RowIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ExpandIcon({ className }: RowIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ExperienceItemProps = {
  item: ExperienceTimelineItem;
  isExpanded: boolean;
  isLast: boolean;
  onToggle: () => void;
};

function ExperienceItem({
  item,
  isExpanded,
  isLast,
  onToggle,
}: ExperienceItemProps) {
  const i18n = useI18n();
  const textKeys = getExperienceTextKeys(item.id);
  const companyName = i18n.t(textKeys.companyName);
  const descriptionId = `${item.id}-description`;
  const periodLabel = buildPeriodLabel(
    item.startDate,
    item.endDate,
    i18n.t(ETranslationKey.ExperiencePresent),
    getDateLocale(i18n.locale),
  );
  const locationText = i18n.t(textKeys.location);

  return (
    <li className="relative h-[22.5%] pl-32">
      {!isLast ? (
        <span className="pointer-events-none absolute left-[2.625rem] top-[5.25rem] h-[calc(100%-2.5rem)] w-[2px] bg-[color:var(--color-accent)]/70" />
      ) : null}

      <a
        href={item.companyUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${companyName} website`}
        className="absolute left-0 top-0 z-10 flex h-[5.25rem] w-[5.25rem] cursor-pointer items-center justify-center rounded-full border-2 border-[color:var(--color-accent)] bg-white"
      >
        <img
          src={item.companyLogoSrc}
          alt={`${companyName} logo`}
          className={`${item.id === "digitalsuits" ? "w-1/2" : "h-12 w-12"} object-contain`}
          loading="lazy"
        />
      </a>

      <div className="space-y-2 pb-8 text-sm text-white/95">
        <div className="flex items-center gap-2">
          <CompanyIcon className="h-5 w-5 shrink-0 text-white" />
          <a
            href={item.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="truncate text-[1.09375rem] uppercase transition-colors duration-200 ease-out hover:text-[color:var(--color-accent)]"
          >
            <PipeSeparatedText value={companyName} className="inline-flex items-center gap-2" />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <JobTitleIcon className="h-5 w-5 shrink-0 text-white" />
          <span>{i18n.t(textKeys.jobTitle)}</span>
          <span className="text-white/60">|</span>
          <span>{periodLabel.dateRange}</span>
          <span className="text-white/60">|</span>
          <span>{periodLabel.duration}</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <LocationIcon className="h-5 w-5 shrink-0 text-white" />
            <PipeSeparatedText
              value={locationText}
              className="inline-flex items-center gap-2 truncate"
            />
          </div>

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isExpanded}
            aria-controls={descriptionId}
            className={`inline-flex w-[8.5rem] shrink-0 cursor-pointer items-center justify-between gap-2 px-1 py-1 text-xs uppercase tracking-wide transition-colors duration-200 ease-out ${
              isExpanded
                ? "mr-[5%] text-[color:var(--color-accent)]"
                : "mr-[5%] text-white hover:text-[color:var(--color-accent)]"
            }`}
          >
            <span className="text-left">
              {isExpanded
                ? i18n.t(ETranslationKey.ExperienceHideDetails)
                : i18n.t(ETranslationKey.ExperienceExpandDetails)}
            </span>
            <ExpandIcon
              className={`h-5 w-5 transition-transform duration-200 ease-out ${isExpanded ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        </div>

        {isExpanded ? (
          <p id={descriptionId} className="pt-1 text-sm leading-relaxed text-white/90">
            {i18n.t(textKeys.description)}
          </p>
        ) : null}
      </div>
    </li>
  );
}

export function Experience() {
  const [expandedItemId, setExpandedItemId] = useState<string | null>(
    EXPERIENCE_TIMELINE_ITEMS[0]?.id ?? null,
  );

  return (
    <article className="h-full overflow-y-auto pr-2 text-white">
      <ul className="h-full space-y-2 px-1 py-2">
        {EXPERIENCE_TIMELINE_ITEMS.map(function (item, index) {
          const isExpanded = expandedItemId === item.id;

          return (
            <ExperienceItem
              key={item.id}
              item={item}
              isExpanded={isExpanded}
              isLast={index === EXPERIENCE_TIMELINE_ITEMS.length - 1}
              onToggle={function () {
                setExpandedItemId(function (currentValue) {
                  return currentValue === item.id ? null : item.id;
                });
              }}
            />
          );
        })}
      </ul>
    </article>
  );
}
