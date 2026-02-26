import { useMemo } from "react";

import { Tooltip } from "./Tooltip";
import { GmailIcon } from "./icons/GmailIcon";
import { LeetCodeIcon } from "./icons/LeetCodeIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { useI18n } from "../hooks/useI18n";
import { ETranslationKey } from "../i18n/types";

export function Links() {
  const i18n = useI18n();
  const navGithub = i18n.t(ETranslationKey.NavGithub);
  const navLinkedIn = i18n.t(ETranslationKey.NavLinkedIn);
  const navLeetCode = i18n.t(ETranslationKey.NavLeetCode);
  const navEmail = i18n.t(ETranslationKey.NavEmail);

  const LINKS = useMemo(
    function () {
      return [
        {
          component: GithubIcon,
          href: "https://github.com/oleksandr-prytula-avante",
          text: navGithub,
        },
        {
          component: LinkedInIcon,
          href: "https://www.linkedin.com/in/oleksandr-prytula-avante",
          text: navLinkedIn,
        },
        {
          component: LeetCodeIcon,
          href: "https://leetcode.com/u/oleksandr-prytula-avante/",
          text: navLeetCode,
        },
        {
          component: GmailIcon,
          href: "mailto:oleksandr.prytula.avante@gmail.com",
          text: navEmail,
        },
      ];
    },
    [navEmail, navGithub, navLeetCode, navLinkedIn],
  );

  return (
    <div className="absolute top-[32rem] flex flex-col gap-4">
      {LINKS.map(({ component: IconComponent, href, text }) => (
        <Tooltip key={href} content={text}>
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/4 bg-white/2 transition-colors duration-200 ease-out hover:border-[color:var(--color-accent)] hover:bg-white/8"
            href={href}
            aria-label={text}
            target="_blank"
            rel="noreferrer"
          >
            <IconComponent className="h-6 w-6" />
          </a>
        </Tooltip>
      ))}
    </div>
  );
}
