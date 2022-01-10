// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const repoName = 'jetl'
const organizationName = 'simoneb'
const repoUrl = `https://github.com/${organizationName}/${repoName}`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: repoName,
  tagline: 'JavaScript data processing with asynchronous iterators',
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${repoName}/`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName,
  projectName: repoName,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${repoUrl}/tree/master/docs`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: [
          '../src/pipeline.ts',
          '../src/operations.ts',
          '../src/operators.ts',
          '../src/generators.ts',
          '../src/types.ts',
        ],
        tsconfig: '../tsconfig.json',
        watch: process.env.TYPEDOC_WATCH,
        readme: 'none',
      },
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: repoName,
        logo: {
          alt: `${repoName} logo`,
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            label: 'Docs',
          },
          {
            to: 'docs/api',
            label: 'API',
          },
          {
            href: repoUrl,
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
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'API',
                to: '/docs/api',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: repoUrl,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Simone Busoli.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
