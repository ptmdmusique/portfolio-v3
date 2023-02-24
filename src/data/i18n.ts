import { resources } from "../loaders/i18n";
import { AllNestedPaths } from "../utils/types";

export type I18NMap = typeof resources["en"];

export type CommonI18NMap = I18NMap["common"];
export type CommonI18NKey = AllNestedPaths<CommonI18NMap>;
