import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search';
export default {
  lang: 'en-US',
  title: 'AFHStudio Docs',
  description: 'Welcome to the AFHStudio Docs!',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  theme: defaultTheme({
    logo: '/docslogo.png',
    navbar: [
        {
          text: 'Homepage Revamped',
          children: ['/guides/hr/theme.md'],
        },
        {
          text: 'Deck Docs',
              children: ['/guides/deck/deckgames.md'],
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
  ]
}
)
