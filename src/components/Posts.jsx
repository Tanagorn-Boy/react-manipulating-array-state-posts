import { useState } from "react";
import { bigData } from "../assets/data";

function Posts() {
  const [posts, setPosts] = useState(bigData);

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id && post.likes > 0
          ? { ...post, likes: post.likes - 1 }
          : post
      )
    );
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {posts.map((e) => (
          <div class="post-item">
            <div class="post-header">
              <h2>{e.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{e.likes}</span>
              </div>
            </div>
            <p class="post-content">{e.content}</p>
            <div class="post-actions">
              <button class="like-button" onClick={() => handleLike(e.id)}>
                Like
              </button>
              <button
                class="dislike-button"
                onClick={() => handleDislike(e.id)}
              >
                {" "}
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
}

export default Posts;
