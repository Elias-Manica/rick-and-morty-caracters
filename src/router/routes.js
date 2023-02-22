const routes = [
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [
      {
        path: "/search",
        name: "search",
        component: () => import("pages/SearchPage.vue"),
      },
      {
        path: "/",
        name: "home",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "/profile/:id",
        name: "profile",
        component: () => import("pages/HomePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
