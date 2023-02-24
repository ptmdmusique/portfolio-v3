import { resources } from "../loaders/i18n";
import { AllNestedPaths } from "../utils/types";

export type I18NMap = typeof resources["en"];

export type SupportedLanguage = keyof typeof resources;
export const supportedLanguages = [
  "en",
  "vi",
] as const satisfies readonly SupportedLanguage[];

export type CommonI18NMap = I18NMap["common"];
export type CommonI18NKey = AllNestedPaths<CommonI18NMap>;
