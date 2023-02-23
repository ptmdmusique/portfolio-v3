import { defaultNS, resources } from "../loaders/i18n";

// react-i18next versions higher than 11.11.0
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources["en"];
  }
}
