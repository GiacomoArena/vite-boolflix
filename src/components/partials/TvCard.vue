  <script>
    import {store} from "../../data/store";

  export default {
    name:'TvCard',
    props:{
      card: Object,
    },
    data(){
      return{
        store,
        vote: this.card.vote_average,
        voteString:'',
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
    <img class="tv-img" v-if="card.backdrop_path === null" src="../../assets/img/no_images.png" alt="card">
    <img class="tv-img" v-else :src="`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`
" alt="card">
    <div class="card-info">
      <h5>{{card.name}}</h5>

      <h5 v-if="card.original_name === card.name"></h5>
      <h5 v-else>{{card.original_name}}</h5>

      <span v-if="card.original_language === 'en'"> <img class="flag" src="../../assets/img/en.png" alt="flag"></span>
      <span v-if="card.original_language === 'it'"> <img class="flag" src="../../assets/img/it.png" alt="flag"></span>
      <span v-if="card.original_language === 'de'"> <img class="flag" src="../../assets/img/de.png" alt="flag"></span>
      <span v-if="card.original_language === 'es'"> <img class="flag" src="../../assets/img/es.png" alt="flag"></span>
      <span v-if="card.original_language === 'fr'"> <img class="flag" src="../../assets/img/fr.png" alt="flag"></span>
      <span v-if="card.original_language === 'jp' || 'ja'"> <img class="flag" src="../../assets/img/jp.png" alt="flag"></span>

      <div class="stars"  v-html="voteString"></div>
    </div>
  </div>

</template>


<style lang="scss" scoped>

.card-container{
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  margin: 20px;
  .flag{
    width: 40px;
    margin: 5px;
  }
  .tv-img{
  }
}

</style>