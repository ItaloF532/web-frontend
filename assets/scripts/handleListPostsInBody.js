import Post from "../../posts";
import deletePost from "./deletePostListener";
import generateHtmlForPost from './generateHtmlForPost';

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

function renderAllPosts() {
  const allPosts = postController.getPosts();
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

  allPosts.forEach((post, index) => {
    if (post) deletePost(index);
  });
}

function handleListPostsInBody() {
  handleCreatePost();
  renderAllPosts();
  addDeleteListenerForPosts();
}

export default handleListPostsInBody();
