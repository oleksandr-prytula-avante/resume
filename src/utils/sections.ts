export const enum ESectionId {
  About = "about",
  Expirience = "expirience",
  Education = "education",
}

export type SectionHash = `#${ESectionId}`;

export function toSectionHash(sectionId: ESectionId): SectionHash {
  return `#${sectionId}` as SectionHash;
}
