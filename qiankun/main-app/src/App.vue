<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Menu from "./components/Menu.vue";

const menus = ref([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Vue sub app", path: "/vue" },
  { name: "React sub app", path: "/react" },
]);
</script>

<template>
  <Menu :menus="menus"></Menu>

  <RouterView v-show="$route.name" />
  <div v-show="!$route.name" id="frame"></div>
</template>

<style scoped></style>
