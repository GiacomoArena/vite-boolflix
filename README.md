# **BoolFlix**

## **Milestone 1**:  
- I started the exercise by creating the basic layout by creating on the header in addition to the logo, a search-bar that will save the value of what we write on the variable `store.searchString` (which initially will be empty).

- on App.vue I create my getApi function that will have the query parameter (the parameter we use to search for the movie by name) equal to `store.searchString`.
```
getApi(){
        axios.get(store.searchApi, {
        params:{
          query: store.searchString,
        }
      }).then(result => {
        store.resultArray = result.data;
```

- after which through a `$emit` on the click of the 'Enter' key we will call the `getApi` function with the query values we transcribed. 
in the components folder I create the structure of the movie card container, and through `props and a v-for` I generate the cards dynamically by assigning the required values.

