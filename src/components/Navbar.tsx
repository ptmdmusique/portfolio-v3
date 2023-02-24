import { Icon, IconProps } from "ducduchy-react-components";
import { Route } from "nextjs-routes";
import { CommonI18NKey } from "../data";
import "./Navbar.scss";

const routeInfoMap = {
  "/": {
    icon: ["far", "home"],
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
  Route["pathname"],
  {
    icon: IconProps["icon"];
    label: CommonI18NKey;
    key: string;
  }
>;

const MobileNavContainer = () => {
  return (
    <div className="mobile-nav-container">
      {/* <Icon icon={["fas", "bars"]} /> */}
    </div>
  );
};

const DesktopNavContainer = () => {
  return (
    <div className="desktop-nav-container">
      <Icon icon={["fab", "github"]} />
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav className="navbar">
      <MobileNavContainer />

      <DesktopNavContainer />
    </nav>
  );
};
