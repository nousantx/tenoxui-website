// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TenoxUI Docs",
  tagline: "A CSS Framework with nearly 0 CSS file.",
  favicon: "img/favicon.ico",
  url: "https://tenoxui.web.app",
  baseUrl: "/",
  organizationName: "nousantx",
  projectName: "tenoxui-website",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml"
        },
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/nousantx/tenoxui-website/tree/main/"
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time ? undefined : defaultReadingTime({ content }),
          blogTitle: "TenoxUI blog!",
          blogDescription: "TenoxUI Blogs!",
          blogSidebarTitle: "All posts"
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/tenoxui_social_card.jpg",
      navbar: {
        title: "TenoxUI",
        logo: {
          alt: "TenoxUI Logo",
          src: "img/tenoxui.svg"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Docs"
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/nousantx/tenoxui",
            label: "GitHub",
            position: "right"
          },
          {
            href: "https://www.jsdelivr.com/package/npm/tenoxui",
            label: "JSDelivr",
            position: "right"
          }
        ]
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      docs: {
        sidebar: {
          hideable: true
        }
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Type and Property",
                to: "/docs/category/classes"
              },
              {
                label: "Function",
                to: "/docs/category/function"
              }
            ]
          },
          {
            title: "Projects",
            items: [
              {
                label: "TUI Components",
                href: "https://twitter.com/nousantx/tenoxui-component"
              },
              {
                label: "tnk7css",
                href: "https://twitter.com/nousantx/tnk7css"
              },
              {
                label: "React Lab",
                href: "https://github.com/nousantx/react-tui"
              },
              {
                label: "TenoxUI Website",
                href: "https://github.com/nousantx/tenoxui-website"
              }
            ]
          },
          {
            title: "Project Links",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/nousantx/tenoxui"
              },
              {
                label: "NPM",
                href: "https://www.npmjs.com/package/tenoxui"
              },
              {
                label: "JSDelivr",
                href: "https://www.jsdelivr.com/package/npm/tenoxui"
              }
            ]
          },
          {
            title: "About me",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/nousantx"
              },
              {
                label: "Instagram",
                href: "https://instagram.com/nousantx"
              },
              {
                label: "Twitter",
                href: "https://x.com/nousantx"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NOuSantx. Built with Docusaurus`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    })
};

export default config;
