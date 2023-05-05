import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { installPrimeVue } from './primevue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(createPinia())
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 15
            }
        }
    }
});
app.use(createPinia())
app.use(PrimeVue, { ripple: true });
installPrimeVue(app);
app.mount('#app')
