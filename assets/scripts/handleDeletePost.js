const postController = Post.getInstance();

function handleDeletePost() {
  postController.subscribe("deleted-post", (index) => {
      const deletedPost = document.getElementById(`post-${index}`);
      deletedPost.remove();
  });
}

export default handleDeletePost();