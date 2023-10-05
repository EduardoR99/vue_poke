import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import('../views/home/index.vue')

        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login/index.vue')

        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/register/index.vue')

        }
    ]
})

export default router