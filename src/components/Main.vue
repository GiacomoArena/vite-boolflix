  <script>
  import FilmContainer from './FilmContainer.vue'


  export default {
    name:'Main', 
    components:{
    FilmContainer
    }
  }
  </script>


<template>
  <section>
    

    <FilmContainer />
    
  </section>
</template>


<style lang="scss" scoped>
section{
  background-color: brown;
  height: 100vh;
}

</style>