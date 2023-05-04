  <script>
  import {store} from "../data/store";
  import MovieCard from './partials/MovieCard.vue'

  export default {
    name:'FilmContainer',
    components:{
      MovieCard
    },
    data(){
      return{
        store
      }
    }
  }
  </script>


<template>
  <h1 v-if="store.searchString === ''"></h1>
  <h1 v-else>Film</h1>
  <section>
    <MovieCard 
    v-for="(card, i) in store.resultMovieArray.results" 
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
  justify-content: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  h1{
  margin-left: 15px;
}
}
</style>