import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search';
export default {
  lang: 'en-US',
  title: 'Docs',
  description: 'Welcome to the AFHStudio Docs!',
  head: [['link', { rel: 'icon', href: 'favicon.png' }]],
  theme: defaultTheme({
    logo: '/afhlogo.png',
    navbar: [
        {
          text: 'Homepage Revamped',
          children: ['/guides/hr/theme.md'],
        },
        {
          text: 'Deck Docs',
              children: ['/guides/deck/deckgames.md', '/guides/deck/README.md'],
        },
      ],
  }),
  plugins: [
    searchPlugin({
      maxSuggestions: 15,
      hotKeys: ['s', '/'],
      locales: {
        '/': {
          placeholder: 'Search',
        }
      }
    }),
  ],
};

