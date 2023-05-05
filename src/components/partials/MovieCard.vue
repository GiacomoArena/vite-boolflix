  <script>
    import {store} from "../../data/store";

  export default {
    name:'MovieCard',
    props:{
      card: Object,
    },
    data(){
      return{
        store,
        vote: this.card.vote_average,
        voteString:'',
        zeroStars:'<i class="fa-regular fa-star"></i>',
      }
    },
    methods:{
      getStars(){
        let icon = '<i class="fa-solid fa-star"></i> '
        let votes = Math.ceil(this.vote) /2
        for (let i = 0; i < votes; i++) {
          this.voteString += icon
        }
        return this.voteString
      }
    },
    mounted(){
      this.getStars()
    }
  }

  // ${card.results.backdrop_path}
  </script>

<template>
  
  <div class="card-container">
    <img class="card-img" v-if="card.backdrop_path === null" src="../../assets/img/no_images.jpg" alt="card">
    <img class="card-img" v-else :src="`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`
" alt="card">
    <div class="card-info ">
      <h5 class="titles" >{{card.title}}</h5>

      <h5  class="titles" v-if="card.original_title === card.title">&nbsp</h5>
      <h6  class="titles" v-else>{{card.original_title}}</h6>

      <span class="overview">{{ card.overview }}</span>

      <span v-if="card.original_language === 'en'"> <img class="flag" src="../../assets/img/en.png" alt="flag"></span>
      <span v-if="card.original_language === 'it'"> <img class="flag" src="../../assets/img/it.png" alt="flag"></span>
      <span v-if="card.original_language === 'de'"> <img class="flag" src="../../assets/img/de.png" alt="flag"></span>
      <span v-if="card.original_language === 'es'"> <img class="flag" src="../../assets/img/es.png" alt="flag"></span>
      <span v-if="card.original_language === 'fr'"> <img class="flag" src="../../assets/img/fr.png" alt="flag"></span>
      <span v-if="card.original_language === 'jp' || 'ja'"> <img class="flag" src="../../assets/img/jp.png" alt="flag"></span>

      <span v-else>  {{card.original_language}}   </span>

      <div v-if="voteString <=  1" class="stars"  v-html="zeroStars"></div>

      <div v-else class="stars"  v-html="voteString"></div>
    </div>
  </div>

</template>


<style lang="scss" scoped>

.card-container{
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px;
  .overview{
    display: none;
  }
  &:hover .card-info{
    display: block;
    font-size: 15px;
    width: 100%;
    height: 100%;
    transform: scale(1.5);
    transition: all 1s;
    position: absolute;
    background-color: brown;
    //bottom: -90px;
    right: 0;
    z-index: 5;
    h5{
      font-size: 15px;
    }
    .titles{
      width: 50%;
    }
    h6{
      font-size: 10px;
    }
    .overview{
      display: block;
      position: absolute;
      top: 0px;
      z-index: 455;
      width: 130px;
      height: 130px;
      overflow-y: auto;
      right: 0;
  }
  }
  .card-info{
    display: flex;
    font-size: 1px;
    width: 10px;
    right: 50%;
    position: absolute;
    background-color: brown;
    z-index: 0;
    h5{
      transition: all 0.5s;
      font-size: 1px;
    }
  }
  
  .card-img{
    position: relative;
    transition: all 1s;
    cursor: pointer;
    width: 300px;
    height: 150px;
    z-index: 3;
    &:hover{
      transform: scale(1.5);
      z-index: 4;
    }
    
  }
  
  
  
  .flag{
    width: 40px;
    margin: 5px;
  }
  
}

</style>