function generateHtmlForPost(post, index) {
  return `
    <div id="post-${index}" class="post">
      <h2> ${post?.title ?? "Error on get title"} </h2> 
      <span> ${post?.date ?? "Error o get date"} </span>
      <p> ${post?.desc ?? "Error on get description"} </p>
    </div>
  `;
}

export default generateHtmlForPost;