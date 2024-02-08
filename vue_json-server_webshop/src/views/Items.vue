<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';

  const items = ref([]);
  const newItemNameValue = ref();
  const newItemPriceValue = ref();

  onMounted(() => {
    getItems();    
  })

  const getItems = () => {
    axios.get("http://localhost:3000/products")
    .then(resp => items.value = resp.data);
  }

  const addToItems = () => {
    axios.post("http://localhost:3000/products",{
      id : (parseInt(items.value[items.value.length - 1].id) + 1).toString(),
      name : newItemNameValue.value, 
      price: newItemPriceValue.value.toString(), 
      img : "no-image.png",
    })
    .then(getItems());
  }

  const removeFromItems = (item) => {
    axios.delete("http://localhost:3000/products/" + item.id)
    .then(getItems());
  }
</script>

<template>
  <div class="content">
    <div class="newItemDiv">
        <h2>Új elem</h2>
        Név: <input type="text" v-model="newItemNameValue"> <br>
        Összeg: <input type="number" min="0" v-model="newItemPriceValue"> <br>
        <button @click="addToItems()">Hozzáadás</button>
    </div>

    <div class="container">
      <div class="row item_row">
        <div class="col-sm-11 col-md-5 col-lg-2 item_div" v-for="item in items">
          <div><img src="../no-image.png" class="item_img"></div>
          <div class="item_div_name">{{ item.name }}</div>
          <div class="item_div_price">{{ item.price }}Ft</div>
          <div class="item_div_other">
            <button @click="removeFromItems(item)">Törlés</button>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<style>
    .content{
        text-align: center;
    }

    .item_img{
        width: 90%;
        margin: 15px;
    }

</style>