import type { Metadata } from "next";
import { getDictionary, defaultLocale } from "@/dictionaries";
import { RootRedirect } from "@/components/RootRedirect/RootRedirect";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: `${dict.profile.name} — ${dict.profile.role}`,
  description: dict.profile.lede,
};

export default function RootPage() {
  return <RootRedirect />;
}
