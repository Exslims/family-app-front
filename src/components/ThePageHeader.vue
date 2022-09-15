<template>
  <div class="flex h-16 fixed p-0 top-0 right-0 left-0 shadow-header bg-white">
    <div class="flex container items-center justify-between m-auto">
      <div class="flex justify-between items-center">
        <div class="mr-6 w-24">
          Family App
        </div>
        <ul v-if="isUserAuthenticated" class="flex">
          <router-link v-for="item in navItems" :key="item.route" :to="item.route" class="flex px-4 py-2 rounded">
            <span>{{ item.title }}</span>
          </router-link>
        </ul>
      </div>
      <div class="flex items-center">
        <user-menu>
        </user-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UserMenu from "./header/UserMenu.vue";
import { useAuthStore } from "../stores/auth-store";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { isUserAuthenticated } = storeToRefs(authStore);

type NavItem = {
  title: string;
  route: string;
}
const navItems = ref<NavItem[]>([
  {
    title: "Главная",
    route: "/dashboard"
  },
    {
      title: "Транзакции",
      route: "/transactions"
    },
    {
      title: "Бюджеты",
      route: "/budgets"
    },
    {
      title: "Аналитика",
      route: "/analytics"
    }
  ]
);
</script>

<style scoped>
.shadow-header {
  box-shadow: 0 0 40px 0 rgb(82 63 105 / 10%);
}

.router-link-active {
  background-color: rgba(77, 89, 149, .06);
  color: #3699ff;
}
</style>
