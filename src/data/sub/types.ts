export interface SubServiceSection {
  heading: string;
  content?: string;
  bullets?: string[];
}

export interface SubServiceContent {
  slug: string;
  parentSlug: string;
  title: string;
  intro: string;
  sections: SubServiceSection[];
}
