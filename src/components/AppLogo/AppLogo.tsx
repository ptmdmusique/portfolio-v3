import "./AppLogo.scss";

import Image from "next/image";

interface AppLogoProps {
  showText?: boolean;
}

export const AppLogo = ({ showText }: AppLogoProps) => {
  return (
    <div className="app-logo">
      <Image
        className="app-logo__logo"
        src="/images/logo-min.png"
        alt="Logo"
        width="64"
        height="64"
      />

      {showText && <h1 className="app-logo__title">Duc Duchy</h1>}
    </div>
  );
};
