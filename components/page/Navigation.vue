<template>
  <ul class="flex items-stretch">
    <li class="px-2" v-for="item in navItems" :key="item.route">
      <anchor :to="item.route">{{item.title}}</anchor>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Anchor from "../Anchor.vue";

type NavItem = {
  title: string;
  route: string;
}
const navItems = ref<NavItem[]>([
    {
      title: "Главная",
      route: "/"
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
