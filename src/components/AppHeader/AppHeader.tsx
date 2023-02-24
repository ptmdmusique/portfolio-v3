import { Popover } from "ducduchy-react-components";
import { AppSettingContent } from "../AppSettingContent/AppSettingContent";
import "./AppHeader.scss";

export const AppHeader = () => {
  return (
    <div className="app-header">
      <div>logo</div>

      <Popover
        popoverOpenerProps={{
          icon: ["far", "ellipsis-v"],
          borderType: "plain",
          className: "app-header__popover-opener",
        }}
        popperProps={{ placement: "bottom-end" }}
        popoverPanelProps={{ className: "app-header__popover-panel" }}
      >
        <AppSettingContent />
      </Popover>
    </div>
  );
};
