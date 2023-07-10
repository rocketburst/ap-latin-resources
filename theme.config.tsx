import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>AP Latin Resources</span>,
  project: {
    link: "https://github.com/rocketburst/ap-latin-resources",
  },
  docsRepositoryBase: "https://github.com/rocketburst/ap-latin-resources",
  footer: {
    text: "Nextra Docs Template",
  },
  primaryHue: {
    light: 275,
    dark: 119,
  },
};

export default config;
