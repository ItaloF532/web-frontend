import Post from "../../posts";
import generateHtmlForPost from './generateHtmlForPost';

const postController = Post.getInstance();
const postList = document.getElementById("post-list");

function updatePostList() {
  let newPostList = postController.getPosts();
  const lastPostIndex = newPostList.length - 1;
  const lastPost = newPostList[lastPostIndex];
  postList.innerHTML += generateHtmlForPost(lastPost, lastPostIndex);
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
      generatedHTML += generateHtmlForPost(post, index);
    }
  });

  postList.innerHTML = generatedHTML;
}

function handleListPostsInBody() {
  handleCreatePost();
  renderAllPosts();
}

export default handleListPostsInBody();
