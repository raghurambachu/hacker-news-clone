export default function Story(story){
    return `
        <div class="story flex">
            <div class="left flex">
                <span class="story-count">
                    ${story.index || ""}.
                </span>
                <span class="story-upvote">
                    &#x25B2;
                </span>
            </div>
            <div class="right">
                <div class="top flex">
                    <a class="story-title" href="${story.url}">
                    ${story.title}
                    </a>
                    <p class="story-domain">
                        ${story.domain ? "("+ story.domain + ")" : ""}  
                    </p>
                </div>
                <div class="bottom">
                    <div class="story-points">
                        ${story.points ? story.points + " points by " + story.user : "" } ${story.time_ago}
                        |
                        <a href="#/items?id=${story.id}">
                            ${story.comments_count} comments
                        </a>
                        |
                        <span class="favorite" data-story='${JSON.stringify(story)}'>
                            <img class="heart-fav" src="../assets/img/heart.svg">
                            ${story.isFavorited ? "Remove from favorites" : "Add to favorites"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `
}