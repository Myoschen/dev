// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Myos',
  tagline: '這是我個人的 Docs 及 Blog。',
  url: 'https://willy14620.github.io',
  baseUrl: '/dev/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'willy14620', // Usually your GitHub org/user name.
  projectName: 'dev', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/willy14620/dev/tree/gh-pages',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/willy14620/dev/tree/gh-pages',
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
        title: 'Myos',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [ // navbar items
          {
            type: 'doc', 
            docId: 'about', // first page when you enter the docs
            position: 'left', // position
            label: 'Docs', // display name
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/willy14620',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://twitter.com/willy14620',
            label: 'Twitter',
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
              // {
              //   label: 'React',
              //   to: '/docs/react',
              // },
              // {
              //   label: 'Tailwind CSS',
              //   to: '/docs/tailwind-css',
              // },
              {
                label: 'Webpack',
                to: '/docs/webpack/webpack-getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/18520940/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/users/584313486901903372',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/willy14620',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/willy14620',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} willy14620. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
