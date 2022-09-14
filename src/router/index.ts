import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../components/view/DashboardView.vue";
import AnalyticsView from "../components/view/AnalyticsView.vue";
import TransactionsView from "../components/view/TransactionsView.vue";
import BudgetsView from "../components/view/BudgetsView.vue";
// import BudgetsPage from "../components/view/BudgetsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/dashboard"
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView
    },
    {
      path: "/transactions",
      name: "transactions",
      component: TransactionsView
    },
    {
      path: "/budgets",
      name: "budgets",
      component: BudgetsView
    },
    {
      path: "/analytics",
      name: "analytics",
      component: AnalyticsView
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue")
    // }
  ]
});

export default router;
