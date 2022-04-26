import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Start",
    component: () => import("@/pages/Start.vue"),
  },
  {
    path: "/survey/:uid",
    name: "Clubs",
    component: () => import("@/pages/SurveyComplete.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
