  <script>
  import FilmContainer from './FilmContainer.vue';
  import TvContainer from './TvContainer.vue';


  export default {
    name:'Main', 
    components:{
    FilmContainer,
    TvContainer,
    }
  }
  </script>


<template>
  <section>
    

    <FilmContainer />

    <TvContainer />
    
  </section>
</template>


<style lang="scss" scoped>
@import '../scss/partials/variables';
section{
  padding-top: 70px;
  padding-bottom: 100px;
  background-color: $netflix-black;
  color: white;
  min-height: 100vh;
}

</style>