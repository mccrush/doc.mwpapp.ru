import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MWP - Руководство",
  description: "MWP - Руководство пользователя",
  outDir: '../docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Руководство', link: '/doc' },
      { text: 'Соглашение', link: '/eula' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Руководство',
        items: [
          { text: 'Введение', link: '/doc/vvedenie' },
          { text: 'Верхняя панель навигации', link: '/doc/panel' },
          { text: 'Pro ', link: '/doc/pro' },
          { text: 'Работа с проектами', link: '/doc/projects' },
          { text: 'Настройки аккаунта', link: '/doc/accaunt' },
          { text: 'Сброс и восстановление пароля', link: '/doc/password' }
        ]
      },
      {
        text: 'Соглашение',
        items: [
          { text: 'Общие положения', link: '/eula/obshee' },
          { text: 'Аккаунт и данные пользователя', link: '/eula/accaunt' },
          { text: 'Условия и порядок оплаты', link: '/eula/uslovia' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mccrush/doc.mwpapp.ru' }
    ]
  }
})
