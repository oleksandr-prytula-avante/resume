import { Children, useMemo } from "react";
import type { ReactNode } from "react";

import { SECTION_NAV_ITEMS } from "../constants/sectionNavigation";
import { useActiveSectionHash } from "../hooks/useActiveSectionHash";
import { ESectionId, toSectionHash } from "../utils/sections";

type SectionCarouselProps = {
  children: ReactNode;
};

export function SectionCarousel({ children }: SectionCarouselProps) {
  const { activeHash } = useActiveSectionHash(toSectionHash(ESectionId.About));

  const slideChildren = useMemo(
    function () {
      return Children.toArray(children);
    },
    [children],
  );

  const slides = useMemo(
    function () {
      return SECTION_NAV_ITEMS.map(function ({ href }, index) {
        return {
          href,
          children: slideChildren[index] ?? null,
        };
      });
    },
    [slideChildren],
  );

  const activeIndex = useMemo(
    function () {
      const index = slides.findIndex(function ({ href }) {
        return href === activeHash;
      });

      return index === -1 ? 0 : index;
    },
    [activeHash, slides],
  );

  return (
    <div className="flex h-full flex-col px-10 pr-20">
      <div className="relative h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map(function ({ href, children }) {
            return (
              <section key={href} className="h-full w-full shrink-0 p-8">
                {children}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}