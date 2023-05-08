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
    zeroStars:'<i class="fa-regular fa-star"></i>',
    flag:false,
    hover:false,
    click: false
  }
},
methods:{
  flagChange(){
        this.flag = !this.flag
      },
      hoveringfalse(){
        this.hover = false
      },
      clickingtrue(){
        this.click = !this.click
      },
      flagChangeFalse(){
        this.flag = false
      },
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

</script>

<template>
  
  <div class="card-container" @mouseleave="[flagChangeFalse(), clickingtrue()]"
    @click="clickingtrue()"
    @mouseover="hoveringfalse()"
    >
    <span class="pop-up-title"
    :class="{'d-none': click === true}"
    >{{card.name}}</span>

    <img @click="flagChange()"   class="card-img" v-if="card.backdrop_path === null" src="../../assets/img/no_images.jpg" alt="card">
    <img @click="flagChange()" class="card-img" v-else :src="`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`
" alt="card">
    <span class="info-text"><i class="fa-solid fa-info"></i> </span>
    <div :class="{'card-info ' : flag === true}" @click="flagChange()" class="d-none">
      <h5 class="titles" >{{card.name}}</h5>

      <h5  class="titles" v-if="card.original_name === card.name">&nbsp;</h5>
      <h6  class="titles" v-else>{{card.original_name}}</h6>

      <span class="overview"><h3>Description</h3>{{ card.overview }}</span>

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
  @import '../../scss/partials/variables';
.card-container{
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px;
  &:hover .pop-up-title{
    bottom: -15px;
    left: -50px;
    opacity: 1;
    z-index: 10;
    

  }
  .pop-up-title{
    position: absolute;
    color: white;
    transition: all 2s;
    opacity: 0;
    pointer-events: none;
  }
  .overview{
    display: none;
  }
  .info-text{
    opacity: 0;
    font-size: 1px;
  }
 /* //da sistemare
  .card-container:hover .info-text{
    opacity: 1;
    font-size: 16px;
    width: 100px;
    height: 100px;
    text-align: center;
    position: absolute;
    bottom: 25px;
    z-index: 99999;
    background-color: rgba(168, 161, 161, 0.493);
    display: flex;
    align-items: center;
    justify-content: center;
    right: 100px;
    border-radius: 50%;
    cursor: pointer;
  }
  //da sistemare*/
  .card-info{
    overflow-y:auto ;
    -webkit-box-shadow: 0px 0px 13px 4px #000000;
    -moz-box-shadow: 0px 0px 13px 4px #000000;
    -o-box-shadow: 0px 0px 13px 4px #000000;
    box-shadow: 0px 0px 13px 4px #000000;
    display: block !important;
    font-size: 15px;
    width: 100%;
    height: 100%;
    transform: scale(1.5);
    transition: all 1s;
    position: absolute;
    background-color: rgba(34, 30, 30, 0.945);
    cursor: pointer;
    right: 0;
    z-index: 5;
    h5{
      margin-top: 3px;
      font-size: 15px;
    }
    .titles{
      width: 50%;
      text-align: center;
    }
    h6{
      font-size: 10px;
      color: $primary-color;
    }
    .overview{
      display: block;
      position: absolute;
      top: 5px;
      font-weight: 400;
      font-size: 12px;
      z-index: 455;
      width: 130px;
      height: 140px;
      overflow-y: auto;
      right: 0;
      h3{
        font-size: 18px;
        color: $primary-color;
        font-weight: 500;
      }
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
  span{
    img{
      width: 25px !important;
    }
  }
}

</style>