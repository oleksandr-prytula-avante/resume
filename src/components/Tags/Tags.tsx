import type { MouseEvent } from "react";

import { SKILL_TAGS } from "../../constants/skillTags";

import "./Tags.css";

export const TAG_REVEAL_STAGGER_MS = 140;
export const TAG_REVEAL_DURATION_MS = 640;

type TagsProps = {
  hoveredSkill: string | null;
  onSkillEnter: (skill: string) => void;
  onSkillLeave: () => void;
};
export function Tags({ hoveredSkill, onSkillEnter, onSkillLeave }: TagsProps) {
  function onTagClick(label: string) {
    return function (event: MouseEvent<HTMLAnchorElement>) {
      event.preventDefault();
      onSkillEnter(label);
    };
  }

  function onTagMouseEnter(label: string) {
    return function (event: MouseEvent<HTMLAnchorElement>) {
      event.preventDefault();
      onSkillEnter(label);
    };
  }

  function onTagMouseLeave(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    onSkillLeave();
  }

  return (
    <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-4">
      {SKILL_TAGS.map(function ({ label, href }, index) {
        const isActive = hoveredSkill === label;

        return (
          <li
            key={label}
            className="tag-reveal"
            style={{
              animationDelay: `${index * TAG_REVEAL_STAGGER_MS}ms`,
              animationDuration: `${TAG_REVEAL_DURATION_MS}ms`,
            }}
          >
            <a
              className={
                isActive
                  ? "rounded-full border border-[color:var(--color-accent)] px-4 py-1.5 text-[14px] uppercase text-[color:var(--color-accent)] transition-colors duration-200 ease-out"
                  : "rounded-full border border-white/50 px-4 py-1.5 text-[14px] uppercase text-white transition-colors duration-200 ease-out hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
              }
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={onTagClick(label)}
              onMouseEnter={onTagMouseEnter(label)}
              onMouseLeave={onTagMouseLeave}
            >
              #{label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
