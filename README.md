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

## **Milestone 3**:
- for transferring the images to the relative card inside the cards that are cycled and dynamically generated, I put two img tags one having a `` :src ``dynamic with a `` tamplate literals`` that has as its base a string with `` TMDB base URL:`` followed by `` /w500/ ``(the chosen size) and ``{card.backdrop_path}`` that is the path to the images that we dynamically generate provided by the Api 

- so on the first img tag we will have a v-if that if
``v-if="card.backdrop_path === null"`` then a replacement img will be shown `v-else` the corresponding image taken from the API

- As for the stars, I took the dynamic value `card.vote_average` which is a number ranging from 1 to 10.
Inside a methods I created the following function 
```
getStars(){
        let icon = '<i class="fa-solid fa-star"></i> '
        let votes = Math.ceil(this.vote) /2
        for (let i = 0; i < votes; i++) {
          this.voteString += icon
        }
        return this.voteString
      }
```
- which takes the vote value approximated by excess and divided by two to thus have a number ranging from 1 to 5 and through a for loop repeated for the generated number corresponding to the card I generate the icons . then I call the function on the mounted and the value of the stars which is inserted inside `voteString:''` on the tamplate in order to display it.

## **Milestone 4**:
- Fix the graphic part by making it more like the original web app 
adding searchbar animations and card info as soon as you click on it 
