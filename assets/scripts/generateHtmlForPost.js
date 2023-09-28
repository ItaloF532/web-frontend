function generateHtmlForPost(post, index) {
  return `
    <div id="post-${index}" class="post">
      <img id="delete-post-button-${index}" src="./assets/svg/trash.svg" width="20" height="20" style="width: 100%; position: absolute; display: flex; align-items: flex-end; justify-content: flex-end;">
      <h2> ${post?.title ?? "Error on get title"} </h2> 
      <span> ${post?.date ?? "Error o get date"} </span>
      <p> ${post?.desc ?? "Error on get description"} </p>
    </div>
  `;
}

export default generateHtmlForPost;