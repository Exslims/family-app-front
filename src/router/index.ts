import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../components/view/DashboardView.vue";
import AuthView from "../components/view/AuthView.vue";
import AnalyticsView from "../components/view/AnalyticsView.vue";
import TransactionsView from "../components/view/TransactionsView.vue";
import BudgetsView from "../components/view/BudgetsView.vue";
import { useAuthStore } from "../stores/auth-store";
// import BudgetsPage from "../components/view/BudgetsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/auth"
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: {
        needAuth: true
      }
    },
    {
      path: "/transactions",
      name: "transactions",
      component: TransactionsView,
      meta: {
        needAuth: true
      }
    },
    {
      path: "/budgets",
      name: "budgets",
      component: BudgetsView,
      meta: {
        needAuth: true
      }
    },
    {
      path: "/analytics",
      name: "analytics",
      component: AnalyticsView,
      meta: {
        needAuth: true
      }
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

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.needAuth && !authStore.isUserAuthenticated) {
    next("/auth");
  } else {
    next();
  }
});

export default router;
