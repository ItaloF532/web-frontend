function formatDate(date) {
  if (!date) return null;
  const newDate = new Date(date);
  const month = newDate.toLocaleString("default", { month: "long" });
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return `${month} ${day}, ${year}`;
}

function generateHtmlForPost(post, index) {
  const date = formatDate(post.date);

  return `
    <div id="post-${index}" class="post">
      <img id="delete-post-button-${index}" src="./assets/svg/trash.svg" width="20" height="20" style="z-index: 2; width: 200%; display: flex; align-items: flex-end; justify-content: flex-end;">
      <h2> ${post?.title ?? "Error on get title"} </h2> 
      <span> ${date ?? "Error o get date"} </span>
      <p> ${post?.desc ?? "Error on get description"} </p>
    </div>
  `;
}

export default generateHtmlForPost;
