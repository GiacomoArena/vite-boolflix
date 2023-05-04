  <script>
  import {store} from "../data/store";
  import Card from './partials/Card.vue'

  export default {
    name:'FilmContainer',
    components:{
      Card
    },
    data(){
      return{
        store
      }
    }
  }
  </script>


<template>
  <h1>Film</h1>
  <section>
    <Card 
    v-for="(card, i) in store.resultArray.results" 
    :key="i"
    :card="card"
    />
  </section>

  
</template>


<style lang="scss" scoped>
  @import '../scss/partials/variables';
section{
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
</style>