import Post from "../../posts/index.js";
import deletePost from "./deletePostListener.js";
import generateHtmlForPost from "./generateHtmlForPost.js";

const postController = Post.getInstance();
const postList = document.getElementById("post-list");

function updatePostList() {
  let newPostList = postController.getPosts();
  const lastPostIndex = newPostList.length - 1;
  const lastPost = newPostList[lastPostIndex];
  postList.innerHTML += generateHtmlForPost(lastPost, lastPostIndex);
  addDeleteListenerForPosts();
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

export function renderAllPosts(posts) {
  const allPosts = posts ?? postController.getPosts();
  let generatedHTML = "";

  (allPosts ?? []).forEach((post, index) => {
    if (post) {
      generatedHTML += generateHtmlForPost(post, index);
    }
  });

  postList.innerHTML = generatedHTML;
}

function addDeleteListenerForPosts() {
  const allPosts = postController.getPosts();

  (allPosts ?? []).forEach((post, index) => {
    if (post) deletePost(index);
  });
}

function handleListPostsInBody() {
  handleCreatePost();
  renderAllPosts();
  addDeleteListenerForPosts();
}

export default handleListPostsInBody;
