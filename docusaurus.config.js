// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SunApps',
  tagline: 'Download something you want.',
  url: 'https://appdowns.cf',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Sunbangyan233',
  projectName: 'SunApps-site',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Sunbangyan233/SunApps-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Sunbangyan233/SunApps-site/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SunApps',
        logo: {
          alt: 'SunApps Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Sunbangyan233/SunApps-site/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'App下载',
                to: '/docs/index',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'bilibili',
                to: 'https://space.bilibili.com/599959906',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Sunbangyan233/SunApps-site',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sunbangyan. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
      },
    ],
  ],
}; //搜索插件
module.exports = config;
