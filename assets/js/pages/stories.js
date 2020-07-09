import view from "../utils/view.js";
import Story from "../component/Story.js";
import checkFavorites from "../utils/checkFavorites.js";
import store from "../store.js";

export default async function Stories(path){
    const {favorites} = store.getState();
    let response = await getStories(path)
    const stories = await response.json();

    const hasStories = stories.length > 0;
    
    view.innerHTML = `
        <div>
            ${hasStories ? stories.map((story,i) => Story({...story,index : i + 1,isFavorited:checkFavorites(favorites,story)})).join("") : "No Stories"}
        </div>
    `

    const favoriteButtons = document.querySelectorAll(".favorite");
    favoriteButtons.forEach( (favoriteButton) => {
        favoriteButton.addEventListener("click",async function(e){
            let story = JSON.parse(this.dataset.story);
            let isFavorited = checkFavorites(favorites,story)
            if(isFavorited){
                store.dispatch({type : "REMOVE_FAVORITE",payload:{favorite:story}})
            } else {
                store.dispatch({type : "ADD_FAVORITE",payload:{favorite:story}})
            }
            await Stories(path);
        })
    })
}

async function getStories(path){
    const isHomePath = path === "/";
    if(isHomePath){
        path = "/newest";
    }
    const story = await fetch(`http://node-hnapi.herokuapp.com${path}`);
    return story;
}
