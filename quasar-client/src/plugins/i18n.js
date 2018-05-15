import VueI18n from 'vue-i18n'
import messages from 'src/i18n'
import { getLocale } from './helpers'

export default ({ app, Vue }) => {
  Vue.use(VueI18n)

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: getLocale(),
    fallbackLocale: 'en',
    messages
  })
}
