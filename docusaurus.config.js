// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;


/** @type {import('@docusaurus/types').Config} */
const config = {
  
  title: 'react-multi-email',
  tagline: 'React component for inputting email addresses',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://hwonda.github.io',
  // Set the /<baseUrl>/ pathname under which your  site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/react-multi-email-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hwonda', // Usually your GitHub org/user name.
  projectName: 'react-multi-email-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // onlyIncludeVersions: ['1.0.16'],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/react-multi-email.png',
      navbar: {
        title: 'react-multi-email',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'left'
          },
          {
            type: 'localeDropdown',
            position: 'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docs',
          },
          {
            href: 'https://github.com/axisj/react-multi-email',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/axisj/react-multi-email',
        //       },
        //     ],
        //   },
        // ],
        copyright: 'Copyright © 2023 axisj Inc.',
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
