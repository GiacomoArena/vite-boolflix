import {reactive} from "vue"

export const store = reactive ({

searchApi:'https://api.themoviedb.org/3/search/movie?api_key=142cefcd997f4a712486d72b35e79dc7&query=',

searchString:'',

resultArray:[],


  
})