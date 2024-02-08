<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';

  const items = ref([]);
  const basket = ref([]);

  onMounted(() => {
    axios.get("http://localhost:3000/products")
    .then(resp => items.value = resp.data);    
  })

  const getBasket = async () =>{
    const response = await axios.get("http://localhost:3000/cart");
    basket.data = response.data;
    console.log(basket.data);
  }

  const addToBasket = (item) => {
    
    getBasket();
    let itemInBasket = null;

    basket.data.forEach(b_item => {
      if(parseInt(b_item.id) == parseInt(item.id))
      {
        itemInBasket = b_item;
        console.log(itemInBasket);
        return;
      }
    });    

    if(itemInBasket != null)
    {
      console.log(itemInBasket.amount);

      axios.patch("http://localhost:3000/cart/" + itemInBasket.id,{
        id : itemInBasket.id,
        name : itemInBasket.name, 
        price: itemInBasket.price, 
        img : itemInBasket.img,       
        amount: (parseInt(itemInBasket.amount) + 1).toString()
      });
    }
    else
    {
      console.log("új készítése")
      axios.post("http://localhost:3000/cart",{
      id : item.id,
      name : item.name, 
      price: item.price, 
      img : item.img,
      amount: "1"
      });
    }    
  }
</script>

<template>
  <div>
    <div class="container">
      <div class="row item_row">
        <div class="col-sm-11 col-md-5 col-lg-2 item_div" v-for="item in items">
          <div><img src="../no-image.png" class="item_img"></div>
          <div class="item_div_name">{{ item.name }}</div>
          <div class="item_div_price">{{ item.price }}Ft</div>
          <div class="item_div_other">
            <button @click="addToBasket(item)">Kosárba</button>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<style>
.item_div{
  background-color: gray;
  height: 350px;
  width: 250px;
  margin: 20px;
  border-radius: 5px;
  text-align: center;
}

.item_row{
  justify-content: center;
  position: flex;
}

.item_div_name{
  font-size: 20px;
  text-transform: uppercase;
  min-height: 30px;
}

.item_div_price{
  font-size: 20px;
  text-transform: uppercase;
  min-height: 30px;
}

.content{
  text-align: center;
}

.item_img{
    width: 90%;
    margin: 5px;
}
</style>