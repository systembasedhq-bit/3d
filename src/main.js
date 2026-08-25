import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18nPlugin from '@/plugins/i18n.plugin.js'
import posthog from 'posthog-js'

// REMOVE: this is only for https://mir.julien-dacosta.dev/
posthog.init('phc_yKA6NGEg2pMqs6VLieHz2GHcFdYUscmAdaboyLWnoonJ', {
  api_host: 'https://eu.i.posthog.com',
  person_profiles: 'identified_only',
  defaults: '2026-05-30',
  cross_subdomain_cookie: false,
})

createApp(App).use(i18nPlugin).mount('#app')
