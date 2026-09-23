import { getCompanyLink } from "@/lib/companyLinks";

export function CompanyLink({
  company,
  className,
}: {
  company: string;
  className?: string;
}) {
  const url = getCompanyLink(company);

  if (!url) {
    return <p className={className}>{company}</p>;
  }

  return (
    <a className={className} href={url} target="_blank" rel="noreferrer">
      {company}
    </a>
  );
}
