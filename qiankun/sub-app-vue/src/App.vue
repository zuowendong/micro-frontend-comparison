<template>
  <nav>
    <RouterLink to="/">vue-home</RouterLink>
    <RouterLink to="/about">vue-about</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
