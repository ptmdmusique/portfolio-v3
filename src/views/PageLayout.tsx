import React, { forwardRef } from "react";
import cx from "classnames";
import Head from "next/head";

interface PageLayoutProps {
  children: React.ReactNode;
  pageClassName?: string;

  pageTitle: string;
  pageDescription?: string;

  /**
   * This className control the standard layout of the app
   *
   * Disable it to use custom layout
   */
  addAppContentClassName?: boolean;
}

export const PageLayout = forwardRef<HTMLElement, PageLayoutProps>(
  (
    {
      children,
      pageClassName,
      pageTitle,
      pageDescription,
      addAppContentClassName = true,
    },
    ref,
  ) => (
    <main
      ref={ref}
      className={cx(
        { "app-content": addAppContentClassName },
        "page-layout",
        pageClassName,
      )}
    >
      <Head>
        <title>{pageTitle}</title>

        <meta property="og:title" content={pageTitle} />
        {pageDescription && (
          <meta property="og:description" content={pageDescription} />
        )}

        <meta property="og:image" content="https://i.imgur.com/ipcYMd2.png" />
      </Head>

      {children}
    </main>
  ),
);

PageLayout.displayName = "PageLayout";
