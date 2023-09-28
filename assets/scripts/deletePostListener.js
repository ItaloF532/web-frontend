import Post from "../../posts";

const postController = Post.getInstance();

function deletePost(index) {
  document
    ?.getElementById(`delete-post-button-${index}`)
    ?.addEventListener("click", (_) => {
      postController.deletePost(index);
    });
}

export default deletePost;
