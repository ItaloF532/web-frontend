import { POSTS_KEY } from "../constants";
import StorageProvider from "../storage-provider";

class Post {
  _storage = new StorageProvider();
  instance;
  
  static getInstance() {
    if(!instance) this.instance = new Post();
    return this.instance;
  }

  _validateCreatePost(title, desc) {
    if (title.trim() === "") return "Title is required!";
    if (title.length <= 3) return "Title must have 3 or more characters.";
    if (desc.trim() === "") return "Description is required!";
    if (desc.length <= 5) {
      return "Description must have 5 or more characters.";
    }

    return null;
  }

  getPosts() {
    const postsJson = this._storage.recover(POSTS_KEY);
    return postsJson ? JSON.parse(postsJson) : [];
  }

  _savePost(title, desc) {
    const posts = this.getPosts();
    
    const newPost = {
      index: posts.length - 1,
      title,
      desc,
      date: new Date().toLocaleDateString("en-US"),
    };

    posts.push(newPost);

    this._storage.save(POSTS_KEY, JSON.stringify(posts));
  }

  createPost(title, desc) {
    const error = this._validateCreatePost(title, desc);
    if (error) return error;

    this._savePost(title, desc);
  }

  deletePost(index) {
    const posts = this.getPosts();
    posts.splice(index, 1);
    this._storage.save(POSTS_KEY, posts);
  }

  searchPost(title, date) {
    return this.getPosts().filter((post) => {
      if (date) {
        return (
          post.title === title && post.date === date.toLocaleDateString("en-US")
        );
      }

      return post.title === title;
    });
  }
}

export default Post;
