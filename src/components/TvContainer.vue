<script>
import {store} from "../data/store";
import TvCard from './partials/TvCard.vue'

export default {
  name:'TvContainer',
  components:{
    TvCard
  },
  data(){
    return{
      store
    }
  }
}
</script>


<template>
<h1>Tv Series</h1>
<section>
  <TvCard 
  v-for="(card, i) in store.resultTvArray.results" 
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