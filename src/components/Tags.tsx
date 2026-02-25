import { SKILL_TAGS } from "../constants/skillTags";

type TagsProps = {
  hoveredSkill: string | null;
  onSkillEnter: (skill: string) => void;
  onSkillLeave: () => void;
};

function onTagClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
}

export function Tags({ hoveredSkill, onSkillEnter, onSkillLeave }: TagsProps) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {SKILL_TAGS.map(function ({ label, href }) {
        const isActive = hoveredSkill === label;

        return (
          <li key={label}>
            <a
              className={
                isActive
                  ? "rounded-full border border-[color:var(--color-accent)] px-3 py-1 text-[13px] uppercase text-[color:var(--color-accent)] transition-colors duration-200 ease-out"
                  : "rounded-full border border-white/50 px-3 py-1 text-[13px] uppercase text-white transition-colors duration-200 ease-out hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
              }
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={onTagClick}
              onMouseEnter={function () {
                onSkillEnter(label);
              }}
              onMouseLeave={onSkillLeave}
            >
              #{label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}