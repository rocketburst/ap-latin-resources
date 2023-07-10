import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Callout from "./components/Callout";

const config: DocsThemeConfig = {
  logo: <span>AP Latin Resources</span>,
  project: {
    link: "https://github.com/rocketburst/ap-latin-resources",
  },
  docsRepositoryBase: "https://github.com/rocketburst/ap-latin-resources",
  footer: {
    text: "© 2023 AP Latin Resources",
  },
  primaryHue: {
    light: 275,
    dark: 119,
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – AP Latin Resources",
      };
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://ap-latin-resources.vercel.app/" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || "AP Latin Resources"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "The ultimate resource hub to pass the AP Latin Exam"
          }
        />
      </>
    );
  },
  components: {
    Callout: Callout,
  },
};

export default config;
