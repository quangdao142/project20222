import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import SignUp from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'
import Add from '@/components/Add.vue'
import Update from '@/components/Update.vue'
import Test from '@/components/Test.vue'
import Chat from '@/components/Chat.vue'

const routes = [
    {
        name:'Home',
        component: Home,
        path:'/'
    },
    {
        name:'SignUp',
        component: SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component: Login,
        path:'/login'
    },
    {
        name:'Add',
        component: Add,
        path:'/add'
    },
    {
        name:'Update',
        component: Update,
        path:'/update/:id'
    },
    {
        name:'Test',
        component: Test,
        path:'/test'
    },
    {
        name:'Chat',
        component: Chat,
        path:'/chat'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
