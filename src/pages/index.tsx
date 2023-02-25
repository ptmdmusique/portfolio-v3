import "./index.scss";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CommonI18NKey } from "../data";
import { PageLayout } from "../views/PageLayout";
import cx from "classnames";

const jgSrcNameList = [
  // "Layer_0010_1",
  "Layer_0009_2",
  "Layer_0008_3",
  "Layer_0007_Lights",
  "Layer_0006_4",
  "Layer_0005_5",
  "Layer_0004_Lights",
  "Layer_0003_6",
  "Layer_0002_7",
  "Layer_0001_8",
  "Layer_0000_9",
] as const;

const aboutMeI18NKeyList: CommonI18NKey[] = [
  "pages.about.about-content.name",
  "pages.about.about-content.role",
  "pages.about.about-content.skills",
];

interface TypingTextProps {
  text: string;
}

// ! This is a hacky way to not make text shift to the left when it's being typed
const getNextSpan = (text: string, index: number, invisible = false) => (
  <span key={index} className={cx({ invisible })}>
    {text[index]}
  </span>
);

const getStartText = (text: string) => {
  const toReturn: ReactNode[] = [];
  for (let i = 0; i < text.length; i++) {
    toReturn.push(getNextSpan(text, i, true));
  }

  return toReturn;
};

const TypingText = ({ text }: TypingTextProps) => {
  const [currentText, setCurrentText] = useState(getStartText(text));

  useEffect(() => {
    setCurrentText(getStartText(text));

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setCurrentText((prevText) => {
          const newText = [...prevText];
          newText[i] = getNextSpan(text, i);
          i++;

          return newText;
        });
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{currentText}</span>;
};

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageLayout
      pageTitle={t("pages.about.seo-title")}
      pageDescription={t("pages.about.seo-description")}
      pageClassName="about-page"
    >
      <div className="background-container">
        <Image
          src="/images/background.png"
          alt="sky background"
          width="64"
          height="64"
          unoptimized
        />

        {jgSrcNameList.map((srcName, index) => (
          <Image
            key={srcName}
            src={`/images/jungle-bg/${srcName}.png`}
            alt={`jungle background ${index + 1}`}
            width="64"
            height="64"
            unoptimized
          />
        ))}

        <span className="credit">
          {`${t("pages.about.credit")} `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://edermunizz.itch.io/free-pixel-art-forest?download"
          >
            edermunizz
          </a>
          {", "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.pinterest.com/pin/684899055811456499/"
          >
            unknown
          </a>
        </span>
      </div>

      <div className="content-container">
        <div className="avatar-container">
          <div className="blur-subject" />

          <Image
            className="avatar"
            src="/images/ninja-run-big_withname.png"
            alt="avatar"
            width="256"
            height="256"
          />
        </div>

        <h1 className="page-title">{t("pages.about.title")}</h1>

        <ul className="about-content">
          {aboutMeI18NKeyList.map((i18nKey) => (
            <li key={i18nKey} className="about-content-item">
              <TypingText text={t(i18nKey)} />
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
