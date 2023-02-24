import "./AppLogo.scss";

import Image, { ImageProps } from "next/image";

interface AppLogoProps {
  showText?: boolean;
  unoptimized?: boolean;

  width?: ImageProps["width"];
  height?: ImageProps["height"];
}

export const AppLogo = ({
  showText,
  unoptimized,
  width = "64",
  height = "64",
}: AppLogoProps) => {
  return (
    <div className="app-logo">
      <Image
        className="app-logo__logo"
        src="/images/logo-min.png"
        alt="Logo"
        width={width}
        height={height}
        unoptimized={unoptimized}
      />

      {showText && <h1 className="app-logo__title">Duc Duchy</h1>}
    </div>
  );
};
