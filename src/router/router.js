import inicio from "../views/inicio.vue"
import login from "../views/login.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const rutas = [
    { path: "/", component: inicio },
    { path: "/login", component: login }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: rutas
})

export default router