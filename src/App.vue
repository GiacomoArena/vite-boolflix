  <script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import axios from "axios";  
  import {store} from "./data/store";


  export default {
    name:'App',
    components:{
      Header,
      Main
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        axios.all([
        axios.get(store.searchApi, {
          params:{
            query: store.searchString,
          }
        }),
          axios.get(store.tvSearchApi, {
          params:{
            query: store.searchString,
          }
        })
          ]).then(axios.spread((movieResult, tvResult) => {
          
        store.resultMovieArray = movieResult.data;
        store.resultTvArray = tvResult.data;

        console.log('result array',store.resultMovieArray);
        console.log(' TVarray',store.resultTvArray);
        console.log('result string',store.searchString);
      }));
      }
    },
    mounted(){
    this.getApi();
  }
  }

  </script>


<template>
  
  <Header  @startSearch="getApi"/>

  <Main />

</template>


<style lang="scss" >
@use './scss/main.scss' as * ;

</style>