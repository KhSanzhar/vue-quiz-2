import { createRouter, createWebHistory } from 'vue-router'
import UsersPage from "@/views/UsersPage.vue";
import UserPage from "@/views/UserPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: UsersPage
    },
    {
      path: '/:id',
      component: UserPage
    }
  ]
})

export default router
