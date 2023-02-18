import { defaultTheme } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';
export default {
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
