import { useEffect, useMemo, useState } from "react";

import { ESectionId, toSectionHash } from "../utils/sections";
import type { SectionHash } from "../utils/sections";

const VALID_HASHES = [
  toSectionHash(ESectionId.About),
  toSectionHash(ESectionId.Expirience),
  toSectionHash(ESectionId.Education),
];

function isSectionHash(value: string): value is SectionHash {
  return (VALID_HASHES as readonly string[]).includes(value);
}

function getCurrentHash(): string {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location.hash;
}

export function useActiveSectionHash(
  defaultHash: SectionHash = toSectionHash(ESectionId.About),
) {
  const [hash, setHash] = useState<SectionHash>(function () {
    const currentHash = getCurrentHash();
    return isSectionHash(currentHash) ? currentHash : defaultHash;
  });

  useEffect(
    function () {
      function onHashChange() {
        const currentHash = getCurrentHash();

        if (isSectionHash(currentHash)) {
          setHash(currentHash);
          return;
        }

        try {
          const url = `${window.location.pathname}${window.location.search}${defaultHash}`;

          window.history.replaceState(null, "", url);
          setHash(defaultHash);
        } catch {
          setHash(defaultHash);
        }
      }

      const currentHash = getCurrentHash();

      if (!isSectionHash(currentHash)) {
        try {
          const url = `${window.location.pathname}${window.location.search}${defaultHash}`;

          window.history.replaceState(null, "", url);
        } catch {
          // ignore
        }
      }

      window.addEventListener("hashchange", onHashChange);

      return function () {
        window.removeEventListener("hashchange", onHashChange);
      };
    },
    [defaultHash],
  );

  const activeHash = useMemo<SectionHash>(
    function () {
      return hash;
    },
    [hash],
  );

  return { activeHash, validHashes: VALID_HASHES };
}
