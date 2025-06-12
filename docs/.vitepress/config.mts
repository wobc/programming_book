import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Intro to Programming",
  description: "A Practical Introduction",
  base: '/programmingCogNeuro_book/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    siteTitle: "PsychProgramming",
    editLink: {
      pattern: 'https://github.com/gonzalezgarcia/programmingCogNeuro_book/edit/main/docs/:path'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      // {
      //   text: 'Chapters',
      //   items: [
      //     { text: 'Introduction', link: '/introduction' },
      //     { text: 'Foundations', link: '/foundations' },
      //   ]
      // }

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
    
   search: {
     provider: 'local'
   },
    footer: {
      message: 'Released under a CC BY-SA 4.0 License',
      copyright: 'Carlos González García - 2025'
    }
  }
})

