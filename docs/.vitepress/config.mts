import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Intro to Programming",
  description: "A Practical Introduction",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Chapters',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Foundations', link: '/foundations' },
        ]
      }

    ],

    sidebar: [
      
      {
        text: 'Contents',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Foundations: programming in Psychological science', link: '/foundations' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gonzalezgarcia/programmingCogNeuro_book' }
    ],
    footer: {
      message: 'Released under a CC BY-SA 4.0 License',
      copyright: 'Carlos González García - 2025'
    }
  }
})

