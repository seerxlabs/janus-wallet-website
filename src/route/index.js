import { createRouter, createWebHashHistory} from "vue-router";

const Index = () => import("../pages/Home/Index")

const routes = [
  {path: '/Index', name: 'Index', component: Index},
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
