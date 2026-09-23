// Maps a company name (as used verbatim in both dictionaries) to its logo
// metadata. Drop a real logo file into public/logos/<slug>.{svg,png,webp,jpg}
// and CompanyLogo will pick it up automatically — until then it falls back
// to a colored monogram badge using `abbr`.

export type CompanyLogoMeta = {
  slug: string;
  abbr: string;
  color: string;
};

const companies: Record<string, CompanyLogoMeta> = {
  "InsulaLabs (iGaming)": {
    slug: "insulalabs",
    abbr: "IL",
    color: "#7C5CFC",
  },
  "Starladder (eSport)": {
    slug: "starladder",
    abbr: "SL",
    color: "#FF7A1A",
  },
  "Webuants Pro": {
    slug: "webuants-pro",
    abbr: "WP",
    color: "#2FA36B",
  },
  "ISWD studio": {
    slug: "iswd-studio",
    abbr: "ISWD",
    color: "#2E8FD6",
  },
  "At-home studio": {
    slug: "at-home-studio",
    abbr: "AH",
    color: "#D6A02E",
  },
  "HTML Academy": {
    slug: "html-academy",
    abbr: "HA",
    color: "#E34F26",
  },
  "Webnauts Academy": {
    slug: "webnauts-academy",
    abbr: "WA",
    color: "#4C6FFF",
  },
};

export function getCompanyLogo(company: string): CompanyLogoMeta | undefined {
  return companies[company];
}
