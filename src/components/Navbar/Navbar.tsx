import "./Navbar.scss";

import { Icon, Popover } from "ducduchy-react-components";
import { routeInfoMap, routePathList } from "./data";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import cx from "classnames";
import { useRouter } from "next/router";
import { AppLogo } from "../AppLogo/AppLogo";
import { useMedia } from "react-use";
import { AppSettingContent } from "../AppSettingContent/AppSettingContent";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1920,
} as const;

interface NavItemProps {
  iconName: string;
  itemKey: string;
  label: typeof routeInfoMap[keyof typeof routeInfoMap]["label"];
  routePath: typeof routePathList[number];
  isActive: boolean;
}
const NavItem = ({
  iconName,
  isActive,
  itemKey,
  label,
  routePath,
}: NavItemProps) => {
  const { t } = useTranslation();

  return (
    <li
      className={cx("nav-item", `nav-item__${itemKey}`, {
        "nav-item--active": isActive,
      })}
    >
      <Link href={routePath} className="nav-item__link">
        <Icon icon={[isActive ? "fas" : "far", iconName]} />
        <p>{t(label)}</p>
      </Link>
    </li>
  );
};

const MobileNavContainer = () => {
  const router = useRouter();

  return (
    <ul className="nav-container nav-container__mobile">
      {routePathList.map((routePath) => {
        const { iconName, key, label } = routeInfoMap[routePath];
        const isActive = router.pathname === routePath;

        return (
          <NavItem
            key={key}
            itemKey={key}
            iconName={iconName}
            label={label}
            routePath={routePath}
            isActive={isActive}
          />
        );
      })}
    </ul>
  );
};

const DesktopNavContainer = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="nav-container nav-container__desktop">
      <div className="logo-container">
        <AppLogo unoptimized />
      </div>

      <ul className="route-list-container">
        {routePathList.map((routePath) => {
          const { iconName, key, label } = routeInfoMap[routePath];
          const isActive = router.pathname === routePath;

          return (
            <NavItem
              key={key}
              itemKey={key}
              iconName={iconName}
              label={label}
              routePath={routePath}
              isActive={isActive}
            />
          );
        })}
      </ul>

      <Popover
        popoverProps={{ className: "app-setting-popover" }}
        popperProps={{ placement: "right-start" }}
        popoverOpenerProps={{
          children: t("app-setting.title"),
          icon: ["fas", "cogs"],
          className: "nav-item nav-item__cta",
        }}
      >
        <AppSettingContent />
      </Popover>
    </div>
  );
};

export const Navbar = () => {
  const isLg = useMedia(`(min-width: ${breakpoints.lg}px)`, false);

  return (
    <nav className="navbar">
      {isLg ? <DesktopNavContainer /> : <MobileNavContainer />}
    </nav>
  );
};
