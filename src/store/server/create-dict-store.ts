import { getDictionary } from "@/lib/dictionary";
import { ServerStore } from "./create-server-store";

type Dictionary = ReturnType<typeof getDictionary>;

// keys of dictionaries represents pages names
type PagesKeys = keyof Dictionary;

// the actual translations of pages based on the page name
export type PageDictType<T extends PagesKeys> = Awaited<ReturnType<Dictionary[T]>>;

export class DictionaryStore<T extends PagesKeys> extends ServerStore<PageDictType<T>> {
  constructor() {
    super({} as PageDictType<T>);
  }
}
