  <script>
  export default {
    name:'Card',
    props:{
      card: Object,
    }
  }
  </script>


<template>
  
  <div class="card-container">
    <img  src="../../assets/img/it.png" alt="card">
    <div class="card-info">
      <h5>Titolo</h5>
      <h5>Titolo originale </h5>
      <h5>lingua </h5>
      <h5>voto </h5>
    </div>
  </div>

</template>


<style lang="scss" scoped>

.card-container{
  width: calc(100% / 6);
  display: flex;
  flex-direction: column;
  margin: 20px;
  img{
    width: 100px;
  }
}

</style>