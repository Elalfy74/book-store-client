import type { Locale } from "@/i18n.config";
import { ServerStore } from "./create-server-store";

export const localeStore = new ServerStore<Locale>("en");
