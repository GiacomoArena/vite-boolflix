  <script>
    import {store} from "../../data/store";

  export default {
    name:'Card',
    props:{
      card: Object,
    },
    data(){
      return{
        store
      }
    },
    computed:{
      
    }
  }

  // ${card.results.backdrop_path}
  </script>

<template>
  
  <div class="card-container">
    <img v-if="card.backdrop_path === null" src="../../assets/img/no_images.png" alt="card">
    <img v-else :src="`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`
" alt="card">
    <div class="card-info">
      <h5>{{card.title}}</h5>
      <h5>{{card.original_title}}</h5>
      <h5>{{card.original_language}} </h5>
      <h5>{{card.vote_average}} </h5>
    </div>
  </div>

</template>


<style lang="scss" scoped>

.card-container{
  width: calc(100% / 6);
  display: flex;
  flex-direction: column;
  margin: 20px;
  
}

</style>