<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';

  const basket = ref([]);

  onMounted(() => {
    getBasket();
  })

  const getBasket = () => {
    axios.get("http://localhost:3000/cart")
    .then(resp => basket.value = resp.data);
  }

  const removeFromBasket = (item) => {
    axios.delete("http://localhost:3000/cart/" + item.id)
    .then(getBasket());
  }
</script>

<template>
  <div>
    <h1>Kosár</h1>
    <div>
      <div v-for="item in basket" @click="removeFromBasket(item)">{{ item.name }}</div>
    </div>
  </div>
</template>
