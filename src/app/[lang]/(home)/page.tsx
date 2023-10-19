import type { PageBaseProps } from "@/types";

import { getDictionary } from "@/lib/dictionary";
import { homeDicStore } from "@/store/server/dictionaries.store";

import { Hero } from "./components/hero";

export default async function Home({ params: { lang } }: PageBaseProps) {
  homeDicStore.data = await getDictionary(lang).home();

  return (
    <main>
      <Hero />
    </main>
  );
}
