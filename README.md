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

## **Milestone 2**:
- as for the flags I created inside a span a series of `v-if` that if the value of `card.original_language` is equivalent to the acronym of the chosen flag ex.(Italian it ) then its value will be equivalent to the tag img with src that corresponds to its acronym. Otherwise in case there is no img equivalent to the flag I will be printed on the screen the acronym of the corresponding language

- regarding tv series I started by putting in `store.js` a new API that is equivalent to tv series searches. successively on ``App.vue`` I call the api inside the function `` getapi()`` using `axios.all` and putting as params the same as the counterpart `` MovieApi`` 

```
params:{
            query: store.searchString,
          }
```
- then I create a container (as in the case of movies and related cards), and a card that will have more or less the same characteristics as the 'Movie Card ' being careful in the props when we name titles that have a different acronym 