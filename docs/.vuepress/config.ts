import { defaultTheme } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';
export default {
  theme: defaultTheme({
    logo: '/docslogo.png',
    navbar: [
        {
          text: 'Homepage Revamped',
          children: ['/group/foo.md', '/group/bar.md'],
        },
        {
          text: 'Unofficial Steam Deck Guide',
              children: ['/guides/deck/deckgames.md', '/group/sub/bar.md'],
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
