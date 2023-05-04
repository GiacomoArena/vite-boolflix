  <script>

  import Card from './partials/Card.vue'

  export default {
    name:'FilmContainer',
    components:{
      Card
    }
  }
  </script>


<template>
  <section>

    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
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