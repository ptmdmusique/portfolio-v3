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
import { createRef, forwardRef, useEffect, useRef, useState } from "react";

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
const NavItem = forwardRef<HTMLLIElement, NavItemProps>(
  ({ iconName, isActive, itemKey, label, routePath }, ref) => {
    const { t } = useTranslation();

    return (
      <li
        ref={ref}
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
  },
);
NavItem.displayName = "NavItem";

const RoutePathList = ({ isLg }: { isLg: boolean }) => {
  const router = useRouter();
  const listItemRefList = useRef(
    Array.from({ length: routePathList.length }, () =>
      createRef<HTMLLIElement>(),
    ),
  );

  const [position, setPosition] = useState(0);

  useEffect(() => {
    // If isLg, use top position of nav item, else use left
    const activeItem =
      listItemRefList.current[routePathList.indexOf(router.pathname)]?.current;

    if (activeItem) {
      const position = isLg
        ? activeItem?.offsetTop ?? 0
        : activeItem?.offsetLeft ?? 0;

      setPosition(position);
    }
  }, [router.pathname, isLg]);

  return (
    <>
      {routePathList.map((routePath, index) => {
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
            ref={listItemRefList.current[index]}
          />
        );
      })}

      <div
        className="nav-indicator"
        style={isLg ? { right: 0, top: position } : { left: position, top: 0 }}
      />
    </>
  );
};

const MobileNavContainer = () => (
  <ul className="nav-container nav-container__mobile">
    <RoutePathList isLg={false} />
  </ul>
);

const DesktopNavContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="nav-container nav-container__desktop">
      <div className="logo-container">
        <AppLogo unoptimized />
      </div>

      <ul className="route-list-container">
        <RoutePathList isLg />
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
