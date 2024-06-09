import Error404 from "../views/errors/Error404.vue";
import Error401 from "../views/errors/Error401.vue";
import Error500 from "../views/errors/Error500.vue";

const errors = [
  {
    path: "/:pathMatch(.*)*",
    name: "error-404",
    component: Error404,
    meta: { layout: "layout-error" },
  },
  {
    path: "/errors/401",
    name: "error-401",
    component: Error401,
    meta: { layout: "layout-error" },
  },
  {
    path: "/errors/500",
    name: "error-500",
    component: Error500,
    meta: { layout: "layout-error" },
  },
];

export default errors;
