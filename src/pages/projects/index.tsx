import "./index.scss";

import { Transition } from "@headlessui/react";
import { Button } from "ducduchy-react-components";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScroll } from "react-use";
import {
  funProjects,
  professionalProjects,
  ProjectProps,
} from "../../data/project";
import { PageLayout } from "../../views/PageLayout";

const ProjectCard = ({ projectInfo }: { projectInfo: ProjectProps }) => {
  return <div>{projectInfo.title}</div>;
};

export default function ProjectPage() {
  const { t } = useTranslation();

  const pageLayoutRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLElement | null>(null);
  const { y } = useScroll(scrollRef);

  return (
    <PageLayout
      pageTitle={t("pages.projects.seo-title")}
      pageDescription={t("pages.projects.seo-description")}
      pageClassName="project-page"
    >
      <section>
        <h1 className="page-title">{t("pages.projects.title-professional")}</h1>
        <ul className="project-list">
          {professionalProjects.map((projectInfo) => (
            <li key={projectInfo.title}>
              <ProjectCard projectInfo={projectInfo} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h1 className="page-title">{t("pages.projects.title-fun")}</h1>
        <ul className="project-list">
          {funProjects.map((projectInfo) => (
            <li key={projectInfo.title}>
              <ProjectCard projectInfo={projectInfo} />
            </li>
          ))}
        </ul>
      </section>

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
