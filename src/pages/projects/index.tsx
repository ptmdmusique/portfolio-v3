import "./index.scss";

import { Transition } from "@headlessui/react";
import { Button, Icon, IconProps, Popover } from "ducduchy-react-components";
import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useScroll } from "react-use";
import {
  funProjects,
  professionalProjects,
  ProjectProps,
  techStackInfo,
} from "../../data/project";
import { PageLayout } from "../../views/PageLayout";
import cx from "classnames";

const FocusedCardContext = createContext<{
  focusedCardId: null | string;
  setFocusedCardId: (focusedCardId: string | null) => void;
}>({
  focusedCardId: null,
  setFocusedCardId: () => {},
});

interface ProjectCardProps {
  project: ProjectProps;
  doBlur: boolean;
  onFocused: (isFocused: boolean) => void;
  index: number;
}

const ProjectCard = ({
  project: { description, imgSrc, techstack, title, href },
  doBlur,
  onFocused,
  index,
}: ProjectCardProps) => {
  const { t } = useTranslation();
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    onFocused(isFocused);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <div
      className={cx("project-card", { "project-card--blur": doBlur })}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <ul
        className={cx("description-container", {
          "description-container--focused": isFocused,
        })}
      >
        <li className="title">{title}</li>

        {description.map((desc) => (
          <li key={desc}>{t(`pages.projects.description.${desc}`)}</li>
        ))}
      </ul>

      <Image
        alt={title}
        src={imgSrc}
        width={256}
        height={512}
        className={cx("project-image", { "project-image--focused": isFocused })}
      />

      <div className={cx("content", { "content--focused": isFocused })}>
        <h3 className="title">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              <p>{title}</p>
              <Icon
                icon={["far", "arrow-up-right-from-square"]}
                className="fa-fw"
              />
            </a>
          ) : (
            title
          )}
        </h3>

        <ul className="techstack-container">
          {techstack.map((tech) => {
            const { displayName, icon } = techStackInfo[tech];
            return (
              <li key={tech}>
                <Icon icon={icon as IconProps["icon"]} className="fa-fw" />
                {displayName}
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        icon={["far", "info-circle"]}
        className="more-info-cta"
        onFocus={() => !isFocused && setIsFocused(true)}
        onBlur={() => isFocused && setIsFocused(false)}
        onMouseOver={() => !isFocused && setIsFocused(true)}
        onMouseLeave={() => isFocused && setIsFocused(false)}
        borderType="plain"
      >
        <span className="sr-only">{t("common.moreInfo")}</span>
      </Button>
    </div>
  );
};

interface ProjectSectionProps {
  projectList: ProjectProps[];
  title: string;
}

const ProjectSection = ({ projectList, title }: ProjectSectionProps) => (
  <section>
    <h1 className="page-title">{title}</h1>

    <FocusedCardContext.Consumer>
      {({ focusedCardId, setFocusedCardId }) => (
        <ul className="project-list">
          {projectList.map((info, index) => {
            const cardTitle = info.title;
            return (
              <li className="card-container" key={cardTitle}>
                <ProjectCard
                  project={info}
                  doBlur={focusedCardId != null && focusedCardId !== cardTitle}
                  index={index}
                  onFocused={(isFocused) =>
                    setFocusedCardId(isFocused ? cardTitle : null)
                  }
                />
              </li>
            );
          })}
        </ul>
      )}
    </FocusedCardContext.Consumer>
  </section>
);

export default function ProjectPage() {
  const { t } = useTranslation();

  const [focusedCardId, setFocusedCardId] = useState<string | null>(null);

  const pageLayoutRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLElement | null>(null);
  const { y } = useScroll(scrollRef);

  return (
    <PageLayout
      pageTitle={t("pages.projects.seo-title")}
      pageDescription={t("pages.projects.seo-description")}
      pageClassName="project-page"
      ref={(ele) => {
        pageLayoutRef.current = ele;
        scrollRef.current = ele;
      }}
    >
      <FocusedCardContext.Provider value={{ focusedCardId, setFocusedCardId }}>
        <ProjectSection
          title={t("pages.projects.title-professional")}
          projectList={professionalProjects}
        />

        <ProjectSection
          title={t("pages.projects.title-fun")}
          projectList={funProjects}
        />
      </FocusedCardContext.Provider>

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
