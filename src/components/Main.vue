  <script>
  import FilmContainer from './FilmContainer.vue'
  import TvContainer from './TvContainer.vue'


  export default {
    name:'Main', 
    components:{
    FilmContainer,
    TvContainer
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
section{
  background-color: brown;
  height: 100vh;
}

</style>