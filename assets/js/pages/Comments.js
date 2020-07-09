import view from "../utils/view.js";
import Story from "../component/Story.js"
import Comment from "../component/Comment.js";

export default async function Comments(){
    let comments;
    let hasComments = false
    
    let hasError = false;

    try{
        comments = await getComments()
        hasComments = comments.comments.length > 0;

    }catch(error){
        hasError = false;
        console.error(error);
    }

    if(hasError){
        view.innerHTML = "<div>No such story</div>";
    }
    view.innerHTML = `
        <div>
            ${Story(comments)}
        </div>
        <hr/>
        ${hasComments ? comments.comments.map( comment =>  Comment(comment)).join("") : ""}

    `
}


async function getComments(){
    const storyId = window.location.hash.split("?id=")[1];
    const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
    const comments = await response.json();
    console.log(comments)
    return comments;
}