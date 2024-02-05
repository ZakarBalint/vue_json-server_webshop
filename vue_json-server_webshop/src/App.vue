<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Bolt</RouterLink>
        <RouterLink to="/basket">Kosár</RouterLink>
        <RouterLink to="/newitem">Új termék</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>
