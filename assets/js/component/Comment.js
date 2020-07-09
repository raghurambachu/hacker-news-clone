export default function Comment(comment){
    let hasNestedComments = comment.comments.length > 0
    return `
        <div class=" nested-comment-${comment.level}">
            <div class="bold flex"> 
                ${comment.user} | ${comment.time_ago}
            </div>
            <p>
                ${comment.content}
            </p>
            ${hasNestedComments ? comment.comments.map(comment => Comment(comment)).join("") : ""}
        </div>
    `;
}