import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import en from './locales/en'
import ptBR from './locales/pt-BR'

const browserLang = navigator.language.toLowerCase()
const defaultLocale = browserLang.startsWith('pt') ? 'pt-BR' : 'en'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    'pt-BR': ptBR
  }
})

createApp(App)
  .use(i18n)
  .mount('#app')
