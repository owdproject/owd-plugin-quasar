import { App } from 'vue'
import { Quasar } from 'quasar'

import 'quasar/src/css/index.sass'

export default function(app: App) {
  app.use(Quasar, app.config.globalProperties.$owd.quasar)
}