  <script>
    import {store} from "../../data/store";

  export default {
    name:'TvCard',
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
      <h5>{{card.name}}</h5>
      <h5>{{card.original_name}}</h5>

      <span v-if="card.original_language === 'en'"> <img class="flag" src="../../assets/img/en.png" alt="flag"></span>

      <span v-if="card.original_language === 'it'"> <img class="flag" src="../../assets/img/it.png" alt="flag"></span>

      <span v-else>  {{card.original_language}}   </span>

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
  .flag{
    width: 40px;
    margin: 5px;
  }
}

</style>