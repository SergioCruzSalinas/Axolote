import type { RouteRecordRaw } from "vue-router";




export const authRoutes: RouteRecordRaw = {
    path: '/auth',
    name: 'auth',
    component: () => import('@/modules/auth/layouts/Layout.vue'),
    children:[
        {
            path: 'iniciar_sesion',
            name: 'login',
            component: () => import('@/modules/auth/views/LoginView.vue')
        },
        {
            path: 'registrarse',
            name: 'register',
            component: () => import('@/modules/auth/views/RegisterView.vue')
        }
    ]
}