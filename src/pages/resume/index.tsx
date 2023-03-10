import "./index.scss";

import { Transition } from "@headlessui/react";
import { Button } from "ducduchy-react-components";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScroll } from "react-use";
import { workData } from "../../data/resume";
import { PageLayout } from "../../views/PageLayout";

export default function ResumePage() {
  const { t } = useTranslation();

  const pageLayoutRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLElement | null>(null);
  const { y } = useScroll(scrollRef);

  return (
    <PageLayout
      pageTitle={t("pages.resume.seo-title")}
      pageDescription={t("pages.resume.seo-description")}
      pageClassName="resume-page"
      ref={(ele) => {
        pageLayoutRef.current = ele;
        scrollRef.current = ele;
      }}
    >
      <h1 className="page-title">
        <a
          href="https://www.youtube.com/watch?v=kSNYTZXj_G8&ab_channel=1theK%28%EC%9B%90%EB%8D%94%EC%BC%80%EC%9D%B4%29"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("pages.resume.title")}
        </a>
      </h1>

      <ul className="content-container">
        {workData.map(({ date, description, title }, index) => (
          <li key={index} className="section">
            <div className="date">{date}</div>
            <h2 className="title">{title}</h2>

            <ul className="description-container">
              {Array.isArray(description) ? (
                description.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>{description}</li>
              )}
            </ul>
          </li>
        ))}
      </ul>

      <Transition
        show={y > 128}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="to-top-cta-container"
      >
        <Button
          icon={["fas", "triangle"]}
          className="to-top-cta"
          colorType="secondary"
          onClick={() =>
            pageLayoutRef.current?.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <span className="sr-only">{t("common.toTop")}</span>
        </Button>
      </Transition>
    </PageLayout>
  );
}
