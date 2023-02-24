import "./Navbar.scss";

import { Icon } from "ducduchy-react-components";
import { routeInfoMap, routePathList } from "./data";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import cx from "classnames";
import { useRouter } from "next/router";

const MobileNavContainer = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <ul className="nav-container nav-container__mobile">
      {routePathList.map((routePath) => {
        const { icon, key, label } = routeInfoMap[routePath];

        return (
          <li
            key={key}
            className={cx("nav-item", `nav-item__${key}`, {
              "nav-item--active": router.pathname === routePath,
            })}
          >
            <Link href={routePath} className="nav-item__link">
              <Icon icon={icon} />
              <p>{t(label)}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const DesktopNavContainer = () => {
  return (
    <div className="nav-container nav-container__desktop">
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
