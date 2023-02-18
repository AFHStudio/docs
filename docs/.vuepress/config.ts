import { defaultTheme } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';
import { contributors } from '@kidonng/vuepress-plugin-contributors'
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
    contributors({
      docsRepo: 'afhstudio/docs',
      docsBranch: 'main',
      docsDir: 'docs',
      label: 'Contributors',
      api: 'https://api.xuann.wang/api/github-file-contributors'
    })
  ]
}
