import Post from "../../posts";
import { hideErrorMessage, updatePostModalDisplay } from "./handlePostModal";

const postController = new Post();

export function handleSubmitPost() {
  const postForm = document.getElementById("post-form");
  const titleInput = document.getElementById("title");
  const errorMessages = document.getElementById("errorMessages");
  const descriptionInput = document.getElementById("description");

  postForm.addEventListener("submit", (e) => {
    const title = titleInput.value;
    const description = descriptionInput.value;

    e.preventDefault();
    hideErrorMessage();

    const post = postController.createPost(title, description);

    if (post) {
      errorMessages.style.display = "block";
      const errorElement = document.createElement("p");
      errorElement.textContent = post;
      errorMessages.appendChild(errorElement);
    } else {
      updatePostModalDisplay("none");
      console.log(postController.getPosts());
      postForm.reset();
    }
  });
}
