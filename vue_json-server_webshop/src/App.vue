<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink class="routerLink" to="/">Bolt</RouterLink>
        <RouterLink class="routerLink" to="/basket">Kosár</RouterLink>
        <RouterLink class="routerLink" to="/items">Termékek</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>
  nav{
    text-align: center;
  }
  
  .routerLink
  {
    text-decoration: none;
    color: black;
    margin: 20px;
    font-size: 40px;
  }

</style>
