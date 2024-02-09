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

  const changeAmountItem = (value) => {
    axios.put("http://localhost:3000/cart/" + item.id, 
    {
      id : item.id,
      name : item.name, 
      price: item.price, 
      img : item.img,
      amount: value.toString()
    })
  }
</script>

<template>
  <div>
    <div class="container">
      <div class="row item_row">
        <div class="col-sm-11 col-md-5 col-lg-2 item_div" v-for="item in basket">
          <div><img src="../no-image.png" class="item_img"></div>
          <div class="item_div_name">{{ item.name }}</div>
          <div class="item_div_price">{{ item.price }}Ft</div>
          <div class="item_div_other">
            <input type="number" min="1" @change="changeAmountItem(value)" v-model="item.amount">
            <button @click="removeFromBasket(item)">Kivétel a kosárból</button>
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
        margin: 5px;
    }
</style>