import type { InjectionKey } from "vue";

import type { LocaleName } from "@skylib/functions/es/types/locales";

export type ChangeLanguageAction = (language: LocaleName) => void;

export interface LanguagePickerItem {
  readonly caption: string;
  readonly flag: string;
  readonly lang: LocaleName;
}

export type LanguagePickerItems = readonly LanguagePickerItem[];

export const injectChangeLanguageAction: InjectionKey<ChangeLanguageAction> =
  Symbol("ChangeLanguageAction");

export const injectLanguagePickerItems: InjectionKey<LanguagePickerItems> =
  Symbol("LanguagePickerItems");
