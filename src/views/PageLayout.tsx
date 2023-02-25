import React from "react";
import cx from "classnames";
import Head from "next/head";

interface PageLayoutProps {
  children: React.ReactNode;
  pageClassName?: string;

  pageTitle: string;
  pageDescription?: string;
}

export const PageLayout = ({
  children,
  pageClassName,
  pageTitle,
  pageDescription,
}: PageLayoutProps) => {
  return (
    <div className={cx("page-layout", pageClassName)}>
      <Head>
        <title>{pageTitle}</title>

        <meta property="og:title" content={pageTitle} />
        {pageDescription && (
          <meta property="og:description" content={pageDescription} />
        )}
      </Head>

      {children}
    </div>
  );
};
