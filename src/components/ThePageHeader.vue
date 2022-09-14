<template>
  <div class="header">
    <div class="flex container m-auto">
      <div class="flex items-center">
        Family App
      </div>
      <div class="flex ml-12px">
        <router-link v-for="item in navItems" :key="item.route" :to="item.route" class="link">
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

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
.header {
  display: flex;
  box-shadow: 0 0 40px 0 rgb(82 63 105 / 10%);
  height: 65px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  padding: 0;
}

a.router-link-active {
  font-weight: bold;
}
</style>
