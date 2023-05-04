
<script>

import {store} from "../data/store";


export default {
  name :'Header',
  data(){
    return{
      store
    }
  },
  methods:{
    enterClick(){
      console.log(store.searchString);
    }
  }
}
</script>

<template>

<section>
  <img src="../assets/img/logo-boolflix.png" alt="logo">



  <input v-model="store.searchString" @keyup.enter="enterClick()" type="text" placeholder="Cerca un Film" >


</section>

</template>

<style lang="scss" scoped>


section{
  display: flex;
  justify-content: space-between;
  img{
    width: 150px;
  }
  input{
    margin-right: 30px;
  }
}
</style>