import Admin from "../views/admin.vue"
import inicio from "../views/inicio.vue"
import LecturaPrincipal from "../views/lecturaPrincipal.vue"
import login from "../views/login.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const rutas = [
    { path: "/", component: inicio },
    { path: "/login", component: login },
    { path: "/lecturaPrincipal", component: LecturaPrincipal },
    { path: "/admin", component: Admin }, 
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: rutas
})

export default router