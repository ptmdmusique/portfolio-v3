import "./AppHeader.scss";

import { Popover } from "ducduchy-react-components";
import { AppSettingContent } from "../AppSettingContent/AppSettingContent";
import Image from "next/image";
import { AppLogo } from "../AppLogo/AppLogo";
import { useTranslation } from "react-i18next";

export const AppHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="app-header">
      <div className="logo-container">
        <AppLogo showText />
      </div>

      <Popover
        popoverOpenerProps={{
          icon: ["far", "ellipsis-v"],
          borderType: "plain",
          className: "app-header__popover-opener",
          children: <span className="sr-only">{t("app-setting.title")}</span>,
        }}
        popperProps={{ placement: "bottom-end" }}
        popoverPanelProps={{ className: "app-header__popover-panel" }}
      >
        <AppSettingContent />
      </Popover>
    </div>
  );
};
