import HomeView from "../views/pages/HomeView.vue";

const pages = [
  {
    path: "/",
    name: "page-home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "page-about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/pages/AboutView.vue"),
    meta: { requiresAuth: true },
  },
];

export default pages;
