import Post from "../../posts";

const postController = Post.getInstance();
const postList = document.getElementById("post-list");

function updatePostList() {
  let newPostList = postController.getPosts();
  const lastPost = newPostList[newPostList.length - 1];
  console.log("lastPost", lastPost);

  postList.innerHTML += `
      <div id="post-${newPostList.length - 1}" class="post">
        <h2> ${lastPost?.title ?? "Error on get title"} </h2> 
        <span> ${lastPost?.date ?? "Error o get date"} </span>
        <p> ${lastPost?.desc ?? "Error on get description"} </p>
      </div>
    `;
}

function handleCreatePost() {
  postController.subscribe("created-post", (_) => {
    if (
      postController.searchedTitle?.trim() === "" &&
      postController.searchedDate?.trim() === ""
    ) {
      updatePostList();
    }
  });
}

function renderAllPosts() {
  const allPosts = postController.getPosts();
  let generatedHTML = "";

  allPosts.forEach((post, index) => {
    if (post) {
      generatedHTML += `
        <div id="post-${index}" class="post">
          <h2> ${post?.title ?? "Error on get title"} </h2> 
          <span> ${post?.date ?? "Error o get date"} </span>
          <p> ${post?.desc ?? "Error on get description"} </p>
        </div>
      `;
    }
  });

  postList.innerHTML = generatedHTML;
}

function handleListPostsInBody() {
  handleCreatePost();
  renderAllPosts();
}

export default handleListPostsInBody();
