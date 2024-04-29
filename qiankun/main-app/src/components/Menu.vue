<template>
  <div class="wrapper">
    <div v-for="(menu, index) in menus" :key="index" class="item">
      <RouterLink :to="menu.path">{{ menu.name }}</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";

defineProps({
  menus: {
    type: Array,
  },
});
</script>

<style scoped>
.wrapper {
  background-color: #eee;
}
.item {
  text-align: center;
  padding: 6px 0;
}
</style>
