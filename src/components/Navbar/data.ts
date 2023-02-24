import { IconProps } from "ducduchy-react-components";
import { Route } from "nextjs-routes";
import { CommonI18NKey } from "../../data";

type RoutePath = Route["pathname"];

export const routeInfoMap = {
  "/": {
    icon: ["far", "heart"],
    label: "routes.home",
    key: "home",
  },
  "/resume": {
    icon: ["far", "address-card"],
    label: "routes.resume",
    key: "resume",
  },
  "/projects": {
    icon: ["far", "lightbulb-on"],
    label: "routes.projects",
    key: "projects",
  },
  "/contact": {
    icon: ["far", "envelope"],
    label: "routes.contact",
    key: "contact",
  },
} satisfies Record<
  RoutePath,
  {
    icon: IconProps["icon"];
    label: CommonI18NKey;
    key: string;
  }
>;

export const routePathList = Object.keys(routeInfoMap) as RoutePath[];
