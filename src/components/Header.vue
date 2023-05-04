
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
    
  }
}
</script>

<template>

<section>
  <img src="../assets/img/logo-boolflix.png" alt="logo">


  <div>
    <input @keyup.enter="$emit('startSearch')" v-model.trim="store.searchString"  type="text" placeholder="Cerca un Film"  >
  

  </div>
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
  div{
    margin-right: 15px;
  }
}
</style>