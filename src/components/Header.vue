
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
    reloadPage() {
      location.reload();
    }
  }
}
</script>

<template>

<section>
  <img @click="reloadPage()" src="../assets/img/logo-boolflix.png" alt="logo">


  <div>
    <input @keyup.enter="$emit('startSearch')" v-model.trim="store.searchString"  type="text" placeholder="Cerca un Film"  >
  

  </div>
</section>

</template>

<style lang="scss" scoped>
@import '../scss/partials/variables';

section{
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color:  #14141496;
  z-index: 1000;
  img{
    width: 150px;
    margin: 15px;
    cursor: pointer;
  }
  input{
    width: 300px;
    margin-right: 30px;
  }
  div{
    margin-right: 15px;
  }
}
</style>