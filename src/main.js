import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store"
import { createRouter, createWebHistory } from "vue-router";
import { createHead } from '@unhead/vue'
import ErrorPage from "@/Pages/ErrorPage.vue";
import HomePage from "@/Pages/HomePage.vue";
import AboutPage from "@/Pages/AboutPage.vue";
import FaqPage from "@/Pages/FaqPage.vue";
import FodPage from "@/Pages/FodPage.vue";
import ResourcesPage from "@/Pages/ResourcesPage.vue";


import './index.scss'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
      return { top: 0 }
    },
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/error', name: 'error', component: ErrorPage },
        { path: '/about', name: 'about', component: AboutPage },
        { path: '/faq', name: 'faq', component: FaqPage },
        { path: '/fod', name: 'fod', component: FodPage },
        { path: '/resources', name: 'resources', component: ResourcesPage },

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
