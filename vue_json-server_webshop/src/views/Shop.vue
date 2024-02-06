<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';

  const items = ref([]);

  onMounted(() => {
    axios.get("http://localhost:3000/products")
    .then(resp => items.value = resp.data);
  })

  const addToBasket = (item) => {
    console.log(item);

    axios.post("http://localhost:3000/cart",{
      id : item.id,
      name : item.name, 
      price: item.price, 
      img : item.img,
    })
  }
</script>

<template>
  <div>
    <h1>Bolt</h1>

    <div>
      <div v-for="item in items" @click="addToBasket(item)">{{ item.name }}</div>
    </div>
  </div>
</template>
