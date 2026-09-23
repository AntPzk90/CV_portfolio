// Maps a company name (as used verbatim in both dictionaries) to its
// LinkedIn company page. Companies without a known page are omitted and
// simply render as plain text.

const companyLinks: Record<string, string> = {
  "InsulaLabs (iGaming)": "https://www.linkedin.com/company/insulalabs/",
  "Starladder (eSport)": "https://www.linkedin.com/company/starladder/",
  "Webuants Pro": "https://www.linkedin.com/company/webnauts-pro/",
  "Webnauts Academy": "https://www.linkedin.com/company/webnauts-pro/",
  "HTML Academy": "https://www.linkedin.com/company/htmlacademy/",
  "At-home studio": "https://www.linkedin.com/company/19037938/",
};

export function getCompanyLink(company: string): string | undefined {
  return companyLinks[company];
}
