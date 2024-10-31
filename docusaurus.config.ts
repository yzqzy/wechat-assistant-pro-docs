import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: '微信助手 Pro',
  tagline: '微信助手 Pro 可以帮助你轻松管理微信，让你更专注于工作。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'heora', // Usually your GitHub org/user name.
  projectName: 'wechat-assistant-pro-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  plugins: [
    'docusaurus-plugin-image-zoom' // can also just be 'image-zoom'
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          '微信助手,微信助手Pro,微信对话,微信对话助手,微信机器人,对话机器人,微信客服,微信运营,微信运营工具,微信营销,微信营销工具,微信推广,微信推广工具'
      },
      {
        name: 'description',
        content: '微信助手 Pro 可以帮助你轻松管理微信，让你更专注于工作。'
      }
    ],
    navbar: {
      title: '微信助手 Pro',
      logo: {
        alt: 'Wechat Assistant Pro Logo',
        src: 'img/logo.png'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档'
        },
        { to: '/blog', label: '版本更新记录', position: 'left' },
        { to: '/pricing', label: '会员价格', position: 'left' },
        {
          href: 'https://github.com/yzqzy',
          label: 'GitHub',
          position: 'right'
        },
        {
          href: 'https://t.me/+doFqJLyVjkZmMDBl',
          label: 'Telegram 群组',
          position: 'right'
        },
        {
          href: 'https://yzqzy.github.io/wechat-assistant/',
          label: '免费开源版本',
          position: 'right'
        }
      ]
    },

    zoom: {
      selector: '.markdown > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#
        margin: 120
      }
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
}

export default config
