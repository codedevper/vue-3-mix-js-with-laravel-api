import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores/auth'

import pages from "./pages";
import accounts from "./accounts";
import errors from "./errors";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...pages,
    ...accounts,
    ...errors,
  ],
});

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.loggedIn) return '/accounts/signin'
})

export default router;
