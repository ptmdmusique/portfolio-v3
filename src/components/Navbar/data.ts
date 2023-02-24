import { IconProps } from "ducduchy-react-components";
import { Route } from "nextjs-routes";
import { CommonI18NKey } from "../../data";

type RoutePath = Route["pathname"];

export const routeInfoMap = {
  "/": {
    iconName: "heart",
    label: "routes.home",
    key: "home",
  },
  "/resume": {
    iconName: "address-card",
    label: "routes.resume",
    key: "resume",
  },
  "/projects": {
    iconName: "lightbulb-on",
    label: "routes.projects",
    key: "projects",
  },
  "/contact": {
    iconName: "envelope",
    label: "routes.contact",
    key: "contact",
  },
} satisfies Record<
  RoutePath,
  {
    iconName: IconProps["icon"][1];
    label: CommonI18NKey;
    key: string;
  }
>;

export const routePathList = Object.keys(routeInfoMap) as RoutePath[];
