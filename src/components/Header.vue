
<script>

import {store} from "../data/store";


export default {
  name :'Header',
  data(){
    return{
      store
    }
  },
  methods:{
    reloadPage() {
      location.reload();
    }
  }
}
</script>

<template>

<section>
  <img @click="reloadPage()" src="../assets/img/logo-boolflix.png" alt="logo">


  <div class="right-container">
    <div class="search-bar">
      <i class="fa-solid fa-magnifying-glass"></i>
      
      <input @keyup.enter="$emit('startSearch')" v-model.trim="store.searchString"  type="text" placeholder="Cerca un Film"  >
      
    </div>
    <div class="info-button">
        <div class="user">
          <img class="users" src="../assets/img/user.jpg" alt="user">  
          <i class="fa-solid fa-caret-down down"></i>  
        </div>
        <ul >
          <li><a href="#"><i class="fa-solid fa-pen"></i> Gestisci profili</a></li>
          <li><a href="#"><i class="fa-regular fa-user"></i> Account</a></li>
          <li><a href="#"><i class="fa-solid fa-question"></i> Assistenza</a></li>
        </ul>
    </div>
  </div>
</section>

</template>

<style lang="scss" scoped>
@import '../scss/partials/variables';

section{
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color:  #14141496;
  z-index: 1000;
  
  img{
    width: 150px;
    margin: 15px;
    cursor: pointer;
  }
  .right-container{
    display: flex;
    align-items: center;
    
    .info-button{
      margin-right: 50px;
      position: relative;
      display: flex;
      align-items: center;
      img{
        width: 40px;
        border-radius: 10px;
      }
      ul{
        display: none;
        flex-direction: column;
        width: 200px;
        background-color: rgba(19, 17, 17, 0.945);
        color: white;
        position: absolute;
        top: 70px;
        right: 5px;
        list-style: none;
        padding: 0;
        a{
          margin-left: 10px;
          color: white;
          text-decoration: none;
          &:hover{
            text-decoration: underline;
          }
        }
        
        i{
          padding-left: 10px;
        }
      }
      &:hover ul{
        display: flex;
      }
    }
  }
  .search-bar{
    display: flex;
    color: white;
    cursor: pointer;
    i{
      font-size: 18px;
      margin: 5px;
    }
    input{
      width: 0px;
      margin-right: 30px;
      transition: all 1s;
    }
    &:hover input{
      width: 300px;
    }
    
  }
  
}
</style>