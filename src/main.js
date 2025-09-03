import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store"
import { createRouter, createWebHistory } from "vue-router";
import { createHead } from '@unhead/vue'
import ErrorPage from "@/Pages/ErrorPage.vue";
import FaqPage from "@/Pages/FaqPage.vue";
import HomePage from "@/Pages/HomePage.vue";

import './index.scss'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
      return { top: 0 }
    },
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/error', name: 'error', component: ErrorPage },
        { path: '/faq', name: 'faq', component: FaqPage },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: ErrorPage
        }
    ]
})

const head = createHead()

const app = createApp(App)
app.use(router)
app.use(store)
app.use(head)
app.mount('#app')
