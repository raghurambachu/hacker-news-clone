import store from "../store.js";
import Story from "../component/Story.js";
import checkFavorites from "../utils/checkFavorites.js";
import view from "../utils/view.js"

export default function Favorites(path){
   const {favorites} = store.getState();
   const hasFavorites = favorites.length > 0;
  
   view.innerHTML = `${hasFavorites ? favorites.map( (story,index) => Story({...story,index : index + 1,isFavorited : checkFavorites(favorites,story)})).join("") : "No Favorites Yet, select some of the stories to be added in your favorite list."}`

   const favoriteButtons = document.querySelectorAll(".favorite");
   favoriteButtons.forEach((favoriteButton) => {
       favoriteButton.addEventListener("click",function(e){
           let story = JSON.parse(this.dataset.story);
           let isFavorited = checkFavorites(favorites,story)
           if(isFavorited){
               store.dispatch({type : "REMOVE_FAVORITE",payload:{favorite:story}})
           } else {
               store.dispatch({type : "ADD_FAVORITE",payload:{favorite:story}})
           }
           Favorites(path);
       })
   })
}