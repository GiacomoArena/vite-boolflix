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
        axios.get(store.searchApi, {
        params:{
          query: store.searchString,
        }
      }).then(result => {
        store.resultArray = result.data;

        console.log('result array',store.resultArray);
        console.log('result string',store.searchString);
      });
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